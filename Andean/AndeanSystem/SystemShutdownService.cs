using AndeanWebUI.Models;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace AndeanSystems
{
    public class SystemShutdownService
    {
        private readonly IEnumerable<IAndeanWebUI> _andeanwebui;

        public SystemShutdownService(IEnumerable<IAndeanWebUI> andeanwebui)
        {
            _andeanwebui = andeanwebui;
            RegisterShutdownEvents();
        }

        /// <summary>
        /// プロセス終了時や未処理例外発生時にShutdown処理を実行するためのイベントハンドラーを登録
        /// </summary>
        private void RegisterShutdownEvents()
        {
            // プロセス終了時（通常の終了や強制終了時）に実行
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

            // 未処理例外発生時に実行
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

            // 終了前のクリーンアップ処理（例: ログ保存、リソース解放など）
            if (options.LogShutdown)
            {
                Console.WriteLine("[SystemShutdownService] クリーンアップ処理完了。各ハブに Shutdown 通知を送信します。");
            }
            // 各ハブに Shutdown 通知を送る
            foreach (var andeanwebui in _andeanwebui)
            {
                await andeanwebui.NotifyShutdown();
            }

            Console.WriteLine("System shutdown executed.");
            // プログラムを終了する（0は正常終了を意味します）
            Environment.Exit(0);
        }
    }
}
