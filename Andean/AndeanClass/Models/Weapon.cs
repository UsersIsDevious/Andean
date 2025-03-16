namespace AndeanClass
{
    /// <summary>
    /// 武器に関するクラス
    /// </summary>
    public class Weapon
    {
        /// <summary>
        /// 内部の武器名
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// 表示されている武器名
        /// </summary>
        public string Label { get; set; }

        /// <summary>
        /// 武器のレベル
        /// </summary>
        public uint Level { get; set; }

        /// <summary>
        /// AmmoUsedで使用された最大の弾数を格納するプロパティ
        /// </summary>
        public uint MaxMagazine { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="id">内部の武器名</param>
        /// <param name="label">表示されている武器名</param>
        /// <param name="level">武器のレベル</param>
        public Weapon(string id, string label, uint level)
        {
            Id = id;
            Label = label;
            Level = level;
            MaxMagazine = 0;
        }

        /// <summary>
        /// AmmoUsedで使用された最大の弾数を返すメソッド
        /// </summary>
        /// <returns>AmmoUsedで使用された最大の弾数</returns>
        public uint GetMaxMagazine()
        {
            return MaxMagazine;
        }
    }
}
