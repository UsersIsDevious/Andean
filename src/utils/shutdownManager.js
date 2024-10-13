const httpServer = require('../server/httpServer');
const websocketServer = require('../server/websocketServer');
const { closeAllClients } = require('../controllers/sseController');

/**
 * 全サーバーと SSE クライアントの接続をクローズしてアプリケーションを終了する関数
 */
async function shutdownServers() {
  try {
    // 1. SSE クライアントをすべて閉じる
    console.log('SSE クライアントを閉じています...');
    await closeAllClients();

    // 2. HTTP サーバーを停止
    console.log('HTTP サーバーを停止しています...');
    await httpServer.stopServer();

    // 3. WebSocket サーバーを停止
    console.log('WebSocket サーバーを停止しています...');
    await websocketServer.stopServer();

    console.log('全サーバーが正常に停止しました。');
    process.exit(0);
  } catch (error) {
    console.error('サーバー停止時にエラーが発生しました:', error);
    process.exit(1); // エラー発生時は異常終了
  }
}

module.exports = { shutdownServers };
