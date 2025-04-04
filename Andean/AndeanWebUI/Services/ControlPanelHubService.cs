using System.Collections.Generic;

namespace AndeanWebUI.Services
{
    public static class ControlPanelHubService
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
        public static void SetLiveAPIStatus(string type, string gameStatus)
        {
            GameStatus = gameStatus;
            if (type == "Connect")
            {
                IsLobbyJoined = true;
                LobbyJoinButtonEnabled = true;
                GameStartButtonEnabled = false;
            }
            // 必要に応じて、他の条件もここで処理可能
        }
    }
}
