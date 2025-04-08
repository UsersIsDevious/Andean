using AndeanSystems;
using AndeanWebUI.Hubs;
using AndeanClass.Services;
using Microsoft.AspNetCore.SignalR;

namespace AndeanWebUI.Services
{
    public static class ControlPanelHubService
    {


        private static IHubContext<ControlPanelHub>? _hubContext;
        private static AppConfig _config => ConfigService.Config;

        public static void Init(IHubContext<ControlPanelHub> hubContext)
        {
            _hubContext = hubContext;
        }

        // 共有データ
        public static string SharedData { get; set; } = "Initial Data";
        public static List<string> SelectedDataKeys { get; set; } = new List<string>();
        public static string LastLobbyResponse { get; set; } = "";
        public static string LastApexResponse { get; set; } = "";

        // UIステータス情報
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



        public static async Task BroadcastStatusAsync()
        {
            if (_hubContext != null)    
            {
                var status = new
                {
                    SharedData = SharedData,
                    SelectedDataKeys = SelectedDataKeys,
                    AppConfig = _config,
                    LastLobbyResponse = LastLobbyResponse,
                    LastApexResponse = LastApexResponse,
                    UIStatus = new
                    {
                        LobbyJoinButtonEnabled,
                        GameStartButtonEnabled,
                        LeaveLobbyButtonEnabled,
                        IsLobbyJoined,
                        MaxTeamPlayer,
                        MaxTeam,
                        GameStatus,
                        SupportedLanguages,
                        IsMatchmaking,
                    }
                };

                await _hubContext.Clients.All.SendAsync("ReceiveStatus", status);
            }
        }


        // 状態更新用の関数群

        /// <summary>
        /// 共有データの更新
        /// </summary>
        public static void UpdateSharedData(string newData)
        {
            SharedData = newData;
        }

        /// <summary>
        /// 共有データのリセット
        /// </summary>
        public static void ResetSharedData()
        {
            SharedData = "Initial Data";
        }

        /// <summary>
        /// 選択データの更新
        /// </summary>
        public static void UpdateSelectedData(List<string> newSelectedKeys)
        {
            SelectedDataKeys = newSelectedKeys;
        }

        /// <summary>
        /// ゲーム状態の更新
        /// </summary>
        public static void UpdateGameStatus(string status)
        {
            GameStatus = status;
        }

        /// <summary>
        /// LiveAPI の接続状態に応じたUIステータスの更新
        /// </summary>
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
                default:
                    break;
            }
            await BroadcastStatusAsync();
        }
    }
}
