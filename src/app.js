const common = require('./utils/common');
const { Player, CustomMatch, Datacenter, Item, Weapon, Ring } = require('./utils/andeanClass');
let config = common.readConfig('../../config.json');
const language = common.readConfig('../../locals/ja.json');
const { LiveAPIEvent } = require('../bin/events_pb'); // 必要なメッセージ型をインポート
const messageTypes = require('./utils/messageTypes');
const sendMapData = require('./services/sendMapData')
const apexCommon = require('./services/apexCommon')


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
 * @type {CustomMatch}
 */
let match;
let lobby = new CustomMatch("lobby");
function analyze_message(category, msg) {
    console.log("メッセージタイプ" + category)
    switch (category.toString()) {
        case "Init":
            if (msg.platform != "") { break; }
            match = new CustomMatch(`${msg.timestamp}`)  // web側で名前の指定があれば適用する
            break;
        case "Vector3":  // 今のところ何もイベント発生しない
            break;
        case "Player":  // 今のところ何もイベント発生しない
            break;
        case "CustomMatch_LobbyPlayer":  // 今のところ何もイベント発生しない
            break;
        case "Datacenter":  // 今のところ何もイベント発生しない
            break;
        case "Version":  // 今のところ何もイベント発生しない
            break;
        case "InventoryItem":  // 今のところ何もイベント発生しない
            break;
        case "LoadoutConfiguration":  // 今のところ何もイベント発生しない
            break;
        case "CustomMatch_LobbyPlayers":
            lobby = new CustomMatch("lobby")
            for (let i = 0; i < msg.playersList.length; i++) {
                lobby.addPlayer(new Player(msg.playersList[i].name, msg.playersList[i].teamid, msg.playersList[i].nucleushash, msg.playersList[i].hardwarename))
            }
            break;
        case "RequestStatus":  // 今のところ何もイベント発生しない
            break;
        case "Response":
            break;
        case "MatchSetup":
            if (msg.startingloadout.weaponsList != []) {
                for (let i = 0; i < msg.startingloadout.weaponsList.length; i++) {
                    match.startingLoadout.addItem(new Item(msg.startingloadout.weaponsList[i].item, checkItemLevel(msg.startingloadout.weaponsList[i].item), msg.startingloadout.weaponsList[i].quantity));
                }
            }
            if (msg.startingloadout.equipmentList != []) {
                for (let i = 0; i < msg.startingloadout.equipmentList.length; i++) {
                    match.startingLoadout.addItem(new Item(msg.startingloadout.equipmentList[i].item, checkItemLevel(msg.startingloadout.equipmentList[i].item), msg.startingloadout.equipmentList[i].quantity));
                }
            }
            match.setMatchSetup(msg.map, msg.playlistname, msg.playlistdesc, new Datacenter(msg.datacenter.timestamp, msg.datacenter.category, msg.datacenter.name), msg.aimassiston, msg.anonymousmode, msg.serverid);
            sendMapData.sendMapInitialization(msg.map, match)
            break;
        case "GameStateChanged":
            try {
                if (msg.state === "Playing") { match.setStartTimeStamp(msg.timestamp) };
                match.setGameState(msg.state);   
            } catch (error) {
                lobby.setGameState(msg.state);
            }
            break;
        case "CharacterSelected":
            updatePlayer(msg.player, match.getPlayer(msg.player.nucleushash), match.mapName, true);
            break;
        case "MatchStateEnd":
            break;
        case "RingStartClosing":
            match.addRingElement(new Ring(msg.timestamp, msg.category, msg.stage, msg.center, msg.currentradius, msg.shrinkduration, match.mapName, msg.endradius));
            sendMapData.sendRingUpdate(match);
            break;
        case "RingFinishedClosing":
            match.addRingElement(new Ring(msg.timestamp, msg.category, msg.stage, msg.center, msg.currentradius, msg.shrinkduration, match.mapName));
            sendMapData.sendRingUpdate(match);
            break;
        case "PlayerConnected":
            match.addPlayer(new Player(msg.player.name, msg.player.teamid, msg.player.nucleushash, msg.player.hardwarename));
            updatePlayer(msg.player, match.getPlayer(msg.player.nucleushash), match.mapName);
            break;
        case "PlayerDisconnected":
            break;
        case "PlayerStatChanged":
            break;
        case "PlayerUpgradeTierChanged":
            break;
        case "PlayerDamaged":
            /**
             * 1.HP減らす
             * 2.ダメージ数増やす
             * 3.イベントクラスのobjectに付随する情報を
             */
            break;
        case "PlayerKilled":
            break;
        case "PlayerDowned":
            break;
        case "PlayerAssist":
            break;
        case "SquadEliminated":
            break;
        case "GibraltarShieldAbsorbed":
            break;
        case "RevenantForgedShadowDamaged":
            break;
        case "ChangeCamera":
            break;
        case "PauseToggle":
            break;
        case "CustomMatch_SetSettings":
            break;
        case "PlayerRespawnTeam":
            break;
        case "PlayerRevive":
            break;
        case "ArenasItemSelected":
            break;
        case "ArenasItemDeselected":
            break;
        case "InventoryPickUp":
            updatePlayer(msg.player, match.getPlayer(msg.player.nucleushash), match.mapName);
            if (Object.keys(language.weapons_label).find((key) => language.weapons_label[key] === msg.item) != undefined) {
                match.getPlayer(msg.player.nucleushash).weaponList.push(new Weapon(Object.keys(language.weapons_label).find((key) => language.weapons_label[key] === msg.item), checkItemLevel(Object.keys(language.weapons_label).find((key) => language.weapons_label[key] === msg.item))))
            } else {
                match.getPlayer(msg.player.nucleushash).inventory.addItem(new Item(msg.item, checkItemLevel(msg.item), msg.item.quantity));
            }
            break;
        case "InventoryDrop":
            break;
        case "InventoryUse":
            break;
        case "BannerCollected":
            break;
        case "PlayerAbilityUsed":
            break;
        case "LegendUpgradeSelected":
            break;
        case "ZiplineUsed":
            break;
        case "GrenadeThrown":
            break;
        case "BlackMarketAction":
            break;
        case "WraithPortal":
            break;
        case "WarpGateUsed":
            break;
        case "AmmoUsed":
            break;
        case "WeaponSwitched":
            break;
        case "ObserverSwitched":
            for (let i = 0; i < msg.targetteamList.length; i++) {
                updatePlayer(msg.targetteamList[i], match.getPlayer(msg.targetteamList[i].nucleushash), match.mapName);
            }
            break;
        case "ObserverAnnotation":
            break;
        default:
            console.warn("Unknown Type Message")
            break;
    }
}

/**
 * Playerクラスのオブジェクトを更新する
 * @param {Object} json
 * @param {Player} player
 * @param {Boolean} characterSelected
 * @param {String} mapName
 */
function updatePlayer(json, player, mapName, characterSelected=false) {
    player.updatePositionAndAngles(json.pos.x, json.pos.y, json.pos.z, json.angles.y, mapName);
    player.updateHealthAndShields(json.currenthealth, json.maxhealth, json.shieldhealth, json.shieldmaxhealth);
    if (player.getStatus().teamName === "") {
        player.setTeamName(json.teamname);
    }
    if (player.getStatus().squadIndex === -1) {
        player.setSquadIndex(json.squadindex);
    }
    if (characterSelected) {
        player.updateCharacter(json.character, json.skin);
    }
}


/**
 * アイテム名からレベルをチェックする
 * @param {String} name
 */
function checkItemLevel(name) {
    let level = new RegExp(`/\(${language.item.level_label} (\d+)\)/g`).exec( name );
    if (level == null) { level = 1 };
    return level;
}

function getPlayerStatus(match) {
    if (match.gameState == "Playing") {
        for (const teamId in match.teams) {
            apexCommon.change_camera("name", match.getPlayer(match.teams[teamId][0]).name);
        }
    }
}

async function update() {
    if (match) {
        getPlayerStatus(match);
        sendMapData.sendPlayerPositionUpdate(match);
    }
}

const intervalId = setInterval(() => {
    update();
}, 16);

// サーバーが全て起動した後に呼ばれる処理
common.registerOnServersStarted((servers) => {
    console.log("サーバーが全て起動しました！");
    // メッセージ処理用のコールバック関数を設定
    common.getServerList().websocketServer.setHandleMessageCallback((message, ws) => {
        const liveAPIEvent = LiveAPIEvent.deserializeBinary(message);
        // console.log('LiveAPIEvent:', liveAPIEvent.toObject());

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
            console.warn(`Unknown message type received: ${typeUrl}`);
        }
        // 必要な処理をここに追加
    });
    common.getServerList().websocketServer_web.setHandleMessageCallback((message, ws) => {
        common.getServerList().websocketServer_web.broadcastToAllClients(JSON.parse(message).data.message)
    })
});


/**
 * メッセージを処理する
 * @param {Object} message - デコードされたメッセージオブジェクト
 * @param {string} messageType メッセージの種類
 * @param {WebSocket} ws - 送信元のWebSocketインスタンス
 */
function handleMessage(message, messageType) {
    // ログを保存
    common.saveLog(JSON.stringify(message.toObject()), common.getServerList().websocketServer.fileName)
    // console.log(`Received ${messageType} message:`, message.toObject());
    analyze_message(messageType, message.toObject())
}

module.exports = { startApexLegends, analyze_message }