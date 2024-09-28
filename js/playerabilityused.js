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

goog.provide('proto.rtech.liveapi.PlayerAbilityUsed');

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


