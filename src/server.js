const express = require('express'); // Express フレームワークの読み込み
const common = require('./common');
const apexCommon = require('./apexCommon'); 
const main = require('./main'); // 外部の main モジュールを読み込み
const app = express(); // Express アプリケーションを初期化
const port = 3000; // サーバーのポート番号を設定

// SSE クライアントの接続を管理するためのリスト
let clients = [];
let server; // サーバーインスタンスを保存する変数

// 静的ファイルの提供
app.use(express.static('public'));

// JSON ボディの解析を有効にする
app.use(express.json());

// SSE エンドポイント
app.get('/events', (req, res) => {
  setupSSEClient(res, req); // SSEクライアントの初期設定
});

// API用 エンドポイント
app.get('/api', (req, res) => {
  apexCommon.apexLiveApiCall(res, req); // SSEクライアントの初期設定
});

/**
 * ボタンが押された時に色をクライアントに送信する処理
 * @param {Request} req - リクエストオブジェクト
 * @param {Response} res - レスポンスオブジェクト
 */
app.post('/notify', (req, res) => {
  const color = req.body.color || 'red'; // リクエストのボディから色を取得（デフォルトは赤）
  sendClients(`{"color": "${color}"}`); // クライアントに色を通知
  res.sendStatus(200); // リクエストが成功したことをクライアントに通知
});

/**
 * 停止ボタンが押された時にサーバーを停止する処理
 * @param {Request} req - リクエストオブジェクト
 * @param {Response} res - レスポンスオブジェクト
 */
app.post('/stopServer', (req, res) => {
  res.sendStatus(200); // リクエストが成功したことをクライアントに通知
  stopServer(); // サーバーを停止する関数を呼び出し
  common.exit();
});

/**
 * サーバーの起動関数
 * @param {number} port - サーバーがリッスンするポート番号
 */
function startServer() {
  server = app.listen(port, () => {
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
    clients = clients.filter(client => client !== res);
  });
}

/**
 * クライアントにデータを送信する関数
 * @param {string} message - 送信するメッセージ内容
 */
function sendClients(message) {
  console.log(`data: ${message}`)
  // 接続中の全てのクライアントにデータを送信
  clients.forEach(client => {
    client.write(`data: ${message}\n\n`);
  });
}

/**
 * 全てのクライアント接続を閉じる関数
 */
function closeAllClients() {
  clients.forEach(client => {
    client.end(); // クライアント接続を終了
  });
  clients = []; // クライアントリストをクリア
}

// モジュールとしてエクスポート
module.exports = { startServer, stopServer, sendClients };
