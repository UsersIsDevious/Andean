const common = require('./utils/common');
const { Player, CustomMatch, Datacenter, Item, Weapon, Ring, Event } = require('./utils/andeanClass');
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
        common.logMessage('親のバッチファイルを終了しました。');
    });
} 
*/

/**
 * Apex Legendsを起動する関数
 */
/**
 *
 *
 * @return {*} 
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
            common.logMessage('Apex Legendsが起動しました:', output);
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
  common.logMessage(`Sent color: ${randomColor}`);
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
    common.logMessage("メッセージタイプ" + category)
    switch (category.toString()) {
        case "Init": {
            /**
             * @todo web側で名前の指定があれば適用する
             */
            if (msg.platform != "") { break; }
            match = new CustomMatch(`${msg.timestamp}`);
            break;
        }
        case "Vector3": {  // 今のところ何もイベント発生しない
            break;
        }
        case "Player": {  // 今のところ何もイベント発生しない
            break;
        }
        case "CustomMatch_LobbyPlayer": {  // 今のところ何もイベント発生しない
            break;
        }
        case "Datacenter": {  // 今のところ何もイベント発生しない
            break;
        }
        case "Version": {  // 今のところ何もイベント発生しない
            break;
        }
        case "InventoryItem": {  // 今のところ何もイベント発生しない
            break;
        }
        case "LoadoutConfiguration": {  // 今のところ何もイベント発生しない
            break;
        }
        case "CustomMatch_LobbyPlayers": {
            lobby = new CustomMatch("lobby")
            for (let i = 0; i < msg.playersList.length; i++) {
                lobby.addPlayer(new Player(msg.playersList[i].name, msg.playersList[i].teamid, msg.playersList[i].nucleushash, msg.playersList[i].hardwarename))
            }
            break;
        }
        case "RequestStatus": {  // 今のところ何もイベント発生しない
            break;
        }
        case "Response": {
            break;
        }
        case "MatchSetup": {
            const startingloadout = msg.startingLoadout;
            if (startingloadout.weaponsList != []) {
                for (let i = 0; i < startingloadout.weaponsList.length; i++) {
                    const weapon = startingloadout.weaponsList[i];
                    const weaponLabel = weapon.item;
                    match.startingLoadout.addItem(new Weapon(weaponLabel, language.weapons_label[weapon.item], checkItemLevel(weapon.item)));
                }
            }
            const equipmentList = startingloadout.equipmentList;
            if (equipmentList != []) {
                for (let i = 0; i < equipmentList.length; i++) {
                    const equipment = equipmentList[i];
                    match.startingLoadout.addOrUpdateItem(equipment.item, equipment.quantity, checkItemLevel(equipment.item));
                }
            }
            match.setMatchSetup(msg.map, msg.playlistname, msg.playlistdesc, msg.aimassiston, msg.anonymousmode, msg.serverid);
            match.datacenter.update(msg.datacenter.timestamp, msg.datacenter.category, msg.datacenter.name);
            sendMapData.sendMapInitialization(msg.map, match)
            break;
        }
        case "GameStateChanged": {
            try {
                if (msg.state === "Playing") { match.setStartTimeStamp(msg.timestamp) };
                match.setState(msg.state);
            } catch (error) {
                lobby.setState(msg.state);
            }
            break;
        }
        case "CharacterSelected": {
            const player = processUpdatePlayer(msg, match, true);
            break;
        }
        case "MatchStateEnd": {
            for (let i = 0; i < msg.winnersList.length; i++) {
                updatePlayer(msg.winnersList[i], match.getPlayer(msg.winnersList[i].nucleushash), match.mapName);
            }
            match.setEndTimeStamp(msg.timestamp);
            match.addEventElement(new Event(msg.timestamp, msg.category, msg.winnersList[0].teamId, { state: msg.state }));
            match.setState(msg.state);
            break;
        }
        case "RingStartClosing": {
            const rings = match.rings;
            if (rings == []) {
                match.addRingElement(new Ring(msg.timestamp, msg.category, msg.stage, msg.center, msg.currentradius, msg.shrinkduration, match.mapOffset));
            }
            rings[rings.length - 1].updateRing(msg.timestamp, msg.category, msg.currentRadius, msg.shrinkduration, msg.endradius, match.mapOffset);
            break;
        }
        case "RingFinishedClosing": {
            match.addRingElement(new Ring(msg.timestamp, msg.category, msg.stage, msg.center, msg.currentradius, msg.shrinkduration, match.mapOffset));
            break;
        }
        case "PlayerConnected": {
            const msg_player = msg.player;
            const nucleushash = msg_player.nucleushash;
            if (match.getPlayer(nucleushash) == null) {
                match.addPlayer(new Player(msg_player.name, msg_player.teamid, nucleushash, msg_player.hardwarename));
            }
            const player = processUpdatePlayer(msg, match);
            player.setOnlineStatus(true);
            break;
        }
        case "PlayerDisconnected": {
            const player = processUpdatePlayer(msg, match);
            player.setOnlineStatus(false);
            break;
        }
        case "PlayerStatChanged": {
            const player = processUpdatePlayer(msg, match);
            const newvalue = msg.newvalue;
            switch (msg.statname) {
                case "knockdowns":
                    player.setDown(newvalue);
                    break;
                case "kills":
                    player.setKill(newvalue);
                    break;
                case "knockdownAssists":
                    player.setKillAssist(newvalue);
                default:
                    common.logMessage(`[PlayerStatChanged] Unknown statname: ${msg.statname}`, "error");
                    break;
            }
            break;
        }
        case "PlayerUpgradeTierChanged": {
            const player = processUpdatePlayer(msg, match);
            player.level[msg.level] = { "upgradename": "", "upgradedesc": "" };
            break;
        }
        case "PlayerDamaged": {
            /**
             * @todo
             * 1.HP減らす
             * 2.ダメージ数増やす
             * 3.イベントクラスのobjectに付随する情報を
             */
            const msg_attacker = msg.attacker;
            const msg_victim = msg.victim;
            const victim = match.getPlayer(msg_victim.nucleushash);
            updatePlayer(msg_victim, victim, match.mapName);
            victim.addDamageReceived(msg.damageinflicted);
            /**
             * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
             * If the attacker is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
             */
            if(msg_attacker.nucleushash == ""){ break; }
            const attacker = match.getPlayer(msg_attacker.nucleushash);
            updatePlayer(msg_attacker, attacker, match.mapName);
            attacker.addDamageDealt(msg.damageinflicted);
            break;
        }
        case "PlayerKilled": {
            const msg_awardedto = msg.awardedto;
            const msg_victim = msg.victim;
            const victim = match.getPlayer(msg_victim.nucleushash);
            updatePlayer(msg_awardedto, match.getPlayer(msg_awardedto.nucleushash), match.mapName);
            updatePlayer(msg_victim, victim, match.mapName);
            victim.setAliveStatus(false);
            /**
             * @question
             * 何の武器で殺されたか格納する？
             * する場合はどこに格納しようか？
             * 何の武器で合計何キル(したか・された)かも持っておいてもいいかもね
             */
            break;
        }
        case "PlayerDowned": {
            const msg_attacker = msg.attacker;
            const msg_victim = msg.victim;
            updatePlayer(msg_attacker, match.getPlayer(msg_attacker.nucleushash), match.mapName);
            updatePlayer(msg_victim, match.getPlayer(msg_victim.nucleushash), match.mapName);
            /**
             * @question
             * 何の武器でダメージ受けたか格納する？
             * する場合はどこに格納しようか？
             * 何の武器で合計何ダメージ(与えた・受けた)かも持っておいてもいいかもね
             */
            break;
        }
        case "PlayerAssist": {
            const msg_assistant = msg.assistant;
            const msg_victim = msg.victim;
            updatePlayer(msg_assistant, match.getPlayer(msg_assistant.nucleushash), match.mapName);
            updatePlayer(msg_victim, match.getPlayer(msg_victim.nucleushash), match.mapName);
            /**
             * @question
             * 何の武器でアシスト受けたか格納する？
             * する場合はどこに格納しようか？
             * 何の武器で合計何アシスト(与えた・受けた)かも持っておいてもいいかもね
             */
            break;
        }
        case "SquadEliminated": {
            const msg_playersList = msg.playersList;
            for (const msg_player of msg_playersList) {
                const player = match.getPlayer(msg_player.nucleushash);
                updatePlayer(msg_player, player, match.mapName);
                player.setAliveStatus(false);
            }
            break;
        }
        case "GibraltarShieldAbsorbed": {
            break;
        }
        case "RevenantForgedShadowDamaged": {
            break;
        }
        case "ChangeCamera": {
            break;
        }
        case "PauseToggle": {
            break;
        }
        case "CustomMatch_SetSettings": {
            break;
        }
        case "PlayerRespawnTeam": {
            break;
        }
        case "PlayerRevive": {
            break;
        }
        case "ArenasItemSelected": {
            break;
        }
        case "ArenasItemDeselected": {
            break;
        }
        case "InventoryPickUp": {
            const player = processUpdatePlayer(msg, match);
            const weapons_label = language.weapons_label;
            const item = msg.item;
            const weaponId = Object.keys(weapons_label).find((key) => weapons_label[key] === item);
            if (weaponId != undefined) {
                player.weaponList.push(new Weapon(weaponId, weapons_label[weaponId], checkItemLevel(item)));
            }
            player.inventory.addOrUpdateItem(item, item.quantity, checkItemLevel(item));
            break;
        }
        case "InventoryDrop": {
            /**
             * @todo
             * 武器を捨てた際にアタッチメントがすべてドロップイベントが発火しているか確認
             */
            break;
        }
        case "InventoryUse": {
            break;
        }
        case "BannerCollected": {
            break;
        }
        case "PlayerAbilityUsed": {
            break;
        }
        case "LegendUpgradeSelected": {
            const player = processUpdatePlayer(msg, match);
            const levelObj = player.level[msg.level];
            levelObj.upgradename = msg.upgradename;
            levelObj.upgradedesc = msg.upgradedesc;
            break;
        }
        case "ZiplineUsed": {
            break;
        }
        case "GrenadeThrown": {
            break;
        }
        case "BlackMarketAction": {
            break;
        }
        case "WraithPortal": {
            break;
        }
        case "WarpGateUsed": {
            break;
        }
        case "AmmoUsed": {
            break;
        }
        case "WeaponSwitched": {
            break;
        }
        case "ObserverSwitched": {
            const targetPlayerList = msg.targetteamList
            for (let i = 0; i < targetPlayerList.length; i++) {
                const targetPlayer = targetPlayerList[i];
                updatePlayer(targetPlayer, match.getPlayer(targetPlayer.nucleushash), match.mapName);
            }
            break;
        }
        case "ObserverAnnotation": {
            break;
        }
        default:
            common.logMessage(`[analyze_message] Unknown Type Message: ${category}`, "warning")
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
function updatePlayer(json, player, mapName, characterSelected = false) {
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
    return player
}

/**
 *
 *
 * @param {Object} msg
 * @param {CustomMatch} match
 * @param {boolean} [characterSelected=false]
 * @return {Player} 
 */
function processUpdatePlayer(msg, match, characterSelected = false) {
    const msg_player = msg.player;
    const player = match.getPlayer(msg_player.nucleushash);
    updatePlayer(msg_player, player, match.mapName, characterSelected);
    return player;
}

/**
 * アイテム名からレベルをチェックする
 * @param {String} name
 */
function checkItemLevel(name) {
    let level = Number(new RegExp(`\\(${language.item.level_label} (\\d+)\\)`).exec(name)[1]);
    if (level == null) { level = 1 };
    return level;
}

/**
 * シールド貫通武器かどうかのチェック
 * @param {string} perpetrator 
 * @returns {boolean}
 */
function checkShieldPenetrator(perpetrator) {
    return perpetrator in config.penetrator;
}

/**
 *
 *
 * @param {CustomMatch} match
 */
function getPlayerStatus(match) {
    if (match.gameState == "Playing") {
        for (const teamId in match.teams) {
            const player = match.getPlayer(match.teams[teamId][0]);
            if (!player.getAliveStatus() || !player.getOnlineStatus()) { continue; }
            apexCommon.change_camera("name", player.name);
        }
    }
}

/**
 * メインスレッド
 */
async function update() {
    if (match) {
        getPlayerStatus(match);
        sendMapData.sendPlayerPositionUpdate(match);
    }
}

/** @type {*} */
const intervalId = setInterval(() => {
    update();
}, 16);

// サーバーが全て起動した後に呼ばれる処理
common.registerOnServersStarted((servers) => {
    common.logMessage("サーバーが全て起動しました！");
    // メッセージ処理用のコールバック関数を設定
    common.getServerList().websocketServer.setHandleMessageCallback((message, ws) => {
        const liveAPIEvent = LiveAPIEvent.deserializeBinary(message);
        // common.logMessage('LiveAPIEvent:', liveAPIEvent.toObject());

        const gamemessage = liveAPIEvent.getGamemessage();
        const typeUrl = gamemessage.getTypeUrl(); // メッセージタイプを取得w
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
    // common.logMessage(`Received ${messageType} message:`, message.toObject());
    analyze_message(messageType, message.toObject())
}

module.exports = { startApexLegends, analyze_message }