using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading;
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
    public static class ControlPanelStateService
    {
        // 共有データ
        public static string SharedData { get; set; } = "Initial Data";
        public static List<string> SelectedDataKeys { get; set; } = new List<string>();
        public static string LastLobbyResponse { get; set; } = "";
        public static string LastApexResponse { get; set; } = "";

        // UIステータス情報
        public static bool LobbyJoinButtonEnabled { get; set; } = false;
        public static bool LeaveLobbyButtonEnabled { get; set; } = false;
        public static bool GameStartButtonEnabled { get; set; } = true;
        public static bool IsLobbyJoined { get; set; } = false;
        public static uint MaxTeamPlayer { get; set; } = 3;
        public static uint MaxTeam { get; set; } = 20;
        public static string GameStatus { get; set; } = "NoSignal";

    }
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

        // CustomMatch から取得したデータを更新するメソッド
        public async Task UpdateLobbyFromCustomMatch(CustomMatch customMatch)
        {
            lobbyPlayers = LobbyDataConverter.ConvertLobbyPlayers(customMatch);
            lobbySettings = LobbyDataConverter.ConvertLobbySettings(customMatch);
            await BroadcastStatus();
        }

        // クライアント接続時に、サーバー側で保持している全ステータスを送信
        public override async Task OnConnectedAsync()
        {
            await Clients.Caller.SendAsync("ReceiveStatus", GetCurrentStatus());
            await base.OnConnectedAsync();
        }

        // 現在の全ステータスを集約して返す（UI 状態も含む）
        private object GetCurrentStatus()
        {
            return new
            {
                SharedData = ControlPanelStateService.SharedData,
                SelectedDataKeys = ControlPanelStateService.SelectedDataKeys,
                AppConfig = _config,
                LastLobbyResponse = ControlPanelStateService.LastLobbyResponse,
                LastApexResponse = ControlPanelStateService.LastApexResponse,
                UIStatus = new
                {
                    LobbyJoinButtonEnabled = ControlPanelStateService.LobbyJoinButtonEnabled,
                    GameStartButtonEnabled = ControlPanelStateService.GameStartButtonEnabled,
                    LeaveLobbyButtonEnabled = ControlPanelStateService.LeaveLobbyButtonEnabled,
                    IsLobbyJoined = ControlPanelStateService.IsLobbyJoined,
                    MaxTeamPlayer = ControlPanelStateService.MaxTeamPlayer,
                    MaxTeam = ControlPanelStateService.MaxTeam,
                    GameStatus = ControlPanelStateService.GameStatus
                }
            };
        }

        // 全クライアントへ現在のステータスをブロードキャストする
        private async Task BroadcastStatus()
        {
            await Clients.All.SendAsync("ReceiveStatus", GetCurrentStatus());
        }

        // 共有データ更新時はサーバー側の状態を更新し、全クライアントへブロードキャスト
        public async Task UpdateData(string newData)
        {
            ControlPanelStateService.SharedData = newData;
            await BroadcastStatus();
        }

        // 共有データのリセット時
        public async Task ResetData()
        {
            ControlPanelStateService.SharedData = "Initial Data";
            await BroadcastStatus();
        }

        // 選択データ更新時
        public async Task UpdateSelectedData(List<string> newSelectedKeys)
        {
            ControlPanelStateService.SelectedDataKeys = newSelectedKeys;
            await BroadcastStatus();
        }

        // ロビー設定の更新
        public async Task UpdateLobbySettings(LobbySettings newLobbySettings)
        {
            lobbySettings = newLobbySettings;
            await BroadcastStatus();
        }

        /// <summary>
        /// システムシャットダウンをクライアントに通知するメソッド
        /// </summary>
        public virtual async Task NotifyShutdown(string message = "System is shutting down.")
        {
            await Clients.All.SendAsync("ShutdownNotification", message);
        }

        // LiveAPI の状態更新（Hub 内の処理）
        public async Task SetLiveAPIStatus(string type, string _gameStatus)
        {
            ControlPanelStateService.GameStatus = _gameStatus;
            if (type == "Connect")
            {
                ControlPanelStateService.IsLobbyJoined = true;
                ControlPanelStateService.LobbyJoinButtonEnabled = true;
                ControlPanelStateService.GameStartButtonEnabled = false;
            }
            await BroadcastStatus();
        }
    }
}
