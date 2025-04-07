using AndeanSystems;
using AndeanWebUI.Hubs;
using Microsoft.AspNetCore.SignalR;
using AndeanClass.Controllers;
using System.Threading.Tasks;

namespace AndeanWebUI.Services
{
    // SignalRへの送信処理をstaticなヘルパークラスに切り出す
    public static class LiveViewHubUpdateHelper
    {
        private static IHubContext<LiveViewHub>? _hubContext;

        public static void Init(IHubContext<LiveViewHub> hubContext)
        {
            _hubContext = hubContext;
        }

        public static async Task SendMatchDataUpdate()
        {
            if (_hubContext != null)
            {
                await _hubContext.Clients.All.SendAsync("ReceiveMatchData", AndeanClassController._match);
            }
        }
    }
}
