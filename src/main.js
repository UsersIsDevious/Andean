const fs = require('fs');
const server = require('./server');
const { exec } = require('child_process');

/**
 * config.jsonを読み込む関数
 * @returns {object} - configの内容
 */
function readConfig() {
    try {
        const configData = fs.readFileSync('config.json', 'utf8');
        return JSON.parse(configData);
    } catch (error) {
        console.error('Configファイルの読み込みエラー:', error);
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

/**
 * Apex Legendsを起動する関数
 * @param {string} path - Apex Legendsのインストールパス
 */
function startApexLegends(path) {

    if (!path) {
        console.error('Apex Legendsのパスが指定されていません。');
        return;
    }
    
    const command = `"${path}"`; // パスが空でない場合に起動コマンドを構築
    runRegularCommand(command)
        .then(output => {
            console.log('Apex Legendsが起動しました:', output);
        })
        .catch(err => {
            console.error('Apex Legendsの起動中にエラーが発生しました:', err);
        });
}

// 使用例
const config = readConfig();

if (config) {
//    console.log(`App is running on port: ${config.port}`);
//    console.log(`Database host: ${config.database.host}`);
    // Apex Legendsのパスを取得して起動
    const apexPath = config.apexlegends.path;
    //startApexLegends(apexPath);
}


// サーバーを起動
server.startServer();

// サーバーの停止
exports.stopServer = function (req, res) {
    console.log(`Server stopped`);
    process.exit(1);
}

// 一定時間ごとに色を送信する
setInterval(() => {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  server.notifyClients(randomColor);
  console.log(`Sent color: ${randomColor}`);
}, 5000);