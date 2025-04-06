namespace AndeanClass
{
    /// <summary>
    /// Eventに関するクラス
    /// </summary>
    public class Event
    {
        /// <summary>
        /// イベント発生時のタイムスタンプ
        /// </summary>
        public ulong Timestamp { get; set; }

        /// <summary>
        /// イベントの種類
        /// </summary>
        public string Category { get; set; }

        /// <summary>
        /// 受信したメッセージやクラスオブジェクトなどを格納するプロパティ
        /// </summary>
        public Dictionary<string, object> Data { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="timestamp">イベント発生時のタイムスタンプ</param>
        /// <param name="category">イベントの種類</param>
        /// <param name="data">受信したメッセージやクラスオブジェクトなど</param>
        public Event(ulong timestamp, string category, Dictionary<string, object> data)
        {
            Timestamp = timestamp;
            Category = category;
            Data = data;
        }
        public Event(ulong timestamp, string category, EventPlayer data)
        {
            Timestamp = timestamp;
            Category = category;
            Data = data.Get();
        }
    }
}
