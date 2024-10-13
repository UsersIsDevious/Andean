const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');


/**
 * サーバー（HTTP, WebSocket）の起動を管理する関数
 * @param {Object} httpServer - HTTPサーバーのインスタンス
 * @param {Object} websocketServer - WebSocketサーバーのインスタンス
 * @returns {Object} - 起動したサーバーのインスタンス
 */
function startAllServers(httpServer, websocketServer) {
  const servers = {
    httpServer: httpServer.startServer(),
    websocketServer: websocketServer.createWebSocketServer(7777)
  };
  console.log("All servers are up and running:", servers);
  return servers;
}

/**
 * 指定したメッセージをログファイルに保存する関数
 * @param {string} message - 保存するログメッセージ
 * @param {string} [logFileName='app.log'] - 保存先のログファイル名（省略可能、デフォルトは 'app.log'）
 */
function saveLog(message, logFileName = 'app.log') {
  const timestamp = new Date().toISOString();
  const logFilePath = path.join(__dirname, '..', logFileName);
  const logMessage = `[${timestamp}] ${message}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('ログの保存に失敗しました:', err);
    } else {
      //console.log('ログを保存しました:', logMessage.trim());
    }
  });
}

/**
 * config.json を読み込む関数
 * @param {string} [configPath='../config/config.json'] - 設定ファイルのパス（デフォルトパスを設定）
 * @returns {Object|null} - 読み込んだ設定内容（エラー時は null を返す）
 */
function readConfig(configPath = '../config/config.json') {
  try {
    const absolutePath = path.resolve(__dirname, configPath);
    const configData = fs.readFileSync(absolutePath, 'utf8');
    return JSON.parse(configData);
  } catch (error) {
    console.error(`Config ファイルの読み込みエラー (パス: ${configPath}):`, error.message);
    return null;
  }
}

/**
 * 任意のコマンドを実行する関数
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
 * PowerShell コマンドを実行する関数
 * @param {string} command - 実行したいPowerShellコマンド
 * @returns {Promise<string>} - コマンドの出力を返すPromise
 */
function runPowerShellCommand(command) {
  return runCommand(`powershell.exe -Command "${command}"`);
}

/**
 * 通常のシェルコマンドを実行する関数
 * @param {string} command - 実行したいコマンド
 * @returns {Promise<string>} - コマンドの出力を返すPromise
 */
function runRegularCommand(command) {
  return runCommand(command);
}

// モジュールとしてエクスポート
module.exports = {
  startAllServers,
  readConfig,
  runCommand,
  runPowerShellCommand,
  runRegularCommand,
  saveLog,
};
