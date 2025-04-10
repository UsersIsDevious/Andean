using Microsoft.AspNetCore.SignalR;
using AndeanSystems;
using AndeanWebUI.Models;
using AndeanWebUI.Services;
using static AndeanWebUI.Services.ControlPanelHubService;
using static AndeanClass.Controllers.AndeanClassController;

namespace AndeanWebUI.Hubs
{
    public partial class ControlPanelHub : Hub
    {
        private readonly AppConfig _config = ConfigService.Config;

        private Dictionary<string, LobbyPlayerSection> lobbyPlayers = new Dictionary<string, LobbyPlayerSection>();
        private LobbySettings lobbySettings = new LobbySettings();

        // 全クライアントへ現在のステータスをブロードキャストする
        private async Task BroadcastStatus()
        {
            await Clients.All.SendAsync("ReceiveStatus", GetCurrentStatus());
        }

        // クライアント切断時に登録解除
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await base.OnDisconnectedAsync(exception);
        }

        // 現在の全ステータスを集約して返す（UI状態も含む）
        private object GetCurrentStatus()
        {
            Console.WriteLine(_config);
            return new
            {
                SharedData = SharedData,
                SelectedDataKeys = SelectedDataKeys,
                AppConfig = _config,
                LastLobbyResponse = LastLobbyResponse,
                LastApexResponse = LastApexResponse,
                LobbyId = LobbyData.LobbyId,
                teamData = LobbyData.ControlHubLobbyPlayers,
                lobbySettings = LobbyData.ControlHubMatchSettings,
                UIStatus = new
                {
                    LobbyJoinButtonEnabled = LobbyJoinButtonEnabled,
                    GameStartButtonEnabled = GameStartButtonEnabled,
                    LeaveLobbyButtonEnabled = LeaveLobbyButtonEnabled,
                    IsLobbyJoined = IsLobbyJoined,
                    MaxTeamPlayer = MaxTeamPlayer,
                    MaxTeam = MaxTeam,
                    GameStatus = GameStatus,
                    SupportedLanguages = SupportedLanguages,
                    IsMatchmaking = IsMatchmaking
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
            Console.WriteLine("シャッドダウンを送信");
            await Clients.All.SendAsync("ShutdownNotification", message);
        }

        public async Task SetLiveAPIStatus(string type, string _gameStatus)
        {
            ControlPanelHubService.SetLiveAPIStatus(type, _gameStatus);
            await BroadcastStatus();
        }
    }
}
