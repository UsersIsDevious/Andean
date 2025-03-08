using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;  // JSON 操作用（Newtonsoft.Json を使用）
using System.Text.Json;      // 例として、System.Text.Json を使う場合もあり
// 名前空間はプロジェクトに合わせて設定してください
namespace Andean.Utilities
{
    public enum FileWriteMode
    {
        Overwrite,  // 上書きモード
        Append,     // 追記モード
        JsonAppend  // JSON追記モード（既存の JSON 配列に新しいオブジェクトを追加）
    }

    public class FileOutputService
    {
        private readonly FileReadService _fileReadService;

        public FileOutputService(FileReadService fileReadService)
        {
            _fileReadService = fileReadService;
        }

        /// <summary>
        /// 指定されたパスとファイル名に対し、内容をモードに応じて非同期に書き込みます。
        /// </summary>
        /// <param name="path">出力先ディレクトリのパス</param>
        /// <param name="fileName">出力するファイル名</param>
        /// <param name="content">書き込む内容</param>
        /// <param name="mode">書き込みモード (Overwrite, Append, JsonAppend)</param>
        public async Task WriteToFileAsync(string path, string fileName, string content, FileWriteMode mode)
        {
            // 出力先のディレクトリが存在しなければ作成
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            string fullPath = Path.Combine(path, fileName);

            switch (mode)
            {
                case FileWriteMode.Overwrite:
                    await File.WriteAllTextAsync(fullPath, content);
                    break;

                case FileWriteMode.Append:
                    await File.AppendAllTextAsync(fullPath, content);
                    break;

                case FileWriteMode.JsonAppend:
                    string existingJson = string.Empty;
                    if (File.Exists(fullPath))
                    {
                        // FileReadService の関数を利用してファイル内容を読み込む
                        existingJson = await _fileReadService.ReadFileAsync(fullPath, encoding: Encoding.UTF8, throwIfNotFound: false);
                    }

                    // 既存の JSON 配列が存在しなければ、新規配列を作成
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
                    // 新たな JSON オブジェクトとして内容をパースし追加
                    var newObj = JObject.Parse(content);
                    jsonArray.Add(newObj);
                    await File.WriteAllTextAsync(fullPath, jsonArray.ToString());
                    break;

                default:
                    throw new ArgumentException("Unknown FileWriteMode");
            }
        }
    }
}
