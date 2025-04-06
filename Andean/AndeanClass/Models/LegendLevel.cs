namespace AndeanClass
{
    public class LegendLevel
    {
        // 各レベルのエントリーを格納するディクショナリ
        private Dictionary<string, LevelEntry> entries = new Dictionary<string, LevelEntry>();

        // インデクサーを定義して、直接[]でアクセス可能にする
        public LevelEntry this[string key]
        {
            get
            {
                entries.TryGetValue(key, out LevelEntry entry);
                return entry;
            }
            set
            {
                entries[key] = value;
            }
        }

        // 現在のレベルを保持するプロパティ
        public string Now { get; set; }

        public LegendLevel()
        {
            Now = "0";
            entries["0"] = new LevelEntry();
        }


    }

    public class LevelEntry
    {
        public string UpgradeName { get; set; } = "";
        public string UpgradeDesc { get; set; } = "";
        public string Selected { get; set; } = "";
    }
}
