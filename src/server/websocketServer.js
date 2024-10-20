const WebSocket = require('ws');
const { LiveAPIEvent, Response } = require('../../bin/events_pb'); // 必要なメッセージ型をインポート
const messageTypes = require('../utils/messageTypes');
const { analyze_message } = require('../app')
const { saveLog } = require('../utils/common')

let wss;  // WebSocket サーバーインスタンス
let fileName; 

/**
 * WebSocketサーバーを作成する共通関数
 * @param {number} port WebSocketサーバーのポート番号
 * @returns {WebSocket.Server} WebSocketサーバー
 */
function createWebSocketServer(port) {
  fileName = new Date().toISOString().replace(/[:.]/g, '-') + '.txt';

  wss = new WebSocket.Server({ port }, () => {
    console.log(`WebSocket server is running on port ${port}...`);
  });

  // WebSocketの接続イベントの処理
  wss.on('connection', (ws) => {
    console.log('Connected!');

    // 接続中のクライアントにウェルカムメッセージを送信
    //sendToClient(ws, 'Welcome to the WebSocket server!');

    // メッセージ受信イベントの設定
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
    const liveAPIEvent = LiveAPIEvent.deserializeBinary(message);
    console.log('LiveAPIEvent:', liveAPIEvent.toObject());

    const gamemessage = liveAPIEvent.getGamemessage();
    const typeUrl = gamemessage.getTypeUrl(); // メッセージタイプを取得
    const valueBinary = gamemessage.getValue_asU8(); // バイナリ値を取得

    if (messageTypes[typeUrl]) {
      const messageInstance = messageTypes[typeUrl].deserializeBinary(valueBinary);
      handleMessage(messageInstance, typeUrl.replace("type.googleapis.com/rtech.liveapi.", ""));
      if (messageInstance.toString().includes('type.googleapis.com/rtech.liveapi.CustomMatch_SetSettings')) {
        const result = messageInstance.toObject().result;
        const responseTypeUrl = result.typeUrl; // typeUrlを取得
        const responseValueBinary = result.value; // valueを取得
        const responseInstance = messageTypes[responseTypeUrl].deserializeBinary(responseValueBinary);
        handleMessage(responseInstance, responseTypeUrl.replace("type.googleapis.com/rtech.liveapi.", ""));
      }
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
  saveLog(JSON.stringify(message.toObject()),fileName);
  console.log(`Received ${messageType} message:`, message.toObject());
  analyze_message(message.toObject())
}

/**
 * クライアントにメッセージを送信する関数
 * @param {WebSocket} ws - 対象クライアントの WebSocket インスタンス
 * @param {string} message - 送信するメッセージ
 */
function sendToClient(ws, message) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(message);
  }
}

/**
 * 全ての接続中クライアントにメッセージを送信する関数
 * @param {string} message - 送信するメッセージ
 */
function broadcastToAllClients(message) {
  console.log("ここまでは北", message)
  wss.clients.forEach((client) => {
    console.log("こんなclientがいるらしい", client)
    if (client.readyState === WebSocket.OPEN) {
      console.log("ここまで来てるなら遅れていなきゃおかしい")
      client.send(message);
    }
  });
}

/**
 * WebSocket サーバーを停止する関数
 * @returns {Promise} - WebSocket サーバーの停止を表す Promise
 */
function stopServer() {
  return new Promise((resolve, reject) => {
    if (websocketServer) {
      websocketServer.close((err) => {
        if (err) {
          console.error('WebSocket サーバー停止時にエラーが発生しました:', err);
          reject(err);
        } else {
          console.log('WebSocket サーバーが正常に停止しました。');
          resolve();
        }
      });
    } else {
      resolve(); // サーバーが起動していない場合は即時解決
    }
  });
}

// モジュールとしてエクスポート
module.exports = {
  handleIncomingMessage,
  createWebSocketServer,
  handleMessage,
  sendToClient,
  broadcastToAllClients,
  stopServer,
  wss
};
