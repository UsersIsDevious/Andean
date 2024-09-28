const WebSocket = require('ws');
const path = require('path');
const protobuf = require('google-protobuf');
const { LiveAPIEvent } = require('./events_pb'); // 生成されたファイルからインポート

// WebSocketサーバーの作成
const wss = new WebSocket.Server({ port: 7777 }, () => {
  console.log('WebSocket server is running on port 7777...');
});

// WebSocketの接続イベント
wss.on('connection', (ws) => {
  console.log('Connected!');

  ws.on('message', (message) => {
    try {
      // 受信メッセージをデコード
      const liveAPIEvent = LiveAPIEvent.deserializeBinary(message);
      console.log(liveAPIEvent.toObject()); // オブジェクトに変換して表示
    } catch (error) {
      console.error('Error decoding message:', error);
      console.log('Raw message:', message.toString());
    }
  });
});