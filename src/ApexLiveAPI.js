const WebSocket = require('ws');
const path = require('path');
const protobuf = require('google-protobuf');
const {
  LiveAPIEvent, Init, Vector3, Player, CustomMatch_LobbyPlayer, Datacenter, Version, InventoryItem, LoadoutConfiguration,
  CustomMatch_LobbyPlayers, RequestStatus, MatchSetup, GameStateChanged, CharacterSelected, MatchStateEnd, RingStartClosing,
  RingFinishedClosing, PlayerConnected, PlayerDisconnected, PlayerStatChanged, PlayerUpgradeTierChanged, PlayerDamaged,
  PlayerKilled, PlayerDowned, PlayerAssist, SquadEliminated, GibraltarShieldAbsorbed, RevenantForgedShadowDamaged,
  PlayerRespawnTeam, PlayerRevive, ArenasItemSelected, ArenasItemDeselected, InventoryPickUp, InventoryDrop, InventoryUse,
  BannerCollected, PlayerAbilityUsed, LegendUpgradeSelected, ZiplineUsed, GrenadeThrown, BlackMarketAction, WraithPortal,
  WarpGateUsed, AmmoUsed, WeaponSwitched, ObserverSwitched, ObserverAnnotation
} = require('../bin/events_pb'); // 必要なメッセージ型をインポート

// WebSocketサーバーの作成
const wss = new WebSocket.Server({ port: 7777 }, () => {
  console.log('WebSocket server is running on port 7777...');
});

// WebSocketの接続イベント
wss.on('connection', (ws) => {
  console.log('Connected!');

  ws.on('message', (message) => {
    try {
      // 受信メッセージを LiveAPIEvent としてデコード
      const liveAPIEvent = LiveAPIEvent.deserializeBinary(message);
      console.log('LiveAPIEvent:', liveAPIEvent.toObject());

      // `gamemessage` の value (google.protobuf.Any) を取得
      const gamemessage = liveAPIEvent.getGamemessage();
      const typeUrl = gamemessage.getTypeUrl(); // メッセージタイプを取得
      const valueBinary = gamemessage.getValue_asU8(); // バイナリ値を取得

      switch (typeUrl) {
        // IntermediaryMessages
        case 'type.googleapis.com/rtech.liveapi.Init':
          const initMessage = Init.deserializeBinary(valueBinary);
          handleMessage(initMessage, "Init");
          break;

        case 'type.googleapis.com/rtech.liveapi.Vector3':
          const vector3Message = Vector3.deserializeBinary(valueBinary);
          handleMessage(vector3Message, "Vector3");
          break;

        case 'type.googleapis.com/rtech.liveapi.Player':
          const playerMessage = Player.deserializeBinary(valueBinary);
          handleMessage(playerMessage, "Player");
          break;

        case 'type.googleapis.com/rtech.liveapi.CustomMatch_LobbyPlayer':
          const customMatchLobbyPlayerMessage = CustomMatch_LobbyPlayer.deserializeBinary(valueBinary);
          handleMessage(customMatchLobbyPlayerMessage, "CustomMatch_LobbyPlayer");
          break;

        case 'type.googleapis.com/rtech.liveapi.Datacenter':
          const datacenterMessage = Datacenter.deserializeBinary(valueBinary);
          handleMessage(datacenterMessage, "Datacenter");
          break;

        case 'type.googleapis.com/rtech.liveapi.Version':
          const versionMessage = Version.deserializeBinary(valueBinary);
          handleMessage(versionMessage, "Version");
          break;

        case 'type.googleapis.com/rtech.liveapi.InventoryItem':
          const inventoryItemMessage = InventoryItem.deserializeBinary(valueBinary);
          handleMessage(inventoryItemMessage, "InventoryItem");
          break;

        case 'type.googleapis.com/rtech.liveapi.LoadoutConfiguration':
          const loadoutConfigMessage = LoadoutConfiguration.deserializeBinary(valueBinary);
          handleMessage(loadoutConfigMessage, "LoadoutConfiguration");
          break;

        case 'type.googleapis.com/rtech.liveapi.CustomMatch_LobbyPlayers':
          const customMatchLobbyPlayersMessage = CustomMatch_LobbyPlayers.deserializeBinary(valueBinary);
          handleMessage(customMatchLobbyPlayersMessage, "CustomMatch_LobbyPlayers");
          break;

        case 'type.googleapis.com/rtech.liveapi.RequestStatus':
          const requestStatusMessage = RequestStatus.deserializeBinary(valueBinary);
          handleMessage(requestStatusMessage, "RequestStatus");
          break;

        // MatchInformation

        case 'type.googleapis.com/rtech.liveapi.MatchSetup':
          const matchSetupMessage = MatchSetup.deserializeBinary(valueBinary);
          handleMessage(matchSetupMessage, "MatchSetup");
          break;

        case 'type.googleapis.com/rtech.liveapi.GameStateChanged':
          const gameStateChangedMessage = GameStateChanged.deserializeBinary(valueBinary);
          handleMessage(gameStateChangedMessage, "GameStateChanged");
          break;

        case 'type.googleapis.com/rtech.liveapi.CharacterSelected':
          const characterSelectedMessage = CharacterSelected.deserializeBinary(valueBinary);
          handleMessage(characterSelectedMessage, "CharacterSelected");
          break;

        case 'type.googleapis.com/rtech.liveapi.MatchStateEnd':
          const matchStateEndMessage = MatchStateEnd.deserializeBinary(valueBinary);
          handleMessage(matchStateEndMessage, "MatchStateEnd");
          break;

        case 'type.googleapis.com/rtech.liveapi.RingStartClosing':
          const ringStartClosingMessage = RingStartClosing.deserializeBinary(valueBinary);
          handleMessage(ringStartClosingMessage, "RingStartClosing");
          break;

        case 'type.googleapis.com/rtech.liveapi.RingFinishedClosing':
          const ringFinishedClosingMessage = RingFinishedClosing.deserializeBinary(valueBinary);
          handleMessage(ringFinishedClosingMessage, "RingFinishedClosing");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerConnected':
          const PlayerConnectedMessage = PlayerConnected.deserializeBinary(valueBinary);
          handleMessage(PlayerConnectedMessage, "PlayerConnected");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerDisconnected':
          const PlayerDisconnectedMessage = PlayerDisconnected.deserializeBinary(valueBinary);
          handleMessage(PlayerDisconnectedMessage, "PlayerDisconnected");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerStatChanged':
          const PlayerStatChangedMessage = PlayerStatChanged.deserializeBinary(valueBinary);
          handleMessage(PlayerStatChangedMessage, "PlayerStatChanged");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerUpgradeTierChanged':
          const PlayerUpgradeTierChangedMessage = PlayerUpgradeTierChanged.deserializeBinary(valueBinary);
          handleMessage(PlayerUpgradeTierChangedMessage, "PlayerUpgradeTierChanged");
          break;

        //CombatEvents

        case 'type.googleapis.com/rtech.liveapi.PlayerDamaged':
          const playerDamagedMessage = PlayerDamaged.deserializeBinary(valueBinary);
          handleMessage(playerDamagedMessage, "PlayerDamaged");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerKilled':
          const playerKilledMessage = PlayerKilled.deserializeBinary(valueBinary);
          handleMessage(playerKilledMessage, "PlayerKilled");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerDowned':
          const playerDownedMessage = PlayerDowned.deserializeBinary(valueBinary);
          handleMessage(playerDownedMessage, "PlayerDowned");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerAssist':
          const playerAssistMessage = PlayerAssist.deserializeBinary(valueBinary);
          handleMessage(playerAssistMessage, "PlayerAssist");
          break;

        case 'type.googleapis.com/rtech.liveapi.SquadEliminated':
          const squadEliminatedMessage = SquadEliminated.deserializeBinary(valueBinary);
          handleMessage(squadEliminatedMessage, "SquadEliminated");
          break;

        case 'type.googleapis.com/rtech.liveapi.GibraltarShieldAbsorbed':
          const GibraltarShieldAbsorbedMessage = GibraltarShieldAbsorbed.deserializeBinary(valueBinary);
          handleMessage(GibraltarShieldAbsorbedMessage, "GibraltarShieldAbsorbed");
          break;

        case 'type.googleapis.com/rtech.liveapi.RevenantForgedShadowDamaged':
          const RevenantForgedShadowDamagedMessage = RevenantForgedShadowDamaged.deserializeBinary(valueBinary);
          handleMessage(RevenantForgedShadowDamagedMessage, "RevenantForgedShadowDamaged");
          break;

        // InteractionEvents
        case 'type.googleapis.com/rtech.liveapi.PlayerRespawnTeam':
          const playerRespawnTeamMessage = PlayerRespawnTeam.deserializeBinary(valueBinary);
          handleMessage(playerRespawnTeamMessage, "PlayerRespawnTeam");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerRevive':
          const playerReviveMessage = PlayerRevive.deserializeBinary(valueBinary);
          handleMessage(playerReviveMessage, "PlayerRevive");
          break;

        case 'type.googleapis.com/rtech.liveapi.ArenasItemSelected':
          const arenasItemSelectedMessage = ArenasItemSelected.deserializeBinary(valueBinary);
          handleMessage(arenasItemSelectedMessage, "ArenasItemSelected");
          break;

        case 'type.googleapis.com/rtech.liveapi.ArenasItemDeselected':
          const ArenasItemDeselectedMessage = ArenasItemDeselected.deserializeBinary(valueBinary);
          handleMessage(ArenasItemDeselectedMessage, "ArenasItemDeselected");
          break;

        case 'type.googleapis.com/rtech.liveapi.InventoryPickUp':
          const InventoryPickUpMessage = InventoryPickUp.deserializeBinary(valueBinary);
          handleMessage(InventoryPickUpMessage, "InventoryPickUp");
          break;

        case 'type.googleapis.com/rtech.liveapi.InventoryDrop':
          const InventoryDropMessage = InventoryDrop.deserializeBinary(valueBinary);
          handleMessage(InventoryDropMessage, "InventoryDrop");
          break;

        case 'type.googleapis.com/rtech.liveapi.InventoryUse':
          const InventoryUseMessage = InventoryUse.deserializeBinary(valueBinary);
          handleMessage(InventoryUseMessage, "InventoryUse");
          break;

        case 'type.googleapis.com/rtech.liveapi.BannerCollected':
          const BannerCollectedMessage = BannerCollected.deserializeBinary(valueBinary);
          handleMessage(BannerCollectedMessage, "BannerCollected");
          break;

        case 'type.googleapis.com/rtech.liveapi.PlayerAbilityUsed':
          const PlayerAbilityUsedMessage = PlayerAbilityUsed.deserializeBinary(valueBinary);
          handleMessage(PlayerAbilityUsedMessage, "PlayerAbilityUsed");
          break;

        case 'type.googleapis.com/rtech.liveapi.LegendUpgradeSelected':
          const LegendUpgradeSelectedMessage = LegendUpgradeSelected.deserializeBinary(valueBinary);
          handleMessage(LegendUpgradeSelectedMessage, "LegendUpgradeSelected");
          break;

        case 'type.googleapis.com/rtech.liveapi.ZiplineUsed':
          const ZiplineUsedMessage = ZiplineUsed.deserializeBinary(valueBinary);
          handleMessage(ZiplineUsedMessage, "ZiplineUsed");
          break;

        case 'type.googleapis.com/rtech.liveapi.GrenadeThrown':
          const grenadeThrownMessage = GrenadeThrown.deserializeBinary(valueBinary);
          handleMessage(grenadeThrownMessage, "GrenadeThrown");
          break;

        case 'type.googleapis.com/rtech.liveapi.BlackMarketAction':
          const BlackMarketActionMessage = BlackMarketAction.deserializeBinary(valueBinary);
          handleMessage(BlackMarketActionMessage, "BlackMarketAction");
          break;

        case 'type.googleapis.com/rtech.liveapi.WraithPortal':
          const WraithPortalMessage = WraithPortal.deserializeBinary(valueBinary);
          handleMessage(WraithPortalMessage, "WraithPortal");
          break;

        case 'type.googleapis.com/rtech.liveapi.WarpGateUsed':
          const WarpGateUsedMessage = WarpGateUsed.deserializeBinary(valueBinary);
          handleMessage(WarpGateUsedMessage, "WarpGateUsed");
          break;

        case 'type.googleapis.com/rtech.liveapi.AmmoUsed':
          const AmmoUsedMessage = AmmoUsed.deserializeBinary(valueBinary);
          handleMessage(AmmoUsedMessage, "AmmoUsed");
          break;

        case 'type.googleapis.com/rtech.liveapi.WeaponSwitched':
          const WeaponSwitchedMessage = WeaponSwitched.deserializeBinary(valueBinary);
          handleMessage(WeaponSwitchedMessage, "WeaponSwitched");
          break;

        // ObserverEvents
        case 'type.googleapis.com/rtech.liveapi.ObserverSwitched':
          const observerSwitchedMessage = ObserverSwitched.deserializeBinary(valueBinary);
          handleMessage(observerSwitchedMessage, "ObserverSwitched");
          break;

        case 'type.googleapis.com/rtech.liveapi.ObserverAnnotation':
          const ObserverAnnotationMessage = ObserverAnnotation.deserializeBinary(valueBinary);
          handleMessage(ObserverAnnotationMessage, "ObserverAnnotation");
          break;

        default:
          console.log(`Unknown message type received: ${typeUrl}`);
          break;
      }
    } catch (error) {
      console.error('Error decoding message:', error);
      console.log('Raw message:', message.toString('base64'));
    }
  });
});

function handleMessage(message, messageType) {
  console.log(`Received ${messageType} message:`, message.toObject());
}