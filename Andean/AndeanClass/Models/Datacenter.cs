namespace Andean.AndeanClass
{
    /// <summary>
    /// データセンターを表すクラス
    /// </summary>
    public class Datacenter
    {
        /// <summary>
        /// タイムスタンプ (uint64)
        /// </summary>
        public ulong Timestamp { get; private set; }

        /// <summary>
        /// カテゴリー名
        /// </summary>
        public string Category { get; private set; }

        /// <summary>
        /// データセンター名
        /// </summary>
        public string Name { get; private set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        public Datacenter()
        {
            Timestamp = 0;
            Category = string.Empty;
            Name = string.Empty;
        }

        /// <summary>
        /// データセンターの情報を更新する
        /// </summary>
        /// <param name="timestamp">タイムスタンプ (uint64)</param>
        /// <param name="category">カテゴリー名</param>
        /// <param name="name">データセンター名</param>
        /// <returns>更新された Datacenter インスタンス</returns>
        public Datacenter Update(ulong timestamp, string category, string name)
        {
            Timestamp = timestamp;
            Category = category;
            Name = name;
            return this;
        }

        /// <summary>
        /// データセンターのステータス情報を取得する
        /// </summary>
        /// <returns>データセンターのステータス情報を含むオブジェクト</returns>
        public object GetStatus()
        {
            return new
            {
                timestamp = Timestamp,
                category = Category,
                name = Name
            };
        }
    }
}
