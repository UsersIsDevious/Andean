using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Andean.Hubs
{
    public class OverlayHub : Hub
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
    }
}
