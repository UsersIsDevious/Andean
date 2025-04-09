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
        /// ロビー情報リクエストを最後に送信した時間
        /// </summary>
        public long LastRequestTime { get; set; } = 0;

        /// <summary>
        /// 最後にロビープレイヤー情報を取得した時間（Unix時間, ミリ秒）
        /// </summary>
        public long LobbyPlayersLastPollTime { get; set; } = 0;

        /// <summary>
        /// 最後にロビー設定情報を取得した時間（Unix時間, ミリ秒）
        /// </summary>
        public long MatchSettingsLastPollTime { get; set; } = 0;

        /// <summary>
        /// CSVデータ
        /// </summary>
        public CsvData? CsvData { get; set; } = null;

        /// <summary>
        /// 重複を許さないプレイヤー名のリスト(キー：プレイヤー名、値：Player型のインスタンス)
        /// </summary>
        public Dictionary<string, Player> PlayerNames { get; set; } = new Dictionary<string, Player>();

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
        /// <param name="lobbyId">ロビーのID</param>
        /// <param name="csvData">CSVデータ</param>
        /// <param name="playerNames">プレイヤー名のリスト</param>
        /// <param name="lastPollTime">ロビー情報リクエストを最後に送信した時間</param>
        /// <param name="lobbyPlayersLastPollTime">最後にロビープレイヤー情報を取得した時間</param>
        /// <param name="matchSettingsLastPollTime">最後にロビー設定情報を取得した時間</param>
        /// <param name="matchSettingsResponse">CustomMatch_GetMatchSettingsAsyncのレスポンス</param>
        /// <param name="controlHubMatchSettings">コントロールパネル用のロビー設定情報</param>
        /// <param name="lobbyPlayersResponse">CustomMatch_GetLobbyPlayersAsyncのレスポンス</param>
        /// <param name="controlHubLobbyPlayers">コントロールパネル用のロビープレイヤー情報</param>
        public LobbyInfo(
            string lobbyId = "",
            CsvData? csvData = null,
            Dictionary<string, Player>? playerNames = null,
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
            CsvData = csvData;
            PlayerNames = playerNames ?? new Dictionary<string, Player>();
            LastRequestTime = lastPollTime;
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

            // ロビー情報がnullまたは新しいロビー情報と異なる場合、更新が必要
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

        /// <summary>
        /// CSVデータを設定するメソッド
        /// </summary>
        /// <param name="csvData">CSVデータ</param>
        public void SetCsvData(CsvData csvData)
        {
            CsvData = csvData;
        }
    }
}