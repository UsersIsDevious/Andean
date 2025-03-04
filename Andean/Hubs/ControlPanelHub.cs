using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Andean.ApexLiveAPI.Request;
using Andean.WebsocketServer.Controllers;
using Andean.AndeanClass.Services.Utilities;  // CommandExecutionService, CommandMode

namespace Andean.Hubs
{
    public class ControlPanelHub : Hub
    {
        private readonly StatisticsProcessor _statisticsProcessor;
        private readonly Request _lobbyRequestService;
        private readonly CommandExecutionService _commandExecutionService;
        private static string sharedData = "Initial Data";
        private static List<string> selectedDataKeys = new List<string>();

        public ControlPanelHub(
            StatisticsProcessor statisticsProcessor,
            Request lobbyRequestService,
            CommandExecutionService commandExecutionService)
        {
            _statisticsProcessor = statisticsProcessor;
            _lobbyRequestService = lobbyRequestService;
            _commandExecutionService = commandExecutionService;
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

        /// <summary>
        /// ユーザーから StartApex メッセージを受け取ったら、固定のコマンド("ok")をコマンドプロンプトで実行します。
        /// </summary>
        public async Task StartApex()
        {
            // 固定のコマンド "ok" をコマンドプロンプトで実行（CommandMode.CommandPrompt を選択）
            try
            {
                Console.WriteLine("StartApex");
                string command = "hostname";
                string result = await _commandExecutionService.ExecuteCommandAsync(command, CommandMode.CommandPrompt);
                Console.WriteLine(result);
                await Clients.Caller.SendAsync("CommandResponse", result);
            }
            catch (System.Exception ex)
            {
                await Clients.Caller.SendAsync("CommandResponse", $"Error: {ex.Message}");
            }
        }
    }
}
