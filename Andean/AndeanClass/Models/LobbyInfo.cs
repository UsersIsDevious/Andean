using Rtech.Liveapi;

namespace AndeanClass
{
    /// <summary>
    /// ロビー情報を保持するクラス
    /// </summary>
    public class LobbyInfo
    {
        /// <summary>
        /// ロビーのID
        /// </summary>
        /// <value>ロビーのID</value>
        public string LobbyId { get; set; } = string.Empty;

        /// <summary>
        /// 最後に情報を取得した時間（Unix時間, ミリ秒）
        /// </summary>
        public long LastPollTime { get; set; } = 0;

        /// <summary>
        /// 最後にロビープレイヤー情報を取得した時間（Unix時間, ミリ秒）
        /// </summary>
        public long LobbyPlayersLastPollTime { get; set; } = 0;

        /// <summary>
        /// 最後にロビー設定情報を取得した時間（Unix時間, ミリ秒）
        /// </summary>
        public long MatchSettingsLastPollTime { get; set; } = 0;

        /// <summary>
        /// CustomMatch_GetLobbyPlayersAsyncのレスポンスを保持する変数
        /// </summary>
        public CustomMatch_LobbyPlayers? LobbyPlayersResponse { get; set; } = null;

        /// <summary>
        /// CustomMatch_GetMatchSettingsAsyncのレスポンスを保持する変数
        /// </summary>
        public CustomMatch_SetSettings? MatchSettingsResponse { get; set; } = null;

        /// <summary>
        /// コントロールパネル用のロビープレイヤー情報を保持する変数
        /// </summary>
        public Dictionary<string, LobbyPlayersInfo>? ControlHubLobbyPlayers { get; set; } = null;

        /// <summary>
        /// コントロールパネル用のロビー設定情報を保持する変数
        /// </summary>
        public LobbySettings? ControlHubMatchSettings { get; set; } = null;

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="lastPollTime">最後に情報を取得した時間（Unix時間, ミリ秒）</param>
        /// <param name="lobbyPlayersResponse">CustomMatch_GetLobbyPlayersAsyncのレスポンス</param>
        /// <param name="matchSettingsResponse">CustomMatch_GetMatchSettingsAsyncのレスポンス</param>
        /// <param name="controlHubLobbyPlayers">コントロールパネル用のロビープレイヤー情報</param>
        /// <param name="controlHubMatchSettings">コントロールパネル用のロビー設定情報</param>
        public LobbyInfo(
            string lobbyId = "",
            long lastPollTime = 0,
            long lobbyPlayersLastPollTime = 0,
            long matchSettingsLastPollTime = 0,
            CustomMatch_SetSettings? matchSettingsResponse = null,
            LobbySettings? controlHubMatchSettings = null,
            CustomMatch_LobbyPlayers? lobbyPlayersResponse = null,
            Dictionary<string, LobbyPlayersInfo>? controlHubLobbyPlayers = null
        )
        {
            LobbyId = lobbyId;
            LastPollTime = lastPollTime;
            LobbyPlayersLastPollTime = lobbyPlayersLastPollTime;
            MatchSettingsLastPollTime = matchSettingsLastPollTime;
            MatchSettingsResponse = matchSettingsResponse;
            ControlHubMatchSettings = controlHubMatchSettings;
            LobbyPlayersResponse = lobbyPlayersResponse;
            ControlHubLobbyPlayers = controlHubLobbyPlayers;

        }

        /// <summary>
        /// 現在のロビープレイヤー情報と新しいロビープレイヤー情報を比較し、更新が必要かどうかを判断するメソッド
        /// </summary>
        /// <param name="newLobbyInfo">新しいロビー情報</param>
        /// <returns>更新が必要な場合はtrue、そうでない場合はfalse</returns>
        public bool IsUpdateNeededLobbyPlayers(CustomMatch_LobbyPlayers newLobbyInfo)
        {
            long now = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
            LobbyPlayersLastPollTime = now;
            LastPollTime = now;

            if (LobbyPlayersResponse == null || LobbyPlayersResponse != newLobbyInfo)
            {
                LobbyPlayersResponse = newLobbyInfo;
                LobbyId = newLobbyInfo.PlayerToken;
                return true;
            }

            return false;
        }

        /// <summary>
        /// 現在のロビー設定情報と新しいロビー設定情報を比較し、更新が必要かどうかを判断するメソッド
        /// </summary>
        /// <param name="newMatchSettings">新しいロビー設定情報</param>
        /// <returns>更新が必要な場合はtrue、そうでない場合はfalse</returns>
        public bool IsUpdateNeededMatchSettings(CustomMatch_SetSettings newMatchSettings)
        {
            long now = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
            MatchSettingsLastPollTime = now;
            LastPollTime = now;

            if (MatchSettingsResponse == null || MatchSettingsResponse != newMatchSettings)
            {
                MatchSettingsResponse = newMatchSettings;
                return true;
            }

            return false;
        }

        /// <summary>
        /// ロビー情報を取得するメソッド
        /// </summary>
        /// <param name="controlHubLobbyPlayers">コントロールパネル用のロビープレイヤー情報</param>
        public void SetLobbyInfo(Dictionary<string, LobbyPlayersInfo> controlHubLobbyPlayers)
        {
            ControlHubLobbyPlayers = controlHubLobbyPlayers;
        }

        /// <summary>
        /// ロビー設定情報を取得するメソッド
        /// </summary>
        /// <param name="controlHubMatchSettings">コントロールパネル用のロビー設定情報</param>
        public void SetMatchSettings(LobbySettings controlHubMatchSettings)
        {
            ControlHubMatchSettings = controlHubMatchSettings;
        }
    }
}