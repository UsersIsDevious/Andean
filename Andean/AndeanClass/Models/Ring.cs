namespace AndeanClass
{
    /// <summary>
    /// Ringに関するクラス
    /// </summary>
    public class Ring
    {
        /// <summary>
        /// イベント発生時のタイムスタンプ
        /// </summary>
        public double Timestamp { get; set; }

        /// <summary>
        /// イベントの種類
        /// </summary>
        public string Category { get; set; }

        /// <summary>
        /// ステージ番号
        /// </summary>
        public uint Stage { get; set; }

        /// <summary>
        /// 現在のリングの半径（マップの倍率で補正済み）
        /// </summary>
        public double CurrentRadius { get; set; }

        /// <summary>
        /// リングが縮む期間
        /// </summary>
        public double ShrinkDuration { get; set; }

        /// <summary>
        /// リング終了時刻（Timestamp + ShrinkDuration）
        /// </summary>
        public double EndTimestamp { get; set; }

        /// <summary>
        /// 終了時のリングの半径（updateRingで更新）
        /// </summary>
        public double EndRadius { get; set; }

        /// <summary>
        /// リングの中心位置
        /// </summary>
        public Vector3 Center { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="timestamp">タイムスタンプ</param>
        /// <param name="category">イベントの種類</param>
        /// <param name="stage">ステージ番号</param>
        /// <param name="center">中心位置（Vector3）</param>
        /// <param name="currentRadius">現在の半径</param>
        /// <param name="shrinkDuration">縮む期間</param>
        /// <param name="mapOffset">マップのオフセット配列（[x, y, scale]）</param>
        public Ring(double timestamp, string category, uint stage, Rtech.Liveapi.Vector3 center, double currentRadius, double shrinkDuration, double[] mapOffset)
        {
            Timestamp = timestamp;
            Category = category;
            Stage = stage;
            // 現在の半径は mapOffset[2] で補正
            CurrentRadius = currentRadius / mapOffset[2];
            ShrinkDuration = shrinkDuration;
            EndTimestamp = timestamp + shrinkDuration;
            // 新しい Vector3 インスタンスを作成し、UpdateValuesで中心位置を設定
            Center = new Vector3().UpdateValues(center.X, center.Y, center.Z, mapOffset);
        }

        /// <summary>
        /// リングオブジェクトを更新するメソッド
        /// </summary>
        /// <param name="timestamp">タイムスタンプ</param>
        /// <param name="category">イベントの種類</param>
        /// <param name="currentRadius">現在の半径</param>
        /// <param name="shrinkDuration">縮む期間</param>
        /// <param name="endRadius">終了時の半径</param>
        /// <param name="mapOffset">マップのオフセット配列（[x, y, scale]）</param>
        public void UpdateRing(double timestamp, string category, double currentRadius, double shrinkDuration, double endRadius, double[] mapOffset)
        {
            Timestamp = timestamp;
            Category = category;
            // 現在の半径は mapOffset[2] で補正
            CurrentRadius = currentRadius / mapOffset[2];
            EndRadius = endRadius;
            ShrinkDuration = shrinkDuration;
            EndTimestamp = timestamp + shrinkDuration;
        }
    }
}
