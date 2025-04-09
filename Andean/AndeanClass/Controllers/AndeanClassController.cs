using Rtech.Liveapi;
using AndeanSystems;
using Newtonsoft.Json.Linq;
using static AndeanClass.Services.MatchService;

namespace AndeanClass.Controllers
{
    public static partial class AndeanClassController
    {
        private static readonly object _lock = new object();

        /// <summary>
        /// ロビー情報
        /// </summary>
        private static CustomMatch _lobby = new CustomMatch("Lobby");
        /// <summary>
        /// マッチ情報
        /// </summary>
        public static CustomMatch _match = new CustomMatch("DefaultMatch");
        /// <summary>
        /// Update時点のunix時間を保持する変数
        /// </summary>
        public static double _updateTime = 0;
        /// <summary>
        /// パケット情報
        /// </summary>
        public static Dictionary<double, Packet> _packetList = new Dictionary<double, Packet>();
        /// <summary>
        /// プレイヤー情報を保持する変数
        /// </summary>
        public static Dictionary<string, EventPlayer> _playerData = new Dictionary<string, EventPlayer>();
        /// <summary>
        /// チーム順位のリスト
        /// </summary>
        public static List<uint> _teamRanking = new List<uint>();
        /// <summary>
        /// リング後処理用のEventsリスト
        /// </summary>
        public static List<(string, Event)> _ringEvents = new List<(string, Event)>();
        /// <summary>
        /// configファイルの情報
        /// </summary>
        public static AppConfig config = ConfigService.Config;
        /// <summary>
        /// player以外の攻撃の際用のworldプレーヤー
        /// </summary>
        public static Player WorldPlayer = new Player("World", 99, "World", "World").SetLegend("World");
        /// <summary>
        /// ロビー情報
        /// </summary>
        public static LobbyInfo LobbyData { get; set; } = new LobbyInfo();
        

        public static void InitializeMatch(Init initMsg)
        {
            lock (_lock)
            {
                CreateCustomMatch(initMsg);
            }
        }

        // マッチセットアップメッセージの処理
        public static void ProcessMatchSetup(MatchSetup matchSetupMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                ConfigureMatchSetup(matchSetupMsg);
            }
        }

        // ゲームステータスメッセージの処理
        public static void ProcessGameStatus(GameStateChanged gameStateChangedMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                UpdateGameStatus(gameStateChangedMsg);
            }
        }

        // ゲーム終了時の処理
        public static void ProcessMatchEnd(MatchStateEnd matchStateEndMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                ProcessGameEnd(matchStateEndMsg);
            }
        }

        // チーム壊滅時の処理
        public static void ProcessSquadEliminated(SquadEliminated squadEliminatedMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }

                ProcessTeamEliminated(squadEliminatedMsg);
            }
        }
        // リング収縮開始メッセージの処理
        public static void ProcessRingStart(RingStartClosing ringStartClosingMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                ProcessRingStartClosing(ringStartClosingMsg);
            }
        }

        // リング収縮終了メッセージの処理
        public static void ProcessRingFinished(RingFinishedClosing ringFinishedClosingMsg)
        {
            lock (_lock)
            {
                if (_match == null)
                {
                    throw new InvalidOperationException("CustomMatchが初期化されていません。");
                }
                ProcessRingFinishedClosing(ringFinishedClosingMsg);
            }
        }
    }
}
