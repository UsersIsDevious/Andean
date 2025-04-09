using AndeanSystems;

namespace AndeanClass
{
    /// <summary>
    /// カスタムマッチを管理するクラス
    /// </summary>
    public class CustomMatch
    {
        /// <summary>
        /// マッチ名
        /// </summary>
        public string MatchName { get; set; }

        /// <summary>
        /// ゲームバージョン
        /// </summary>
        public string GameVersion { get; set; }

        /// <summary>
        /// スタートタイムスタンプ
        /// </summary>
        public ulong StartTimeStamp { get; set; }

        /// <summary>
        /// エンドタイムスタンプ
        /// </summary>
        public ulong EndTimeStamp { get; set; }

        /// <summary>
        /// プレイヤーの連想配列 (キーはプレイヤーID、値は Player クラスのインスタンス)
        /// </summary>
        public Dictionary<string, Player> Players { get; set; }

        /// <summary>
        /// チームの連想配列 (キーは teamId、値は Team クラスのインスタンス)
        /// </summary>
        public Dictionary<uint, Team> Teams { get; set; }

        /// <summary>
        /// 最大プレイヤー数
        /// </summary>
        public uint MaxPlayers { get; set; }

        /// <summary>
        /// 最大チーム数
        /// </summary>
        public uint MaxTeams { get; set; }

        /// <summary>
        /// 現在の状態（gameStateChanged 等）
        /// </summary>
        public string State { get; set; }

        /// <summary>
        /// マップタイプ
        /// </summary>
        public string MapType { get; set; }

        /// <summary>
        /// マップ名
        /// </summary>
        public string MapName { get; set; }

        /// <summary>
        /// マップID
        /// </summary>
        public string MapId { get; set; }

        /// <summary>
        /// ロビーID
        /// </summary>
        public string LobbyId { get; set; }

        /// <summary>
        /// プレイリスト名
        /// </summary>
        public string PlaylistName { get; set; }

        /// <summary>
        /// プレイリストの説明
        /// </summary>
        public string PlaylistDesc { get; set; }

        /// <summary>
        /// Datacenter のインスタンス
        /// </summary>
        public Datacenter Datacenter { get; set; }

        /// <summary>
        /// 管理者チャット設定
        /// </summary>
        public bool AdminChat { get; set; }

        /// <summary>
        /// チーム名変更の許可
        /// </summary>
        public bool TeamRename { get; set; }

        /// <summary>
        /// チーム変更の許可
        /// </summary>
        public bool SelfAssign { get; set; }

        /// <summary>
        /// エイムアシスト設定
        /// </summary>
        public bool Aimassist { get; set; }

        /// <summary>
        /// 匿名モード設定
        /// </summary>
        public bool AnonMode { get; set; }

        /// <summary>
        /// サーバーID
        /// </summary>
        public string ServerId { get; set; }

        /// <summary>
        /// 初期配布アイテムを管理する Inventory のインスタンス
        /// </summary>
        public Inventory StartingLoadout { get; set; }

        /// <summary>
        /// イベントリスト
        /// </summary>
        public List<Event> EventLists { get; set; }

        /// <summary>
        /// パケットリスト（キーは時間、値は Packet インスタンス）
        /// </summary>
        public Dictionary<string, ShortPacket> PacketLists { get; set; }

        /// <summary>
        /// リングデータのリスト（各要素は Ring クラスのインスタンス）
        /// </summary>
        public List<Ring> Rings { get; set; }

        /// <summary>
        /// マップのオフセット
        /// </summary>
        public double[] MapOffset { get; set; }

        /// <summary>
        /// スコア設定の保存
        /// </summary>
        public ScoreSettingConfig ScoreSettings { get; set; }

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="matchName">マッチ名</param>
        public CustomMatch(string matchName)
        {
            MatchName = matchName;
            GameVersion = "";
            StartTimeStamp = 0;
            EndTimeStamp = 0;
            Players = new Dictionary<string, Player>();
            Teams = new Dictionary<uint, Team>();
            MaxPlayers = 60;
            MaxTeams = 20;
            State = "";
            MapType = "";
            MapId = "";
            MapName = "";
            LobbyId = "";
            PlaylistName = "";
            PlaylistDesc = "";
            Datacenter = new Datacenter();
            Aimassist = true;
            AnonMode = false;
            ServerId = "";
            StartingLoadout = new Inventory();
            EventLists = new List<Event>();
            PacketLists = new Dictionary<string, ShortPacket>();
            Rings = new List<Ring>();
            MapOffset = new double[] { 0, 0, 1 };
            ScoreSettings = new ScoreSettingConfig();
        }

        /// <summary>
        /// イベントリストを初期化する
        /// </summary>
        /// <returns>自身のインスタンス（メソッドチェーン用）</returns>
        public CustomMatch RefreshEventLists()
        {
            EventLists = new List<Event>();
            return this;
        }

        /// <summary>
        /// リングリストの末尾に新しい要素を追加し、状態を更新する
        /// </summary>
        /// <param name="ring">追加する Ring インスタンス</param>
        public void AddRingElement(Ring ring)
        {
            Rings.Add(ring);
        }

        /// <summary>
        /// イベントリストの末尾に新しい要素を追加する
        /// </summary>
        /// <param name="ev">追加する Event インスタンス</param>
        public void AddEventElement(Event ev)
        {
            EventLists.Add(ev);
        }

        /// <summary>
        /// パケットリストに新しい要素を追加する
        /// </summary>
        /// <param name="time">キーとなる時間（文字列）</param>
        /// <param name="packet">追加する Packet インスタンス</param>
        public void AddPacketElement(string time, ShortPacket packet)
        {
            PacketLists[time] = packet;
        }

        /// <summary>
        /// プレイヤーを追加する。既に存在していなければ追加し、所属チームにも登録する。
        /// </summary>
        /// <param name="player">追加する Player インスタンス</param>
        /// <param name="teamName">チーム名（オプション）</param>
        public void AddPlayer(Player player, string teamName = "")
        {
            if (Players.Count >= MaxPlayers)
            {
                Console.WriteLine("Cannot add more players, the match is full.");
            }
            else if (Players.ContainsKey(player.NucleusHash))
            {
                Console.WriteLine($"Player with nucleusHash {player.NucleusHash} is already in the match.");
            }
            else
            {
                Players[player.NucleusHash] = player;

                // チームにプレイヤーを追加
                if (!Teams.ContainsKey(player.TeamId))
                {
                    Teams[player.TeamId] = new Team(teamName);
                }
                Teams[player.TeamId].AddPlayer(player.NucleusHash);
            }
        }

        /// <summary>
        /// チームを追加する。既存でなければ新規作成して返す。
        /// </summary>
        /// <param name="teamId">チームID</param>
        /// <param name="teamName">チーム名</param>
        /// <returns>追加または既存の Team インスタンス</returns>
        public Team AddTeam(uint teamId, string teamName)
        {
            if (!Teams.ContainsKey(teamId))
            {
                Team team = new Team(teamName);
                Teams[teamId] = team;
                return team;
            }
            return Teams[teamId];
        }

        public void ClearPlayers()
        {
            Players.Clear();
        }

        public void ClearTeams()
        {
            Teams.Clear();
        }

        /// <summary>
        /// マッチ名を設定する
        /// </summary>
        /// <param name="matchName">マッチ名</param>
        public void SetMatchName(string matchName)
        {
            MatchName = matchName;
        }

        public void SetLobbyId(string lobbyId)
        {
            LobbyId = lobbyId;
        }

        /// <summary>
        /// ゲームバージョンを設定する
        /// </summary>
        /// <param name="gameVersion">ゲームバージョン</param>
        public void SetGameVersion(string gameVersion)
        {
            GameVersion = gameVersion;
        }

        /// <summary>
        /// ゲームステータスを設定する
        /// </summary>
        /// <param name="state">状態文字列</param>
        public void SetState(string state)
        {
            State = state;
        }

        /// <summary>
        /// スコア設定を更新する
        /// </summary>
        /// <param name="scoreSettings">スコア設定（キーと値のペア）</param>
        public void SetScoreSettings(ScoreSettingConfig scoreSettings)
        {
            ScoreSettings = scoreSettings;
        }

        /// <summary>
        /// Playlistの情報を更新する
        /// </summary>
        public void SetPlaylistInfo(string playlistName, uint maxPlayers, uint maxTeams, string mapType, string mapId, string mapName, bool adminChat, bool teamRename, bool selfAssign, bool aimAssist, bool anonMode)
        {
            PlaylistName = playlistName;
            MaxPlayers = maxPlayers;
            MaxTeams = maxTeams;
            MapType = mapType;
            MapId = mapId;
            MapName = mapName;
            AdminChat = adminChat;
            TeamRename = teamRename;
            SelfAssign = selfAssign;
            Aimassist = aimAssist;
            AnonMode = anonMode;
        }

        /// <summary>
        /// プレイリスト名に応じて最大プレイヤー数とチーム数を設定する
        /// </summary>
        /// <param name="name">プレイリスト名</param>
        /// <param name="description">プレイリストの説明（オプション）</param>
        public void SetMaxPlayersAndTeams(string name, string? description = null)
        {
            switch (name)
            {
                case "Duos":
                    MaxPlayers = 60;
                    MaxTeams = 30;
                    break;
                case "Team Deathmatch":
                    MaxPlayers = 12;
                    MaxTeams = 4;
                    break;
                case "Gun Run":
                    MaxPlayers = 12;
                    MaxTeams = 4;
                    break;
                case "Control":
                    MaxPlayers = 18;
                    MaxTeams = 6;
                    break;
                case "Big Team Deathmatch":
                    MaxPlayers = 24;
                    MaxTeams = 8;
                    break;
                case "Lockdown":
                    MaxPlayers = 12;
                    MaxTeams = 4;
                    break;
                default:
                    MaxPlayers = 60;
                    MaxTeams = 20;
                    break;
            }
        }

        /// <summary>
        /// マッチ開始時刻を設定する
        /// </summary>
        /// <param name="timestamp">タイムスタンプ</param>
        public void SetStartTimeStamp(ulong timestamp)
        {
            StartTimeStamp = timestamp;
        }

        /// <summary>
        /// マッチ終了時刻を設定する
        /// </summary>
        /// <param name="timestamp">タイムスタンプ</param>
        public void SetEndTimeStamp(ulong timestamp)
        {
            EndTimeStamp = timestamp;
        }

        /// <summary>
        /// マッチセットアップ情報を設定する
        /// </summary>
        /// <param name="mapId">マップID</param>
        /// <param name="playlistName">プレイリスト名</param>
        /// <param name="playlistDesc">プレイリストの説明</param>
        /// <param name="aimassist">エイムアシスト設定</param>
        /// <param name="anonymousMode">匿名モード設定</param>
        /// <param name="serverId">サーバーID</param>
        public void SetMatchSetup(string mapId, string playlistName, string playlistDesc, bool aimassist, bool anonymousMode, string serverId)
        {
            MapId = mapId;
            PlaylistName = playlistName;
            PlaylistDesc = playlistDesc;
            Aimassist = aimassist;
            AnonMode = anonymousMode;
            ServerId = serverId;

            switch (mapId)
            {
                case "mp_rr_canyonlands_hu":
                    MapOffset = new double[] { -3419, -2926, 20 };
                    break;
                case "mp_rr_desertlands_hu":
                    MapOffset = new double[] { 0, 1, 22 };
                    break;
                case "mp_rr_district":
                case "mp_rr_district_halloween":
                    MapOffset = new double[] { 0, 0, 21 };
                    break;
                case "mp_rr_divided_moon_mu1":
                    MapOffset = new double[] { 1992, -492, 21 };
                    break;
                case "mp_rr_freedm_skulltown":
                    MapOffset = new double[] { 1886, 294, 5 };
                    break;
                case "mp_rr_olympus_mu2":
                    MapOffset = new double[] { 6968, -2969, 22 };
                    break;
                case "mp_rr_tropic_island_mu2":
                    MapOffset = new double[] { -594, -939, 25 };
                    break;
                default:
                    MapOffset = new double[] { 0, 0, 1 };
                    Console.WriteLine("[CustomMatch.SetMatchSetup] Unknown map");
                    break;
            }
        }

        /// <summary>
        /// 指定した nucleusHash のプレイヤーを削除する
        /// </summary>
        /// <param name="nucleusHash">プレイヤーの識別子</param>
        /// <returns>削除結果のメッセージ</returns>
        public string RemovePlayer(string nucleusHash)
        {
            if (Players.ContainsKey(nucleusHash))
            {
                Player removedPlayer = Players[nucleusHash];
                Players.Remove(nucleusHash);
                Teams[removedPlayer.TeamId].Players.Remove(nucleusHash);
                return $"{removedPlayer.Name} has been removed from the match.";
            }
            else
            {
                return $"Player with nucleusHash {nucleusHash} not found in the match.";
            }
        }

        /// <summary>
        /// 現在のプレイヤー数を返す
        /// </summary>
        /// <returns>プレイヤー数</returns>
        public int GetPlayerCount()
        {
            return Players.Count;
        }

        /// <summary>
        /// 指定した nucleusHash のプレイヤーを取得する
        /// </summary>
        /// <param name="nucleusHash">プレイヤーの識別子</param>
        /// <returns>見つかった場合は Player インスタンス、なければ null</returns>
        public Player? GetPlayer(string nucleusHash)
        {
            if (Players.ContainsKey(nucleusHash))
            {
                return Players[nucleusHash];
            }
            else
            {
                Console.WriteLine($"Player with nucleusHash {nucleusHash} not found.");
                return null;
            }
        }

        /// <summary>
        /// 指定したチームID のチームを取得する
        /// </summary>
        /// <param name="teamId">チームID</param>
        /// <returns>見つかった場合は Team インスタンス、なければ null</returns>
        public Team? GetTeam(uint teamId)
        {
            if (Teams.ContainsKey(teamId))
            {
                return Teams[teamId];
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// マッチのステータスをオブジェクトとして返す
        /// </summary>
        /// <returns>マッチステータス情報</returns>
        public object GetMatchStatus()
        {
            return new
            {
                matchName = MatchName,
                startTimeStamp = StartTimeStamp,
                endTimeStamp = EndTimeStamp,
                gameState = State,
                mapType = MapType,
                mapName = MapName,
                mapId = MapId,
                playlistName = PlaylistName,
                playlistDesc = PlaylistDesc,
                datacenter = Datacenter.GetStatus(),
                aimassist = Aimassist,
                anonymousMode = AnonMode,
                serverId = ServerId,
                startingLoadout = StartingLoadout,
                maxPlayers = MaxPlayers,
                playerCount = GetPlayerCount(),
                teams = Teams,
                players = Players.Values.Select(p => p.GetStatus()).ToList()
            };
        }
    }
}
