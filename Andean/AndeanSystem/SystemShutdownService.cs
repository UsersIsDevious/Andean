using AndeanWebUI.Models;

namespace AndeanSystems
{
    public class SystemShutdownService
    {

        private readonly IEnumerable<IAndeanWebUI> _andeanwebui;

        public SystemShutdownService(IEnumerable<IAndeanWebUI> andeanwebui)
        {
            _andeanwebui = andeanwebui;
        }


        /// <summary>
        /// シャットダウン時に任意のオプションを設定可能なオプションクラス
        /// </summary>
        public class ShutdownOptions
        {
            /// <summary>
            /// 終了前に待機する秒数（デフォルトは 0秒）
            /// </summary>
            public int DelaySeconds { get; set; } = 0;
            /// <summary>
            /// ログ出力を有効にするかどうか（デフォルト true）
            /// </summary>
            public bool LogShutdown { get; set; } = true;
            // 他に必要なオプションを追加可能
        }

        /// <summary>
        /// システムを非同期に終了します。オプションに応じた処理が行われます。
        /// </summary>
        /// <param name="options">シャットダウンオプション</param>
        /// <param name="cancellationToken">キャンセル用のトークン</param>
        /// <returns></returns>
        public async Task ShutdownAsync(ShutdownOptions options = null, CancellationToken cancellationToken = default)
        {
            options ??= new ShutdownOptions();

            if (options.LogShutdown)
            {
                Console.WriteLine($"[SystemShutdownService] システム終了処理を開始します。待機 {options.DelaySeconds} 秒...");
            }

            // オプションに応じた待機処理
            if (options.DelaySeconds > 0)
            {
                await Task.Delay(options.DelaySeconds * 1000, cancellationToken);
            }

            // 終了前のクリーンアップ処理をここに実装（例: ログ保存、リソース解放など）
            if (options.LogShutdown)
            {
                Console.WriteLine("[SystemShutdownService] クリーンアップ処理完了。システムを終了します。");
            }
            // ここで各ハブに Shutdown 通知を送る
            foreach (var andeanwebui in _andeanwebui)
            {
                await andeanwebui.NotifyShutdown();
            }

            
            // ここでは例として、Console.WriteLine で終了メッセージを表示
            Console.WriteLine("System shutdown executed.");
            // プログラムを終了する（0は正常終了を意味します）
            Environment.Exit(0);
        }
    }
}
