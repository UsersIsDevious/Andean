using Andean.WebsocketServer.Controllers;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Andean.Hubs
{
    public class OverlayControlPanelHub : Hub
    {
        private readonly StatisticsProcessor _statisticsProcessor;

        // 現在選択されているデータ（全クライアント共通）
        private static List<string> selectedDataKeys = new List<string>();

        public OverlayControlPanelHub(StatisticsProcessor statisticsProcessor)
        {
            _statisticsProcessor = statisticsProcessor;
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.Caller.SendAsync("ReceiveSelectedData", selectedDataKeys);
            await base.OnConnectedAsync();
        }

        // クライアントが表示するデータを選択
        public async Task UpdateSelectedData(List<string> newSelectedKeys)
        {
            selectedDataKeys = newSelectedKeys;
            await Clients.All.SendAsync("ReceiveSelectedData", selectedDataKeys);

            // OverlayHub にデータを送信
            //var filteredData = _statisticsProcessor.GetFilteredData(selectedDataKeys);
            //await Clients.All.SendAsync("SendOverlayData", filteredData);
        }
    }
}
