const { sendClients } = require('./sseController'); // SSE のクライアント管理関数をインポート
const common = require('../utils/shutdownManager');
const app = require('../app')
const serverService = require('../services/serverService')

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
  app.startApexLegends(); // Apex Legends を起動
}


/**
 * コンフィグを保存するエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function saveConfig(req, res) {
  res.sendStatus(200);
  serverService.saveConfig(req.body);
}

/**
 * コンフィグを返すエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function loadConfig(req, res) {
  console.log("ログ読み込みたいリクエストきてるー")
  res.status(200).send(app.config);
}


/**
 * コンフィグをデフォルトにリセットするエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function resetConfig(req, res) {
  res.sendStatus(200);
}



module.exports = { handleNotify, stopServer, startGame , saveConfig, loadConfig, resetConfig };
