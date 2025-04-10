using Andean.ApexLiveAPI.Services;
using Rtech.Liveapi;

namespace AndeanClass
{
    /// <summary>
    /// ロビー設定情報を保持するクラス
    /// </summary>
    public class LobbySettings
    {
        /// <summary>
        /// プレイリスト名
        /// </summary>
        /// <value>プレイリスト名</value>
        public string PlaylistName { get; set; }

        /// <summary>
        /// 管理者限定チャットの有無
        /// </summary>
        /// <value>管理者限定チャットの有無</value>
        public bool AdminChat { get; set; }

        /// <summary>
        /// チーム名の変更を許可するかどうか
        /// </summary>
        /// <value>チーム名の変更を許可するかどうか</value>
        public bool TeamRename { get; set; }

        /// <summary>
        /// チーム変更を許可するかどうか
        /// </summary>
        /// <value>チーム変更を許可するかどうか</value>
        public bool SelfAssign { get; set; }

        /// <summary>
        /// エイムアシストの有無
        /// </summary>
        /// <value>エイムアシストの有無</value>
        public bool AimAssist { get; set; }

        /// <summary>
        /// 匿名モードの有無
        /// </summary>
        /// <value>匿名モードの有無</value>
        public bool AnonMode { get; set; }

        /// <summary>
        /// 最大プレイヤー数
        /// </summary>
        /// <value>最大プレイヤー数</value>
        public uint MaxPlayers { get; set; }

        /// <summary>
        /// 最大チーム数
        /// </summary>
        /// <value>最大チーム数</value>
        public uint MaxTeams { get; set; }

        /// <summary>
        /// 選択されたプレイリストのモード(CUSTOMMATCH_BR_TRIOSなど)
        /// </summary>
        /// <value>選択されたプレイリストのモード</value>
        public string CategoryKey { get; set; }

        public string EntryKey { get; set; }

        public string? VariantKey { get; set; }

        /// <summary>
        /// マップID
        /// </summary>
        /// <value>マップID</value>
        public string MapId { get; set; }

        /// <summary>
        /// バリアントかどうか
        /// </summary>
        /// <value>バリアントかどうか</value>
        public bool IsVariant { get; set; }

        /// <summary>
        /// プレイリストがゲームモードで分類されたクラスを格納するプロパティ
        /// </summary>
        /// <value>ゲームモード</value>
        public Gamemode Gamemode { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param settings="null">CustomMatch_SetSettingsのインスタンス</param>
        public LobbySettings(CustomMatch_SetSettings settings)
        {
            PlaylistName = settings.PlaylistName;
            AdminChat = settings.AdminChat;
            TeamRename = settings.TeamRename;
            SelfAssign = settings.SelfAssign;
            AimAssist = settings.AimAssist;
            AnonMode = settings.AnonMode;
            MaxPlayers = 0;
            MaxTeams = 0;
            CategoryKey = string.Empty;
            EntryKey = string.Empty;
            VariantKey = string.Empty;
            MapId = string.Empty;
            IsVariant = false;
            Gamemode = new Gamemode(new Dictionary<string, PlaylistCategory>());
        }

        public void SetSettings(uint maxPlayers, uint maxTeams, string categoryKey, string entryKey, string? variantKey, string mapId, bool isVariant, Gamemode gamemode)
        {
            MaxPlayers = maxPlayers;
            MaxTeams = maxTeams;
            CategoryKey = categoryKey;
            EntryKey = entryKey;
            VariantKey = variantKey;
            MapId = mapId;
            IsVariant = isVariant;
            Gamemode = gamemode;
        }
    }
}