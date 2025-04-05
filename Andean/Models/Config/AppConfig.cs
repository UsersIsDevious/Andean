namespace Andean.Config
{
    /// <summary>
    /// ApexLegends 関連の設定
    /// </summary>
    public class ApexLegendsConfig
    {
        public string Path { get; set; }
        public string Game_Lancher { get; set; }
        public string Api_Port { get; set; }
        public string Api_Option { get; set; }
        public string Option { get; set; }
    }

    /// <summary>
    /// スコア設定の詳細
    /// </summary>
    public class ScoreSettingConfig
    {
        public int Kill_Point { get; set; }
        public int Max_Kill { get; set; }
        public List<int> Rank_Points { get; set; }
    }

    /// <summary>
    /// アプリケーション全体の設定
    /// </summary>
    public class AppConfig
    {
        public ApexLegendsConfig ApexLegends { get; set; }
        public List<string> Penetrator { get; set; }
        public string Output { get; set; }
        public string Language { get; set; }
        public string Log_Dir { get; set; }
        public int Data_Fps { get; set; }
        public ScoreSettingConfig Score_Setting { get; set; }
    }
}
