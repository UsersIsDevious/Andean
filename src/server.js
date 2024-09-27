const express = require('express');
const app = express();
const main = require('./main');
const port = 3000;

// SSE クライアントの接続を管理するためのリスト
let clients = [];

// 静的ファイルの提供
app.use(express.static('public'));

// JSON ボディの解析を有効にする
app.use(express.json());

// SSE エンドポイント
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 新しいクライアントを追加
  clients.push(res);

  // 接続が終了したらクライアントを削除
  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
});

// ボタンが押された時に色をクライアントに送信
app.post('/notify', (req, res) => {
  const color = req.body.color || 'red'; // デフォルトは赤
  clients.forEach(client => {
    client.write(`data: { "color": "${color}" }\n\n`);
  });
  res.sendStatus(200);
});

// 停止ボタンが押された時に処理を終了する
app.post('/stopServer', (req, res) => {
  res.sendStatus(200);
  main.stopServer()
})

// サーバーの起動
function startServer() {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

// モジュールとしてエクスポート
module.exports = { startServer, notifyClients };

// クライアントに通知するための関数
function notifyClients(color) {
  clients.forEach(client => {
    client.write(`data: { "color": "${color}" }\n\n`);
  });
}
