const fs = require('fs');
const main = require('./main'); // 外部の main モジュールを読み込み
const server = require('./server');
const { exec } = require('child_process');
const readline = require('readline');

function exit(){
    process.exit(1);
}

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









module.exports = { 
    readConfig, 
    runCommand,
    runPowerShellCommand,
    runRegularCommand,
    exit
};