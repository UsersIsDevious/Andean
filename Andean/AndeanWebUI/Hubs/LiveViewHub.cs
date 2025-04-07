using AndeanClass;
using AndeanWebUI.Models;
using Microsoft.AspNetCore.SignalR;

namespace AndeanWebUI.Hubs
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

        public async Task BroadcastMatchData(CustomMatch match)
        {
            await Clients.All.SendAsync("ReceiveMatchData", match);
        }
    }
}
