using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Google.Protobuf;
using Rtech.Liveapi;
using Andean.AndeanClass.Services;
using Andean.WebsocketServer.Services;
using Andean.Utilities;
using AndeanClass.Controllers;
using Andean.AndeanWebUI.Hubs;
using Microsoft.AspNetCore.SignalR;
using Andean.AndeanWebUI.Services;

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

        private readonly ClientManagementService _clientManagement;

        // ログ出力用ファイル名（サーバー起動時のタイムスタンプで固定）
        private readonly string _logFileName;

        public StatisticsProcessor(
            ClientManagementService clientManagement
            )
        {
           
            _clientManagement = clientManagement;

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
            Task.Run(() => FileOutputService.WriteToFileAsync("./output", _logFileName, logContent, FileWriteMode.Append));
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
        private async Task ProcessMessage(string clientId, IMessage message)
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
                            _clientManagement.SetAuthorizedClient(clientId);
                            ControlPanelHubService.SetLiveAPIStatus("Connect","isLobby");
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
                        _andeanClassController.ProcessCustomMatch_LobbyPlayers(customMatch_LobbyPlayersMsg);
                        break;
                    }
                case RequestStatus requestStatusMsg:
                    {
                        // 今のところ何もイベント発生しない
                        break;
                    }
                case Response responseMsg:
                    {
                        // 今のところ何もイベント発生しない
                        break;
                    }
                case MatchSetup matchSetupMsg:
                    {
                        AndeanClassController.ProcessMatchSetup(matchSetupMsg);
                        break;
                    }
                case GameStateChanged gameStateChangedMsg:
                    {
                        _andeanClassController.ProcessGameStatus(gameStateChangedMsg);
                        break;
                    }
                case CharacterSelected characterSelectedMsg:
                    {
                        AndeanClassController.ProcessCharacterSelected(characterSelectedMsg);
                        break;
                    }
                case MatchStateEnd matchStateEndMsg:
                    {
                        _andeanClassController.ProcessMatchEnd(matchStateEndMsg);
                        break;
                    }
                case RingStartClosing ringStartClosingMsg:
                    {
                        _andeanClassController.ProcessRingStart(ringStartClosingMsg);
                        break;
                    }
                case RingFinishedClosing ringFinishedClosingMsg:
                    {
                        _andeanClassController.ProcessRingFinished(ringFinishedClosingMsg);
                        break;
                    }
                case PlayerConnected playerConnectedMsg:
                    {
                        AndeanClassController.ProcessPlayerConnected(playerConnectedMsg);
                        break;
                    }
                case PlayerDisconnected playerDisconnectedMsg:
                    {
                        AndeanClassController.ProcessPlayerDisconnected(playerDisconnectedMsg);
                        break;
                    }
                case PlayerStatChanged playerStatChangedMsg:
                    {
                        AndeanClassController.ProcessPlayerStatChanged(playerStatChangedMsg);
                        break;
                    }
                case PlayerUltimateCharged playerUltimateChargedMsg:
                    {
                        AndeanClassController.ProcessPlayerUltimateCharged(playerUltimateChargedMsg);
                        break;
                    }
                case PlayerUpgradeTierChanged playerUpgradeTierChangedMsg:
                    {
                        AndeanClassController.ProcessPlayerUpgradeTierChanged(playerUpgradeTierChangedMsg);
                        break;
                    }
                case PlayerDamaged playerDamagedMsg:
                    {
                        AndeanClassController.ProcessPlayerDamaged(playerDamagedMsg);
                        break;
                    }
                case PlayerKilled playerKilledMsg:
                    {
                        AndeanClassController.ProcessPlayerKilled(playerKilledMsg);
                        break;
                    }
                case PlayerDowned playerDownedMsg:
                    {
                        AndeanClassController.ProcessPlayerDowned(playerDownedMsg);
                        break;
                    }
                case PlayerAssist playerAssistMsg:
                    {
                        AndeanClassController.ProcessPlayerAssist(playerAssistMsg);
                        break;
                    }
                case SquadEliminated squadEliminatedMsg:
                    {
                        _andeanClassController.ProcessSquadEliminated(squadEliminatedMsg);
                        break;
                    }
                case GibraltarShieldAbsorbed gibraltarShieldAbsorbedMsg:
                    {
                        AndeanClassController.ProcessGibraltarShieldAbsorbed(gibraltarShieldAbsorbedMsg);
                        break;
                    }
                case RevenantForgedShadowDamaged revenantForgedShadowDamagedMsg:
                    {
                        AndeanClassController.ProcessRevenantForgedShadowDamaged(revenantForgedShadowDamagedMsg);
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
                        break;
                    }
                case PlayerRespawnTeam playerRespawnTeamMsg:
                    {
                        AndeanClassController.ProcessPlayerRespawnTeam(playerRespawnTeamMsg);
                        break;
                    }
                case PlayerRevive playerReviveMsg:
                    {
                        AndeanClassController.ProcessPlayerRevive(playerReviveMsg);
                        break;
                    }
                case ArenasItemSelected arenasItemSelectedMsg:
                    {
                        AndeanClassController.ProcessArenasItemSelected(arenasItemSelectedMsg);
                        break;
                    }
                case ArenasItemDeselected arenasItemDeselectedMsg:
                    {
                        AndeanClassController.ProcessArenasItemDeselected(arenasItemDeselectedMsg);
                        _andeanClassController.ProcessArenasItemDeselected(arenasItemDeselectedMsg);
                        break;
                    }
                case InventoryPickUp inventoryPickUpMsg:
                    {
                        AndeanClassController.ProcessInventoryPickUp(inventoryPickUpMsg);
                        break;
                    }
                case InventoryDrop inventoryDropMsg:
                    {
                        AndeanClassController.ProcessInventoryDrop(inventoryDropMsg);
                        break;
                    }
                case InventoryUse inventoryUseMsg:
                    {
                        AndeanClassController.ProcessInventoryUse(inventoryUseMsg);
                        break;
                    }
                case BannerCollected bannerCollectedMsg:
                    {
                        _andeanClassController.ProcessBannerCollected(bannerCollectedMsg);
                        break;
                    }
                case PlayerAbilityUsed playerAbilityUsedMsg:
                    {
                        AndeanClassController.ProcessPlayerAbilityUsed(playerAbilityUsedMsg);
                        break;
                    }
                case LegendUpgradeSelected legendUpgradeSelectedMsg:
                    {
                        AndeanClassController.ProcessLegendUpgradeSelected(legendUpgradeSelectedMsg);
                        break;
                    }
                case ZiplineUsed ziplineUsedMsg:
                    {
                        AndeanClassController.ProcessZiplineUsed(ziplineUsedMsg);
                        break;
                    }
                case GrenadeThrown grenadeThrownMsg:
                    {
                        AndeanClassController.ProcessGrenadeThrown(grenadeThrownMsg);
                        break;
                    }
                case BlackMarketAction blackMarketActionMsg:
                    {
                        AndeanClassController.ProcessBlackMarketAction(blackMarketActionMsg);
                        break;
                    }
                case WraithPortal wraithPortalMsg:
                    {
                        AndeanClassController.ProcessWraithPortal(wraithPortalMsg);
                        break;
                    }
                case WarpGateUsed warpGateUsedMsg:
                    {
                        AndeanClassController.ProcessWarpGateUsed(warpGateUsedMsg);
                        break;
                    }
                case AmmoUsed ammoUsedMsg:
                    {
                        AndeanClassController.ProcessAmmoUsed(ammoUsedMsg);
                        break;
                    }
                case WeaponSwitched weaponSwitchedMsg:
                    {
                        AndeanClassController.ProcessWeaponSwitched(weaponSwitchedMsg);
                        break;
                    }
                case ObserverSwitched observerSwitchedMsg:
                    {
                        _andeanClassController.ProcessObserverSwitched(observerSwitchedMsg);
                        break;
                    }
                case ObserverAnnotation observerAnnotationMsg:
                    {
                        // 現状何も処理しない
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
