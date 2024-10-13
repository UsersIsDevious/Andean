// src/controllers/apiController.js
const apexService = require('../services/apexService');

/**
 * API 用のエンドポイントを処理する関数
 * @param {Request} req - HTTP リクエストオブジェクト
 * @param {Response} res - HTTP レスポンスオブジェクト
 */
function handleApiRequest(req, res) {
  apexService.apexLiveApiCall(req, res);
}

module.exports = { handleApiRequest };
