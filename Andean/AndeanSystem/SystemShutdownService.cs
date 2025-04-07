using Andean.AndeanWebUI.Services;

namespace AndeanSystems
{
    public static class SystemShutdownService
    {
        private static IHostApplicationLifetime? _hostApplicationLifetime;
        // シャットダウン処理が開始されたかどうかを示すフラグ
        private static bool _shutdownInitiated = false;

        /// <summary>
        /// IHostApplicationLifetime を初期化します（ASP.NET Core 環境などで利用）
        /// </summary>
        public static void Init(IHostApplicationLifetime hostApplicationLifetime)
        {
            _hostApplicationLifetime = hostApplicationLifetime;
        }

        static SystemShutdownService()
        {
            RegisterShutdownEvents();
        }

        /// <summary>
        /// プロセス終了時や未処理例外発生時に ShutdownAsync を呼び出すイベントハンドラーを登録
        /// </summary>
        private static void RegisterShutdownEvents()
        {
            // プロセス終了時のイベントハンドラー
            AppDomain.CurrentDomain.ProcessExit += (sender, e) =>
            {
                try
                {
                    Console.WriteLine("[SystemShutdownService] ProcessExit イベントを検知しました。");
                    ShutdownAsync(new ShutdownOptions { LogShutdown = true }).GetAwaiter().GetResult();
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[SystemShutdownService] ProcessExit イベント中にエラーが発生しました: {ex.Message}");
                }
            };

            // 未処理例外発生時のイベントハンドラー
            AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
            {
                try
                {
                    Console.WriteLine("[SystemShutdownService] UnhandledException イベントを検知しました。");
                    ShutdownAsync(new ShutdownOptions { LogShutdown = true }).GetAwaiter().GetResult();
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[SystemShutdownService] UnhandledException イベント中にエラーが発生しました: {ex.Message}");
                }
            };
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
        }

        /// <summary>
        /// システムを非同期に終了します。オプションに応じた処理が行われます。
        /// </summary>
        public static async Task ShutdownAsync(ShutdownOptions options = null, CancellationToken cancellationToken = default)
        {
            // すでにシャットダウン処理が開始されている場合は処理をスキップ
            if (_shutdownInitiated)
            {
                return;
            }
            _shutdownInitiated = true;

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

            if (options.LogShutdown)
            {
                Console.WriteLine("[SystemShutdownService] シャットダウン通知を中継サービス経由で送信します。");
            }
            // 中継サービス経由で各ハブにシャットダウン通知を送信
            await ShutdownNotificationRelayService.NotifyShutdown();

            Console.WriteLine("System shutdown executed.");

            // ASP.NET Core などのホスト環境の場合はホストの停止を行う
            if (_hostApplicationLifetime != null)
            {
                _hostApplicationLifetime.StopApplication();
            }
            else
            {
                Environment.Exit(0);
            }
        }
    }
}
