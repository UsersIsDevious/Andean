const common = require('./common');
 
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
const config = common.readConfig();

if (config) {
//    console.log(`App is running on port: ${config.port}`);
//    console.log(`Database host: ${config.database.host}`);
    // Apex Legendsのパスを取得して起動
    const apexPath = config.apexlegends.path;
    //startApexLegends(apexPath);
}


// サーバーを起動
//server.startServer();
common.startAllServers();

/* // 一定時間ごとに色を送信する
setInterval(() => {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  server.sendClients(`"color": "{${randomColor}}"`);
  console.log(`Sent color: ${randomColor}`);
}, 5000); */
