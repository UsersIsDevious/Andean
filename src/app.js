const common = require('./utils/common');
const { Player, CustomMatch, Vector3 } = require('./utils/andeanClass');
let config = common.readConfig('../../config.json');
const { LiveAPIEvent } = require('../bin/events_pb'); // 必要なメッセージ型をインポート
const messageTypes = require('./utils/messageTypes');
/**
 * CustomMatch object
 * @type {CustomMatch}
 */
let match;


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

/**
 * メッセージを分析し、要素を抽出する。
 * @param {String} category
 * @param {Object} msg
 */
function analyze_message(msg) {
    switch (msg.category) {
        case 'init':
            if (msg.platform != "") { break; }
            match = new CustomMatch(`${msg.timestamp}`)  // web側で名前の指定があれば適用する
            break;
        case 'observerSwitched':
            for (let i = 0; i < msg.targetteamList; i++) {
                const targetJson = msg.targetteamList[i]
                const targetObj = match.getPlayer(msg.targetteamList[i].nucleushash)

                targetObj.updatePositionAndAngles(targetJson.pos.x, targetJson.pos.y, targetJson.pos.z, targetJson.angles.y)
                targetObj.updateHealthAndShields(targetJson.currenthealth, targetJson.maxhealth, targetJson.shieldhealth, targetJson.shieldmaxhealth)
                console.log(JSON.stringify(targetObj))
            }
            break;
        default:
            // console.log("Unknown Type Message")
            break;
    }
}

function start_custom() {
    match = new CustomMatch("much名")
    player1 = new Player("ninngenn", 1, "hjogehoge", "PC-Steam")
    player1.teamId = 1;
    match.addPlayer(player1)
    console.log(JSON.stringify(match))
}

start_custom()

async function update() {
    await common.getServerList().websocketServer_web.broadcastToAllClients("a")
}

// const intervalId = setInterval(() => {
//     update();
// //}, 16);
// }, 1000);

// サーバーが全て起動した後に呼ばれる処理
common.registerOnServersStarted((servers) => {
    console.log("サーバーが全て起動しました！", servers);
    // メッセージ処理用のコールバック関数を設定
    common.getServerList().websocketServer.setHandleMessageCallback((message, ws) => {
        const liveAPIEvent = LiveAPIEvent.deserializeBinary(message);
        console.log('LiveAPIEvent:', liveAPIEvent.toObject());

        const gamemessage = liveAPIEvent.getGamemessage();
        const typeUrl = gamemessage.getTypeUrl(); // メッセージタイプを取得
        const valueBinary = gamemessage.getValue_asU8(); // バイナリ値を取得

        if (messageTypes[typeUrl]) {
            const messageInstance = messageTypes[typeUrl].deserializeBinary(valueBinary);
            handleMessage(messageInstance, typeUrl.replace("type.googleapis.com/rtech.liveapi.", ""));
            if (messageInstance.toString().includes('type.googleapis.com/rtech.liveapi.CustomMatch_SetSettings')) {
                const result = messageInstance.toObject().result;
                const responseTypeUrl = result.typeUrl; // typeUrlを取得
                const responseValueBinary = result.value; // valueを取得
                const responseInstance = messageTypes[responseTypeUrl].deserializeBinary(responseValueBinary);
                handleMessage(responseInstance, responseTypeUrl.replace("type.googleapis.com/rtech.liveapi.", ""));
            }
        } else {
            console.log(`Unknown message type received: ${typeUrl}`);
        }
        // 必要な処理をここに追加
    });
});

function handleMessage(message, messageType){
    common.saveLog(JSON.stringify(message.toObject()), common.getServerList().websocketServer.fileName)
    console.log(`Received ${messageType} message:`, message.toObject());
    analyze_message(messageType, message.toObject())
}

module.exports = { startApexLegends, analyze_message }