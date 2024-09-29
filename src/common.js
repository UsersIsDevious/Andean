const fs = require('fs');
const path = require('path');
const main = require('./main'); 
const server = require('./server');
const websocketServer = require('./websocketServer')
const { exec } = require('child_process');
const readline = require('readline');



// メイン関数でサーバーを開始
function startAllServers() {
    // HTTP サーバーと WebSocket サーバーを同時に起動
    server.startServer();
    websocketServer.createWebSocketServer(7777);
}


function exit(){
    process.exit(1);
}


/**
 * 指定したメッセージをログファイルに保存する関数
 * @param {string} message - 保存するログメッセージ
 * @param {string} [logFileName='app.log'] - 保存先のログファイル名（省略可能、デフォルトは 'app.log'）
 * @returns {void}
 */
function saveLog(message, logFileName = 'app.log') {
    // 現在の日時を取得してタイムスタンプを作成
    const timestamp = new Date().toISOString();
  
    // ログファイルのパスを指定（カレントディレクトリに保存される）
    const logFilePath = path.join(__dirname, logFileName);
  
    // ログメッセージの形式を指定（[YYYY-MM-DDTHH:mm:ss.sssZ] ログメッセージ）
    const logMessage = `[${timestamp}] ${message}\n`;
  
    // ログをファイルに追記（ファイルが存在しない場合は新規作成）
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        // ログ保存失敗時にエラーメッセージをコンソールに出力
        console.error('ログの保存に失敗しました:', err);
      } else {
        // 正常にログが保存されたことをコンソールに出力
        console.log('ログを保存しました:', logMessage.trim());
      }
    });
  }


/**
 * config.jsonを読み込む関数
 * @returns {object} - configの内容
 */
function readConfig() {
    try {
        // __dirname は現在のファイルのディレクトリを指す
        const configPath = path.join(__dirname, '..', 'config.json');
        const configData = fs.readFileSync(configPath, 'utf8');
        return JSON.parse(configData);
    } catch (error) {
        console.error(`Configファイルの読み込みエラー (パス: ${path.join(__dirname, '..', 'config.json')}):`, error.message);
        return null;
    }
}

/**
 * コマンドを実行する共通関数
 * @param {string} command - 実行したいコマンド
 * @returns {Promise<string>} - コマンドの出力を返すPromise
 */
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`エラー: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
        });
    });
}

/**
 * PowerShellコマンドを実行する関数
 * @param {string} command - 実行したいPowerShellコマンド
 * @returns {Promise<string>} - コマンドの出力を返すPromise
 */
function runPowerShellCommand(command) {
    return runCommand(`powershell.exe -Command "${command}"`);
}

/**
 * 通常のコマンドを実行する関数
 * @param {string} command - 実行したいコマンド
 * @returns {Promise<string>} - コマンドの出力を返すPromise
 */
function runRegularCommand(command) {
    return runCommand(command);
}


module.exports = { 
    startAllServers,
    readConfig, 
    runCommand,
    runPowerShellCommand,
    runRegularCommand,
    exit
};