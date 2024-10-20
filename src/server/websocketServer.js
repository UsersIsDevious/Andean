const WebSocket = require('ws');
const { LiveAPIEvent } = require('../../bin/events_pb'); // 必要なメッセージ型をインポート
const messageTypes = require('../utils/messageTypes');
const { analyze_message } = require('../app')
const { saveLog } = require('../utils/common')

class WebSocketServer {
  constructor(port) {
    this.port = port;
    this.clients = new Set();
    this.fileName = new Date().toISOString().replace(/[:.]/g, '-') + `.txt`;

    this.handleMessageCallback = null; // 初期値はnullに設定

    this.wss = new WebSocket.Server({ port }, () => {
      console.log(`WebSocket server is running on port ${this.port}...`);
    });

    // クライアント接続イベントの処理
    this.wss.on('connection', (ws) => {
      console.log(`Client connected on port ${this.port}`);
      this.clients.add(ws);

      ws.on('message', (message) => this.handleIncomingMessage(message, ws));

      ws.on('close', () => {
        this.clients.delete(ws);
        console.log(`Client disconnected from port ${this.port}`);
      });
    });
  }

  /**
   * コールバック関数を設定するメソッド
   * @param {Function} callback - handleMessageで呼び出されるコールバック関数
   */
  setHandleMessageCallback(callback) {
    this.handleMessageCallback = callback;
  }

  /**
   * 受信メッセージを処理する
   * @param {Buffer} message - 受信したメッセージ
   * @param {WebSocket} ws - 送信元のWebSocketインスタンス
   */
  handleIncomingMessage(message, ws) {
    try {
      // ここで設定されたコールバック関数を呼び出す
      if (this.handleMessageCallback) {
        this.handleMessageCallback(message, ws);
      } else {
        console.error('No handleMessage callback set.');
      }
    } catch (error) {
      console.error('Error decoding message:', error);
      console.log('Raw message:', message.toString('base64'));
    }
  }

  /**
   * メッセージを処理する
   * @param {Object} message - デコードされたメッセージオブジェクト
   * @param {string} messageType メッセージの種類
   * @param {WebSocket} ws - 送信元のWebSocketインスタンス
   */
  handleMessage(message, messageType, ws) {
    // ログを保存
    saveLog(JSON.stringify(message.toObject()), this.fileName);
    console.log(`Processed message on port ${this.port}:`, message.toObject());
    analyze_message(messageType, message.toObject())
  }

  /**
   * クライアントにメッセージを送信する
   * @param {WebSocket} ws - 対象クライアント
   * @param {string} message - 送信するメッセージ
   */
  sendToClient(ws, message) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(message);
    }
  }

  /**
   * 全ての接続中クライアントにメッセージを送信する
   * @param {string} message - 送信するメッセージ
   */
  broadcastToAllClients(message) {
    this.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }

  /**
   * サーバーを停止する
   */
  stopServer() {
    return new Promise((resolve, reject) => {
      this.wss.close((err) => {
        if (err) {
          console.error(`Error stopping server on port ${this.port}:`, err);
          reject(err);
        } else {
          console.log(`Server on port ${this.port} stopped.`);
          resolve();
        }
      });
    });
  }
}

module.exports = WebSocketServer;
