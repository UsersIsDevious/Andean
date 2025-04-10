using AndeanSystems;
using AndeanWebUI.Hubs;
using AndeanClass.Services;
using Microsoft.AspNetCore.SignalR;
using AndeanClass;
using static AndeanClass.Controllers.AndeanClassController;
using AndeanWebUI.Models;

namespace AndeanWebUI.Services
{
    public static class ControlPanelHubService
    {
        private static IHubContext<ControlPanelHub>? _hubContext;

        // ✅ 送信用 DTO はアプリ起動時に一度生成・共有する
        public static readonly HubStatusDto SharedStatusDto = new();

        public static void Init(IHubContext<ControlPanelHub> hubContext)
        {
            _hubContext = hubContext;
        }

        // ✅ SignalRに状態を送信（DTOは毎回同じインスタンス）
        public static async Task BroadcastStatusAsync()
        {
            if (_hubContext != null)
            {
                await _hubContext.Clients.All.SendAsync("ReceiveStatus", SharedStatusDto);
            }
        }

        // ✅ 状態データ本体（DTOがこれらを参照）
        public static string SharedData { get; set; } = "Initial Data";
        public static List<string> SelectedDataKeys { get; set; } = new();
        public static string LastLobbyResponse { get; set; } = "";
        public static string LastApexResponse { get; set; } = "";

        public static bool LobbyJoinButtonEnabled { get; set; } = false;
        public static bool LeaveLobbyButtonEnabled { get; set; } = false;
        public static bool GameStartButtonEnabled { get; set; } = true;
        public static bool IsMatchmaking { get; set; } = false;
        public static List<string> SupportedLanguages { get; set; } = LocalizationService.GetSupportedLanguageCodes();
        public static bool IsLaunched { get; set; } = false;
        public static bool IsLobbyJoined { get; set; } = false;
        public static bool IsMatch { get; set; } = false;
        public static uint MaxTeamPlayer { get; set; } = 3;
        public static uint MaxTeam { get; set; } = 20;
        public static string GameStatus { get; set; } = "NoSignal";
        public static bool ObserverSwitchEnabled { get; set; } = true;
        public static bool AutoMovementLobbyPlayersEnabled { get; set; } = false;

        // ✅ 状態更新用の関数群（これらは保持値を変更するだけ）
        public static void UpdateSharedData(string newData)
        {
            SharedData = newData;
        }

        public static void ResetSharedData()
        {
            SharedData = "Initial Data";
        }

        public static void UpdateSelectedData(List<string> newSelectedKeys)
        {
            SelectedDataKeys = newSelectedKeys;
        }

        public static void UpdateGameStatus(string status)
        {
            GameStatus = status;
        }

        public static async Task SetLiveAPIStatus(string type, string gameStatus)
        {
            GameStatus = gameStatus;
            switch (type)
            {
                case "Connect":
                    IsLaunched = true;
                    LobbyJoinButtonEnabled = true;
                    GameStartButtonEnabled = false;
                    break;
                case "Disconnect":
                    LobbyJoinButtonEnabled = false;
                    LeaveLobbyButtonEnabled = false;
                    GameStartButtonEnabled = true;
                    IsLaunched = false;
                    IsMatchmaking = false;
                    IsLobbyJoined = false;
                    IsMatch = false;
                    break;
                case "LobbyJoin":
                    LobbyJoinButtonEnabled = false;
                    LeaveLobbyButtonEnabled = true;
                    IsLobbyJoined = true;
                    IsMatch = false;
                    break;
                case "LobbyLeave":
                    LobbyJoinButtonEnabled = true;
                    LeaveLobbyButtonEnabled = false;
                    IsLobbyJoined = false;
                    break;
                case "Playing":
                    LeaveLobbyButtonEnabled = false;
                    IsLobbyJoined = false;
                    IsMatch = true;
                    break;
            }
            await BroadcastStatusAsync();
        }
    }
}
