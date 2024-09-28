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

goog.provide('proto.rtech.liveapi.Request');
goog.provide('proto.rtech.liveapi.Request.ActionsCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.rtech.liveapi.ChangeCamera');
goog.require('proto.rtech.liveapi.CustomMatch_CreateLobby');
goog.require('proto.rtech.liveapi.CustomMatch_GetLobbyPlayers');
goog.require('proto.rtech.liveapi.CustomMatch_GetSettings');
goog.require('proto.rtech.liveapi.CustomMatch_JoinLobby');
goog.require('proto.rtech.liveapi.CustomMatch_KickPlayer');
goog.require('proto.rtech.liveapi.CustomMatch_LeaveLobby');
goog.require('proto.rtech.liveapi.CustomMatch_SendChat');
goog.require('proto.rtech.liveapi.CustomMatch_SetMatchmaking');
goog.require('proto.rtech.liveapi.CustomMatch_SetReady');
goog.require('proto.rtech.liveapi.CustomMatch_SetSettings');
goog.require('proto.rtech.liveapi.CustomMatch_SetSpawnPoint');
goog.require('proto.rtech.liveapi.CustomMatch_SetTeam');
goog.require('proto.rtech.liveapi.CustomMatch_SetTeamName');
goog.require('proto.rtech.liveapi.PauseToggle');

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


