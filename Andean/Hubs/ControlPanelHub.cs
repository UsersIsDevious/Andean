using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Andean.ApexLiveAPI.Request;
using Andean.WebsocketServer.Controllers;
using Andean.Utilities;
using Andean.Config;
using Microsoft.Extensions.Options;

namespace Andean.Hubs
{
    public class ControlPanelHub : Hub
    {
        private readonly StatisticsProcessor _statisticsProcessor;
        private readonly Request _lobbyRequestService;
        private readonly CommandExecutionService _commandExecutionService;
        private static string sharedData = "Initial Data";
        private static List<string> selectedDataKeys = new List<string>();
        private readonly IOptionsMonitor<AppConfig> _configOptions;

        public ControlPanelHub(
            StatisticsProcessor statisticsProcessor,
            Request lobbyRequestService,
            CommandExecutionService commandExecutionService,
            IOptionsMonitor<AppConfig> configOptions)
        {
            _statisticsProcessor = statisticsProcessor;
            _lobbyRequestService = lobbyRequestService;
            _commandExecutionService = commandExecutionService;
            _configOptions = configOptions;
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
        /// ユーザーから StartApex メッセージを受け取ったら、
        /// config.json の apexlegends.path と api_option を結合した固定コマンドを
        /// コマンドプロンプトで実行します。
        /// </summary>
        public async Task StartApex()
        {
            try
            {
                // DI で注入された設定から現在の値を取得
                var config = _configOptions.CurrentValue;
                // コマンドを生成：例）"D:\ea\Apex +cl_liveapi_enabled 1"
                string command = $"{config.ApexLegends.Path}\\r5apex.exe {config.ApexLegends.Api_Option} {config.ApexLegends.Option} +cl_liveapi_ws_servers \"ws://127.0.0.1:{config.ApexLegends.Api_Port}\"";
                Console.WriteLine(command);
                string result = await _commandExecutionService.ExecuteCommandAsync(command, CommandMode.CommandPrompt);
                await Clients.Caller.SendAsync("CommandResponse", result);
            }
            catch (System.Exception ex)
            {
                await Clients.Caller.SendAsync("CommandResponse", $"Error: {ex.Message}");
            }
        }
    }
}
