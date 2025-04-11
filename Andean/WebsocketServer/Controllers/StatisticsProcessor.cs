using System.Collections.Concurrent;
using Google.Protobuf;
using Rtech.Liveapi;
using Andean.WebsocketServer.Services;
using AndeanSystems;
using AndeanClass.Controllers;
using AndeanWebUI.Services;
using static AndeanClass.Controllers.AndeanClassController;
using Newtonsoft.Json;
using ApexLiveAPI.Message;
using System.Text.Json;

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

    public static class StatisticsProcessor
    {
        // クライアントIDと IMessage の組み合わせを保持するスレッドセーフなキュー
        private static readonly BlockingCollection<MessageWrapper> _queue = new BlockingCollection<MessageWrapper>();

        private static readonly AppConfig _config = ConfigService.Config;

        // ログ出力用ファイル名（サーバー起動時のタイムスタンプで固定）
        private static readonly string _logFileName;

        private static readonly string CustomMatchSetSettingsType = StringPool.Get("type.googleapis.com/rtech.liveapi.CustomMatch_SetSettings");

        private static readonly string RequestStatusType = StringPool.Get("type.googleapis.com/rtech.liveapi.RequestStatus");

        private static readonly string RequestStatusConnectedMessage = StringPool.Get("Not connected to a custom match and this request requires you to have created/joined a lobby. Send CustomMatch_CreateLobby or CustomMatch_JoinLobby first");

        private static readonly string RequestStatusDisconnectedMessage = StringPool.Get("Client is not connected to a server. Ensure you are connected before proceeding.");

        static StatisticsProcessor()
        {
            // サーバー起動時のタイムスタンプでログファイル名を決定（例: 20250222_132800_log.txt）
            _logFileName = DateTime.Now.ToString("yyyyMMdd_HHmmss") + "_log.json";

            // 別スレッドでキュー処理を開始
            Task.Factory.StartNew(ProcessQueue, TaskCreationOptions.LongRunning);
        }

        /// <summary>
        /// 受信した IMessage とその送信元クライアント ID をキューに追加します。
        /// </summary>
        public static void EnqueueMessage(string clientId, IMessage message)
        {
            _queue.Add(new MessageWrapper(clientId, message));

            if (message is
                ObserverSwitched or
                Response or
                CustomMatch_SetSettings or
                CustomMatch_LobbyPlayers or
                CustomMatch_LegendBanStatus) return;

            var data = new
            {
                Time = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff"),
                Client = StringPool.Get(clientId),
                MessageType = StringPool.Get(message.GetType().Name),
                Content = message
            };

            string logContent = JsonConvert.SerializeObject(data);

            // 非同期にファイルへ追記（ファイルは log フォルダ配下に作成）
            Task.Run(() => FileOutputService.WriteToFileAsync(_config.Log_Dir, _logFileName, logContent, FileWriteMode.JsonAppend));
        }

        /// <summary>
        /// キュー内の IMessage を処理します（別スレッドで実行）。
        /// </summary>
        private static async void ProcessQueue()
        {
            foreach (var wrapper in _queue.GetConsumingEnumerable())
            {
                await ProcessMessage(wrapper.ClientId, wrapper.Message);
            }
        }

        /// <summary>
        /// 受信メッセージの型に応じた処理を行います。
        /// </summary>
        private static async Task ProcessMessage(string clientId, IMessage message)
        {

            switch (message)
            {
                case Init initMsg:
                    {
                        if (string.IsNullOrEmpty(initMsg.Platform))
                        {
                            // マッチ初期化の処理はマッチサービスへ委譲
                            AndeanClassController.InitializeMatch(initMsg);
                        }
                        else
                        {
                            // Init メッセージの場合、クライアントを認定済みに設定
                            ClientManagementService.SetAuthorizedClient(clientId);
                            await ControlPanelHubService.SetLiveAPIStatus("Disconnected", "Waiting for Connecting");
                            Console.WriteLine("[MatchService] Platform 指定あり: readPlaylists_r5() を実行します。");
                        }
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
                        ProcessCustomMatch_LobbyPlayers(customMatch_LobbyPlayersMsg);
                        break;
                    }
                case CustomMatch_LegendBanStatus customMatch_LegendBanStatusMsg:
                    {
                        ProcessCustomMatch_LegenddBanStatus(customMatch_LegendBanStatusMsg);
                        break;
                    }
                case RequestStatus requestStatusMsg:
                    {
                        // 今のところ何も処理しない
                        break;
                    }
                case Response responseMsg:
                    {
                        if (responseMsg.Result != null)
                        {
                            if (responseMsg.Result.TypeUrl == CustomMatchSetSettingsType)
                            {
                                CustomMatch_SetSettings customMatch_SetSettingsMsg = responseMsg.Result.Unpack<CustomMatch_SetSettings>();
                                ProcessCustomMatch_SetSettings(customMatch_SetSettingsMsg);
                            }
                            else if (responseMsg.Result.TypeUrl == RequestStatusType)
                            {
                                RequestStatus requestStatusMsg = responseMsg.Result.Unpack<RequestStatus>();
                                if (requestStatusMsg.Status == RequestStatusConnectedMessage)
                                {
                                    await ControlPanelHubService.SetLiveAPIStatus("Connected", "Waiting for JoinLobby");
                                    break;
                                }

                                if (requestStatusMsg.Status == RequestStatusDisconnectedMessage)
                                {
                                    await ControlPanelHubService.SetLiveAPIStatus("Disconnected", "Waiting for Connecting");
                                    break;
                                }
                                
                                string requestStatusMsgStr = System.Text.Json.JsonSerializer.Serialize(requestStatusMsg, new JsonSerializerOptions { WriteIndented = true });
                                Console.WriteLine($"[RequestStatus] {requestStatusMsgStr}");
                                await FileOutputService.WriteToFileAsync(_config.Log_Dir, "UnknownResponse.json", requestStatusMsgStr, FileWriteMode.JsonAppend);
                            }
                        }

                        break;
                    }
                case MatchSetup matchSetupMsg:
                    {
                        ProcessMatchSetup(matchSetupMsg);
                        break;
                    }
                case GameStateChanged gameStateChangedMsg:
                    {
                        ProcessGameStatus(gameStateChangedMsg);
                        break;
                    }
                case CharacterSelected characterSelectedMsg:
                    {
                        ProcessCharacterSelected(characterSelectedMsg);
                        break;
                    }
                case MatchStateEnd matchStateEndMsg:
                    {
                        ProcessMatchEnd(matchStateEndMsg);
                        break;
                    }
                case RingStartClosing ringStartClosingMsg:
                    {
                        ProcessRingStart(ringStartClosingMsg);
                        break;
                    }
                case RingFinishedClosing ringFinishedClosingMsg:
                    {
                        ProcessRingFinished(ringFinishedClosingMsg);
                        break;
                    }
                case PlayerConnected playerConnectedMsg:
                    {
                        ProcessPlayerConnected(playerConnectedMsg);
                        break;
                    }
                case PlayerDisconnected playerDisconnectedMsg:
                    {
                        ProcessPlayerDisconnected(playerDisconnectedMsg);
                        break;
                    }
                case PlayerStatChanged playerStatChangedMsg:
                    {
                        ProcessPlayerStatChanged(playerStatChangedMsg);
                        break;
                    }
                case PlayerUltimateCharged playerUltimateChargedMsg:
                    {
                        ProcessPlayerUltimateCharged(playerUltimateChargedMsg);
                        break;
                    }
                case PlayerUpgradeTierChanged playerUpgradeTierChangedMsg:
                    {
                        ProcessPlayerUpgradeTierChanged(playerUpgradeTierChangedMsg);
                        break;
                    }
                case PlayerDamaged playerDamagedMsg:
                    {
                        ProcessPlayerDamaged(playerDamagedMsg);
                        break;
                    }
                case PlayerKilled playerKilledMsg:
                    {
                        ProcessPlayerKilled(playerKilledMsg);
                        break;
                    }
                case PlayerDowned playerDownedMsg:
                    {
                        ProcessPlayerDowned(playerDownedMsg);
                        break;
                    }
                case PlayerAssist playerAssistMsg:
                    {
                        ProcessPlayerAssist(playerAssistMsg);
                        break;
                    }
                case SquadEliminated squadEliminatedMsg:
                    {
                        ProcessSquadEliminated(squadEliminatedMsg);
                        break;
                    }
                case GibraltarShieldAbsorbed gibraltarShieldAbsorbedMsg:
                    {
                        ProcessGibraltarShieldAbsorbed(gibraltarShieldAbsorbedMsg);
                        break;
                    }
                case RevenantForgedShadowDamaged revenantForgedShadowDamagedMsg:
                    {
                        ProcessRevenantForgedShadowDamaged(revenantForgedShadowDamagedMsg);
                        break;
                    }
                case ChangeCamera changeCameraMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case PauseToggle pauseToggleMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case CustomMatch_SetSettings customMatch_SetSettingsMsg:
                    {
                        // 現状何も処理しない
                        break;
                    }
                case PlayerRespawnTeam playerRespawnTeamMsg:
                    {
                        ProcessPlayerRespawnTeam(playerRespawnTeamMsg);
                        break;
                    }
                case PlayerRevive playerReviveMsg:
                    {
                        ProcessPlayerRevive(playerReviveMsg);
                        break;
                    }
                case ArenasItemSelected arenasItemSelectedMsg:
                    {
                        ProcessArenasItemSelected(arenasItemSelectedMsg);
                        break;
                    }
                case ArenasItemDeselected arenasItemDeselectedMsg:
                    {
                        ProcessArenasItemDeselected(arenasItemDeselectedMsg);
                        break;
                    }
                case InventoryPickUp inventoryPickUpMsg:
                    {
                        ProcessInventoryPickUp(inventoryPickUpMsg);
                        break;
                    }
                case InventoryDrop inventoryDropMsg:
                    {
                        ProcessInventoryDrop(inventoryDropMsg);
                        break;
                    }
                case InventoryUse inventoryUseMsg:
                    {
                        ProcessInventoryUse(inventoryUseMsg);
                        break;
                    }
                case BannerCollected bannerCollectedMsg:
                    {
                        ProcessBannerCollected(bannerCollectedMsg);
                        break;
                    }
                case PlayerAbilityUsed playerAbilityUsedMsg:
                    {
                        ProcessPlayerAbilityUsed(playerAbilityUsedMsg);
                        break;
                    }
                case LegendUpgradeSelected legendUpgradeSelectedMsg:
                    {
                        ProcessLegendUpgradeSelected(legendUpgradeSelectedMsg);
                        break;
                    }
                case ZiplineUsed ziplineUsedMsg:
                    {
                        ProcessZiplineUsed(ziplineUsedMsg);
                        break;
                    }
                case GrenadeThrown grenadeThrownMsg:
                    {
                        ProcessGrenadeThrown(grenadeThrownMsg);
                        break;
                    }
                case BlackMarketAction blackMarketActionMsg:
                    {
                        ProcessBlackMarketAction(blackMarketActionMsg);
                        break;
                    }
                case WraithPortal wraithPortalMsg:
                    {
                        ProcessWraithPortal(wraithPortalMsg);
                        break;
                    }
                case WarpGateUsed warpGateUsedMsg:
                    {
                        ProcessWarpGateUsed(warpGateUsedMsg);
                        break;
                    }
                case AmmoUsed ammoUsedMsg:
                    {
                        ProcessAmmoUsed(ammoUsedMsg);
                        break;
                    }
                case WeaponSwitched weaponSwitchedMsg:
                    {
                        ProcessWeaponSwitched(weaponSwitchedMsg);
                        break;
                    }
                case ObserverSwitched observerSwitchedMsg:
                    {
                        ProcessObserverSwitched(observerSwitchedMsg);
                        break;
                    }
                case ObserverAnnotation observerAnnotationMsg:
                    {
                        string observerAnnotationMsgStr = System.Text.Json.JsonSerializer.Serialize(observerAnnotationMsg, new JsonSerializerOptions { WriteIndented = true });
                        Console.WriteLine($"⚠️ Unknown message type received: {observerAnnotationMsgStr}");
                        // 非同期にファイルへ追記（ファイルは log フォルダ配下に作成）
                        await FileOutputService.WriteToFileAsync(_config.Log_Dir, "ObserverAnnotation.json", observerAnnotationMsgStr, FileWriteMode.Overwrite);
                        break;
                    }
                default:
                    {
                        // 未定義のイベントは、必要に応じて統計情報に更新
                        // _currentMatch?.UpdateStatistics(message);

                        string messageStr = System.Text.Json.JsonSerializer.Serialize(message, new JsonSerializerOptions { WriteIndented = true });
                        Console.WriteLine($"⚠️ Unknown message type received: {messageStr}");
                        // 非同期にファイルへ追記（ファイルは log フォルダ配下に作成）
                        await FileOutputService.WriteToFileAsync(_config.Log_Dir, "UnknownMessages.json", messageStr, FileWriteMode.JsonAppend);
                        break;
                    }
            }
        }
    }
}
