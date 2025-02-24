using Andean.Services.Processing;
using Andean.Services.LiveAPIRequest;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Andean.Hubs
{
    public class ControlPanelHub : Hub
    {
        private readonly StatisticsProcessor _statisticsProcessor;
        private readonly ApexLegendsLiveAPIRequestService _lobbyRequestService;
        private static string sharedData = "Initial Data";
        private static List<string> selectedDataKeys = new List<string>();

        public ControlPanelHub(StatisticsProcessor statisticsProcessor, ApexLegendsLiveAPIRequestService lobbyRequestService)
        {
            _statisticsProcessor = statisticsProcessor;
            _lobbyRequestService = lobbyRequestService;
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.Caller.SendAsync("ReceiveData", sharedData);
            await Clients.Caller.SendAsync("ReceiveSelectedData", selectedDataKeys);
            await base.OnConnectedAsync();
        }

        public async Task UpdateData(string newData)
        {
            sharedData = newData;
            await Clients.All.SendAsync("ReceiveData", sharedData);
        }

        public async Task ResetData()
        {
            sharedData = "Initial Data";
            await Clients.All.SendAsync("ReceiveData", sharedData);
        }

        public async Task UpdateSelectedData(List<string> newSelectedKeys)
        {
            selectedDataKeys = newSelectedKeys;
            await Clients.All.SendAsync("ReceiveSelectedData", selectedDataKeys);
            //var filteredData = _statisticsProcessor.GetFilteredData(selectedDataKeys);
            //await Clients.All.SendAsync("SendOverlayData", filteredData);
        }

        public async Task CreateLobby()
        {
            using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
            var response = await _lobbyRequestService.CreateLobbyAsync(cts.Token);
            if (response != null)
            {
                await Clients.Caller.SendAsync("LobbyResponse", response.ToString());
            }
            else
            {
                await Clients.Caller.SendAsync("LobbyResponse", "Error or timeout in creating lobby.");
            }
        }
    }
}
