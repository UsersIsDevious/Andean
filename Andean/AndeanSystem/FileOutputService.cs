using System.Text;
using Newtonsoft.Json.Linq;
using System.Collections.Concurrent;

namespace AndeanSystems
{
    public enum FileWriteMode
    {
        Overwrite,  // 上書きモード
        Append,     // 追記モード
        JsonAppend  // JSON追記モード（既存の JSON 配列に新しいオブジェクトを追加）
    }

    // 各ファイルごとにバッチで書き込みを溜めるクラス
    internal class WriteBatch
    {
        private readonly string _fullPath;
        private readonly FileWriteMode _mode;
        private readonly object _lock = new object();

        // Append, JsonAppend 用のバッファ。Overwrite は最新の内容だけ保持
        private List<string> _queue = new List<string>();
        private string _overwriteContent = null;

        // 一定期間でflushするためのタイマー（タイマーはバッチに最初の書き込みがあったタイミングで生成）
        private Timer _timer;
        private readonly int _chunkSize;
        private readonly TimeSpan _maxDelay;

        public WriteBatch(string fullPath, FileWriteMode mode, int chunkSize, TimeSpan maxDelay)
        {
            _fullPath = fullPath;
            _mode = mode;
            _chunkSize = chunkSize;
            _maxDelay = maxDelay;
        }

        /// <summary>
        /// バッチに内容を追加します。
        /// Overwriteの場合は常に最新の内容を保持します。
        /// </summary>
        public void Enqueue(string content)
        {
            lock (_lock)
            {
                if (_mode == FileWriteMode.Overwrite)
                {
                    _overwriteContent = content; // 常に上書き（最新内容のみ）
                }
                else
                {
                    _queue.Add(content);
                }

                // 初回の書き込み時はタイマーをセットする
                if (_timer == null)
                {
                    _timer = new Timer(async _ => await TimerCallback(), null, _maxDelay, Timeout.InfiniteTimeSpan);
                }

                // Append, JsonAppendの場合、チャンクサイズに達したら即時flush
                if ((_mode == FileWriteMode.Append || _mode == FileWriteMode.JsonAppend) && _queue.Count >= _chunkSize)
                {
                    _timer.Dispose();
                    _timer = null;
                    // タイマーコールバック内と同様に非同期でflush
                    _ = FlushAsync();
                }
            }
        }

        private async Task TimerCallback()
        {
            try
            {
                await FlushAsync();
            }
            catch (Exception ex)
            {
                // ログ出力等必要ならここで例外処理
                Console.Error.WriteLine($"Flushエラー: {ex}");
            }
        }

        /// <summary>
        /// 保持している内容をまとめてファイルに書き込み、バッファをクリアします。
        /// </summary>
        public async Task FlushAsync()
        {
            List<string> itemsToFlush = null;
            string contentToFlush = null;

            lock (_lock)
            {
                if (_mode == FileWriteMode.Overwrite)
                {
                    if (_overwriteContent == null)
                        return;
                    contentToFlush = _overwriteContent;
                    _overwriteContent = null;
                }
                else
                {
                    if (_queue.Count == 0)
                        return;
                    itemsToFlush = new List<string>(_queue);
                    _queue.Clear();
                }
                // タイマーは利用済みなので破棄
                _timer?.Dispose();
                _timer = null;
            }

            // ファイル書き込み処理（モード別）
            switch (_mode)
            {
                case FileWriteMode.Overwrite:
                    await File.WriteAllTextAsync(_fullPath, contentToFlush);
                    break;

                case FileWriteMode.Append:
                    // 蓄積した内容を順次結合して追記
                    string combined = string.Join("", itemsToFlush);
                    await File.AppendAllTextAsync(_fullPath, combined);
                    break;

                case FileWriteMode.JsonAppend:
                    string existingJson = string.Empty;
                    if (File.Exists(_fullPath))
                    {
                        // 既存ファイルの内容を読み込む（FileReadService を使用している前提）
                        existingJson = await FileReadService.ReadFileAsync(_fullPath, encoding: Encoding.UTF8, throwIfNotFound: false);
                    }

                    JArray jsonArray;
                    if (string.IsNullOrWhiteSpace(existingJson))
                    {
                        jsonArray = new JArray();
                    }
                    else
                    {
                        try
                        {
                            jsonArray = JArray.Parse(existingJson);
                        }
                        catch
                        {
                            jsonArray = new JArray();
                        }
                    }
                    // 蓄積した各JSON文字列をパースして追加
                    foreach (var item in itemsToFlush)
                    {
                        try
                        {
                            var obj = JObject.Parse(item);
                            jsonArray.Add(obj);
                        }
                        catch
                        {
                            // パース失敗時はスキップ（必要に応じてログ等を追加）
                        }
                    }
                    await File.WriteAllTextAsync(_fullPath, jsonArray.ToString());
                    break;

                default:
                    throw new ArgumentException("Unknown FileWriteMode");
            }
        }
    }

    public static class FileOutputService
    {
        // バッチごとに管理するためのディクショナリ
        // key: フルパスと書き込みモードの組み合わせ
        private static readonly ConcurrentDictionary<string, WriteBatch> _batches =
            new ConcurrentDictionary<string, WriteBatch>();

        // バッチのチャンクサイズおよびタイムアウト（必要に応じて調整）
        private const int DefaultChunkSize = 10;
        private static readonly TimeSpan DefaultMaxDelay = TimeSpan.FromSeconds(5);

        /// <summary>
        /// 指定されたパスとファイル名に対し、内容をモードに応じて非同期に書き込みます。
        /// 内部的にはバッチング処理を行い、一定件数または一定時間経過したときに実際の書き込みを実施します。
        /// </summary>
        public static async Task WriteToFileAsync(string path, string fileName, string content, FileWriteMode mode)
        {
            // 出力先ディレクトリが存在しなければ作成
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            string fullPath = Path.Combine(path, fileName);
            // バッチ管理用のキー（ファイルパス＋モードの組み合わせ）
            string key = $"{fullPath}:{mode}";

            // バッチの取得（存在しなければ新規作成）
            WriteBatch batch = _batches.GetOrAdd(key, _ => new WriteBatch(fullPath, mode, DefaultChunkSize, DefaultMaxDelay));

            // バッチに内容を追加（内部でタイマー・チャンク判定によりFlushが実行される）
            batch.Enqueue(content);

            // ※ 今回はバッチ処理のため、実際の書き込み完了を待たずに即時Task完了となります
            await Task.CompletedTask;
        }

        /// <summary>
        /// アプリケーション終了時などに全バッチの内容を強制的にフラッシュするメソッド例
        /// </summary>
        public static async Task FlushAllAsync()
        {
            foreach (var batch in _batches.Values)
            {
                await batch.FlushAsync();
            }
        }
    }
}
