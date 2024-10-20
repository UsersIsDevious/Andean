const common = require('./utils/common');
let config = common.readConfig('../../config.json');

/**
 * 親のコマンドプロンプトを閉じる関数
 * taskkill コマンドを使って親のコマンドプロンプトを閉じる
 * "WINDOWTITLE eq %CD%" は、現在のディレクトリ名がウィンドウタイトルと一致するプロセスをターゲットにします
 */
/**
function exit() {
    exec('taskkill /f /fi "WINDOWTITLE eq %CD%" /t', function(err, stdout, stderr) {
        if (err) {
            // エラーが発生した場合は、エラーメッセージをコンソールに表示
            console.error('エラーが発生しました: ' + err.message);
            return;
        }
        // コマンドが成功した場合、親のバッチファイルを終了した旨をコンソールに表示
        console.log('親のバッチファイルを終了しました。');
    });
} 
*/

/**
 * Apex Legendsを起動する関数
 */
function startApexLegends() {
    if (config) {
        if (!config.apexlegends.path) {
            console.error('Apex Legendsのパスが指定されていません。');
            return;
        }
        if (!config.apexlegends.option) {
            console.error('Apex Legendsの起動オプションが指定されていません。');
            return;
        }
    } else {
        config = common.readConfig('../../config.json');
    }

    const command = `"${config.apexlegends.path}" + ${config.apexlegends.option}`; // パスが空でない場合に起動コマンドを構築
    common.runRegularCommand(command)
        .then(output => {
            console.log('Apex Legendsが起動しました:', output);
        })
        .catch(err => {
            console.error('Apex Legendsの起動中にエラーが発生しました:', err);
        });
}


// サーバーを起動
// server.startServer();
// common.startAllServers();

/* // 一定時間ごとに色を送信する
setInterval(() => {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  server.sendClients(`"color": "{${randomColor}}"`);
  console.log(`Sent color: ${randomColor}`);
}, 5000); */

async function update() {
    console.log(Object.keys(common.getServerList().websocketServer_web));
    await common.getServerList().websocketServer_web.broadcastToAllClients("a")
}

const intervalId = setInterval(() => {
    update();
//}, 16);
}, 1000);

module.exports = { startApexLegends }