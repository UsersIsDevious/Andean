using AndeanWebUI.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace Andean.AndeanWebUI.Services
{
    public static class ShutdownNotificationRelayService
    {
        // 各ハブの IHubContext を保持（必要に応じて他のハブも追加）
        private static IHubContext<ControlPanelHub>? _controlPanelHubContext;
        private static IHubContext<OverlayHub>? _overlayHubContext;
        private static IHubContext<OverlayControlPanelHub>? _overlayControlPanelHubContext;
        private static IHubContext<LiveViewHub>? _liveViewHubContext;

        /// <summary>
        /// 各ハブの IHubContext を初期化します
        /// </summary>
        public static void Init(
            IHubContext<ControlPanelHub> controlPanelHubContext,
            IHubContext<OverlayHub> overlayHubContext,
            IHubContext<OverlayControlPanelHub> overlayControlPanelHubContext,
            IHubContext<LiveViewHub> liveViewHubContext)
        {
            _controlPanelHubContext = controlPanelHubContext;
            _overlayHubContext = overlayHubContext;
            _overlayControlPanelHubContext = overlayControlPanelHubContext;
            _liveViewHubContext = liveViewHubContext;
        }

        /// <summary>
        /// 全ハブのクライアントにシャットダウン通知を送信します
        /// </summary>
        public static async Task NotifyShutdown(string message = "System is shutting down.")
        {
            Console.WriteLine("シャットダウン通知を送信します。");

            if (_controlPanelHubContext != null)
            {
                await _controlPanelHubContext.Clients.All.SendAsync("ShutdownNotification", message);
            }
            if (_overlayHubContext != null)
            {
                await _overlayHubContext.Clients.All.SendAsync("ShutdownNotification", message);
            }
            if (_overlayControlPanelHubContext != null)
            {
                await _overlayControlPanelHubContext.Clients.All.SendAsync("ShutdownNotification", message);
            }
            if (_liveViewHubContext != null)
            {
                await _liveViewHubContext.Clients.All.SendAsync("ShutdownNotification", message);
            }
        }
    }
}
