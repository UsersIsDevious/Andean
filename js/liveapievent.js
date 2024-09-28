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

goog.provide('proto.rtech.liveapi.LiveAPIEvent');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Any');

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
gamemessage: (f = msg.getGamemessage()) && proto.google.protobuf.Any.toObject(includeInstance, f)
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
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
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
      proto.google.protobuf.Any.serializeBinaryToWriter
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
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 3));
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


