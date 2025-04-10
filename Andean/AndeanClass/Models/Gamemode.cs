using Andean.ApexLiveAPI.Services;

namespace AndeanClass
{
    /// <summary>
    /// ゲームモードの情報を保持するクラス
    /// </summary>
    public class Gamemode
    {
        /// <summary>
        /// ゲームモードの名前
        /// </summary>
        /// <value>ゲームモードの名前</value>
        public Dictionary<string, GamemodePlaylists> Modes { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        public Gamemode(Dictionary<string, PlaylistCategory> playlists)
        {
            Modes = new Dictionary<string, GamemodePlaylists>();
            foreach (var playlist in playlists)
            {
                var gamemodeName = playlist.Key;
                var playlistValue = playlist.Value;
                if (!Modes.ContainsKey(gamemodeName))
                {
                    Modes.Add(gamemodeName, new GamemodePlaylists(playlistValue.Entries));
                }
            }
        }
    }

    /// <summary>
    /// 同一ゲームモードのプレイリスト情報を保持するクラス
    /// </summary>
    public class GamemodePlaylists
    {
        /// <summary>
        /// ゲームモードの名前
        /// </summary>
        /// <value>ゲームモードの名前</value>
        public Dictionary<string, Playlist> Playlists { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        public GamemodePlaylists(Dictionary<string, PlaylistEntry> playlists)
        {
            Playlists = new Dictionary<string, Playlist>();
            foreach (var playlist in playlists)
            {
                var playlistKey = playlist.Key;
                var playlistValue = playlist.Value;
                Playlists.Add(playlistKey, new Playlist(playlistValue.Name ?? playlistValue.MapName ?? playlistKey, playlistValue.Variants));
            }
        }
    }

    /// <summary>
    /// プレイリストの情報を保持するクラス
    /// </summary>
    public class Playlist
    {
        /// <summary>
        /// デフォルトのプレイリストID
        /// </summary>
        /// <value>プレイリストのID</value>
        public string Name { get; set; }

        /// <summary>
        /// バリアントの情報を保持するクラス
        /// </summary>
        /// <value>バリアントの情報を保持するクラス</value>
        public Dictionary<string, Variant> Variants { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        public Playlist(string name, Dictionary<string, PlaylistEntry>? variants = null)
        {
            Name = name;
            Variants = new Dictionary<string, Variant>();
            if (variants != null)
            {
                foreach (var variant in variants)
                {
                    var variantKey = variant.Key;
                    var variantValue = variant.Value;
                    Variants.Add(variantKey, new Variant(variantValue.Name ?? variantValue.MapName ?? variantKey));
                }
            }
        }
    }

    /// <summary>
    /// バリアントの情報を保持するクラス
    /// </summary>
    /// <value>バリアントの情報を保持するクラス</value>
    public class Variant
    {
        /// <summary>
        /// バリアントの名前
        /// </summary>
        /// <value>バリアントの名前</value>
        public string Name { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        public Variant(string name)
        {
            Name = name;
        }
    }
}
