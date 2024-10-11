const express = require('express');
const path = require('path');
const common = require('../utils/common');
const apexCommon = require('../services/apexCommon');
const bodyParser = require('body-parser');

let server; // サーバーインスタンスを保存する変数
const app = express(); // Express アプリケーションを初期化
const clients = []; // SSE クライアントの接続を管理するためのリスト

/**
 * HTTP サーバーの初期化関数
 * @param {number} port - サーバーがリッスンするポート番号
 */
function initializeServer(port = 3000) {
  configureMiddleware();
  setupRoutes();
  server = startServer(port);
}

/**
 * ミドルウェアの設定関数
 */
function configureMiddleware() {
  // JSON ボディの解析を有効にする
  app.use(bodyParser.json());
  // 静的ファイルの提供
  app.use(express.static(path.join(__dirname, '../public')));
}

/**
 * すべてのルートを設定する関数
 */
function setupRoutes() {
  // SSE エンドポイント
  app.get('/events', sseEndpoint);

  // API用 エンドポイント
  app.get('/api', apiEndpoint);

  // ボタンが押された時に色をクライアントに送信する処理
  app.post('/notify', handleNotify);

  // 停止ボタンが押された時にサーバーを停止する処理
  app.post('/stopServer', stopServerEndpoint);
}

/**
 * SSE クライアント接続用のエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function sseEndpoint(req, res) {
  setupSSEClient(res, req);
}

/**
 * API用のエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function apiEndpoint(req, res) {
  apexCommon.apexLiveApiCall(res, req);
}

/**
 * ボタンが押された時に色をクライアントに送信するエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function handleNotify(req, res) {
  const color = req.body.color || 'red'; // リクエストのボディから色を取得（デフォルトは赤）
  sendClients(`{"color": "${color}"}`);
  res.sendStatus(200);
}

/**
 * サーバーの停止ボタン用のエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function stopServerEndpoint(req, res) {
  res.sendStatus(200); // リクエストが成功したことをクライアントに通知
  stopServer(); // サーバーを停止する関数を呼び出し
  common.exit();
}

/**
 * サーバーの起動関数
 * @param {number} port - サーバーがリッスンするポート番号
 * @returns {Object} - サーバーインスタンス
 */
function startServer(port) {
  return app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

/**
 * サーバーの停止関数
 */
function stopServer() {
  if (server) {
    // 全クライアントにサーバー終了通知を送信して接続を閉じる
    sendClients('{"message":"Server is shutting down."}');
    closeAllClients(); // 全クライアント接続を終了
    server.close(() => {
      console.log('サーバーが正常に停止しました。');
    });
  } else {
    console.log('サーバーは起動していません。');
  }
}

/**
 * SSE クライアントの初期設定を行う関数
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 * @param {Request} req - クライアントのリクエストオブジェクト
 */
function setupSSEClient(res, req) {
  res.setHeader('Content-Type', 'text/event-stream'); // クライアントにSSE（Server-Sent Events）設定のヘッダーを設定
  res.setHeader('Cache-Control', 'no-cache'); // キャッシュを無効化
  res.setHeader('Connection', 'keep-alive'); // 接続を維持する設定

  // 新しいクライアント接続をリストに追加
  clients.push(res);

  // クライアントの接続が終了したらリストから削除
  req.on('close', () => {
    clients.splice(clients.indexOf(res), 1);
  });
}

/**
 * クライアントにデータを送信する関数
 * @param {string} message - 送信するメッセージ内容
 */
function sendClients(message) {
  console.log(`data: ${message}`);
  clients.forEach(client => {
    if (client && !client.finished) {
      client.write(`data: ${message}\n\n`);
    }
  });
}

/**
 * 全てのクライアント接続を閉じる関数
 */
function closeAllClients() {
  clients.forEach(client => {
    if (client) client.end(); // クライアント接続を終了
  });
  clients.length = 0; // クライアントリストをクリア
}

// モジュールとしてエクスポート
module.exports = {
  initializeServer,
  stopServer,
  sendClients
};
