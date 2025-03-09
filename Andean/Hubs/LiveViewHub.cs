using Microsoft.AspNetCore.SignalR;

namespace Andean.Hubs
{
    public class LiveViewHub : Hub, IAndeanWebUI
    {
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
