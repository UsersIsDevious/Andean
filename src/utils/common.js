const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const config = require('../../config.json');
let servers = {}; // サーバーリストを保持するオブジェクト

// コールバックリストを保持
let onServersStartedCallbacks = [];

/**
 * 指定されたメッセージをコンソールに出力します。
 * 
 * @param {string} message - 出力するメッセージ。
 * @param {string} [type="normal"] - メッセージのタイプ ("normal", "error", "warning"など)。
 */
function logMessage(message, type = "normal") {
  switch (type.toLowerCase()) {
      case "error":
          console.error(message);
          break;
      case "warning":
          console.warn(message);
          break;
      default:
          console.log(message);
          break;
  }
}

/**
 * 指定されたフォルダが存在しない場合は作成します
 * @param {string} folder - 作成したいフォルダのName
 */
function ensureFolderExists(folder) {
  const folderPath = path.join(__dirname, folder)
  // フォルダが存在するか確認
  if (!fs.existsSync(folderPath)) {
      // 存在しない場合はフォルダを作成
      fs.mkdirSync(folderPath, { recursive: true });
      logMessage(`Folder created: ${folderPath}`);
  } else {
    logMessage(`Folder already exists: ${folderPath}`);
  }
}

/**
 * JSONファイルにデータを蓄積し、保存します。
 * 既存のデータがある場合は、それに新しいデータを追加してから保存されます。
 * 
 * @param {Object} _class - 新しく保存するデータオブジェクト
 * @param {string} filename - ファイル名
 * @param {string} newData.class - クラス名
 */
function saveData(filename,_class) {
  let filePath = path.join(__dirname, config.output, filename + ".json");
  let existingData = [];

  // 既存データの読み込み
  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    existingData = JSON.parse(rawData);
  }

  // 新しいデータを追加
  existingData.push(_class);

  // データをファイルに書き込み
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
}


/**
 * JSONファイルにPacketデータを保存します。
 * @param {string} filename - ファイル名
 * @param {string} outputPath - ファイルの保存先のパス
 * @param {Object} _class - 新しく保存するPacketデータオブジェクト
 */
function saveUpdate(filename, outputPath, _class) {
  let filePath = path.join(__dirname, outputPath, filename + ".json");

  try {
    // データをファイルに書き込み
    fs.writeFileSync(filePath, JSON.stringify(_class, null, 2));
  } catch (error) {
    console.error(`Packet ファイルの保存エラー (パス: ${filePath}):`, error.message);
  }
}


/**
 * サーバーが全て立ち上がった時に呼ばれるコールバックを登録する関数
 * @param {Function} callback - サーバーが立ち上がった際に実行したい関数
 */
function registerOnServersStarted(callback) {
  if (typeof callback === 'function') {
    onServersStartedCallbacks.push(callback);
  } else {
    console.error("登録しようとしたものが関数ではありません:", callback);
  }
}

/**
 * サーバーリストを取得する関数
 * @returns {Object} - 現在のサーバーリスト
 */
function getServerList() {
  if (Object.keys(servers).length > 0) {
    return servers;
  } else {
    console.error("サーバーがまだ起動していません");
    return null;
  }
}

/**
 * サーバー（HTTP, WebSocket）の起動を管理する関数
 * @param {Object} httpServer - HTTPサーバーのインスタンス
 * @param {Object} websocketServer - WebSocketサーバーのインスタンス
 * @returns {Object} - 起動したサーバーのインスタンス
 */
function startAllServers(httpServer, websocketServer, websocketServer_web) {
  const servers_res = {
    httpServer: httpServer.startServer(),
    websocketServer: websocketServer,
    websocketServer_web: websocketServer_web
  };
  servers = {
    httpServer: httpServer,
    websocketServer: websocketServer,
    websocketServer_web: websocketServer_web
  }
  // 登録されたコールバックを全て呼び出す
  onServersStartedCallbacks.forEach(callback => {
    try {
      callback(servers);  // サーバーオブジェクトを引数として渡す
    } catch (error) {
      console.error("コールバック実行中にエラーが発生しました:", error);
    }
  });

  return servers_res;
}

/**
 * 指定したメッセージをログファイルに保存する関数
 * @param {string} message - 保存するログメッセージ
 * @param {string} [logFileName='app.log'] - 保存先のログファイル名（省略可能、デフォルトは 'app.log'）
 */
function saveLog(message, logFileName = 'app.log') {
  const timestamp = new Date().toISOString();
  const logFilePath = path.join(__dirname, config.log_dir, logFileName);
  // const logMessage = `[${timestamp}] ${message}\n`;
  const logMessage = `${message},\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('ログの保存に失敗しました:', err);
    } else {
      //console.log('ログを保存しました:', logMessage.trim());
    }
  });
}

/**
 * Configファイルに保存します。
 * @param {Object} _class - 新しく保存するデータオブジェクト
 */
function saveFile(filePath = "../../config.json", _class) {
  try {
    // データをファイルに書き込み
    const absolutePath = path.resolve(__dirname, filePath);
    const result = fs.writeFileSync(absolutePath, JSON.stringify(_class, null, 2));
    return result;
  } catch (error) {
    console.error(`Config ファイルの保存エラー (パス: ${filePath}):`, error.message);
    return null;
  }
}

/**
 * config.json を読み込む関数
 * @param {string} [filePath='../../config.json'] - 設定ファイルのパス（デフォルトパスを設定）
 * @returns {Object|null} - 読み込んだ設定内容（エラー時は null を返す）
 */
function readFile(filePath = '../../config.json') {
  try {
    const absolutePath = path.resolve(__dirname, filePath);
    const data = readText(absolutePath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Config ファイルの読み込みエラー (パス: ${filePath}):`, error.message);
    return null;
  }
}

/**
 * テキストを読み込む関数
 * @param {string} - 設定ファイルのパス
 * @returns {Object|null} - 読み込んだ設定内容（エラー時は null を返す）
 */
function readText(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  }
  catch (error) {
    console.error(`ファイルの読み込みエラー (パス: ${filePath}):`, error.message);
    return null;
  }
}

/**
 * 任意のコマンドを実行する関数
 * @param {string} command - 実行したいコマンド
 * @param {object} options - exec関数のオプション（例: env）
 * @returns {Promise<string>} - コマンドの出力を返すPromise
 */
function runCommand(command, options = {}) {
  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
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
  readFile,
  readText,
  runCommand,
  runPowerShellCommand,
  runRegularCommand,
  saveLog,
  getServerList,
  registerOnServersStarted,
  saveFile,
  saveData,
  saveUpdate,
  logMessage,
  ensureFolderExists,
};
