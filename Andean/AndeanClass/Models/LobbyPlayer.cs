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
        /// 使用しているハードウェア名
        /// </summary>
        /// <value>使用しているハードウェア名</value>
        public string HardwareName { get; set; }

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
        /// <param name="hardwareName">使用しているハードウェア名</param>
        /// <param name="name">プレイヤー名</param>
        public LobbyPlayer(int index, string id, string hardwareName, string name)
        {
            Index = index;
            Id = id;
            HardwareName = hardwareName;
            Name = name;
        }
    }
}