const WebSocket = require('ws');
const { LiveAPIEvent } = require('../bin/events_pb'); // 必要なメッセージ型をインポート
const messageTypes = require('./messageTypes');
const apexCommon = require('./apexCommon');

/**
 * WebSocketサーバーを作成する共通関数
 * @param {number} port WebSocketサーバーのポート番号
 * @returns {WebSocket.Server} WebSocketサーバー
 */
function createWebSocketServer(port) {
  const wss = new WebSocket.Server({ port }, () => {
    console.log(`WebSocket server is running on port ${port}...`);
  });

  // WebSocketの接続イベントの処理
  wss.on('connection', (ws) => {
    console.log('Connected!');
    apexCommon.setWebSocket(ws)
    ws.on('message', (message) => handleIncomingMessage(message, ws));
  });

  return wss;
}

/**
 * WebSocketからの受信メッセージを処理する関数
 * @param {Buffer} message WebSocketからの受信メッセージ
 * @param {WebSocket} ws WebSocketインスタンス
 */
function handleIncomingMessage(message, ws) {
  try {
    // 受信メッセージをLiveAPIEventとしてデコード
    const liveAPIEvent = LiveAPIEvent.deserializeBinary(message);
    console.log('LiveAPIEvent:', liveAPIEvent.toObject());

    // `gamemessage` の value (google.protobuf.Any) を取得
    const gamemessage = liveAPIEvent.getGamemessage();
    const typeUrl = gamemessage.getTypeUrl(); // メッセージタイプを取得
    const valueBinary = gamemessage.getValue_asU8(); // バイナリ値を取得

    // メッセージタイプに基づいたデシリアライズと処理の呼び出し
    if (messageTypes[typeUrl]) {
      const messageInstance = messageTypes[typeUrl].deserializeBinary(valueBinary);
      handleMessage(messageInstance, messageTypes[typeUrl].name);
    } else {
      console.log(`Unknown message type received: ${typeUrl}`);
    }
  } catch (error) {
    console.error('Error decoding message:', error);
    console.log('Raw message:', message.toString('base64'));
  }
}

/**
 * 各メッセージタイプの処理を行う関数
 * @param {Object} message デコードされたメッセージオブジェクト
 * @param {string} messageType メッセージの種類
 */
function handleMessage(message, messageType) {
  console.log(`Received ${messageType} message:`, message.toObject());
}

module.exports = {
  handleIncomingMessage,
  createWebSocketServer,
  handleMessage
};
