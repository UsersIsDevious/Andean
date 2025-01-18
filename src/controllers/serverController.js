const { sendClients } = require('./sseController'); // SSE のクライアント管理関数をインポート
const common = require('../utils/shutdownManager');
const app = require('../app')

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

/**
 * ゲームを起動するエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function startGame(req, res) {
  res.sendStatus(200);
  app.startApexLegends()
}


/**
 * コンフィグを保存するエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function saveConfig(req, res) {
  res.sendStatus(200);
}


/**
 * コンフィグをデフォルトにリセットするエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function resetConfig(req, res) {
  res.sendStatus(200);
}



module.exports = { handleNotify, stopServer, startGame , saveConfig , resetConfig };
