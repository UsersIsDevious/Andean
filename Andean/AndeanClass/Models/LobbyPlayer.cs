namespace AndeanClass
{
    /// <summary>
    /// ロビープレイヤー情報を保持するクラス
    /// </summary>
    public class LobbyPlayer
    {
        /// <summary>
        /// プレイヤーのIndex番号
        /// </summary>
        /// <value>プレイヤーのIndex番号</value>
        public int Index { get; set; }

        /// <summary>
        /// プレイヤーのID
        /// </summary>
        /// <value>プレイヤーのID</value>
        public string Id { get; set; }

        /// <summary>
        /// プレイヤー名
        /// </summary>
        /// <value>プレイヤー名</value>
        public string Name { get; set; }


        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="index">プレイヤーのIndex番号</param>
        /// <param name="id">プレイヤーのID</param>
        /// <param name="name">プレイヤー名</param>
        public LobbyPlayer(int index, string id, string name)
        {
            Index = index;
            Id = id;
            Name = name;
        }
    }
}