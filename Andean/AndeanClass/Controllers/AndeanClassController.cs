using Rtech.Liveapi;
using Andean.Config;
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
        public static CustomMatch _match;
        /// <summary>
        /// パケット情報
        /// </summary>
        public static Packet _packet;
        /// <summary>
        /// ロビーかどうかのフラグ
        /// </summary>
        public static bool _isLobby = true;
        /// <summary>
        /// プレイヤー情報を保持する変数
        /// </summary>
        public static Dictionary<string, EventPlayer> _playerData = new Dictionary<string, EventPlayer>();
        /// <summary>
        /// チーム順位のリスト
        /// </summary>
        private static List<uint> _teamRanking;
        /// <summary>
        /// リング後処理用のEventsリスト
        /// </summary>
        private static List<(string, Event)> _ringEvents;
        /// <summary>
        /// configファイルの情報
        /// </summary>
        private static AppConfig config = ConfigService.Config;
        /// <summary>
        /// player以外の攻撃の際用のworldプレーヤー
        /// </summary>
        private static Player WorldPlayer = new Player("World", 99, "World", "World").SetLegend("World");
        /// <summary>
        /// CSVデータ
        /// </summary>
        private static CsvData _csvData = new CsvData();
        /// <summary>
        /// ロビー関連メッセージを保持する変数
        /// </summary>
        private static Dictionary<string, object> _waitMessages = new Dictionary<string, object>();



        public static void InitializeLobby(Init initMsg)
        {
            lock (_lock)
            {
                _lobby = CreateCustomMatch(initMsg);
            }
        }

       
        public static void InitializeMatch(Init initMsg)
        {
            lock (_lock)
            {
                _match = CreateCustomMatch(initMsg);
                // マッチが初期化されたらロビーから抜ける
                _isLobby = false;
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

                ConfigureMatchSetup(matchSetupMsg, _match);
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

                // Postmatchの場合はロビーに戻る
                if (gameStateChangedMsg.State == "Postmatch") _isLobby = true;

                UpdateGameStatus(gameStateChangedMsg, _match, config, _teamRanking, _ringEvents);
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

               ProcessGameEnd(matchStateEndMsg, _match, _packet);
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

                ProcessTeamEliminated(squadEliminatedMsg, _match, _packet, _teamRanking);
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
                ProcessRingStartClosing(ringStartClosingMsg, _match, _ringEvents, _packet);
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
                ProcessRingFinishedClosing(ringFinishedClosingMsg, _match, _ringEvents, _packet);
            }
        }
    }
}
