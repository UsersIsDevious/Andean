// src/controllers/apiController.js
const apexService = require('../services/apexService');
const sendComponent = require('../services/sendComponent');

/**
 * API 用のエンドポイントを処理する関数
 * @param {Request} req - HTTP リクエストオブジェクト
 * @param {Response} res - HTTP レスポンスオブジェクト
 */
async function handleApiRequest(req, res) {
  const { slug } = req.query;
  
  // /view/* のリクエストを特定
  if (slug === 'view') {
    sendComponent.sendComponentToClients("mapView");
  } else {
    await apexService.apexLiveApiCall(req, res);
  }
}

module.exports = { handleApiRequest };
