using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Andean.Hubs
{
    public class OverlayHub : Hub, IAndeanWebUI
    {
        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
        }

        // OverlayControlPanelHub からデータを受信するだけのハブ
        public async Task ReceiveOverlayData(object overlayData)
        {
            await Clients.All.SendAsync("UpdateOverlay", overlayData);
        }

        /// <summary>
        /// システムシャットダウンをクライアントに通知するメソッド
        /// </summary>
        public async Task NotifyShutdown(string message = "System is shutting down.")
        {
            // 全クライアントに "ShutdownNotification" イベントとして通知を送信
            await Clients.All.SendAsync("ShutdownNotification", message);
        }
    }
}
