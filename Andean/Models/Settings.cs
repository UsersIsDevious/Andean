using System.Collections.Generic;

namespace MyAspNetCoreApp.Models
{
    public class ApexLegendsConfig
    {
        public string Path { get; set; }
        public string Api_Port { get; set; }
        public string Api_Option { get; set; }
        public string Option { get; set; }
    }

    public class ScoreSetting
    {
        public int Kill_Point { get; set; }
        public int Max_Kill { get; set; }
        public List<int> Rank_Points { get; set; }
    }

    public class CustomSettings
    {
        public ApexLegendsConfig ApexLegends { get; set; }
        public List<string> Penetrator { get; set; }
        public string Output { get; set; }
        public string Language { get; set; }
        public string Log_Dir { get; set; }
        public int Data_Fps { get; set; }
        public ScoreSetting Score_Setting { get; set; }
    }
}
