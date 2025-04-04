using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;
using Andean.ApexLiveAPI.Request;
using Andean.ApexLiveAPI.Services;
using Andean.WebsocketServer.Controllers;
using Andean.Utilities;
using Andean.Config;
using Microsoft.Extensions.Options;
using Andean.AndeanWebUI.Models;
using Andean.AndeanWebUI.Services;
using Andean.ApexLiveAPI.Message;
using AndeanClass;
using AndeanSystem;
using AndeanClass.Controllers;

namespace Andean.AndeanWebUI.Hubs
{
    public partial class ControlPanelHub : Hub, IAndeanWebUI
    {
        private readonly ApexPlaylistService _apexPlaylistService;
        private readonly Request _request;
        private readonly AppConfig _config;
        private readonly SystemShutdownService _shutdownService;

        private Dictionary<string, LobbyPlayerSection> lobbyPlayers = new Dictionary<string, LobbyPlayerSection>();
        private LobbySettings lobbySettings = new LobbySettings();

        public ControlPanelHub(
            ApexPlaylistService apexPlaylistService,
            IOptionsMonitor<AppConfig> configOptions,
            SystemShutdownService shutdownService,
            Request request
            )
        {
            _apexPlaylistService = apexPlaylistService;
            _shutdownService = shutdownService;
            _request = request;
            _config = configOptions.CurrentValue;
        }

        // 全クライアントへ現在のステータスをブロードキャストする
        private async Task BroadcastStatus()
        {
            await Clients.All.SendAsync("ReceiveStatus", GetCurrentStatus());
        }

        // 現在の全ステータスを集約して返す（UI状態も含む）
        private object GetCurrentStatus()
        {
            return new
            {
                SharedData = ControlPanelHubService.SharedData,
                SelectedDataKeys = ControlPanelHubService.SelectedDataKeys,
                AppConfig = _config,
                LastLobbyResponse = ControlPanelHubService.LastLobbyResponse,
                LastApexResponse = ControlPanelHubService.LastApexResponse,
                UIStatus = new
                {
                    LobbyJoinButtonEnabled = ControlPanelHubService.LobbyJoinButtonEnabled,
                    GameStartButtonEnabled = ControlPanelHubService.GameStartButtonEnabled,
                    LeaveLobbyButtonEnabled = ControlPanelHubService.LeaveLobbyButtonEnabled,
                    IsLobbyJoined = ControlPanelHubService.IsLobbyJoined,
                    MaxTeamPlayer = ControlPanelHubService.MaxTeamPlayer,
                    MaxTeam = ControlPanelHubService.MaxTeam,
                    GameStatus = ControlPanelHubService.GameStatus
                }
            };
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.Caller.SendAsync("ReceiveStatus", GetCurrentStatus());
            await base.OnConnectedAsync();
        }

        // 以下、Hub 内の各メソッドでは状態更新は ControlPanelHubService の関数を呼び出す

        public async Task UpdateData(string newData)
        {
            ControlPanelHubService.UpdateSharedData(newData);
            await BroadcastStatus();
        }

        public async Task ResetData()
        {
            ControlPanelHubService.ResetSharedData();
            await BroadcastStatus();
        }

        public async Task UpdateSelectedData(List<string> newSelectedKeys)
        {
            ControlPanelHubService.UpdateSelectedData(newSelectedKeys);
            await BroadcastStatus();
        }

        public async Task UpdateLobbySettings(LobbySettings newLobbySettings)
        {
            lobbySettings = newLobbySettings;
            await BroadcastStatus();
        }

        public async Task NotifyShutdown(string message = "System is shutting down.")
        {
            await Clients.All.SendAsync("ShutdownNotification", message);
        }

        public async Task SetLiveAPIStatus(string type, string _gameStatus)
        {
            ControlPanelHubService.SetLiveAPIStatus(type, _gameStatus);
            await BroadcastStatus();
        }
    }
}
