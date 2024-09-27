const fs = require('fs');
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
 * PowerShellコマンドを実行する関数
 * @param {string} command - 実行したいPowerShellコマンド
 * @returns {Promise<string>} - コマンドの出力を返すPromise
 */
function runPowerShellCommand(command) {
    return new Promise((resolve, reject) => {
        exec(`powershell.exe -Command "${command}"`, (error, stdout, stderr) => {
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

'$found = Get-PSDrive -PSProvider FileSystem | ForEach-Object {Get-ChildItem -Path $_.Root -Recurse -Filter "r5apex.exe" -ErrorAction SilentlyContinue -First 1} | Where-Object { $_ -ne $null }if ($found) {Write-Output "Found at: $($found.FullName)"}'
command_a = 'Get-PSDrive -PSProvider FileSystem | ForEach-Object {Get-ChildItem -Path $_.Root -Recurse -Filter "r5apex.exe" -ErrorAction SilentlyContinue}'
// 使用例
const config = readConfig();

if (config) {
    // PowerShellコマンドの実行
    runPowerShellCommand(command_a)
        .then(output => {
            console.log('コマンドの出力:', output);
        })
        .catch(err => {
            console.error('エラー:', err);
        });
}
