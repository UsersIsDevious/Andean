using AndeanSystems;
using AndeanWebUI.Hubs;
using Microsoft.AspNetCore.SignalR;
using AndeanClass.Controllers;
using System.Threading.Tasks;

namespace AndeanWebUI.Services
{
    public class LiveViewHubUpdateService : AndeanSystem
    {
        private readonly IHubContext<LiveViewHub> _hubContext;

        public LiveViewHubUpdateService(IHubContext<LiveViewHub> hubContext)
        {
            _hubContext = hubContext;
        }

        // この関数は60FPS(約16ms毎)で呼ばれると仮定
        public override async void Update()
        {
            // マッチ情報をクライアントに送信
            await _hubContext.Clients.All.SendAsync("ReceiveMatchData", AndeanClassController._match);
        }
    }
}
