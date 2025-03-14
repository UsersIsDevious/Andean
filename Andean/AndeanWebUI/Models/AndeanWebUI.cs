namespace Andean.AndeanWebUI.Models
{
    public interface IAndeanWebUI
    {
        Task NotifyShutdown(string message = "System is shutting down.");
    }

    public abstract class AndeanWebUI
    {
        public abstract void NotifyShutdown();
    }

    public class LobbySettings
    {
        // CustomMatch クラスから取得可能な項目を追加していく
        public string PlaylistName { get; set; } = "";
        public bool AdminChat { get; set; } = false;
        public bool TeamRename { get; set; } = false;
        public bool SelfAssign { get; set; } = false;
        public bool AimAssist { get; set; } = false;
        public bool AnonMode { get; set; } = false;
        public string GameMode { get; set; } = "";
        public string Map { get; set; } = "";
    }
    public class LobbyPlayerSection
    {
        public string Name { get; set; } = "Unassigned";
        public string LogoUrl { get; set; } = "";
        public int SpawnPoint { get; set; } = 0;
        public List<PlayerInfo> Players { get; set; } = new List<PlayerInfo>();
    }

    public class PlayerInfo
    {
        public int Index { get; set; }
        public string Id { get; set; } = "";
        public string Name { get; set; } = "";
    }
}
