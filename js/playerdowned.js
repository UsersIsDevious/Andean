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

goog.provide('proto.rtech.liveapi.PlayerDowned');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.rtech.liveapi.Player');

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


