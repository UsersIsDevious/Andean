using Rtech.Liveapi;
using Andean.Config;
using static AndeanClass.Services.MatchService;
using Newtonsoft.Json.Linq;

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
        /// Update時点のunix時間を保持する変数
        /// </summary>
        public static long _updateTime = 0;
        /// <summary>
        /// パケット情報
        /// </summary>
        public static Dictionary<long, Packet> _packetList = new Dictionary<long, Packet>();
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
        /// CSVデータ
        /// </summary>
        public static CsvData _csvData = new CsvData();
        /// <summary>
        /// ロビー関連メッセージを保持する変数
        /// </summary>
        public static Dictionary<string, object> _waitMessages = new Dictionary<string, object>();


        public static void InitializeMatch(Init initMsg)
        {
            lock (_lock)
            {
                CreateCustomMatch(initMsg);
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

                // Postmatchの場合はロビーに戻る
                if (gameStateChangedMsg.State == "Postmatch")
                {
                    _isLobby = true;

                    foreach (var packet in _packetList.OrderBy(kvp => kvp.Key).Select(kvp => kvp.Value))
                    {
                        // パケットを更新する
                        if ((packet.Data.Count + packet.Events.Count) != 0 && packet.T > 2)
                        {
                            // packet.tが整数かどうかをチェック
                            // if (packet.T % 1 == 0)
                            // {
                            //     if (packet.Events.Count != 0)
                            //     {
                            //         // 最初のイベントのtimestampから試合開始時刻を引く
                            //         packet.T = packet.Events[0].Timestamp - _match.StartTimeStamp;
                            //         CheckPacketData(packet, _playerData);
                            //         _match.AddPacketElement(packet.T.ToString(), (JObject)packet.ToJson());
                            //     }
                            //     else
                            //     {
                            //         Console.WriteLine("[UPDATE] Packet is skipped");
                            //     }
                            // }
                            // else
                            // {
                            //     CheckPacketData(packet, _playerData);
                            //     _match.AddPacketElement(packet.T.ToString(), (JObject)packet.ToJson());
                            // }

                            CheckPacketData(packet, _playerData);
                            _match.AddPacketElement(packet.T.ToString(), (JObject)packet.ToJson());
                        }
                    }
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

        /// <summary>
        /// Packetのデータに含まれていないプレイヤーをチェックする
        /// </summary>
        /// <param name="packet">Packetクラスのインスタンス</param>
        /// <param name="playerData">プレイヤーデータ（キー：プレイヤーID、値：Playerオブジェクト）</param>
        /// <returns>正常に処理できた場合はtrue、例外発生時はfalse</returns>
        public static bool CheckPacketData(Packet packet, Dictionary<string, EventPlayer> playerData)
        {
            try
            {
                // packet.Dataに含まれる各プレイヤーのIDをリストとして取得
                var includedPlayers = packet.Data.Select(player => player.id).ToList();

                // Dictionary内を変更するため、ToList()でキーと値のペアをコピーしてループ
                foreach (var kvp in playerData.ToList())
                {
                    string playerId = kvp.Key;
                    EventPlayer playerValue = kvp.Value;

                    // packetに該当プレイヤーが含まれていない場合は追加
                    if (!includedPlayers.Contains(playerId))
                    {
                        packet.AddData(playerValue);
                    }
                    else
                    {
                        // 含まれている場合は、packet.Dataから該当するプレイヤーを取得して更新
                        var foundPlayer = packet.Data.FirstOrDefault(player => player.id == playerId);
                        if (foundPlayer != null)
                        {
                            playerData[playerId] = foundPlayer;
                        }
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine("[CHECK PACKET DATA] Error: " + ex.Message);
                return false;
            }
        }
    }
}
