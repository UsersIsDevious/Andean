const { sendClients } = require('./sseController'); // SSE のクライアント管理関数をインポート
const common = require('../utils/shutdownManager');
const app = require('../app')
const serverService = require('../services/serverService');
const server = require('react-dom/server');

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
  const result = app.startApexLegends(); // Apex Legends を起動
  res.status(200).send({ success: result });
}


/**
 * コンフィグを保存するエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function saveConfig(req, res) {
  const result = serverService.saveConfig(req.body);
  res.status(200).send(result);
}

/**
 * コンフィグを返すエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function loadConfig(req, res) {
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


/**
 * 計算したスコアを返すエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
async function getScore(req, res) {
  const score = await serverService.makeScore();
  console.log("[GET SCORE] result", score);
  if (score === false) {
      res.status(400).send({success: false});
  } else {
      res.status(200).send({success: true, score: score});
  }
}


/**
 * CSVファイルを読み込むエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function readCSV(req, res) {
  const result = serverService.readCSV(req.body.csvData);
  res.status(200).send(result);
}



module.exports = { handleNotify, stopServer, startGame , saveConfig, loadConfig, resetConfig, getScore, readCSV };
