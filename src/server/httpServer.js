const express = require('express');
const path = require('path');
const sseRoutes = require('../routes/sseRoutes');   // SSE ルート
const apiRoutes = require('../routes/apiRoutes');   // API ルート
const serverRoutes = require('../routes/serverRoutes'); // サーバー制御ルート
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

/**
 * サーバーのミドルウェアとルート設定を行う関数
 */
function configureServer() {
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '../../public')));

    // ルート設定
    app.use(sseRoutes);
    app.use(apiRoutes);
    app.use(serverRoutes);
}

/**
 * HTTP サーバーを起動する関数
 * @returns {Object} - HTTP サーバーインスタンス
 */
function startServer() {
    configureServer();
    return app.listen(port, () => {
        console.log(`HTTP Server is running on http://localhost:${port}`);
    });
}

/**
 * HTTP サーバーを停止する関数
 * @returns {Promise} - HTTP サーバーの停止を表す Promise
 */
function stopServer() {
    return new Promise((resolve, reject) => {
        if (server) {
            server.close((err) => {
                if (err) {
                    console.error('HTTP サーバー停止時にエラーが発生しました:', err);
                    reject(err);
                } else {
                    console.log('HTTP サーバーが正常に停止しました。');
                    resolve();
                }
            });
        } else {
            resolve(); // サーバーが起動していない場合は即時解決
        }
    });
}

module.exports = { startServer, stopServer };
