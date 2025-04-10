using AndeanClass;
using AndeanSystems;
using AndeanWebUI.Models;
using Microsoft.AspNetCore.SignalR;

namespace AndeanWebUI.Hubs
{
    public class LiveViewHub : Hub
    {
        // 接続時に自身を SystemShutdownService に登録
        public override async Task OnConnectedAsync()
        {
        }
        // クライアント切断時に登録解除
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await base.OnDisconnectedAsync(exception);
        }
        /// <summary>
        /// システムシャットダウンをクライアントに通知するメソッド
        /// </summary>
        public async Task NotifyShutdown(string message = "System is shutting down.")
        {
            Console.WriteLine("シャッドダウンを送信");
            // 全クライアントに "ShutdownNotification" イベントとして通知を送信
            await Clients.All.SendAsync("ShutdownNotification", message);
        }

        public async Task BroadcastMatchData(CustomMatch match)
        {
            await Clients.All.SendAsync("ReceiveMatchData", match);
        }
    }
}
