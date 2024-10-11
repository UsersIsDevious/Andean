const { sendClients } = require('./sseController'); // SSE のクライアント管理関数をインポート
const common = require('../utils/shutdownManager');

/**
 * ボタンが押された時に色をクライアントに送信するエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function handleNotify(req, res) {
  const color = req.body.color || 'red'; // デフォルト値は赤
  sendClients(`{"color": "${color}"}`);
  res.sendStatus(200);
}

/**
 * サーバーを停止するエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function stopServer(req, res) {
  res.sendStatus(200);
  common.shutdownServers(); // すべてのサーバーを停止
}

module.exports = { handleNotify, stopServer };
