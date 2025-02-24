using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Google.Protobuf;
using Rtech.Liveapi;
using Andean.Models.AndeanClass;  // CustomMatch クラスが定義されている

namespace Andean.Services.Processing
{
    public class StatisticsProcessor
    {
        // IMessage を保持するスレッドセーフなキュー
        private readonly BlockingCollection<IMessage> _queue = new BlockingCollection<IMessage>();

        // 現在のマッチ情報（Init イベント時に生成）
        private CustomMatch? _currentMatch;

        // 認定済みクライアント ID（外部から設定される）
        public string? AuthorizedClientId { get; private set; } = null;

        public StatisticsProcessor()
        {
            // 別スレッドでキュー処理を開始
            Task.Factory.StartNew(ProcessQueue, TaskCreationOptions.LongRunning);
        }

        /// <summary>
        /// 認定済みクライアントを設定します。WebSocketServer などから呼び出してください。
        /// </summary>
        public void SetAuthorizedClient(string clientId)
        {
            AuthorizedClientId = clientId;
            Console.WriteLine($"Authorized client set: {clientId}");
        }

        /// <summary>
        /// 認定済みクライアントの設定を解除します。
        /// </summary>
        public void ClearAuthorizedClient()
        {
            AuthorizedClientId = null;
            _currentMatch = null;
            Console.WriteLine("Authorized client cleared.");
        }

        /// <summary>
        /// 受信した IMessage をキューに追加します。
        /// </summary>
        public void EnqueueMessage(IMessage message)
        {
            _queue.Add(message);
        }

        /// <summary>
        /// キュー内の IMessage を処理します（別スレッドで実行）。
        /// </summary>
        private void ProcessQueue()
        {
            foreach (var message in _queue.GetConsumingEnumerable())
            {
                ProcessMessage(message);
            }
        }

        /// <summary>
        /// 受信メッセージの型に応じた処理を行います。
        /// </summary>
        private void ProcessMessage(IMessage message)
        {
            // 認定済みクライアントが設定されていない場合は、Init メッセージ以外は無視
            if (AuthorizedClientId == null && !(message is Init))
            {
                Console.WriteLine("未認定のクライアントからのメッセージは無視します。");
                return;
            }

            switch (message)
            {
                case Init initMsg:
                    {
                        // 例: platform が空の場合は Init イベントと判断
                        if (!string.IsNullOrEmpty(initMsg.Platform))
                        {
                            Console.WriteLine("Platform 指定あり：readPlaylists_r5() を実行します。");
                            break;
                        }

                        // Init メッセージの Timestamp (秒単位) をミリ秒に変換して日時を整形
                        long unixTimeSeconds = (long)initMsg.Timestamp;
                        long unixTimeMillis = unixTimeSeconds * 1000;
                        DateTime date = DateTimeOffset.FromUnixTimeMilliseconds(unixTimeMillis).LocalDateTime;
                        string formattedDate = date.ToString("yyyy-MM-dd-HH-mm-ss");

                        // CustomMatch の初期化
                        _currentMatch = new CustomMatch(formattedDate);
                        _currentMatch.SetGameVersion(initMsg.GameVersion);
                        Console.WriteLine($"CustomMatch 初期化完了：{formattedDate}");
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
                case CustomMatch_LobbyPlayers Msg:
                    {
                        break;
                    }
                case RequestStatus Msg:
                    {
                        break;
                    }
                case Response Msg:
                    {
                        break;
                    }
                case MatchSetup Msg:
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
