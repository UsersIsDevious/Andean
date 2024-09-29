// source: events.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.rtech.liveapi.AmmoUsed', null, global);
goog.exportSymbol('proto.rtech.liveapi.ArenasItemDeselected', null, global);
goog.exportSymbol('proto.rtech.liveapi.ArenasItemSelected', null, global);
goog.exportSymbol('proto.rtech.liveapi.BannerCollected', null, global);
goog.exportSymbol('proto.rtech.liveapi.BlackMarketAction', null, global);
goog.exportSymbol('proto.rtech.liveapi.ChangeCamera', null, global);
goog.exportSymbol('proto.rtech.liveapi.ChangeCamera.TargetCase', null, global);
goog.exportSymbol('proto.rtech.liveapi.CharacterSelected', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_CreateLobby', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_GetLobbyPlayers', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_GetSettings', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_JoinLobby', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_KickPlayer', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_LeaveLobby', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_LobbyPlayer', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_LobbyPlayers', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_SendChat', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_SetMatchmaking', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_SetReady', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_SetSettings', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_SetSpawnPoint', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_SetTeam', null, global);
goog.exportSymbol('proto.rtech.liveapi.CustomMatch_SetTeamName', null, global);
goog.exportSymbol('proto.rtech.liveapi.Datacenter', null, global);
goog.exportSymbol('proto.rtech.liveapi.GameStateChanged', null, global);
goog.exportSymbol('proto.rtech.liveapi.GibraltarShieldAbsorbed', null, global);
goog.exportSymbol('proto.rtech.liveapi.GrenadeThrown', null, global);
goog.exportSymbol('proto.rtech.liveapi.Init', null, global);
goog.exportSymbol('proto.rtech.liveapi.InventoryDrop', null, global);
goog.exportSymbol('proto.rtech.liveapi.InventoryItem', null, global);
goog.exportSymbol('proto.rtech.liveapi.InventoryPickUp', null, global);
goog.exportSymbol('proto.rtech.liveapi.InventoryUse', null, global);
goog.exportSymbol('proto.rtech.liveapi.LegendUpgradeSelected', null, global);
goog.exportSymbol('proto.rtech.liveapi.LiveAPIEvent', null, global);
goog.exportSymbol('proto.rtech.liveapi.LoadoutConfiguration', null, global);
goog.exportSymbol('proto.rtech.liveapi.MatchSetup', null, global);
goog.exportSymbol('proto.rtech.liveapi.MatchStateEnd', null, global);
goog.exportSymbol('proto.rtech.liveapi.ObserverAnnotation', null, global);
goog.exportSymbol('proto.rtech.liveapi.ObserverSwitched', null, global);
goog.exportSymbol('proto.rtech.liveapi.PauseToggle', null, global);
goog.exportSymbol('proto.rtech.liveapi.Player', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerAbilityUsed', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerAssist', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerConnected', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerDamaged', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerDisconnected', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerDowned', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerKilled', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerOfInterest', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerRespawnTeam', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerRevive', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerStatChanged', null, global);
goog.exportSymbol('proto.rtech.liveapi.PlayerUpgradeTierChanged', null, global);
goog.exportSymbol('proto.rtech.liveapi.Request', null, global);
goog.exportSymbol('proto.rtech.liveapi.Request.ActionsCase', null, global);
goog.exportSymbol('proto.rtech.liveapi.RequestStatus', null, global);
goog.exportSymbol('proto.rtech.liveapi.Response', null, global);
goog.exportSymbol('proto.rtech.liveapi.RevenantForgedShadowDamaged', null, global);
goog.exportSymbol('proto.rtech.liveapi.RingFinishedClosing', null, global);
goog.exportSymbol('proto.rtech.liveapi.RingStartClosing', null, global);
goog.exportSymbol('proto.rtech.liveapi.SquadEliminated', null, global);
goog.exportSymbol('proto.rtech.liveapi.Vector3', null, global);
goog.exportSymbol('proto.rtech.liveapi.Version', null, global);
goog.exportSymbol('proto.rtech.liveapi.WarpGateUsed', null, global);
goog.exportSymbol('proto.rtech.liveapi.WeaponSwitched', null, global);
goog.exportSymbol('proto.rtech.liveapi.WraithPortal', null, global);
goog.exportSymbol('proto.rtech.liveapi.ZiplineUsed', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.Vector3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.Vector3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.Vector3.displayName = 'proto.rtech.liveapi.Vector3';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.Player = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.Player, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.Player.displayName = 'proto.rtech.liveapi.Player';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_LobbyPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_LobbyPlayer.displayName = 'proto.rtech.liveapi.CustomMatch_LobbyPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.Datacenter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.Datacenter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.Datacenter.displayName = 'proto.rtech.liveapi.Datacenter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.Version = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.Version, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.Version.displayName = 'proto.rtech.liveapi.Version';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.InventoryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.InventoryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.InventoryItem.displayName = 'proto.rtech.liveapi.InventoryItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.LoadoutConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rtech.liveapi.LoadoutConfiguration.repeatedFields_, null);
};
goog.inherits(proto.rtech.liveapi.LoadoutConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.LoadoutConfiguration.displayName = 'proto.rtech.liveapi.LoadoutConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.Init = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.Init, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.Init.displayName = 'proto.rtech.liveapi.Init';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rtech.liveapi.CustomMatch_LobbyPlayers.repeatedFields_, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_LobbyPlayers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_LobbyPlayers.displayName = 'proto.rtech.liveapi.CustomMatch_LobbyPlayers';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.ObserverSwitched = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rtech.liveapi.ObserverSwitched.repeatedFields_, null);
};
goog.inherits(proto.rtech.liveapi.ObserverSwitched, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.ObserverSwitched.displayName = 'proto.rtech.liveapi.ObserverSwitched';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.ObserverAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.ObserverAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.ObserverAnnotation.displayName = 'proto.rtech.liveapi.ObserverAnnotation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.MatchSetup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.MatchSetup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.MatchSetup.displayName = 'proto.rtech.liveapi.MatchSetup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.GameStateChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.GameStateChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.GameStateChanged.displayName = 'proto.rtech.liveapi.GameStateChanged';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CharacterSelected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CharacterSelected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CharacterSelected.displayName = 'proto.rtech.liveapi.CharacterSelected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.MatchStateEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rtech.liveapi.MatchStateEnd.repeatedFields_, null);
};
goog.inherits(proto.rtech.liveapi.MatchStateEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.MatchStateEnd.displayName = 'proto.rtech.liveapi.MatchStateEnd';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.RingStartClosing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.RingStartClosing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.RingStartClosing.displayName = 'proto.rtech.liveapi.RingStartClosing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.RingFinishedClosing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.RingFinishedClosing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.RingFinishedClosing.displayName = 'proto.rtech.liveapi.RingFinishedClosing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerConnected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerConnected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerConnected.displayName = 'proto.rtech.liveapi.PlayerConnected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerDisconnected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerDisconnected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerDisconnected.displayName = 'proto.rtech.liveapi.PlayerDisconnected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerStatChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerStatChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerStatChanged.displayName = 'proto.rtech.liveapi.PlayerStatChanged';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerUpgradeTierChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerUpgradeTierChanged.displayName = 'proto.rtech.liveapi.PlayerUpgradeTierChanged';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerDamaged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerDamaged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerDamaged.displayName = 'proto.rtech.liveapi.PlayerDamaged';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerKilled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerKilled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerKilled.displayName = 'proto.rtech.liveapi.PlayerKilled';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerDowned = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerDowned, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerDowned.displayName = 'proto.rtech.liveapi.PlayerDowned';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerAssist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerAssist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerAssist.displayName = 'proto.rtech.liveapi.PlayerAssist';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.SquadEliminated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rtech.liveapi.SquadEliminated.repeatedFields_, null);
};
goog.inherits(proto.rtech.liveapi.SquadEliminated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.SquadEliminated.displayName = 'proto.rtech.liveapi.SquadEliminated';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.GibraltarShieldAbsorbed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.GibraltarShieldAbsorbed.displayName = 'proto.rtech.liveapi.GibraltarShieldAbsorbed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.RevenantForgedShadowDamaged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.RevenantForgedShadowDamaged.displayName = 'proto.rtech.liveapi.RevenantForgedShadowDamaged';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerRespawnTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rtech.liveapi.PlayerRespawnTeam.repeatedFields_, null);
};
goog.inherits(proto.rtech.liveapi.PlayerRespawnTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerRespawnTeam.displayName = 'proto.rtech.liveapi.PlayerRespawnTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerRevive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerRevive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerRevive.displayName = 'proto.rtech.liveapi.PlayerRevive';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.ArenasItemSelected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.ArenasItemSelected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.ArenasItemSelected.displayName = 'proto.rtech.liveapi.ArenasItemSelected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.ArenasItemDeselected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.ArenasItemDeselected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.ArenasItemDeselected.displayName = 'proto.rtech.liveapi.ArenasItemDeselected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.InventoryPickUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.InventoryPickUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.InventoryPickUp.displayName = 'proto.rtech.liveapi.InventoryPickUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.InventoryDrop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rtech.liveapi.InventoryDrop.repeatedFields_, null);
};
goog.inherits(proto.rtech.liveapi.InventoryDrop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.InventoryDrop.displayName = 'proto.rtech.liveapi.InventoryDrop';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.InventoryUse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.InventoryUse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.InventoryUse.displayName = 'proto.rtech.liveapi.InventoryUse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.BannerCollected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.BannerCollected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.BannerCollected.displayName = 'proto.rtech.liveapi.BannerCollected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PlayerAbilityUsed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PlayerAbilityUsed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PlayerAbilityUsed.displayName = 'proto.rtech.liveapi.PlayerAbilityUsed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.LegendUpgradeSelected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.LegendUpgradeSelected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.LegendUpgradeSelected.displayName = 'proto.rtech.liveapi.LegendUpgradeSelected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.ZiplineUsed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.ZiplineUsed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.ZiplineUsed.displayName = 'proto.rtech.liveapi.ZiplineUsed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.GrenadeThrown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.GrenadeThrown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.GrenadeThrown.displayName = 'proto.rtech.liveapi.GrenadeThrown';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.BlackMarketAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.BlackMarketAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.BlackMarketAction.displayName = 'proto.rtech.liveapi.BlackMarketAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.WraithPortal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.WraithPortal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.WraithPortal.displayName = 'proto.rtech.liveapi.WraithPortal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.WarpGateUsed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.WarpGateUsed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.WarpGateUsed.displayName = 'proto.rtech.liveapi.WarpGateUsed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.AmmoUsed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.AmmoUsed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.AmmoUsed.displayName = 'proto.rtech.liveapi.AmmoUsed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.WeaponSwitched = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.WeaponSwitched, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.WeaponSwitched.displayName = 'proto.rtech.liveapi.WeaponSwitched';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.ChangeCamera = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rtech.liveapi.ChangeCamera.oneofGroups_);
};
goog.inherits(proto.rtech.liveapi.ChangeCamera, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.ChangeCamera.displayName = 'proto.rtech.liveapi.ChangeCamera';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.PauseToggle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.PauseToggle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.PauseToggle.displayName = 'proto.rtech.liveapi.PauseToggle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_CreateLobby = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_CreateLobby, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_CreateLobby.displayName = 'proto.rtech.liveapi.CustomMatch_CreateLobby';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_JoinLobby = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_JoinLobby, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_JoinLobby.displayName = 'proto.rtech.liveapi.CustomMatch_JoinLobby';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_LeaveLobby = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_LeaveLobby, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_LeaveLobby.displayName = 'proto.rtech.liveapi.CustomMatch_LeaveLobby';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_SetReady = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_SetReady, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_SetReady.displayName = 'proto.rtech.liveapi.CustomMatch_SetReady';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_GetLobbyPlayers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_GetLobbyPlayers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.displayName = 'proto.rtech.liveapi.CustomMatch_GetLobbyPlayers';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_SetMatchmaking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_SetMatchmaking.displayName = 'proto.rtech.liveapi.CustomMatch_SetMatchmaking';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_SetTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_SetTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_SetTeam.displayName = 'proto.rtech.liveapi.CustomMatch_SetTeam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_KickPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_KickPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_KickPlayer.displayName = 'proto.rtech.liveapi.CustomMatch_KickPlayer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_SetSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_SetSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_SetSettings.displayName = 'proto.rtech.liveapi.CustomMatch_SetSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_GetSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_GetSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_GetSettings.displayName = 'proto.rtech.liveapi.CustomMatch_GetSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_SetTeamName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_SetTeamName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_SetTeamName.displayName = 'proto.rtech.liveapi.CustomMatch_SetTeamName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_SetSpawnPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_SetSpawnPoint.displayName = 'proto.rtech.liveapi.CustomMatch_SetSpawnPoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.CustomMatch_SendChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.CustomMatch_SendChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.CustomMatch_SendChat.displayName = 'proto.rtech.liveapi.CustomMatch_SendChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rtech.liveapi.Request.oneofGroups_);
};
goog.inherits(proto.rtech.liveapi.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.Request.displayName = 'proto.rtech.liveapi.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.RequestStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.RequestStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.RequestStatus.displayName = 'proto.rtech.liveapi.RequestStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.Response.displayName = 'proto.rtech.liveapi.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rtech.liveapi.LiveAPIEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rtech.liveapi.LiveAPIEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rtech.liveapi.LiveAPIEvent.displayName = 'proto.rtech.liveapi.LiveAPIEvent';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.Vector3.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.Vector3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.Vector3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Vector3.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.Vector3}
 */
proto.rtech.liveapi.Vector3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.Vector3;
  return proto.rtech.liveapi.Vector3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.Vector3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.Vector3}
 */
proto.rtech.liveapi.Vector3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.Vector3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.Vector3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.Vector3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Vector3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.rtech.liveapi.Vector3.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Vector3} returns this
 */
proto.rtech.liveapi.Vector3.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.rtech.liveapi.Vector3.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Vector3} returns this
 */
proto.rtech.liveapi.Vector3.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z = 3;
 * @return {number}
 */
proto.rtech.liveapi.Vector3.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Vector3} returns this
 */
proto.rtech.liveapi.Vector3.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.Player.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.Player.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.Player} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Player.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
teamid: jspb.Message.getFieldWithDefault(msg, 2, 0),
pos: (f = msg.getPos()) && proto.rtech.liveapi.Vector3.toObject(includeInstance, f),
angles: (f = msg.getAngles()) && proto.rtech.liveapi.Vector3.toObject(includeInstance, f),
currenthealth: jspb.Message.getFieldWithDefault(msg, 5, 0),
maxhealth: jspb.Message.getFieldWithDefault(msg, 6, 0),
shieldhealth: jspb.Message.getFieldWithDefault(msg, 7, 0),
shieldmaxhealth: jspb.Message.getFieldWithDefault(msg, 8, 0),
nucleushash: jspb.Message.getFieldWithDefault(msg, 9, ""),
hardwarename: jspb.Message.getFieldWithDefault(msg, 10, ""),
teamname: jspb.Message.getFieldWithDefault(msg, 11, ""),
squadindex: jspb.Message.getFieldWithDefault(msg, 12, 0),
character: jspb.Message.getFieldWithDefault(msg, 13, ""),
skin: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.Player.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.Player;
  return proto.rtech.liveapi.Player.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.Player} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.Player.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTeamid(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Vector3;
      reader.readMessage(value,proto.rtech.liveapi.Vector3.deserializeBinaryFromReader);
      msg.setPos(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Vector3;
      reader.readMessage(value,proto.rtech.liveapi.Vector3.deserializeBinaryFromReader);
      msg.setAngles(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrenthealth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxhealth(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShieldhealth(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShieldmaxhealth(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNucleushash(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setHardwarename(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamname(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSquadindex(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacter(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.Player.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.Player.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.Player} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Player.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getAngles();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getCurrenthealth();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMaxhealth();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getShieldhealth();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getShieldmaxhealth();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getNucleushash();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getHardwarename();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTeamname();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSquadindex();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getCharacter();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getSkin();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.rtech.liveapi.Player.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 teamId = 2;
 * @return {number}
 */
proto.rtech.liveapi.Player.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Vector3 pos = 3;
 * @return {?proto.rtech.liveapi.Vector3}
 */
proto.rtech.liveapi.Player.prototype.getPos = function() {
  return /** @type{?proto.rtech.liveapi.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Vector3, 3));
};


/**
 * @param {?proto.rtech.liveapi.Vector3|undefined} value
 * @return {!proto.rtech.liveapi.Player} returns this
*/
proto.rtech.liveapi.Player.prototype.setPos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.clearPos = function() {
  return this.setPos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Player.prototype.hasPos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Vector3 angles = 4;
 * @return {?proto.rtech.liveapi.Vector3}
 */
proto.rtech.liveapi.Player.prototype.getAngles = function() {
  return /** @type{?proto.rtech.liveapi.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Vector3, 4));
};


/**
 * @param {?proto.rtech.liveapi.Vector3|undefined} value
 * @return {!proto.rtech.liveapi.Player} returns this
*/
proto.rtech.liveapi.Player.prototype.setAngles = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.clearAngles = function() {
  return this.setAngles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Player.prototype.hasAngles = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 currentHealth = 5;
 * @return {number}
 */
proto.rtech.liveapi.Player.prototype.getCurrenthealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setCurrenthealth = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 maxHealth = 6;
 * @return {number}
 */
proto.rtech.liveapi.Player.prototype.getMaxhealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setMaxhealth = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 shieldHealth = 7;
 * @return {number}
 */
proto.rtech.liveapi.Player.prototype.getShieldhealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setShieldhealth = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 shieldMaxHealth = 8;
 * @return {number}
 */
proto.rtech.liveapi.Player.prototype.getShieldmaxhealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setShieldmaxhealth = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string nucleusHash = 9;
 * @return {string}
 */
proto.rtech.liveapi.Player.prototype.getNucleushash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setNucleushash = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string hardwareName = 10;
 * @return {string}
 */
proto.rtech.liveapi.Player.prototype.getHardwarename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setHardwarename = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string teamName = 11;
 * @return {string}
 */
proto.rtech.liveapi.Player.prototype.getTeamname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setTeamname = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint32 squadIndex = 12;
 * @return {number}
 */
proto.rtech.liveapi.Player.prototype.getSquadindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setSquadindex = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string character = 13;
 * @return {string}
 */
proto.rtech.liveapi.Player.prototype.getCharacter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setCharacter = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string skin = 14;
 * @return {string}
 */
proto.rtech.liveapi.Player.prototype.getSkin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Player} returns this
 */
proto.rtech.liveapi.Player.prototype.setSkin = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_LobbyPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_LobbyPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
teamid: jspb.Message.getFieldWithDefault(msg, 2, 0),
nucleushash: jspb.Message.getFieldWithDefault(msg, 3, ""),
hardwarename: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayer}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_LobbyPlayer;
  return proto.rtech.liveapi.CustomMatch_LobbyPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_LobbyPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayer}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTeamid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNucleushash(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHardwarename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_LobbyPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_LobbyPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNucleushash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHardwarename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayer} returns this
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 teamId = 2;
 * @return {number}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayer} returns this
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string nucleusHash = 3;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.getNucleushash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayer} returns this
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.setNucleushash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string hardwareName = 4;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.getHardwarename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayer} returns this
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayer.prototype.setHardwarename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.Datacenter.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.Datacenter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.Datacenter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Datacenter.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.Datacenter}
 */
proto.rtech.liveapi.Datacenter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.Datacenter;
  return proto.rtech.liveapi.Datacenter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.Datacenter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.Datacenter}
 */
proto.rtech.liveapi.Datacenter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.Datacenter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.Datacenter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.Datacenter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Datacenter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.Datacenter.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Datacenter} returns this
 */
proto.rtech.liveapi.Datacenter.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.Datacenter.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Datacenter} returns this
 */
proto.rtech.liveapi.Datacenter.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.rtech.liveapi.Datacenter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Datacenter} returns this
 */
proto.rtech.liveapi.Datacenter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.Version.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.Version.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.Version} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Version.toObject = function(includeInstance, msg) {
  var f, obj = {
majorNum: jspb.Message.getFieldWithDefault(msg, 1, 0),
minorNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
buildStamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
revision: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.Version}
 */
proto.rtech.liveapi.Version.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.Version;
  return proto.rtech.liveapi.Version.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.Version} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.Version}
 */
proto.rtech.liveapi.Version.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMajorNum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinorNum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBuildStamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevision(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.Version.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.Version.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.Version} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Version.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMajorNum();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMinorNum();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getBuildStamp();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getRevision();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 major_num = 1;
 * @return {number}
 */
proto.rtech.liveapi.Version.prototype.getMajorNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Version} returns this
 */
proto.rtech.liveapi.Version.prototype.setMajorNum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 minor_num = 2;
 * @return {number}
 */
proto.rtech.liveapi.Version.prototype.getMinorNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Version} returns this
 */
proto.rtech.liveapi.Version.prototype.setMinorNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 build_stamp = 3;
 * @return {number}
 */
proto.rtech.liveapi.Version.prototype.getBuildStamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Version} returns this
 */
proto.rtech.liveapi.Version.prototype.setBuildStamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string revision = 4;
 * @return {string}
 */
proto.rtech.liveapi.Version.prototype.getRevision = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Version} returns this
 */
proto.rtech.liveapi.Version.prototype.setRevision = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.InventoryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.InventoryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.InventoryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.InventoryItem.toObject = function(includeInstance, msg) {
  var f, obj = {
quantity: jspb.Message.getFieldWithDefault(msg, 1, 0),
item: jspb.Message.getFieldWithDefault(msg, 2, ""),
extradata: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.InventoryItem}
 */
proto.rtech.liveapi.InventoryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.InventoryItem;
  return proto.rtech.liveapi.InventoryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.InventoryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.InventoryItem}
 */
proto.rtech.liveapi.InventoryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtradata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.InventoryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.InventoryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.InventoryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.InventoryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExtradata();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 quantity = 1;
 * @return {number}
 */
proto.rtech.liveapi.InventoryItem.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.InventoryItem} returns this
 */
proto.rtech.liveapi.InventoryItem.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string item = 2;
 * @return {string}
 */
proto.rtech.liveapi.InventoryItem.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.InventoryItem} returns this
 */
proto.rtech.liveapi.InventoryItem.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string extraData = 3;
 * @return {string}
 */
proto.rtech.liveapi.InventoryItem.prototype.getExtradata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.InventoryItem} returns this
 */
proto.rtech.liveapi.InventoryItem.prototype.setExtradata = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rtech.liveapi.LoadoutConfiguration.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.LoadoutConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.LoadoutConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.LoadoutConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.LoadoutConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
weaponsList: jspb.Message.toObjectList(msg.getWeaponsList(),
    proto.rtech.liveapi.InventoryItem.toObject, includeInstance),
equipmentList: jspb.Message.toObjectList(msg.getEquipmentList(),
    proto.rtech.liveapi.InventoryItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.LoadoutConfiguration}
 */
proto.rtech.liveapi.LoadoutConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.LoadoutConfiguration;
  return proto.rtech.liveapi.LoadoutConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.LoadoutConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.LoadoutConfiguration}
 */
proto.rtech.liveapi.LoadoutConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rtech.liveapi.InventoryItem;
      reader.readMessage(value,proto.rtech.liveapi.InventoryItem.deserializeBinaryFromReader);
      msg.addWeapons(value);
      break;
    case 2:
      var value = new proto.rtech.liveapi.InventoryItem;
      reader.readMessage(value,proto.rtech.liveapi.InventoryItem.deserializeBinaryFromReader);
      msg.addEquipment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.LoadoutConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.LoadoutConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.LoadoutConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.LoadoutConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeaponsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.rtech.liveapi.InventoryItem.serializeBinaryToWriter
    );
  }
  f = message.getEquipmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rtech.liveapi.InventoryItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InventoryItem weapons = 1;
 * @return {!Array<!proto.rtech.liveapi.InventoryItem>}
 */
proto.rtech.liveapi.LoadoutConfiguration.prototype.getWeaponsList = function() {
  return /** @type{!Array<!proto.rtech.liveapi.InventoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rtech.liveapi.InventoryItem, 1));
};


/**
 * @param {!Array<!proto.rtech.liveapi.InventoryItem>} value
 * @return {!proto.rtech.liveapi.LoadoutConfiguration} returns this
*/
proto.rtech.liveapi.LoadoutConfiguration.prototype.setWeaponsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.rtech.liveapi.InventoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rtech.liveapi.InventoryItem}
 */
proto.rtech.liveapi.LoadoutConfiguration.prototype.addWeapons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.rtech.liveapi.InventoryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rtech.liveapi.LoadoutConfiguration} returns this
 */
proto.rtech.liveapi.LoadoutConfiguration.prototype.clearWeaponsList = function() {
  return this.setWeaponsList([]);
};


/**
 * repeated InventoryItem equipment = 2;
 * @return {!Array<!proto.rtech.liveapi.InventoryItem>}
 */
proto.rtech.liveapi.LoadoutConfiguration.prototype.getEquipmentList = function() {
  return /** @type{!Array<!proto.rtech.liveapi.InventoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rtech.liveapi.InventoryItem, 2));
};


/**
 * @param {!Array<!proto.rtech.liveapi.InventoryItem>} value
 * @return {!proto.rtech.liveapi.LoadoutConfiguration} returns this
*/
proto.rtech.liveapi.LoadoutConfiguration.prototype.setEquipmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rtech.liveapi.InventoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rtech.liveapi.InventoryItem}
 */
proto.rtech.liveapi.LoadoutConfiguration.prototype.addEquipment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rtech.liveapi.InventoryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rtech.liveapi.LoadoutConfiguration} returns this
 */
proto.rtech.liveapi.LoadoutConfiguration.prototype.clearEquipmentList = function() {
  return this.setEquipmentList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.Init.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.Init.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.Init} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Init.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
gameversion: jspb.Message.getFieldWithDefault(msg, 3, ""),
apiversion: (f = msg.getApiversion()) && proto.rtech.liveapi.Version.toObject(includeInstance, f),
platform: jspb.Message.getFieldWithDefault(msg, 5, ""),
name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.Init}
 */
proto.rtech.liveapi.Init.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.Init;
  return proto.rtech.liveapi.Init.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.Init} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.Init}
 */
proto.rtech.liveapi.Init.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameversion(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Version;
      reader.readMessage(value,proto.rtech.liveapi.Version.deserializeBinaryFromReader);
      msg.setApiversion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.Init.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.Init.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.Init} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Init.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGameversion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApiversion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Version.serializeBinaryToWriter
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.Init.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.Init} returns this
 */
proto.rtech.liveapi.Init.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.Init.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Init} returns this
 */
proto.rtech.liveapi.Init.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string gameVersion = 3;
 * @return {string}
 */
proto.rtech.liveapi.Init.prototype.getGameversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Init} returns this
 */
proto.rtech.liveapi.Init.prototype.setGameversion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Version apiVersion = 4;
 * @return {?proto.rtech.liveapi.Version}
 */
proto.rtech.liveapi.Init.prototype.getApiversion = function() {
  return /** @type{?proto.rtech.liveapi.Version} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Version, 4));
};


/**
 * @param {?proto.rtech.liveapi.Version|undefined} value
 * @return {!proto.rtech.liveapi.Init} returns this
*/
proto.rtech.liveapi.Init.prototype.setApiversion = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Init} returns this
 */
proto.rtech.liveapi.Init.prototype.clearApiversion = function() {
  return this.setApiversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Init.prototype.hasApiversion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string platform = 5;
 * @return {string}
 */
proto.rtech.liveapi.Init.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Init} returns this
 */
proto.rtech.liveapi.Init.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.rtech.liveapi.Init.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Init} returns this
 */
proto.rtech.liveapi.Init.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_LobbyPlayers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_LobbyPlayers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.toObject = function(includeInstance, msg) {
  var f, obj = {
playertoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
playersList: jspb.Message.toObjectList(msg.getPlayersList(),
    proto.rtech.liveapi.CustomMatch_LobbyPlayer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayers}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_LobbyPlayers;
  return proto.rtech.liveapi.CustomMatch_LobbyPlayers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_LobbyPlayers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayers}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayertoken(value);
      break;
    case 2:
      var value = new proto.rtech.liveapi.CustomMatch_LobbyPlayer;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_LobbyPlayer.deserializeBinaryFromReader);
      msg.addPlayers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_LobbyPlayers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_LobbyPlayers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayertoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.rtech.liveapi.CustomMatch_LobbyPlayer.serializeBinaryToWriter
    );
  }
};


/**
 * optional string playerToken = 1;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.prototype.getPlayertoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayers} returns this
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.prototype.setPlayertoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CustomMatch_LobbyPlayer players = 2;
 * @return {!Array<!proto.rtech.liveapi.CustomMatch_LobbyPlayer>}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.prototype.getPlayersList = function() {
  return /** @type{!Array<!proto.rtech.liveapi.CustomMatch_LobbyPlayer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rtech.liveapi.CustomMatch_LobbyPlayer, 2));
};


/**
 * @param {!Array<!proto.rtech.liveapi.CustomMatch_LobbyPlayer>} value
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayers} returns this
*/
proto.rtech.liveapi.CustomMatch_LobbyPlayers.prototype.setPlayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.rtech.liveapi.CustomMatch_LobbyPlayer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayer}
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.prototype.addPlayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.rtech.liveapi.CustomMatch_LobbyPlayer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rtech.liveapi.CustomMatch_LobbyPlayers} returns this
 */
proto.rtech.liveapi.CustomMatch_LobbyPlayers.prototype.clearPlayersList = function() {
  return this.setPlayersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rtech.liveapi.ObserverSwitched.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.ObserverSwitched.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.ObserverSwitched} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ObserverSwitched.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
observer: (f = msg.getObserver()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
target: (f = msg.getTarget()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
targetteamList: jspb.Message.toObjectList(msg.getTargetteamList(),
    proto.rtech.liveapi.Player.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.ObserverSwitched}
 */
proto.rtech.liveapi.ObserverSwitched.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.ObserverSwitched;
  return proto.rtech.liveapi.ObserverSwitched.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.ObserverSwitched} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.ObserverSwitched}
 */
proto.rtech.liveapi.ObserverSwitched.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setObserver(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 5:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.addTargetteam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.ObserverSwitched.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.ObserverSwitched} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ObserverSwitched.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getObserver();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getTargetteamList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.ObserverSwitched} returns this
 */
proto.rtech.liveapi.ObserverSwitched.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ObserverSwitched} returns this
 */
proto.rtech.liveapi.ObserverSwitched.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player observer = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.getObserver = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.ObserverSwitched} returns this
*/
proto.rtech.liveapi.ObserverSwitched.prototype.setObserver = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.ObserverSwitched} returns this
 */
proto.rtech.liveapi.ObserverSwitched.prototype.clearObserver = function() {
  return this.setObserver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.hasObserver = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player target = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.getTarget = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.ObserverSwitched} returns this
*/
proto.rtech.liveapi.ObserverSwitched.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.ObserverSwitched} returns this
 */
proto.rtech.liveapi.ObserverSwitched.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Player targetTeam = 5;
 * @return {!Array<!proto.rtech.liveapi.Player>}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.getTargetteamList = function() {
  return /** @type{!Array<!proto.rtech.liveapi.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rtech.liveapi.Player, 5));
};


/**
 * @param {!Array<!proto.rtech.liveapi.Player>} value
 * @return {!proto.rtech.liveapi.ObserverSwitched} returns this
*/
proto.rtech.liveapi.ObserverSwitched.prototype.setTargetteamList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.rtech.liveapi.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.ObserverSwitched.prototype.addTargetteam = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.rtech.liveapi.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rtech.liveapi.ObserverSwitched} returns this
 */
proto.rtech.liveapi.ObserverSwitched.prototype.clearTargetteamList = function() {
  return this.setTargetteamList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.ObserverAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.ObserverAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.ObserverAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ObserverAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
annotationserial: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.ObserverAnnotation}
 */
proto.rtech.liveapi.ObserverAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.ObserverAnnotation;
  return proto.rtech.liveapi.ObserverAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.ObserverAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.ObserverAnnotation}
 */
proto.rtech.liveapi.ObserverAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnnotationserial(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.ObserverAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.ObserverAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.ObserverAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ObserverAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAnnotationserial();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.ObserverAnnotation.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.ObserverAnnotation} returns this
 */
proto.rtech.liveapi.ObserverAnnotation.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.ObserverAnnotation.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ObserverAnnotation} returns this
 */
proto.rtech.liveapi.ObserverAnnotation.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 annotationSerial = 3;
 * @return {number}
 */
proto.rtech.liveapi.ObserverAnnotation.prototype.getAnnotationserial = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.ObserverAnnotation} returns this
 */
proto.rtech.liveapi.ObserverAnnotation.prototype.setAnnotationserial = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.MatchSetup.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.MatchSetup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.MatchSetup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.MatchSetup.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
map: jspb.Message.getFieldWithDefault(msg, 3, ""),
playlistname: jspb.Message.getFieldWithDefault(msg, 4, ""),
playlistdesc: jspb.Message.getFieldWithDefault(msg, 5, ""),
datacenter: (f = msg.getDatacenter()) && proto.rtech.liveapi.Datacenter.toObject(includeInstance, f),
aimassiston: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
anonymousmode: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
serverid: jspb.Message.getFieldWithDefault(msg, 9, ""),
startingloadout: (f = msg.getStartingloadout()) && proto.rtech.liveapi.LoadoutConfiguration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.MatchSetup}
 */
proto.rtech.liveapi.MatchSetup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.MatchSetup;
  return proto.rtech.liveapi.MatchSetup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.MatchSetup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.MatchSetup}
 */
proto.rtech.liveapi.MatchSetup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMap(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaylistname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaylistdesc(value);
      break;
    case 6:
      var value = new proto.rtech.liveapi.Datacenter;
      reader.readMessage(value,proto.rtech.liveapi.Datacenter.deserializeBinaryFromReader);
      msg.setDatacenter(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAimassiston(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAnonymousmode(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerid(value);
      break;
    case 10:
      var value = new proto.rtech.liveapi.LoadoutConfiguration;
      reader.readMessage(value,proto.rtech.liveapi.LoadoutConfiguration.deserializeBinaryFromReader);
      msg.setStartingloadout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.MatchSetup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.MatchSetup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.MatchSetup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.MatchSetup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMap();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPlaylistname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlaylistdesc();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDatacenter();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.rtech.liveapi.Datacenter.serializeBinaryToWriter
    );
  }
  f = message.getAimassiston();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getAnonymousmode();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getServerid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStartingloadout();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rtech.liveapi.LoadoutConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.MatchSetup.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.MatchSetup.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string map = 3;
 * @return {string}
 */
proto.rtech.liveapi.MatchSetup.prototype.getMap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.setMap = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string playlistName = 4;
 * @return {string}
 */
proto.rtech.liveapi.MatchSetup.prototype.getPlaylistname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.setPlaylistname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string playlistDesc = 5;
 * @return {string}
 */
proto.rtech.liveapi.MatchSetup.prototype.getPlaylistdesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.setPlaylistdesc = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Datacenter datacenter = 6;
 * @return {?proto.rtech.liveapi.Datacenter}
 */
proto.rtech.liveapi.MatchSetup.prototype.getDatacenter = function() {
  return /** @type{?proto.rtech.liveapi.Datacenter} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Datacenter, 6));
};


/**
 * @param {?proto.rtech.liveapi.Datacenter|undefined} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
*/
proto.rtech.liveapi.MatchSetup.prototype.setDatacenter = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.clearDatacenter = function() {
  return this.setDatacenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.MatchSetup.prototype.hasDatacenter = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool aimAssistOn = 7;
 * @return {boolean}
 */
proto.rtech.liveapi.MatchSetup.prototype.getAimassiston = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.setAimassiston = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool anonymousMode = 8;
 * @return {boolean}
 */
proto.rtech.liveapi.MatchSetup.prototype.getAnonymousmode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.setAnonymousmode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string serverId = 9;
 * @return {string}
 */
proto.rtech.liveapi.MatchSetup.prototype.getServerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.setServerid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional LoadoutConfiguration startingLoadout = 10;
 * @return {?proto.rtech.liveapi.LoadoutConfiguration}
 */
proto.rtech.liveapi.MatchSetup.prototype.getStartingloadout = function() {
  return /** @type{?proto.rtech.liveapi.LoadoutConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.LoadoutConfiguration, 10));
};


/**
 * @param {?proto.rtech.liveapi.LoadoutConfiguration|undefined} value
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
*/
proto.rtech.liveapi.MatchSetup.prototype.setStartingloadout = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.MatchSetup} returns this
 */
proto.rtech.liveapi.MatchSetup.prototype.clearStartingloadout = function() {
  return this.setStartingloadout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.MatchSetup.prototype.hasStartingloadout = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.GameStateChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.GameStateChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.GameStateChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.GameStateChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
state: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.GameStateChanged}
 */
proto.rtech.liveapi.GameStateChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.GameStateChanged;
  return proto.rtech.liveapi.GameStateChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.GameStateChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.GameStateChanged}
 */
proto.rtech.liveapi.GameStateChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.GameStateChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.GameStateChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.GameStateChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.GameStateChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.GameStateChanged.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.GameStateChanged} returns this
 */
proto.rtech.liveapi.GameStateChanged.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.GameStateChanged.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.GameStateChanged} returns this
 */
proto.rtech.liveapi.GameStateChanged.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string state = 3;
 * @return {string}
 */
proto.rtech.liveapi.GameStateChanged.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.GameStateChanged} returns this
 */
proto.rtech.liveapi.GameStateChanged.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CharacterSelected.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CharacterSelected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CharacterSelected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CharacterSelected.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CharacterSelected}
 */
proto.rtech.liveapi.CharacterSelected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CharacterSelected;
  return proto.rtech.liveapi.CharacterSelected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CharacterSelected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CharacterSelected}
 */
proto.rtech.liveapi.CharacterSelected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CharacterSelected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CharacterSelected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CharacterSelected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CharacterSelected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.CharacterSelected.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.CharacterSelected} returns this
 */
proto.rtech.liveapi.CharacterSelected.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.CharacterSelected.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CharacterSelected} returns this
 */
proto.rtech.liveapi.CharacterSelected.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.CharacterSelected.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.CharacterSelected} returns this
*/
proto.rtech.liveapi.CharacterSelected.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.CharacterSelected} returns this
 */
proto.rtech.liveapi.CharacterSelected.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.CharacterSelected.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rtech.liveapi.MatchStateEnd.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.MatchStateEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.MatchStateEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.MatchStateEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.MatchStateEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
state: jspb.Message.getFieldWithDefault(msg, 3, ""),
winnersList: jspb.Message.toObjectList(msg.getWinnersList(),
    proto.rtech.liveapi.Player.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.MatchStateEnd}
 */
proto.rtech.liveapi.MatchStateEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.MatchStateEnd;
  return proto.rtech.liveapi.MatchStateEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.MatchStateEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.MatchStateEnd}
 */
proto.rtech.liveapi.MatchStateEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.addWinners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.MatchStateEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.MatchStateEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.MatchStateEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.MatchStateEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWinnersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.MatchStateEnd.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.MatchStateEnd} returns this
 */
proto.rtech.liveapi.MatchStateEnd.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.MatchStateEnd.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.MatchStateEnd} returns this
 */
proto.rtech.liveapi.MatchStateEnd.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string state = 3;
 * @return {string}
 */
proto.rtech.liveapi.MatchStateEnd.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.MatchStateEnd} returns this
 */
proto.rtech.liveapi.MatchStateEnd.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Player winners = 4;
 * @return {!Array<!proto.rtech.liveapi.Player>}
 */
proto.rtech.liveapi.MatchStateEnd.prototype.getWinnersList = function() {
  return /** @type{!Array<!proto.rtech.liveapi.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {!Array<!proto.rtech.liveapi.Player>} value
 * @return {!proto.rtech.liveapi.MatchStateEnd} returns this
*/
proto.rtech.liveapi.MatchStateEnd.prototype.setWinnersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.rtech.liveapi.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.MatchStateEnd.prototype.addWinners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.rtech.liveapi.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rtech.liveapi.MatchStateEnd} returns this
 */
proto.rtech.liveapi.MatchStateEnd.prototype.clearWinnersList = function() {
  return this.setWinnersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.RingStartClosing.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.RingStartClosing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.RingStartClosing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.RingStartClosing.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
stage: jspb.Message.getFieldWithDefault(msg, 3, 0),
center: (f = msg.getCenter()) && proto.rtech.liveapi.Vector3.toObject(includeInstance, f),
currentradius: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
endradius: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
shrinkduration: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.RingStartClosing}
 */
proto.rtech.liveapi.RingStartClosing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.RingStartClosing;
  return proto.rtech.liveapi.RingStartClosing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.RingStartClosing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.RingStartClosing}
 */
proto.rtech.liveapi.RingStartClosing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStage(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Vector3;
      reader.readMessage(value,proto.rtech.liveapi.Vector3.deserializeBinaryFromReader);
      msg.setCenter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrentradius(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEndradius(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setShrinkduration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.RingStartClosing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.RingStartClosing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.RingStartClosing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.RingStartClosing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStage();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCenter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getCurrentradius();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getEndradius();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getShrinkduration();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.RingStartClosing.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingStartClosing} returns this
 */
proto.rtech.liveapi.RingStartClosing.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.RingStartClosing.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.RingStartClosing} returns this
 */
proto.rtech.liveapi.RingStartClosing.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 stage = 3;
 * @return {number}
 */
proto.rtech.liveapi.RingStartClosing.prototype.getStage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingStartClosing} returns this
 */
proto.rtech.liveapi.RingStartClosing.prototype.setStage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Vector3 center = 4;
 * @return {?proto.rtech.liveapi.Vector3}
 */
proto.rtech.liveapi.RingStartClosing.prototype.getCenter = function() {
  return /** @type{?proto.rtech.liveapi.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Vector3, 4));
};


/**
 * @param {?proto.rtech.liveapi.Vector3|undefined} value
 * @return {!proto.rtech.liveapi.RingStartClosing} returns this
*/
proto.rtech.liveapi.RingStartClosing.prototype.setCenter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.RingStartClosing} returns this
 */
proto.rtech.liveapi.RingStartClosing.prototype.clearCenter = function() {
  return this.setCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.RingStartClosing.prototype.hasCenter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float currentRadius = 5;
 * @return {number}
 */
proto.rtech.liveapi.RingStartClosing.prototype.getCurrentradius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingStartClosing} returns this
 */
proto.rtech.liveapi.RingStartClosing.prototype.setCurrentradius = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float endRadius = 6;
 * @return {number}
 */
proto.rtech.liveapi.RingStartClosing.prototype.getEndradius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingStartClosing} returns this
 */
proto.rtech.liveapi.RingStartClosing.prototype.setEndradius = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float shrinkDuration = 7;
 * @return {number}
 */
proto.rtech.liveapi.RingStartClosing.prototype.getShrinkduration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingStartClosing} returns this
 */
proto.rtech.liveapi.RingStartClosing.prototype.setShrinkduration = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.RingFinishedClosing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.RingFinishedClosing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.RingFinishedClosing.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
stage: jspb.Message.getFieldWithDefault(msg, 3, 0),
center: (f = msg.getCenter()) && proto.rtech.liveapi.Vector3.toObject(includeInstance, f),
currentradius: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
shrinkduration: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.RingFinishedClosing}
 */
proto.rtech.liveapi.RingFinishedClosing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.RingFinishedClosing;
  return proto.rtech.liveapi.RingFinishedClosing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.RingFinishedClosing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.RingFinishedClosing}
 */
proto.rtech.liveapi.RingFinishedClosing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStage(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Vector3;
      reader.readMessage(value,proto.rtech.liveapi.Vector3.deserializeBinaryFromReader);
      msg.setCenter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrentradius(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setShrinkduration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.RingFinishedClosing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.RingFinishedClosing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.RingFinishedClosing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStage();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCenter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getCurrentradius();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getShrinkduration();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingFinishedClosing} returns this
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.RingFinishedClosing} returns this
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 stage = 3;
 * @return {number}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.getStage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingFinishedClosing} returns this
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.setStage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Vector3 center = 4;
 * @return {?proto.rtech.liveapi.Vector3}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.getCenter = function() {
  return /** @type{?proto.rtech.liveapi.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Vector3, 4));
};


/**
 * @param {?proto.rtech.liveapi.Vector3|undefined} value
 * @return {!proto.rtech.liveapi.RingFinishedClosing} returns this
*/
proto.rtech.liveapi.RingFinishedClosing.prototype.setCenter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.RingFinishedClosing} returns this
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.clearCenter = function() {
  return this.setCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.hasCenter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float currentRadius = 5;
 * @return {number}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.getCurrentradius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingFinishedClosing} returns this
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.setCurrentradius = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float shrinkDuration = 7;
 * @return {number}
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.getShrinkduration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RingFinishedClosing} returns this
 */
proto.rtech.liveapi.RingFinishedClosing.prototype.setShrinkduration = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerConnected.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerConnected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerConnected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerConnected.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerConnected}
 */
proto.rtech.liveapi.PlayerConnected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerConnected;
  return proto.rtech.liveapi.PlayerConnected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerConnected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerConnected}
 */
proto.rtech.liveapi.PlayerConnected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerConnected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerConnected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerConnected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerConnected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerConnected.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerConnected} returns this
 */
proto.rtech.liveapi.PlayerConnected.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerConnected.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerConnected} returns this
 */
proto.rtech.liveapi.PlayerConnected.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerConnected.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerConnected} returns this
*/
proto.rtech.liveapi.PlayerConnected.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerConnected} returns this
 */
proto.rtech.liveapi.PlayerConnected.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerConnected.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerDisconnected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerDisconnected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerDisconnected.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
canreconnect: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
isalive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerDisconnected}
 */
proto.rtech.liveapi.PlayerDisconnected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerDisconnected;
  return proto.rtech.liveapi.PlayerDisconnected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerDisconnected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerDisconnected}
 */
proto.rtech.liveapi.PlayerDisconnected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanreconnect(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsalive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerDisconnected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerDisconnected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerDisconnected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getCanreconnect();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsalive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerDisconnected} returns this
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerDisconnected} returns this
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerDisconnected} returns this
*/
proto.rtech.liveapi.PlayerDisconnected.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerDisconnected} returns this
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool canReconnect = 4;
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.getCanreconnect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.PlayerDisconnected} returns this
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.setCanreconnect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool isAlive = 5;
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.getIsalive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.PlayerDisconnected} returns this
 */
proto.rtech.liveapi.PlayerDisconnected.prototype.setIsalive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerStatChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerStatChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerStatChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
statname: jspb.Message.getFieldWithDefault(msg, 4, ""),
newvalue: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerStatChanged}
 */
proto.rtech.liveapi.PlayerStatChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerStatChanged;
  return proto.rtech.liveapi.PlayerStatChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerStatChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerStatChanged}
 */
proto.rtech.liveapi.PlayerStatChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatname(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNewvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerStatChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerStatChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerStatChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getStatname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNewvalue();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerStatChanged} returns this
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerStatChanged} returns this
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerStatChanged} returns this
*/
proto.rtech.liveapi.PlayerStatChanged.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerStatChanged} returns this
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string statName = 4;
 * @return {string}
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.getStatname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerStatChanged} returns this
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.setStatname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 newValue = 5;
 * @return {number}
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.getNewvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerStatChanged} returns this
 */
proto.rtech.liveapi.PlayerStatChanged.prototype.setNewvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerUpgradeTierChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerUpgradeTierChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
level: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerUpgradeTierChanged}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerUpgradeTierChanged;
  return proto.rtech.liveapi.PlayerUpgradeTierChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerUpgradeTierChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerUpgradeTierChanged}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerUpgradeTierChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerUpgradeTierChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerUpgradeTierChanged} returns this
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerUpgradeTierChanged} returns this
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerUpgradeTierChanged} returns this
*/
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerUpgradeTierChanged} returns this
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 level = 4;
 * @return {number}
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerUpgradeTierChanged} returns this
 */
proto.rtech.liveapi.PlayerUpgradeTierChanged.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerDamaged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerDamaged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerDamaged.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
attacker: (f = msg.getAttacker()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
victim: (f = msg.getVictim()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
weapon: jspb.Message.getFieldWithDefault(msg, 5, ""),
damageinflicted: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerDamaged}
 */
proto.rtech.liveapi.PlayerDamaged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerDamaged;
  return proto.rtech.liveapi.PlayerDamaged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerDamaged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerDamaged}
 */
proto.rtech.liveapi.PlayerDamaged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setAttacker(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setVictim(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeapon(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDamageinflicted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerDamaged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerDamaged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerDamaged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttacker();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getVictim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getWeapon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDamageinflicted();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerDamaged} returns this
 */
proto.rtech.liveapi.PlayerDamaged.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerDamaged} returns this
 */
proto.rtech.liveapi.PlayerDamaged.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player attacker = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.getAttacker = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerDamaged} returns this
*/
proto.rtech.liveapi.PlayerDamaged.prototype.setAttacker = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerDamaged} returns this
 */
proto.rtech.liveapi.PlayerDamaged.prototype.clearAttacker = function() {
  return this.setAttacker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.hasAttacker = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player victim = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.getVictim = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerDamaged} returns this
*/
proto.rtech.liveapi.PlayerDamaged.prototype.setVictim = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerDamaged} returns this
 */
proto.rtech.liveapi.PlayerDamaged.prototype.clearVictim = function() {
  return this.setVictim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.hasVictim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string weapon = 5;
 * @return {string}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.getWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerDamaged} returns this
 */
proto.rtech.liveapi.PlayerDamaged.prototype.setWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 damageInflicted = 6;
 * @return {number}
 */
proto.rtech.liveapi.PlayerDamaged.prototype.getDamageinflicted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerDamaged} returns this
 */
proto.rtech.liveapi.PlayerDamaged.prototype.setDamageinflicted = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerKilled.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerKilled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerKilled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerKilled.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
attacker: (f = msg.getAttacker()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
victim: (f = msg.getVictim()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
awardedto: (f = msg.getAwardedto()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
weapon: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerKilled}
 */
proto.rtech.liveapi.PlayerKilled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerKilled;
  return proto.rtech.liveapi.PlayerKilled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerKilled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerKilled}
 */
proto.rtech.liveapi.PlayerKilled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setAttacker(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setVictim(value);
      break;
    case 5:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setAwardedto(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeapon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerKilled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerKilled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerKilled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerKilled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttacker();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getVictim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getAwardedto();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getWeapon();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerKilled.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
 */
proto.rtech.liveapi.PlayerKilled.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerKilled.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
 */
proto.rtech.liveapi.PlayerKilled.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player attacker = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerKilled.prototype.getAttacker = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
*/
proto.rtech.liveapi.PlayerKilled.prototype.setAttacker = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
 */
proto.rtech.liveapi.PlayerKilled.prototype.clearAttacker = function() {
  return this.setAttacker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerKilled.prototype.hasAttacker = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player victim = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerKilled.prototype.getVictim = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
*/
proto.rtech.liveapi.PlayerKilled.prototype.setVictim = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
 */
proto.rtech.liveapi.PlayerKilled.prototype.clearVictim = function() {
  return this.setVictim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerKilled.prototype.hasVictim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Player awardedTo = 5;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerKilled.prototype.getAwardedto = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 5));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
*/
proto.rtech.liveapi.PlayerKilled.prototype.setAwardedto = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
 */
proto.rtech.liveapi.PlayerKilled.prototype.clearAwardedto = function() {
  return this.setAwardedto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerKilled.prototype.hasAwardedto = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string weapon = 6;
 * @return {string}
 */
proto.rtech.liveapi.PlayerKilled.prototype.getWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerKilled} returns this
 */
proto.rtech.liveapi.PlayerKilled.prototype.setWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerDowned.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerDowned.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerDowned} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerDowned.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
attacker: (f = msg.getAttacker()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
victim: (f = msg.getVictim()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
weapon: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerDowned}
 */
proto.rtech.liveapi.PlayerDowned.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerDowned;
  return proto.rtech.liveapi.PlayerDowned.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerDowned} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerDowned}
 */
proto.rtech.liveapi.PlayerDowned.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setAttacker(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setVictim(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeapon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerDowned.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerDowned.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerDowned} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerDowned.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttacker();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getVictim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getWeapon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerDowned.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerDowned} returns this
 */
proto.rtech.liveapi.PlayerDowned.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerDowned.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerDowned} returns this
 */
proto.rtech.liveapi.PlayerDowned.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player attacker = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerDowned.prototype.getAttacker = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerDowned} returns this
*/
proto.rtech.liveapi.PlayerDowned.prototype.setAttacker = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerDowned} returns this
 */
proto.rtech.liveapi.PlayerDowned.prototype.clearAttacker = function() {
  return this.setAttacker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerDowned.prototype.hasAttacker = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player victim = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerDowned.prototype.getVictim = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerDowned} returns this
*/
proto.rtech.liveapi.PlayerDowned.prototype.setVictim = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerDowned} returns this
 */
proto.rtech.liveapi.PlayerDowned.prototype.clearVictim = function() {
  return this.setVictim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerDowned.prototype.hasVictim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string weapon = 5;
 * @return {string}
 */
proto.rtech.liveapi.PlayerDowned.prototype.getWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerDowned} returns this
 */
proto.rtech.liveapi.PlayerDowned.prototype.setWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerAssist.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerAssist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerAssist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerAssist.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
assistant: (f = msg.getAssistant()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
victim: (f = msg.getVictim()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
weapon: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerAssist}
 */
proto.rtech.liveapi.PlayerAssist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerAssist;
  return proto.rtech.liveapi.PlayerAssist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerAssist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerAssist}
 */
proto.rtech.liveapi.PlayerAssist.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setAssistant(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setVictim(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeapon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerAssist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerAssist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerAssist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerAssist.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAssistant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getVictim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getWeapon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerAssist.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerAssist} returns this
 */
proto.rtech.liveapi.PlayerAssist.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerAssist.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerAssist} returns this
 */
proto.rtech.liveapi.PlayerAssist.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player assistant = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerAssist.prototype.getAssistant = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerAssist} returns this
*/
proto.rtech.liveapi.PlayerAssist.prototype.setAssistant = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerAssist} returns this
 */
proto.rtech.liveapi.PlayerAssist.prototype.clearAssistant = function() {
  return this.setAssistant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerAssist.prototype.hasAssistant = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player victim = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerAssist.prototype.getVictim = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerAssist} returns this
*/
proto.rtech.liveapi.PlayerAssist.prototype.setVictim = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerAssist} returns this
 */
proto.rtech.liveapi.PlayerAssist.prototype.clearVictim = function() {
  return this.setVictim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerAssist.prototype.hasVictim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string weapon = 5;
 * @return {string}
 */
proto.rtech.liveapi.PlayerAssist.prototype.getWeapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerAssist} returns this
 */
proto.rtech.liveapi.PlayerAssist.prototype.setWeapon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rtech.liveapi.SquadEliminated.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.SquadEliminated.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.SquadEliminated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.SquadEliminated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.SquadEliminated.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
playersList: jspb.Message.toObjectList(msg.getPlayersList(),
    proto.rtech.liveapi.Player.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.SquadEliminated}
 */
proto.rtech.liveapi.SquadEliminated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.SquadEliminated;
  return proto.rtech.liveapi.SquadEliminated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.SquadEliminated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.SquadEliminated}
 */
proto.rtech.liveapi.SquadEliminated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.addPlayers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.SquadEliminated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.SquadEliminated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.SquadEliminated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.SquadEliminated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.SquadEliminated.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.SquadEliminated} returns this
 */
proto.rtech.liveapi.SquadEliminated.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.SquadEliminated.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.SquadEliminated} returns this
 */
proto.rtech.liveapi.SquadEliminated.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Player players = 3;
 * @return {!Array<!proto.rtech.liveapi.Player>}
 */
proto.rtech.liveapi.SquadEliminated.prototype.getPlayersList = function() {
  return /** @type{!Array<!proto.rtech.liveapi.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {!Array<!proto.rtech.liveapi.Player>} value
 * @return {!proto.rtech.liveapi.SquadEliminated} returns this
*/
proto.rtech.liveapi.SquadEliminated.prototype.setPlayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.rtech.liveapi.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.SquadEliminated.prototype.addPlayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.rtech.liveapi.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rtech.liveapi.SquadEliminated} returns this
 */
proto.rtech.liveapi.SquadEliminated.prototype.clearPlayersList = function() {
  return this.setPlayersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.GibraltarShieldAbsorbed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.GibraltarShieldAbsorbed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
attacker: (f = msg.getAttacker()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
victim: (f = msg.getVictim()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
damageinflicted: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.GibraltarShieldAbsorbed;
  return proto.rtech.liveapi.GibraltarShieldAbsorbed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.GibraltarShieldAbsorbed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setAttacker(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setVictim(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDamageinflicted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.GibraltarShieldAbsorbed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.GibraltarShieldAbsorbed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttacker();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getVictim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getDamageinflicted();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed} returns this
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed} returns this
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player attacker = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.getAttacker = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed} returns this
*/
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.setAttacker = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed} returns this
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.clearAttacker = function() {
  return this.setAttacker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.hasAttacker = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player victim = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.getVictim = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed} returns this
*/
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.setVictim = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed} returns this
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.clearVictim = function() {
  return this.setVictim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.hasVictim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 damageInflicted = 6;
 * @return {number}
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.getDamageinflicted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.GibraltarShieldAbsorbed} returns this
 */
proto.rtech.liveapi.GibraltarShieldAbsorbed.prototype.setDamageinflicted = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.RevenantForgedShadowDamaged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.RevenantForgedShadowDamaged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
attacker: (f = msg.getAttacker()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
victim: (f = msg.getVictim()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
damageinflicted: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.RevenantForgedShadowDamaged;
  return proto.rtech.liveapi.RevenantForgedShadowDamaged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.RevenantForgedShadowDamaged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setAttacker(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setVictim(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDamageinflicted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.RevenantForgedShadowDamaged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.RevenantForgedShadowDamaged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttacker();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getVictim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getDamageinflicted();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged} returns this
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged} returns this
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player attacker = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.getAttacker = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged} returns this
*/
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.setAttacker = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged} returns this
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.clearAttacker = function() {
  return this.setAttacker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.hasAttacker = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player victim = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.getVictim = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged} returns this
*/
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.setVictim = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged} returns this
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.clearVictim = function() {
  return this.setVictim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.hasVictim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 damageInflicted = 6;
 * @return {number}
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.getDamageinflicted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.RevenantForgedShadowDamaged} returns this
 */
proto.rtech.liveapi.RevenantForgedShadowDamaged.prototype.setDamageinflicted = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rtech.liveapi.PlayerRespawnTeam.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerRespawnTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerRespawnTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerRespawnTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
respawned: jspb.Message.getFieldWithDefault(msg, 4, ""),
respawnedteammatesList: jspb.Message.toObjectList(msg.getRespawnedteammatesList(),
    proto.rtech.liveapi.Player.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam}
 */
proto.rtech.liveapi.PlayerRespawnTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerRespawnTeam;
  return proto.rtech.liveapi.PlayerRespawnTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerRespawnTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam}
 */
proto.rtech.liveapi.PlayerRespawnTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRespawned(value);
      break;
    case 5:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.addRespawnedteammates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerRespawnTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerRespawnTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerRespawnTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getRespawned();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRespawnedteammatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam} returns this
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam} returns this
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam} returns this
*/
proto.rtech.liveapi.PlayerRespawnTeam.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam} returns this
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string respawned = 4;
 * @return {string}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.getRespawned = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam} returns this
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.setRespawned = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Player respawnedTeammates = 5;
 * @return {!Array<!proto.rtech.liveapi.Player>}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.getRespawnedteammatesList = function() {
  return /** @type{!Array<!proto.rtech.liveapi.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.rtech.liveapi.Player, 5));
};


/**
 * @param {!Array<!proto.rtech.liveapi.Player>} value
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam} returns this
*/
proto.rtech.liveapi.PlayerRespawnTeam.prototype.setRespawnedteammatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.rtech.liveapi.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.addRespawnedteammates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.rtech.liveapi.Player, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rtech.liveapi.PlayerRespawnTeam} returns this
 */
proto.rtech.liveapi.PlayerRespawnTeam.prototype.clearRespawnedteammatesList = function() {
  return this.setRespawnedteammatesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerRevive.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerRevive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerRevive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerRevive.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
revived: (f = msg.getRevived()) && proto.rtech.liveapi.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerRevive}
 */
proto.rtech.liveapi.PlayerRevive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerRevive;
  return proto.rtech.liveapi.PlayerRevive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerRevive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerRevive}
 */
proto.rtech.liveapi.PlayerRevive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setRevived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerRevive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerRevive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerRevive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerRevive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getRevived();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerRevive.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerRevive} returns this
 */
proto.rtech.liveapi.PlayerRevive.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerRevive.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerRevive} returns this
 */
proto.rtech.liveapi.PlayerRevive.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerRevive.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerRevive} returns this
*/
proto.rtech.liveapi.PlayerRevive.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerRevive} returns this
 */
proto.rtech.liveapi.PlayerRevive.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerRevive.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player revived = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerRevive.prototype.getRevived = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerRevive} returns this
*/
proto.rtech.liveapi.PlayerRevive.prototype.setRevived = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerRevive} returns this
 */
proto.rtech.liveapi.PlayerRevive.prototype.clearRevived = function() {
  return this.setRevived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerRevive.prototype.hasRevived = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.ArenasItemSelected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.ArenasItemSelected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ArenasItemSelected.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
item: jspb.Message.getFieldWithDefault(msg, 4, ""),
quantity: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.ArenasItemSelected}
 */
proto.rtech.liveapi.ArenasItemSelected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.ArenasItemSelected;
  return proto.rtech.liveapi.ArenasItemSelected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.ArenasItemSelected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.ArenasItemSelected}
 */
proto.rtech.liveapi.ArenasItemSelected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.ArenasItemSelected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.ArenasItemSelected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ArenasItemSelected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.ArenasItemSelected} returns this
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ArenasItemSelected} returns this
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.ArenasItemSelected} returns this
*/
proto.rtech.liveapi.ArenasItemSelected.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.ArenasItemSelected} returns this
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string item = 4;
 * @return {string}
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ArenasItemSelected} returns this
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 quantity = 5;
 * @return {number}
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.ArenasItemSelected} returns this
 */
proto.rtech.liveapi.ArenasItemSelected.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.ArenasItemDeselected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.ArenasItemDeselected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ArenasItemDeselected.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
item: jspb.Message.getFieldWithDefault(msg, 4, ""),
quantity: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.ArenasItemDeselected}
 */
proto.rtech.liveapi.ArenasItemDeselected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.ArenasItemDeselected;
  return proto.rtech.liveapi.ArenasItemDeselected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.ArenasItemDeselected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.ArenasItemDeselected}
 */
proto.rtech.liveapi.ArenasItemDeselected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.ArenasItemDeselected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.ArenasItemDeselected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ArenasItemDeselected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.ArenasItemDeselected} returns this
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ArenasItemDeselected} returns this
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.ArenasItemDeselected} returns this
*/
proto.rtech.liveapi.ArenasItemDeselected.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.ArenasItemDeselected} returns this
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string item = 4;
 * @return {string}
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ArenasItemDeselected} returns this
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 quantity = 5;
 * @return {number}
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.ArenasItemDeselected} returns this
 */
proto.rtech.liveapi.ArenasItemDeselected.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.InventoryPickUp.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.InventoryPickUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.InventoryPickUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.InventoryPickUp.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
item: jspb.Message.getFieldWithDefault(msg, 4, ""),
quantity: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.InventoryPickUp}
 */
proto.rtech.liveapi.InventoryPickUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.InventoryPickUp;
  return proto.rtech.liveapi.InventoryPickUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.InventoryPickUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.InventoryPickUp}
 */
proto.rtech.liveapi.InventoryPickUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.InventoryPickUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.InventoryPickUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.InventoryPickUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.InventoryPickUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.InventoryPickUp.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.InventoryPickUp} returns this
 */
proto.rtech.liveapi.InventoryPickUp.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.InventoryPickUp.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.InventoryPickUp} returns this
 */
proto.rtech.liveapi.InventoryPickUp.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.InventoryPickUp.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.InventoryPickUp} returns this
*/
proto.rtech.liveapi.InventoryPickUp.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.InventoryPickUp} returns this
 */
proto.rtech.liveapi.InventoryPickUp.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.InventoryPickUp.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string item = 4;
 * @return {string}
 */
proto.rtech.liveapi.InventoryPickUp.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.InventoryPickUp} returns this
 */
proto.rtech.liveapi.InventoryPickUp.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 quantity = 5;
 * @return {number}
 */
proto.rtech.liveapi.InventoryPickUp.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.InventoryPickUp} returns this
 */
proto.rtech.liveapi.InventoryPickUp.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rtech.liveapi.InventoryDrop.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.InventoryDrop.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.InventoryDrop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.InventoryDrop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.InventoryDrop.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
item: jspb.Message.getFieldWithDefault(msg, 4, ""),
quantity: jspb.Message.getFieldWithDefault(msg, 5, 0),
extradataList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.InventoryDrop}
 */
proto.rtech.liveapi.InventoryDrop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.InventoryDrop;
  return proto.rtech.liveapi.InventoryDrop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.InventoryDrop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.InventoryDrop}
 */
proto.rtech.liveapi.InventoryDrop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtradata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.InventoryDrop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.InventoryDrop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.InventoryDrop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.InventoryDrop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getExtradataList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.InventoryDrop.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
 */
proto.rtech.liveapi.InventoryDrop.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.InventoryDrop.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
 */
proto.rtech.liveapi.InventoryDrop.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.InventoryDrop.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
*/
proto.rtech.liveapi.InventoryDrop.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
 */
proto.rtech.liveapi.InventoryDrop.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.InventoryDrop.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string item = 4;
 * @return {string}
 */
proto.rtech.liveapi.InventoryDrop.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
 */
proto.rtech.liveapi.InventoryDrop.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 quantity = 5;
 * @return {number}
 */
proto.rtech.liveapi.InventoryDrop.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
 */
proto.rtech.liveapi.InventoryDrop.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string extraData = 6;
 * @return {!Array<string>}
 */
proto.rtech.liveapi.InventoryDrop.prototype.getExtradataList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
 */
proto.rtech.liveapi.InventoryDrop.prototype.setExtradataList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
 */
proto.rtech.liveapi.InventoryDrop.prototype.addExtradata = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rtech.liveapi.InventoryDrop} returns this
 */
proto.rtech.liveapi.InventoryDrop.prototype.clearExtradataList = function() {
  return this.setExtradataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.InventoryUse.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.InventoryUse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.InventoryUse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.InventoryUse.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
item: jspb.Message.getFieldWithDefault(msg, 4, ""),
quantity: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.InventoryUse}
 */
proto.rtech.liveapi.InventoryUse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.InventoryUse;
  return proto.rtech.liveapi.InventoryUse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.InventoryUse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.InventoryUse}
 */
proto.rtech.liveapi.InventoryUse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.InventoryUse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.InventoryUse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.InventoryUse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.InventoryUse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.InventoryUse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.InventoryUse} returns this
 */
proto.rtech.liveapi.InventoryUse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.InventoryUse.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.InventoryUse} returns this
 */
proto.rtech.liveapi.InventoryUse.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.InventoryUse.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.InventoryUse} returns this
*/
proto.rtech.liveapi.InventoryUse.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.InventoryUse} returns this
 */
proto.rtech.liveapi.InventoryUse.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.InventoryUse.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string item = 4;
 * @return {string}
 */
proto.rtech.liveapi.InventoryUse.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.InventoryUse} returns this
 */
proto.rtech.liveapi.InventoryUse.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 quantity = 5;
 * @return {number}
 */
proto.rtech.liveapi.InventoryUse.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.InventoryUse} returns this
 */
proto.rtech.liveapi.InventoryUse.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.BannerCollected.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.BannerCollected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.BannerCollected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.BannerCollected.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
collected: (f = msg.getCollected()) && proto.rtech.liveapi.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.BannerCollected}
 */
proto.rtech.liveapi.BannerCollected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.BannerCollected;
  return proto.rtech.liveapi.BannerCollected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.BannerCollected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.BannerCollected}
 */
proto.rtech.liveapi.BannerCollected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setCollected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.BannerCollected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.BannerCollected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.BannerCollected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.BannerCollected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getCollected();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.BannerCollected.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.BannerCollected} returns this
 */
proto.rtech.liveapi.BannerCollected.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.BannerCollected.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.BannerCollected} returns this
 */
proto.rtech.liveapi.BannerCollected.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.BannerCollected.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.BannerCollected} returns this
*/
proto.rtech.liveapi.BannerCollected.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.BannerCollected} returns this
 */
proto.rtech.liveapi.BannerCollected.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.BannerCollected.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Player collected = 4;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.BannerCollected.prototype.getCollected = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 4));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.BannerCollected} returns this
*/
proto.rtech.liveapi.BannerCollected.prototype.setCollected = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.BannerCollected} returns this
 */
proto.rtech.liveapi.BannerCollected.prototype.clearCollected = function() {
  return this.setCollected(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.BannerCollected.prototype.hasCollected = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PlayerAbilityUsed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PlayerAbilityUsed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerAbilityUsed.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
linkedentity: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PlayerAbilityUsed}
 */
proto.rtech.liveapi.PlayerAbilityUsed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PlayerAbilityUsed;
  return proto.rtech.liveapi.PlayerAbilityUsed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PlayerAbilityUsed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PlayerAbilityUsed}
 */
proto.rtech.liveapi.PlayerAbilityUsed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkedentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PlayerAbilityUsed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PlayerAbilityUsed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PlayerAbilityUsed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getLinkedentity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PlayerAbilityUsed} returns this
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerAbilityUsed} returns this
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.PlayerAbilityUsed} returns this
*/
proto.rtech.liveapi.PlayerAbilityUsed.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.PlayerAbilityUsed} returns this
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string linkedEntity = 4;
 * @return {string}
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.getLinkedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.PlayerAbilityUsed} returns this
 */
proto.rtech.liveapi.PlayerAbilityUsed.prototype.setLinkedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.LegendUpgradeSelected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.LegendUpgradeSelected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.LegendUpgradeSelected.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
upgradename: jspb.Message.getFieldWithDefault(msg, 4, ""),
upgradedesc: jspb.Message.getFieldWithDefault(msg, 5, ""),
level: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected}
 */
proto.rtech.liveapi.LegendUpgradeSelected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.LegendUpgradeSelected;
  return proto.rtech.liveapi.LegendUpgradeSelected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.LegendUpgradeSelected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected}
 */
proto.rtech.liveapi.LegendUpgradeSelected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpgradename(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpgradedesc(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.LegendUpgradeSelected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.LegendUpgradeSelected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.LegendUpgradeSelected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getUpgradename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpgradedesc();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected} returns this
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected} returns this
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected} returns this
*/
proto.rtech.liveapi.LegendUpgradeSelected.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected} returns this
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string upgradeName = 4;
 * @return {string}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.getUpgradename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected} returns this
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.setUpgradename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string upgradeDesc = 5;
 * @return {string}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.getUpgradedesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected} returns this
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.setUpgradedesc = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 level = 6;
 * @return {number}
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.LegendUpgradeSelected} returns this
 */
proto.rtech.liveapi.LegendUpgradeSelected.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.ZiplineUsed.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.ZiplineUsed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.ZiplineUsed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ZiplineUsed.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
linkedentity: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.ZiplineUsed}
 */
proto.rtech.liveapi.ZiplineUsed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.ZiplineUsed;
  return proto.rtech.liveapi.ZiplineUsed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.ZiplineUsed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.ZiplineUsed}
 */
proto.rtech.liveapi.ZiplineUsed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkedentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.ZiplineUsed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.ZiplineUsed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.ZiplineUsed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ZiplineUsed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getLinkedentity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.ZiplineUsed.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.ZiplineUsed} returns this
 */
proto.rtech.liveapi.ZiplineUsed.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.ZiplineUsed.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ZiplineUsed} returns this
 */
proto.rtech.liveapi.ZiplineUsed.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.ZiplineUsed.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.ZiplineUsed} returns this
*/
proto.rtech.liveapi.ZiplineUsed.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.ZiplineUsed} returns this
 */
proto.rtech.liveapi.ZiplineUsed.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.ZiplineUsed.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string linkedEntity = 4;
 * @return {string}
 */
proto.rtech.liveapi.ZiplineUsed.prototype.getLinkedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ZiplineUsed} returns this
 */
proto.rtech.liveapi.ZiplineUsed.prototype.setLinkedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.GrenadeThrown.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.GrenadeThrown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.GrenadeThrown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.GrenadeThrown.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
linkedentity: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.GrenadeThrown}
 */
proto.rtech.liveapi.GrenadeThrown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.GrenadeThrown;
  return proto.rtech.liveapi.GrenadeThrown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.GrenadeThrown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.GrenadeThrown}
 */
proto.rtech.liveapi.GrenadeThrown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkedentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.GrenadeThrown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.GrenadeThrown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.GrenadeThrown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.GrenadeThrown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getLinkedentity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.GrenadeThrown.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.GrenadeThrown} returns this
 */
proto.rtech.liveapi.GrenadeThrown.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.GrenadeThrown.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.GrenadeThrown} returns this
 */
proto.rtech.liveapi.GrenadeThrown.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.GrenadeThrown.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.GrenadeThrown} returns this
*/
proto.rtech.liveapi.GrenadeThrown.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.GrenadeThrown} returns this
 */
proto.rtech.liveapi.GrenadeThrown.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.GrenadeThrown.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string linkedEntity = 4;
 * @return {string}
 */
proto.rtech.liveapi.GrenadeThrown.prototype.getLinkedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.GrenadeThrown} returns this
 */
proto.rtech.liveapi.GrenadeThrown.prototype.setLinkedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.BlackMarketAction.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.BlackMarketAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.BlackMarketAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.BlackMarketAction.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
item: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.BlackMarketAction}
 */
proto.rtech.liveapi.BlackMarketAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.BlackMarketAction;
  return proto.rtech.liveapi.BlackMarketAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.BlackMarketAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.BlackMarketAction}
 */
proto.rtech.liveapi.BlackMarketAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.BlackMarketAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.BlackMarketAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.BlackMarketAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.BlackMarketAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.BlackMarketAction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.BlackMarketAction} returns this
 */
proto.rtech.liveapi.BlackMarketAction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.BlackMarketAction.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.BlackMarketAction} returns this
 */
proto.rtech.liveapi.BlackMarketAction.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.BlackMarketAction.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.BlackMarketAction} returns this
*/
proto.rtech.liveapi.BlackMarketAction.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.BlackMarketAction} returns this
 */
proto.rtech.liveapi.BlackMarketAction.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.BlackMarketAction.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string item = 4;
 * @return {string}
 */
proto.rtech.liveapi.BlackMarketAction.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.BlackMarketAction} returns this
 */
proto.rtech.liveapi.BlackMarketAction.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.WraithPortal.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.WraithPortal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.WraithPortal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.WraithPortal.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.WraithPortal}
 */
proto.rtech.liveapi.WraithPortal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.WraithPortal;
  return proto.rtech.liveapi.WraithPortal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.WraithPortal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.WraithPortal}
 */
proto.rtech.liveapi.WraithPortal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.WraithPortal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.WraithPortal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.WraithPortal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.WraithPortal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.WraithPortal.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.WraithPortal} returns this
 */
proto.rtech.liveapi.WraithPortal.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.WraithPortal.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.WraithPortal} returns this
 */
proto.rtech.liveapi.WraithPortal.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.WraithPortal.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.WraithPortal} returns this
*/
proto.rtech.liveapi.WraithPortal.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.WraithPortal} returns this
 */
proto.rtech.liveapi.WraithPortal.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.WraithPortal.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.WarpGateUsed.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.WarpGateUsed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.WarpGateUsed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.WarpGateUsed.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.WarpGateUsed}
 */
proto.rtech.liveapi.WarpGateUsed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.WarpGateUsed;
  return proto.rtech.liveapi.WarpGateUsed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.WarpGateUsed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.WarpGateUsed}
 */
proto.rtech.liveapi.WarpGateUsed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.WarpGateUsed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.WarpGateUsed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.WarpGateUsed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.WarpGateUsed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.WarpGateUsed.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.WarpGateUsed} returns this
 */
proto.rtech.liveapi.WarpGateUsed.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.WarpGateUsed.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.WarpGateUsed} returns this
 */
proto.rtech.liveapi.WarpGateUsed.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.WarpGateUsed.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.WarpGateUsed} returns this
*/
proto.rtech.liveapi.WarpGateUsed.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.WarpGateUsed} returns this
 */
proto.rtech.liveapi.WarpGateUsed.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.WarpGateUsed.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.AmmoUsed.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.AmmoUsed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.AmmoUsed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.AmmoUsed.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
ammotype: jspb.Message.getFieldWithDefault(msg, 4, ""),
amountused: jspb.Message.getFieldWithDefault(msg, 5, 0),
oldammocount: jspb.Message.getFieldWithDefault(msg, 6, 0),
newammocount: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.AmmoUsed}
 */
proto.rtech.liveapi.AmmoUsed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.AmmoUsed;
  return proto.rtech.liveapi.AmmoUsed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.AmmoUsed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.AmmoUsed}
 */
proto.rtech.liveapi.AmmoUsed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmmotype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAmountused(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOldammocount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNewammocount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.AmmoUsed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.AmmoUsed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.AmmoUsed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.AmmoUsed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getAmmotype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAmountused();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getOldammocount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getNewammocount();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.AmmoUsed.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.AmmoUsed} returns this
 */
proto.rtech.liveapi.AmmoUsed.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.AmmoUsed.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.AmmoUsed} returns this
 */
proto.rtech.liveapi.AmmoUsed.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.AmmoUsed.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.AmmoUsed} returns this
*/
proto.rtech.liveapi.AmmoUsed.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.AmmoUsed} returns this
 */
proto.rtech.liveapi.AmmoUsed.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.AmmoUsed.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ammoType = 4;
 * @return {string}
 */
proto.rtech.liveapi.AmmoUsed.prototype.getAmmotype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.AmmoUsed} returns this
 */
proto.rtech.liveapi.AmmoUsed.prototype.setAmmotype = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 amountUsed = 5;
 * @return {number}
 */
proto.rtech.liveapi.AmmoUsed.prototype.getAmountused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.AmmoUsed} returns this
 */
proto.rtech.liveapi.AmmoUsed.prototype.setAmountused = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 oldAmmoCount = 6;
 * @return {number}
 */
proto.rtech.liveapi.AmmoUsed.prototype.getOldammocount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.AmmoUsed} returns this
 */
proto.rtech.liveapi.AmmoUsed.prototype.setOldammocount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 newAmmoCount = 7;
 * @return {number}
 */
proto.rtech.liveapi.AmmoUsed.prototype.getNewammocount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.AmmoUsed} returns this
 */
proto.rtech.liveapi.AmmoUsed.prototype.setNewammocount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.WeaponSwitched.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.WeaponSwitched.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.WeaponSwitched} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.WeaponSwitched.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
category: jspb.Message.getFieldWithDefault(msg, 2, ""),
player: (f = msg.getPlayer()) && proto.rtech.liveapi.Player.toObject(includeInstance, f),
oldweapon: jspb.Message.getFieldWithDefault(msg, 4, ""),
newweapon: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.WeaponSwitched}
 */
proto.rtech.liveapi.WeaponSwitched.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.WeaponSwitched;
  return proto.rtech.liveapi.WeaponSwitched.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.WeaponSwitched} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.WeaponSwitched}
 */
proto.rtech.liveapi.WeaponSwitched.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.rtech.liveapi.Player;
      reader.readMessage(value,proto.rtech.liveapi.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldweapon(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewweapon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.WeaponSwitched.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.WeaponSwitched.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.WeaponSwitched} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.WeaponSwitched.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rtech.liveapi.Player.serializeBinaryToWriter
    );
  }
  f = message.getOldweapon();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNewweapon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.rtech.liveapi.WeaponSwitched.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.WeaponSwitched} returns this
 */
proto.rtech.liveapi.WeaponSwitched.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.rtech.liveapi.WeaponSwitched.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.WeaponSwitched} returns this
 */
proto.rtech.liveapi.WeaponSwitched.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Player player = 3;
 * @return {?proto.rtech.liveapi.Player}
 */
proto.rtech.liveapi.WeaponSwitched.prototype.getPlayer = function() {
  return /** @type{?proto.rtech.liveapi.Player} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.Player, 3));
};


/**
 * @param {?proto.rtech.liveapi.Player|undefined} value
 * @return {!proto.rtech.liveapi.WeaponSwitched} returns this
*/
proto.rtech.liveapi.WeaponSwitched.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.WeaponSwitched} returns this
 */
proto.rtech.liveapi.WeaponSwitched.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.WeaponSwitched.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string oldWeapon = 4;
 * @return {string}
 */
proto.rtech.liveapi.WeaponSwitched.prototype.getOldweapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.WeaponSwitched} returns this
 */
proto.rtech.liveapi.WeaponSwitched.prototype.setOldweapon = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string newWeapon = 5;
 * @return {string}
 */
proto.rtech.liveapi.WeaponSwitched.prototype.getNewweapon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.WeaponSwitched} returns this
 */
proto.rtech.liveapi.WeaponSwitched.prototype.setNewweapon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rtech.liveapi.ChangeCamera.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.rtech.liveapi.ChangeCamera.TargetCase = {
  TARGET_NOT_SET: 0,
  POI: 1,
  NAME: 2
};

/**
 * @return {proto.rtech.liveapi.ChangeCamera.TargetCase}
 */
proto.rtech.liveapi.ChangeCamera.prototype.getTargetCase = function() {
  return /** @type {proto.rtech.liveapi.ChangeCamera.TargetCase} */(jspb.Message.computeOneofCase(this, proto.rtech.liveapi.ChangeCamera.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.ChangeCamera.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.ChangeCamera.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.ChangeCamera} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ChangeCamera.toObject = function(includeInstance, msg) {
  var f, obj = {
poi: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.ChangeCamera}
 */
proto.rtech.liveapi.ChangeCamera.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.ChangeCamera;
  return proto.rtech.liveapi.ChangeCamera.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.ChangeCamera} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.ChangeCamera}
 */
proto.rtech.liveapi.ChangeCamera.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rtech.liveapi.PlayerOfInterest} */ (reader.readEnum());
      msg.setPoi(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.ChangeCamera.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.ChangeCamera.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.ChangeCamera} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.ChangeCamera.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.rtech.liveapi.PlayerOfInterest} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PlayerOfInterest poi = 1;
 * @return {!proto.rtech.liveapi.PlayerOfInterest}
 */
proto.rtech.liveapi.ChangeCamera.prototype.getPoi = function() {
  return /** @type {!proto.rtech.liveapi.PlayerOfInterest} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rtech.liveapi.PlayerOfInterest} value
 * @return {!proto.rtech.liveapi.ChangeCamera} returns this
 */
proto.rtech.liveapi.ChangeCamera.prototype.setPoi = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.rtech.liveapi.ChangeCamera.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rtech.liveapi.ChangeCamera} returns this
 */
proto.rtech.liveapi.ChangeCamera.prototype.clearPoi = function() {
  return jspb.Message.setOneofField(this, 1, proto.rtech.liveapi.ChangeCamera.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.ChangeCamera.prototype.hasPoi = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.rtech.liveapi.ChangeCamera.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.ChangeCamera} returns this
 */
proto.rtech.liveapi.ChangeCamera.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.rtech.liveapi.ChangeCamera.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rtech.liveapi.ChangeCamera} returns this
 */
proto.rtech.liveapi.ChangeCamera.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 2, proto.rtech.liveapi.ChangeCamera.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.ChangeCamera.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.PauseToggle.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.PauseToggle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.PauseToggle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PauseToggle.toObject = function(includeInstance, msg) {
  var f, obj = {
pretimer: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.PauseToggle}
 */
proto.rtech.liveapi.PauseToggle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.PauseToggle;
  return proto.rtech.liveapi.PauseToggle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.PauseToggle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.PauseToggle}
 */
proto.rtech.liveapi.PauseToggle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPretimer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.PauseToggle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.PauseToggle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.PauseToggle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.PauseToggle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPretimer();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float preTimer = 1;
 * @return {number}
 */
proto.rtech.liveapi.PauseToggle.prototype.getPretimer = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.PauseToggle} returns this
 */
proto.rtech.liveapi.PauseToggle.prototype.setPretimer = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_CreateLobby.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_CreateLobby.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_CreateLobby} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_CreateLobby.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_CreateLobby}
 */
proto.rtech.liveapi.CustomMatch_CreateLobby.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_CreateLobby;
  return proto.rtech.liveapi.CustomMatch_CreateLobby.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_CreateLobby} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_CreateLobby}
 */
proto.rtech.liveapi.CustomMatch_CreateLobby.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_CreateLobby.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_CreateLobby.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_CreateLobby} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_CreateLobby.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_JoinLobby.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_JoinLobby.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_JoinLobby} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_JoinLobby.toObject = function(includeInstance, msg) {
  var f, obj = {
roletoken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_JoinLobby}
 */
proto.rtech.liveapi.CustomMatch_JoinLobby.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_JoinLobby;
  return proto.rtech.liveapi.CustomMatch_JoinLobby.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_JoinLobby} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_JoinLobby}
 */
proto.rtech.liveapi.CustomMatch_JoinLobby.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoletoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_JoinLobby.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_JoinLobby.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_JoinLobby} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_JoinLobby.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoletoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string roleToken = 1;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_JoinLobby.prototype.getRoletoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_JoinLobby} returns this
 */
proto.rtech.liveapi.CustomMatch_JoinLobby.prototype.setRoletoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_LeaveLobby.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_LeaveLobby.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_LeaveLobby} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_LeaveLobby.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_LeaveLobby}
 */
proto.rtech.liveapi.CustomMatch_LeaveLobby.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_LeaveLobby;
  return proto.rtech.liveapi.CustomMatch_LeaveLobby.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_LeaveLobby} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_LeaveLobby}
 */
proto.rtech.liveapi.CustomMatch_LeaveLobby.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_LeaveLobby.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_LeaveLobby.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_LeaveLobby} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_LeaveLobby.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_SetReady.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_SetReady.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_SetReady} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetReady.toObject = function(includeInstance, msg) {
  var f, obj = {
isready: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_SetReady}
 */
proto.rtech.liveapi.CustomMatch_SetReady.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_SetReady;
  return proto.rtech.liveapi.CustomMatch_SetReady.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_SetReady} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_SetReady}
 */
proto.rtech.liveapi.CustomMatch_SetReady.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsready(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_SetReady.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_SetReady.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_SetReady} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetReady.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsready();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool isReady = 1;
 * @return {boolean}
 */
proto.rtech.liveapi.CustomMatch_SetReady.prototype.getIsready = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetReady} returns this
 */
proto.rtech.liveapi.CustomMatch_SetReady.prototype.setIsready = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_GetLobbyPlayers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_GetLobbyPlayers}
 */
proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_GetLobbyPlayers;
  return proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_GetLobbyPlayers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_GetLobbyPlayers}
 */
proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_GetLobbyPlayers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_SetMatchmaking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_SetMatchmaking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_SetMatchmaking}
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_SetMatchmaking;
  return proto.rtech.liveapi.CustomMatch_SetMatchmaking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_SetMatchmaking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_SetMatchmaking}
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_SetMatchmaking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_SetMatchmaking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetMatchmaking} returns this
 */
proto.rtech.liveapi.CustomMatch_SetMatchmaking.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_SetTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_SetTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_SetTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
teamid: jspb.Message.getFieldWithDefault(msg, 1, 0),
targethardwarename: jspb.Message.getFieldWithDefault(msg, 2, ""),
targetnucleushash: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeam}
 */
proto.rtech.liveapi.CustomMatch_SetTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_SetTeam;
  return proto.rtech.liveapi.CustomMatch_SetTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_SetTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeam}
 */
proto.rtech.liveapi.CustomMatch_SetTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargethardwarename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetnucleushash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_SetTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_SetTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_SetTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTargethardwarename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetnucleushash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 teamId = 1;
 * @return {number}
 */
proto.rtech.liveapi.CustomMatch_SetTeam.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeam} returns this
 */
proto.rtech.liveapi.CustomMatch_SetTeam.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string targetHardwareName = 2;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_SetTeam.prototype.getTargethardwarename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeam} returns this
 */
proto.rtech.liveapi.CustomMatch_SetTeam.prototype.setTargethardwarename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string targetNucleusHash = 3;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_SetTeam.prototype.getTargetnucleushash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeam} returns this
 */
proto.rtech.liveapi.CustomMatch_SetTeam.prototype.setTargetnucleushash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_KickPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_KickPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
targethardwarename: jspb.Message.getFieldWithDefault(msg, 1, ""),
targetnucleushash: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_KickPlayer}
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_KickPlayer;
  return proto.rtech.liveapi.CustomMatch_KickPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_KickPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_KickPlayer}
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargethardwarename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetnucleushash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_KickPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_KickPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargethardwarename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetnucleushash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string targetHardwareName = 1;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.prototype.getTargethardwarename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_KickPlayer} returns this
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.prototype.setTargethardwarename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string targetNucleusHash = 2;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.prototype.getTargetnucleushash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_KickPlayer} returns this
 */
proto.rtech.liveapi.CustomMatch_KickPlayer.prototype.setTargetnucleushash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_SetSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_SetSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
playlistname: jspb.Message.getFieldWithDefault(msg, 1, ""),
adminchat: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
teamrename: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
selfassign: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
aimassist: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
anonmode: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_SetSettings}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_SetSettings;
  return proto.rtech.liveapi.CustomMatch_SetSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_SetSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_SetSettings}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaylistname(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdminchat(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTeamrename(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelfassign(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAimassist(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAnonmode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_SetSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_SetSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaylistname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAdminchat();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTeamrename();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSelfassign();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAimassist();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAnonmode();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string playlistName = 1;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.getPlaylistname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetSettings} returns this
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.setPlaylistname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool adminChat = 2;
 * @return {boolean}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.getAdminchat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetSettings} returns this
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.setAdminchat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool teamRename = 3;
 * @return {boolean}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.getTeamrename = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetSettings} returns this
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.setTeamrename = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool selfAssign = 4;
 * @return {boolean}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.getSelfassign = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetSettings} returns this
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.setSelfassign = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool aimAssist = 5;
 * @return {boolean}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.getAimassist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetSettings} returns this
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.setAimassist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool anonMode = 6;
 * @return {boolean}
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.getAnonmode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetSettings} returns this
 */
proto.rtech.liveapi.CustomMatch_SetSettings.prototype.setAnonmode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_GetSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_GetSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_GetSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_GetSettings.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_GetSettings}
 */
proto.rtech.liveapi.CustomMatch_GetSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_GetSettings;
  return proto.rtech.liveapi.CustomMatch_GetSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_GetSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_GetSettings}
 */
proto.rtech.liveapi.CustomMatch_GetSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_GetSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_GetSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_GetSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_GetSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_SetTeamName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_SetTeamName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.toObject = function(includeInstance, msg) {
  var f, obj = {
teamid: jspb.Message.getFieldWithDefault(msg, 1, 0),
teamname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeamName}
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_SetTeamName;
  return proto.rtech.liveapi.CustomMatch_SetTeamName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_SetTeamName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeamName}
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_SetTeamName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_SetTeamName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTeamname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 teamId = 1;
 * @return {number}
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeamName} returns this
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string teamName = 2;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.prototype.getTeamname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetTeamName} returns this
 */
proto.rtech.liveapi.CustomMatch_SetTeamName.prototype.setTeamname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_SetSpawnPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_SetSpawnPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
teamid: jspb.Message.getFieldWithDefault(msg, 1, 0),
spawnpoint: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_SetSpawnPoint}
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_SetSpawnPoint;
  return proto.rtech.liveapi.CustomMatch_SetSpawnPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_SetSpawnPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_SetSpawnPoint}
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpawnpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_SetSpawnPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_SetSpawnPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpawnpoint();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 teamId = 1;
 * @return {number}
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetSpawnPoint} returns this
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 spawnPoint = 2;
 * @return {number}
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.prototype.getSpawnpoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.CustomMatch_SetSpawnPoint} returns this
 */
proto.rtech.liveapi.CustomMatch_SetSpawnPoint.prototype.setSpawnpoint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.CustomMatch_SendChat.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.CustomMatch_SendChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.CustomMatch_SendChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SendChat.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.CustomMatch_SendChat}
 */
proto.rtech.liveapi.CustomMatch_SendChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.CustomMatch_SendChat;
  return proto.rtech.liveapi.CustomMatch_SendChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.CustomMatch_SendChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.CustomMatch_SendChat}
 */
proto.rtech.liveapi.CustomMatch_SendChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.CustomMatch_SendChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.CustomMatch_SendChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.CustomMatch_SendChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.CustomMatch_SendChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.rtech.liveapi.CustomMatch_SendChat.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.CustomMatch_SendChat} returns this
 */
proto.rtech.liveapi.CustomMatch_SendChat.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rtech.liveapi.Request.oneofGroups_ = [[4,5,10,11,12,13,14,15,16,17,18,19,20,21,22]];

/**
 * @enum {number}
 */
proto.rtech.liveapi.Request.ActionsCase = {
  ACTIONS_NOT_SET: 0,
  CHANGECAM: 4,
  PAUSETOGGLE: 5,
  CUSTOMMATCH_CREATELOBBY: 10,
  CUSTOMMATCH_JOINLOBBY: 11,
  CUSTOMMATCH_LEAVELOBBY: 12,
  CUSTOMMATCH_SETREADY: 13,
  CUSTOMMATCH_SETMATCHMAKING: 14,
  CUSTOMMATCH_SETTEAM: 15,
  CUSTOMMATCH_KICKPLAYER: 16,
  CUSTOMMATCH_SETSETTINGS: 17,
  CUSTOMMATCH_SENDCHAT: 18,
  CUSTOMMATCH_GETLOBBYPLAYERS: 19,
  CUSTOMMATCH_SETTEAMNAME: 20,
  CUSTOMMATCH_GETSETTINGS: 21,
  CUSTOMMATCH_SETSPAWNPOINT: 22
};

/**
 * @return {proto.rtech.liveapi.Request.ActionsCase}
 */
proto.rtech.liveapi.Request.prototype.getActionsCase = function() {
  return /** @type {proto.rtech.liveapi.Request.ActionsCase} */(jspb.Message.computeOneofCase(this, proto.rtech.liveapi.Request.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
withack: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
presharedkey: jspb.Message.getFieldWithDefault(msg, 2, ""),
changecam: (f = msg.getChangecam()) && proto.rtech.liveapi.ChangeCamera.toObject(includeInstance, f),
pausetoggle: (f = msg.getPausetoggle()) && proto.rtech.liveapi.PauseToggle.toObject(includeInstance, f),
custommatchCreatelobby: (f = msg.getCustommatchCreatelobby()) && proto.rtech.liveapi.CustomMatch_CreateLobby.toObject(includeInstance, f),
custommatchJoinlobby: (f = msg.getCustommatchJoinlobby()) && proto.rtech.liveapi.CustomMatch_JoinLobby.toObject(includeInstance, f),
custommatchLeavelobby: (f = msg.getCustommatchLeavelobby()) && proto.rtech.liveapi.CustomMatch_LeaveLobby.toObject(includeInstance, f),
custommatchSetready: (f = msg.getCustommatchSetready()) && proto.rtech.liveapi.CustomMatch_SetReady.toObject(includeInstance, f),
custommatchSetmatchmaking: (f = msg.getCustommatchSetmatchmaking()) && proto.rtech.liveapi.CustomMatch_SetMatchmaking.toObject(includeInstance, f),
custommatchSetteam: (f = msg.getCustommatchSetteam()) && proto.rtech.liveapi.CustomMatch_SetTeam.toObject(includeInstance, f),
custommatchKickplayer: (f = msg.getCustommatchKickplayer()) && proto.rtech.liveapi.CustomMatch_KickPlayer.toObject(includeInstance, f),
custommatchSetsettings: (f = msg.getCustommatchSetsettings()) && proto.rtech.liveapi.CustomMatch_SetSettings.toObject(includeInstance, f),
custommatchSendchat: (f = msg.getCustommatchSendchat()) && proto.rtech.liveapi.CustomMatch_SendChat.toObject(includeInstance, f),
custommatchGetlobbyplayers: (f = msg.getCustommatchGetlobbyplayers()) && proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.toObject(includeInstance, f),
custommatchSetteamname: (f = msg.getCustommatchSetteamname()) && proto.rtech.liveapi.CustomMatch_SetTeamName.toObject(includeInstance, f),
custommatchGetsettings: (f = msg.getCustommatchGetsettings()) && proto.rtech.liveapi.CustomMatch_GetSettings.toObject(includeInstance, f),
custommatchSetspawnpoint: (f = msg.getCustommatchSetspawnpoint()) && proto.rtech.liveapi.CustomMatch_SetSpawnPoint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.Request}
 */
proto.rtech.liveapi.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.Request;
  return proto.rtech.liveapi.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.Request}
 */
proto.rtech.liveapi.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithack(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPresharedkey(value);
      break;
    case 4:
      var value = new proto.rtech.liveapi.ChangeCamera;
      reader.readMessage(value,proto.rtech.liveapi.ChangeCamera.deserializeBinaryFromReader);
      msg.setChangecam(value);
      break;
    case 5:
      var value = new proto.rtech.liveapi.PauseToggle;
      reader.readMessage(value,proto.rtech.liveapi.PauseToggle.deserializeBinaryFromReader);
      msg.setPausetoggle(value);
      break;
    case 10:
      var value = new proto.rtech.liveapi.CustomMatch_CreateLobby;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_CreateLobby.deserializeBinaryFromReader);
      msg.setCustommatchCreatelobby(value);
      break;
    case 11:
      var value = new proto.rtech.liveapi.CustomMatch_JoinLobby;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_JoinLobby.deserializeBinaryFromReader);
      msg.setCustommatchJoinlobby(value);
      break;
    case 12:
      var value = new proto.rtech.liveapi.CustomMatch_LeaveLobby;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_LeaveLobby.deserializeBinaryFromReader);
      msg.setCustommatchLeavelobby(value);
      break;
    case 13:
      var value = new proto.rtech.liveapi.CustomMatch_SetReady;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_SetReady.deserializeBinaryFromReader);
      msg.setCustommatchSetready(value);
      break;
    case 14:
      var value = new proto.rtech.liveapi.CustomMatch_SetMatchmaking;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_SetMatchmaking.deserializeBinaryFromReader);
      msg.setCustommatchSetmatchmaking(value);
      break;
    case 15:
      var value = new proto.rtech.liveapi.CustomMatch_SetTeam;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_SetTeam.deserializeBinaryFromReader);
      msg.setCustommatchSetteam(value);
      break;
    case 16:
      var value = new proto.rtech.liveapi.CustomMatch_KickPlayer;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_KickPlayer.deserializeBinaryFromReader);
      msg.setCustommatchKickplayer(value);
      break;
    case 17:
      var value = new proto.rtech.liveapi.CustomMatch_SetSettings;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_SetSettings.deserializeBinaryFromReader);
      msg.setCustommatchSetsettings(value);
      break;
    case 18:
      var value = new proto.rtech.liveapi.CustomMatch_SendChat;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_SendChat.deserializeBinaryFromReader);
      msg.setCustommatchSendchat(value);
      break;
    case 19:
      var value = new proto.rtech.liveapi.CustomMatch_GetLobbyPlayers;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.deserializeBinaryFromReader);
      msg.setCustommatchGetlobbyplayers(value);
      break;
    case 20:
      var value = new proto.rtech.liveapi.CustomMatch_SetTeamName;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_SetTeamName.deserializeBinaryFromReader);
      msg.setCustommatchSetteamname(value);
      break;
    case 21:
      var value = new proto.rtech.liveapi.CustomMatch_GetSettings;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_GetSettings.deserializeBinaryFromReader);
      msg.setCustommatchGetsettings(value);
      break;
    case 22:
      var value = new proto.rtech.liveapi.CustomMatch_SetSpawnPoint;
      reader.readMessage(value,proto.rtech.liveapi.CustomMatch_SetSpawnPoint.deserializeBinaryFromReader);
      msg.setCustommatchSetspawnpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithack();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPresharedkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChangecam();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rtech.liveapi.ChangeCamera.serializeBinaryToWriter
    );
  }
  f = message.getPausetoggle();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rtech.liveapi.PauseToggle.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchCreatelobby();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.rtech.liveapi.CustomMatch_CreateLobby.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchJoinlobby();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.rtech.liveapi.CustomMatch_JoinLobby.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchLeavelobby();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.rtech.liveapi.CustomMatch_LeaveLobby.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchSetready();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.rtech.liveapi.CustomMatch_SetReady.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchSetmatchmaking();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.rtech.liveapi.CustomMatch_SetMatchmaking.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchSetteam();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.rtech.liveapi.CustomMatch_SetTeam.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchKickplayer();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.rtech.liveapi.CustomMatch_KickPlayer.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchSetsettings();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.rtech.liveapi.CustomMatch_SetSettings.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchSendchat();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.rtech.liveapi.CustomMatch_SendChat.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchGetlobbyplayers();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.rtech.liveapi.CustomMatch_GetLobbyPlayers.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchSetteamname();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.rtech.liveapi.CustomMatch_SetTeamName.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchGetsettings();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.rtech.liveapi.CustomMatch_GetSettings.serializeBinaryToWriter
    );
  }
  f = message.getCustommatchSetspawnpoint();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.rtech.liveapi.CustomMatch_SetSpawnPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool withAck = 1;
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.getWithack = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.setWithack = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string preSharedKey = 2;
 * @return {string}
 */
proto.rtech.liveapi.Request.prototype.getPresharedkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.setPresharedkey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ChangeCamera changeCam = 4;
 * @return {?proto.rtech.liveapi.ChangeCamera}
 */
proto.rtech.liveapi.Request.prototype.getChangecam = function() {
  return /** @type{?proto.rtech.liveapi.ChangeCamera} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.ChangeCamera, 4));
};


/**
 * @param {?proto.rtech.liveapi.ChangeCamera|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setChangecam = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearChangecam = function() {
  return this.setChangecam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasChangecam = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PauseToggle pauseToggle = 5;
 * @return {?proto.rtech.liveapi.PauseToggle}
 */
proto.rtech.liveapi.Request.prototype.getPausetoggle = function() {
  return /** @type{?proto.rtech.liveapi.PauseToggle} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.PauseToggle, 5));
};


/**
 * @param {?proto.rtech.liveapi.PauseToggle|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setPausetoggle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearPausetoggle = function() {
  return this.setPausetoggle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasPausetoggle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CustomMatch_CreateLobby customMatch_CreateLobby = 10;
 * @return {?proto.rtech.liveapi.CustomMatch_CreateLobby}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchCreatelobby = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_CreateLobby} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_CreateLobby, 10));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_CreateLobby|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchCreatelobby = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchCreatelobby = function() {
  return this.setCustommatchCreatelobby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchCreatelobby = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CustomMatch_JoinLobby customMatch_JoinLobby = 11;
 * @return {?proto.rtech.liveapi.CustomMatch_JoinLobby}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchJoinlobby = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_JoinLobby} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_JoinLobby, 11));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_JoinLobby|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchJoinlobby = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchJoinlobby = function() {
  return this.setCustommatchJoinlobby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchJoinlobby = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CustomMatch_LeaveLobby customMatch_LeaveLobby = 12;
 * @return {?proto.rtech.liveapi.CustomMatch_LeaveLobby}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchLeavelobby = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_LeaveLobby} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_LeaveLobby, 12));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_LeaveLobby|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchLeavelobby = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchLeavelobby = function() {
  return this.setCustommatchLeavelobby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchLeavelobby = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CustomMatch_SetReady customMatch_SetReady = 13;
 * @return {?proto.rtech.liveapi.CustomMatch_SetReady}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchSetready = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_SetReady} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_SetReady, 13));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_SetReady|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchSetready = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchSetready = function() {
  return this.setCustommatchSetready(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchSetready = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CustomMatch_SetMatchmaking customMatch_SetMatchmaking = 14;
 * @return {?proto.rtech.liveapi.CustomMatch_SetMatchmaking}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchSetmatchmaking = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_SetMatchmaking} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_SetMatchmaking, 14));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_SetMatchmaking|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchSetmatchmaking = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchSetmatchmaking = function() {
  return this.setCustommatchSetmatchmaking(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchSetmatchmaking = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CustomMatch_SetTeam customMatch_SetTeam = 15;
 * @return {?proto.rtech.liveapi.CustomMatch_SetTeam}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchSetteam = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_SetTeam} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_SetTeam, 15));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_SetTeam|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchSetteam = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchSetteam = function() {
  return this.setCustommatchSetteam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchSetteam = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional CustomMatch_KickPlayer customMatch_KickPlayer = 16;
 * @return {?proto.rtech.liveapi.CustomMatch_KickPlayer}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchKickplayer = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_KickPlayer} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_KickPlayer, 16));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_KickPlayer|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchKickplayer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchKickplayer = function() {
  return this.setCustommatchKickplayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchKickplayer = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional CustomMatch_SetSettings customMatch_SetSettings = 17;
 * @return {?proto.rtech.liveapi.CustomMatch_SetSettings}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchSetsettings = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_SetSettings} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_SetSettings, 17));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_SetSettings|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchSetsettings = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchSetsettings = function() {
  return this.setCustommatchSetsettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchSetsettings = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional CustomMatch_SendChat customMatch_SendChat = 18;
 * @return {?proto.rtech.liveapi.CustomMatch_SendChat}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchSendchat = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_SendChat} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_SendChat, 18));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_SendChat|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchSendchat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchSendchat = function() {
  return this.setCustommatchSendchat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchSendchat = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional CustomMatch_GetLobbyPlayers customMatch_GetLobbyPlayers = 19;
 * @return {?proto.rtech.liveapi.CustomMatch_GetLobbyPlayers}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchGetlobbyplayers = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_GetLobbyPlayers} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_GetLobbyPlayers, 19));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_GetLobbyPlayers|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchGetlobbyplayers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchGetlobbyplayers = function() {
  return this.setCustommatchGetlobbyplayers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchGetlobbyplayers = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional CustomMatch_SetTeamName customMatch_SetTeamName = 20;
 * @return {?proto.rtech.liveapi.CustomMatch_SetTeamName}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchSetteamname = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_SetTeamName} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_SetTeamName, 20));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_SetTeamName|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchSetteamname = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchSetteamname = function() {
  return this.setCustommatchSetteamname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchSetteamname = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional CustomMatch_GetSettings customMatch_GetSettings = 21;
 * @return {?proto.rtech.liveapi.CustomMatch_GetSettings}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchGetsettings = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_GetSettings} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_GetSettings, 21));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_GetSettings|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchGetsettings = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchGetsettings = function() {
  return this.setCustommatchGetsettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchGetsettings = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional CustomMatch_SetSpawnPoint customMatch_SetSpawnPoint = 22;
 * @return {?proto.rtech.liveapi.CustomMatch_SetSpawnPoint}
 */
proto.rtech.liveapi.Request.prototype.getCustommatchSetspawnpoint = function() {
  return /** @type{?proto.rtech.liveapi.CustomMatch_SetSpawnPoint} */ (
    jspb.Message.getWrapperField(this, proto.rtech.liveapi.CustomMatch_SetSpawnPoint, 22));
};


/**
 * @param {?proto.rtech.liveapi.CustomMatch_SetSpawnPoint|undefined} value
 * @return {!proto.rtech.liveapi.Request} returns this
*/
proto.rtech.liveapi.Request.prototype.setCustommatchSetspawnpoint = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.rtech.liveapi.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Request} returns this
 */
proto.rtech.liveapi.Request.prototype.clearCustommatchSetspawnpoint = function() {
  return this.setCustommatchSetspawnpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Request.prototype.hasCustommatchSetspawnpoint = function() {
  return jspb.Message.getField(this, 22) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.RequestStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.RequestStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.RequestStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.RequestStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.RequestStatus}
 */
proto.rtech.liveapi.RequestStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.RequestStatus;
  return proto.rtech.liveapi.RequestStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.RequestStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.RequestStatus}
 */
proto.rtech.liveapi.RequestStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.RequestStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.RequestStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.RequestStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.RequestStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.rtech.liveapi.RequestStatus.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rtech.liveapi.RequestStatus} returns this
 */
proto.rtech.liveapi.RequestStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
result: (f = msg.getResult()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.Response}
 */
proto.rtech.liveapi.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.Response;
  return proto.rtech.liveapi.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.Response}
 */
proto.rtech.liveapi.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.rtech.liveapi.Response.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rtech.liveapi.Response} returns this
 */
proto.rtech.liveapi.Response.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional google.protobuf.Any result = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.rtech.liveapi.Response.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.rtech.liveapi.Response} returns this
*/
proto.rtech.liveapi.Response.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.Response} returns this
 */
proto.rtech.liveapi.Response.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.Response.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rtech.liveapi.LiveAPIEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.rtech.liveapi.LiveAPIEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rtech.liveapi.LiveAPIEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.LiveAPIEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
eventSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
gamemessage: (f = msg.getGamemessage()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rtech.liveapi.LiveAPIEvent}
 */
proto.rtech.liveapi.LiveAPIEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rtech.liveapi.LiveAPIEvent;
  return proto.rtech.liveapi.LiveAPIEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rtech.liveapi.LiveAPIEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rtech.liveapi.LiveAPIEvent}
 */
proto.rtech.liveapi.LiveAPIEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setEventSize(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setGamemessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rtech.liveapi.LiveAPIEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rtech.liveapi.LiveAPIEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rtech.liveapi.LiveAPIEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rtech.liveapi.LiveAPIEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventSize();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getGamemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional fixed32 event_size = 1;
 * @return {number}
 */
proto.rtech.liveapi.LiveAPIEvent.prototype.getEventSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.rtech.liveapi.LiveAPIEvent} returns this
 */
proto.rtech.liveapi.LiveAPIEvent.prototype.setEventSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Any gameMessage = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.rtech.liveapi.LiveAPIEvent.prototype.getGamemessage = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.rtech.liveapi.LiveAPIEvent} returns this
*/
proto.rtech.liveapi.LiveAPIEvent.prototype.setGamemessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rtech.liveapi.LiveAPIEvent} returns this
 */
proto.rtech.liveapi.LiveAPIEvent.prototype.clearGamemessage = function() {
  return this.setGamemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rtech.liveapi.LiveAPIEvent.prototype.hasGamemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.rtech.liveapi.PlayerOfInterest = {
  UNSPECIFIED: 0,
  NEXT: 1,
  PREVIOUS: 2,
  KILL_LEADER: 3,
  CLOSEST_ENEMY: 4,
  CLOSEST_PLAYER: 5,
  LATEST_ATTACKER: 6
};

goog.object.extend(exports, proto.rtech.liveapi);
