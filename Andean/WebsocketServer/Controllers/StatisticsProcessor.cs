using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Google.Protobuf;
using Rtech.Liveapi;
using Andean.AndeanClass.Services;
using Andean.WebsocketServer.Services;
using Andean.Utilities;

namespace Andean.WebsocketServer.Controllers
{
    /// <summary>
    /// IMessage と送信元のクライアント ID をまとめるラッパークラス
    /// </summary>
    public class MessageWrapper
    {
        public string ClientId { get; }
        public IMessage Message { get; }

        public MessageWrapper(string clientId, IMessage message)
        {
            ClientId = clientId;
            Message = message;
        }
    }

    public class StatisticsProcessor
    {
        // クライアントIDと IMessage の組み合わせを保持するスレッドセーフなキュー
        private readonly BlockingCollection<MessageWrapper> _queue = new BlockingCollection<MessageWrapper>();

        // 各サービスへの参照（DI により注入）
        private readonly IMatchService _matchService;
        private readonly ILobbyService _lobbyService;
        private readonly ClientManagementService _clientManagement;
        private readonly FileOutputService _fileOutputService;

        // ログ出力用ファイル名（サーバー起動時のタイムスタンプで固定）
        private readonly string _logFileName;

        public StatisticsProcessor(
            IMatchService matchService,
            ILobbyService lobbyService,
            ClientManagementService clientManagement,
            FileOutputService fileOutputService)
        {
            _matchService = matchService;
            _lobbyService = lobbyService;
            _clientManagement = clientManagement;

            _fileOutputService = fileOutputService;

            // サーバー起動時のタイムスタンプでログファイル名を決定（例: 20250222_132800_log.txt）
            _logFileName = DateTime.Now.ToString("yyyyMMdd_HHmmss") + "_log.txt";

            // 別スレッドでキュー処理を開始
            Task.Factory.StartNew(ProcessQueue, TaskCreationOptions.LongRunning);
        }

        /// <summary>
        /// 受信した IMessage とその送信元クライアント ID をキューに追加します。
        /// </summary>
        public void EnqueueMessage(string clientId, IMessage message)
        {
            _queue.Add(new MessageWrapper(clientId, message));

            // ログ出力用の文字列を作成
            string logContent = $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] Client: {clientId}, MessageType: {message.GetType().Name}, Content: {message}{Environment.NewLine}";

            // 非同期にファイルへ追記（ファイルは ./output フォルダ配下に作成）
            Task.Run(() => _fileOutputService.WriteToFileAsync("./output", _logFileName, logContent, FileWriteMode.Append));
        }

        /// <summary>
        /// キュー内の IMessage を処理します（別スレッドで実行）。
        /// </summary>
        private void ProcessQueue()
        {
            foreach (var wrapper in _queue.GetConsumingEnumerable())
            {
                ProcessMessage(wrapper.ClientId, wrapper.Message);
            }
        }

        /// <summary>
        /// 受信メッセージの型に応じた処理を行います。
        /// </summary>
        private void ProcessMessage(string clientId, IMessage message)
        {

            switch (message)
            {
                case Init initMsg:
                    {
                        // Init メッセージの場合、クライアントを認定済みに設定
                        _clientManagement.SetAuthorizedClient(clientId);

                        // マッチ初期化の処理はマッチサービスへ委譲
                        _matchService.HandleInitMessage(initMsg);
                        break;
                    }
                case Rtech.Liveapi.Vector3 vector3Msg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case Rtech.Liveapi.Player playerMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case CustomMatch_LobbyPlayer lobbyPlayerMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case Rtech.Liveapi.Datacenter datacenterMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case Rtech.Liveapi.Version versionMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case InventoryItem inventoryItemMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case LoadoutConfiguration loadoutConfigMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case CustomMatch_LobbyPlayers customMatch_LobbyPlayersMsg:
                    {
                        _lobbyService.HandleLobbyPlayers(customMatch_LobbyPlayersMsg);
                        break;
                    }
                case RequestStatus RequestStatusMsg:
                    {
                        break;
                    }
                case Response ResponseMsg:
                    {
                        break;
                    }
                case MatchSetup MatchSetupMsg:
                    {
                        break;
                    }
                case GameStateChanged Msg:
                    {
                        break;
                    }
                case CharacterSelected Msg:
                    {
                        break;
                    }
                case MatchStateEnd Msg:
                    {
                        break;
                    }
                case RingStartClosing Msg:
                    {
                        break;
                    }
                case RingFinishedClosing Msg:
                    {
                        break;
                    }
                case PlayerConnected Msg:
                    {
                        break;
                    }
                case PlayerDisconnected Msg:
                    {
                        break;
                    }
                case PlayerStatChanged Msg:
                    {
                        break;
                    }
                case PlayerUltimateCharged Msg:
                    {
                        break;
                    }
                case PlayerUpgradeTierChanged Msg:
                    {
                        break;
                    }
                case PlayerDamaged Msg:
                    {
                        break;
                    }
                case PlayerKilled Msg:
                    {
                        break;
                    }
                case PlayerDowned Msg:
                    {
                        break;
                    }
                case PlayerAssist Msg:
                    {
                        break;
                    }
                case SquadEliminated Msg:
                    {
                        break;
                    }
                case GibraltarShieldAbsorbed Msg:
                    {
                        break;
                    }
                case RevenantForgedShadowDamaged Msg:
                    {
                        break;
                    }
                case ChangeCamera Msg:
                    {
                        break;
                    }
                case PauseToggle Msg:
                    {
                        break;
                    }
                case CustomMatch_SetSettings Msg:
                    {
                        break;
                    }
                case PlayerRespawnTeam Msg:
                    {
                        break;
                    }
                case PlayerRevive Msg:
                    {
                        break;
                    }
                case ArenasItemSelected Msg:
                    {
                        break;
                    }
                case ArenasItemDeselected Msg:
                    {
                        break;
                    }
                case InventoryPickUp Msg:
                    {
                        break;
                    }
                case InventoryDrop Msg:
                    {
                        break;
                    }
                case InventoryUse Msg:
                    {
                        break;
                    }
                case BannerCollected Msg:
                    {
                        break;
                    }
                case PlayerAbilityUsed Msg:
                    {
                        break;
                    }
                case LegendUpgradeSelected Msg:
                    {
                        break;
                    }
                case ZiplineUsed Msg:
                    {
                        break;
                    }
                case GrenadeThrown Msg:
                    {
                        break;
                    }
                case BlackMarketAction Msg:
                    {
                        break;
                    }
                case WraithPortal Msg:
                    {
                        break;
                    }
                case WarpGateUsed Msg:
                    {
                        break;
                    }
                case AmmoUsed Msg:
                    {
                        break;
                    }
                case WeaponSwitched Msg:
                    {
                        break;
                    }
                case ObserverSwitched Msg:
                    {
                        break;
                    }
                case ObserverAnnotation Msg:
                    {
                        break;
                    }
                default:
                    {
                        // 未定義のイベントは、必要に応じて統計情報に更新
                        //_currentMatch?.UpdateStatistics(message);
                        break;
                    }
            }
        }
    }
}
