const clients = [];

/**
 * SSE クライアント接続用のエンドポイント
 * @param {Request} req - クライアントのリクエストオブジェクト
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 */
function sseEndpoint(req, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // クライアント接続をリストに追加
  clients.push(res);

  // クライアント接続が終了したらリストから削除
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
async function closeAllClients() {
    console.log('Sending shutdown message to all clients...');
  
    // サーバー停止メッセージを全クライアントに送信
    await sendClients('Server is shutting down.');
  
    // 全クライアント接続を順次終了
    setTimeout(() => {
      clients.forEach(client => {
        if (client) client.end(); // クライアント接続を終了
      });
      clients.length = 0; // クライアントリストをクリア
      console.log('All SSE client connections have been closed.');
    }, 500); // 500ms 待機してからクライアント接続を終了
  }

module.exports = { sseEndpoint, sendClients, closeAllClients };
