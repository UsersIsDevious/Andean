namespace AndeanClass
{
    /// <summary>
    /// ブラックマーケットの統計情報を保持するクラス
    /// </summary>
    public class BlackMarket
    {
        /// <summary>
        /// 使用回数
        /// </summary>
        public int UseCount { get; set; }
        /// <summary>
        /// アイテムごとの使用回数
        /// </summary>
        public Dictionary<string, uint> Items { get; set; }

        public BlackMarket()
        {
            UseCount = 0;
            Items = new Dictionary<string, uint>();
        }
    }
}
