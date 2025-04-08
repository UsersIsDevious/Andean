namespace AndeanClass
{
    /// <summary>
    /// ロビープレイヤー情報を保持するクラス
    /// </summary>
    public class LobbyPlayersInfo
    {
        /// <summary>
        /// チーム名
        /// </summary>
        /// <value>チーム名</value>
        public string TeamName { get; set; }

        /// <summary>
        /// ロゴのURL
        /// </summary>
        /// <value>ロゴのURL</value>
        public string LogoUrl { get; set; }

        /// <summary>
        /// スポーンポイントのID
        /// </summary>
        /// <value>スポーンポイントのID</value>
        public int SpawnPoint { get; set; }

        /// <summary>
        /// プレイヤーの配列
        /// </summary>
        /// <value>プレイヤーの配列</value>
        public List<LobbyPlayer> Players { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="teamName">チーム名</param>
        /// <param name="logoUrl">ロゴのURL</param>
        /// <param name="spawnPoint">スポーンポイントのID</param>
        /// <param name="players">プレイヤーの配列</param>
        public LobbyPlayersInfo(string teamName, string logoUrl, int spawnPoint, List<LobbyPlayer> players)
        {
            TeamName = teamName;
            LogoUrl = logoUrl;
            SpawnPoint = spawnPoint;
            Players = players;
        }
    }
}