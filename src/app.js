const common = require('./utils/common');
const { Player, CustomMatch, Datacenter, Item, Weapon, Ring, Event, Packet } = require('./utils/andeanClass');
let config = common.readFile('../../config.json');
let language = common.readFile('../../locals/en.default.json');
const { LiveAPIEvent } = require('../bin/events_pb'); // 必要なメッセージ型をインポート
const messageTypes = require('./utils/messageTypes');
const sendMapData = require('./services/sendMapData')
const apexCommon = require('./services/apexCommon');
const vdf = require('vdf');


if (!config) {
    console.error('設定ファイルが見つかりません。');
    return false;
} else if (!config.language || config.language === '') {
    console.error('言語設定が見つからないため、デフォルトの言語設定(English)を使用します。');
} else {
    language = common.readFile(`../../locals/${config.language}.json`);
    if (language === null) {
        console.error('言語設定が見つからないため、デフォルトの言語設定(English)を使用します。');
        language = common.readFile('../../locals/en.default.json');
    }
}


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
            return false;
        }
        if (!config.apexlegends.option) {
            console.error('Apex Legendsの起動オプションが指定されていません。');
            return false;
        }
        if (!config.apexlegends.api_option) {
            console.error('Apex LegendsのAPI起動オプションが指定されていません。');
            return false;
        }
        if (!config.apexlegends.api_port) {
            console.error('Apex LegendsのAPIポートが指定されていません。');
            return false;
        }
    } else {
        config = common.readFile();
    }
    const option = `${config.apexlegends.api_option} ${config.apexlegends.option} +cl_liveapi_ws_servers \"ws://127.0.0.1:${config.apexlegends.api_port}\"`;
    const command = `"${config.apexlegends.path}\\r5apex.exe" + ${option}`;  // パスが空でない場合に起動コマンドを構築
    common.runRegularCommand(command)
        .then(output => {
            common.logMessage('Apex Legendsが起動しました:', output);
            return true;
        })
        .catch(err => {
            console.error('Apex Legendsの起動中にエラーが発生しました:', err);
            return false;
        });
}


/**
 * playlists_r5.txtを変換したJSONオブジェクト
 * @global
 * @type {Object}
 */
let playlists_r5 = {}

/**
 * playlists_r5.txt を読み込み、VDF を JSON に変換する
 * @return {Object}
 */
const data = common.readText(`${config.apexlegends.path}\\r2\\playlists_r5.txt`)
try {
    // vdf.parse() を利用して KeyValue 形式を JSON オブジェクトに変換する
    playlists_r5 = vdf.parse(data);
    const load = common.readFile('../../playlists_r5.json', playlists_r5);
    if (playlists_r5.playlists.versionNum !== load.playlists.versionNum) {
        common.saveFile('../../playlists_r5.json', playlists_r5);
    }
} catch (parseErr) {
    console.error('パースに失敗しました:', parseErr);
}

/**
 * ゲームモードの一覧を格納するオブジェクト
 * @global
 * @type {Object}
 */
let gamemodes = {};

/**
 * ゲームモードの一覧を取得する
 */
const gamemodeVars = playlists_r5.playlists.Gamemodes.defaults.vars;
const modeNum = gamemodeVars.custom_match_playlist_category_count;
const playlists = playlists_r5.playlists.Playlists;
for (let i = 0; i < modeNum; i++) {
    const entryNum = gamemodeVars[`custom_match_playlist_category_${i}_count`];
    let name = gamemodeVars[`custom_match_playlist_category_${i}_name`];
    const data = {};
    for (let j = 0; j < entryNum; j++) {
        const entryName = `custom_match_playlist_category_${i}_entry_${j}`;
        const entry = gamemodeVars[entryName];
        const playlist = playlists[entry];
        let playlistName = `${entry}`;
        for (const key in playlist.vars) {
            if (["name", "description", "map_name"].includes(key)) {
                playlistName = playlist.vars[key];
            }
        }
        if (entry === "can_hu_cm") {
            playlistName = "#MP_RR_CANYONLANDS_HU";
        }
        if (playlistName.includes("#")) {
            playlistName = playlistName.replace("#", "");
        }
        data[entry] = playlistName;
    }
    if (name.includes("#")) {
        name = name.replace("#", "");
    }
    gamemodes[name] = data;
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
 * @type {CustomMatch}
 */
let match;
/**
 * @type {CustomMatch}
 */
let matchBase;
/**
 * @type {Packet}
 */
let packet;
const lobby = new CustomMatch("lobby");
/**
 * リングイベントが発生した時間を記録する
 * @type {Array<Event>}
 */
let ringEvents = [];
/**
 * ランクを記録する配列
 * @type {Array<Number>}
 */
let ranks = [];
/**
 * CSVファイルを保存する配列
 * @type {Object}
 */
let csvData;
/**
 * Webに送信するメッセージを格納する配列
 * @type {Object}
 */
let waitMessages = { "CustomMatch_LobbyPlayers": {}, "CustomMatch_SetSettings": {} };
/**
 * ゲーム中かどうか
 * @type {Boolean}
 */
let isPlaying = false;
/**
 * 最後にポーリングした時間
 * @type {Date}
 */
let lastPollTime = Date.now();
/**
 * メッセージを分析し、要素を抽出する。
 * @param {String} category
 * @param {Object} msg
 */
function analyze_message(category, msg) {
    // console.log(`[analyze_message] category: ${category}, msg: ${msg}`);
    // common.logMessage("メッセージタイプ" + category)
    switch (category.toString()) {
        case "Init": {
            if (msg.platform != "") { break; }
            // 変換したいUnixTime（ミリ秒単位）
            const unixTime = Number(msg.timestamp) * 1000;
            // Dateクラスのインスタンスを生成（ローカルタイムが使用される）
            const date = new Date(unixTime);
            // 年、月、日、秒を取得
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2); // 月は0～11のため+1し、2桁に整形
            const day = ('0' + date.getDate()).slice(-2);
            const seconds = ('0' + date.getSeconds()).slice(-2);
            // YYYY-MM-DD-SS形式の文字列を生成
            const formattedDate = `${year}-${month}-${day}-${seconds}`;
            match = new CustomMatch(`${formattedDate}`);
            isPlaying = true;
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
            lobby.lobbyId = msg.playertoken;
            playerNames = {};
            lobby.teams = {};
            lobby.players = {};
            for (let i = 0; i < msg.teamsList.length; i++) {
                const msg_team = msg.teamsList[i];
                const teamId = msg_team.id;
                const teamName = msg_team.name;
                const team = lobby.addTeam(teamId, teamName);
                team.spawnPoint = msg_team.spawnpoint;
                if (csvData && csvData[teamId] && csvData[teamId].teamName && csvData[teamId].teamName !== teamName && !copyCSVData[teamId]) {
                    copyCSVData[teamId] = JSON.parse(JSON.stringify(csvData[teamId]));
                }
            }
            for (let i = 0; i < msg.playersList.length; i++) {
                const msg_player = msg.playersList[i];
                const teamId = msg_player.teamid;
                const playerName = msg_player.name;
                lobby.addPlayer(new Player(playerName, teamId, msg_player.nucleushash, msg_player.hardwarename));
                if (playerNames[playerName]) {
                    console.log(`[APPLY CSV DATA] Duplicate player name: ${playerName}`);
                    delete playerNames[playerName];
                } else {
                    playerNames[playerName] = { teamId: teamId, name: playerName, nucleusHash: msg_player.nucleushash, hardwareName: msg_player.hardwarename };
                }
            }
            if (csvData) {
                for (const teamId in csvData) {
                    if (csvData[teamId] && csvData[teamId].players) {
                        for (const playerName of csvData[teamId].players) {
                            if (playerNames[playerName] && playerNames[playerName].teamId != teamId && !copyCSVData[teamId]) {
                                copyCSVData[teamId] = JSON.parse(JSON.stringify(csvData[teamId]));
                            } else if (!playerNames[playerName]) {
                                console.log(`[APPLY CSV DATA] PlayerName: ${playerName} is not in the lobby or duplicate player name`);
                            }
                        }
                    }
                }
            }
            const data = {};
            for (const teamId in lobby.teams) {
                const team = lobby.getTeam(teamId);
                const teamName = team.teamName;
                const logoUrl = team.teamImg;
                const spawnPoint = team.spawnPoint;
                const players = [];
                for (let i = 0; i < team.players.length; i++) {
                    const player = lobby.getPlayer(team.players[i]);
                    if (player === null) continue;
                    players.push({ index: i, id: player.nucleusHash, name: player.name });
                }
                data[teamId] = { name: teamName, logoUrl: logoUrl, spawnPoint: spawnPoint, players: players };
            }
            waitMessages["CustomMatch_LobbyPlayers"] = data;
            break;
        }
        case "RequestStatus": {  // 今のところ何もイベント発生しない
            break;
        }
        case "Response": {
            break;
        }
        case "MatchSetup": {
            const startingloadout = msg.startingloadout;
            if (startingloadout.weaponsList != []) {
                for (let i = 0; i < startingloadout.weaponsList.length; i++) {
                    const weapon = startingloadout.weaponsList[i];
                    const splitWeaponName = splitBracketParts(weapon.item);
                    const weaponLabel = weapon.item;
                    const weaponId = getWeaponId(weaponLabel);
                    if (splitItemName === null) {
                        match.startingLoadout.addOrUpdateWeapon(weaponId, weaponLabel, checkItemLevel(weaponLabel));
                    } else {
                        match.startingLoadout.addOrUpdateWeapon(splitWeaponName, weaponLabel, checkItemLevel(weaponLabel));
                    }
                }
            }
            const equipmentList = startingloadout.equipmentList;
            if (equipmentList != []) {
                for (let i = 0; i < equipmentList.length; i++) {
                    const equipment = equipmentList[i];
                    const splitItemName = splitBracketParts(equipment.item);
                    if (splitItemName === null) {
                        match.startingLoadout.addOrUpdateItem(equipment.item, equipment.quantity, checkItemLevel(equipment.item));
                    } else {
                        match.startingLoadout.addOrUpdateItem(splitItemName[0], equipment.quantity, checkItemLevel(equipment.item));
                    }
                }
            }
            match.setMatchSetup(msg.map, msg.playlistname, msg.playlistdesc, msg.aimassiston, msg.anonymousmode, msg.serverid);
            match.datacenter.update(msg.datacenter.timestamp, msg.datacenter.category, msg.datacenter.name);
            match.setMatchName(`${match.matchName}-${msg.map}`);
            const playlistName = splitBracketParts(msg.playlistname);
            if (playlistName === null) {
                match.setMaxPlayersAndTeams(msg.playlistname);
            } else {
                match.setMaxPlayersAndTeams(playlistName[0], playlistName[1]);
            }
            break;
        }
        case "GameStateChanged": {
            try {
                match.setState(msg.state);
                if (msg.state === "Prematch") {
                    matchBase = JSON.parse(JSON.stringify(match));
                    ringEvents = [];
                    ranks = [];
                    for (let i = match.maxTeams + 1; i >= 2; i--) {
                        const team = match.getTeam(i);
                        if (team.players.length === 0) {
                            ranks.push(i);
                        }
                    }
                };
                if (msg.state === "Playing") {
                    match.setStartTimeStamp(msg.timestamp);
                }
                if (msg.state === "Postmatch") {
                    matchBase.packetLists = JSON.parse(JSON.stringify(match.packetLists));
                    for (i = 0; i < ringEvents.length; i += 2) {
                        if ((i + 1) !== ringEvents.length) {
                            /**
                             * @type {Event}
                             */
                            const startRing = ringEvents[i][1];
                            /**
                             * @type {string}
                             */
                            const startRing_t = ringEvents[i][0];
                            /**
                             * @type {Event}
                             */
                            const endRing = ringEvents[i + 1][1];
                            if (startRing.category == "ringStartClosing" && endRing.category == "ringFinishedClosing" && startRing.data.stage === endRing.data.stage) {
                                matchBase.packetLists[startRing_t].events.find((event) => event.category === "ringStartClosing").center = [...endRing.data.center];
                            }
                        }
                    }
                    for (let i = 0; i < ranks.length; i++) {
                        const team = match.getTeam(ranks[i]);
                        team.setRank(ranks.length - i);
                    }
                    common.saveUpdate(`Packet Log - ${match.matchName}`, config.output, matchBase);
                    isPlaying = false;
                }
            } catch (error) {
                console.log(error);
                lobby.setState(msg.state);
            }
            break;
        }
        case "CharacterSelected": {
            const player = processUpdatePlayer(msg, match, true);
            const msg_player = msg.player;
            const data = processEventData(msg_player, match);
            data["character"] = msg_player.character;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "MatchStateEnd": {
            for (let i = 0; i < msg.winnersList.length; i++) {
                updatePlayer(msg.winnersList[i], match.getPlayer(msg.winnersList[i].nucleushash), match.mapOffset);
            }
            match.setEndTimeStamp(msg.timestamp);

            // AndeanのEventクラスに追加する
            const winnerTeams = [];
            for (let i = 0; i < msg.winnersList.length; i++) {
                if (!winnerTeams.includes(msg.winnersList[i].teamid)) {
                    winnerTeams.push(msg.winnersList[i].teamid);
                }
            }
            const event = new Event(msg.timestamp, msg.category, { teamId: winnerTeams, state: msg.state });
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);
            match.setState(msg.state);
            break;
        }
        case "RingStartClosing": {
            // AndeanのRingクラスに追加する
            const rings = match.rings;
            if (rings.length === 0) {
                match.addRingElement(new Ring(msg.timestamp, msg.category, msg.stage, msg.center, msg.currentradius, msg.shrinkduration, match.mapOffset));
            }
            rings[rings.length - 1].updateRing(msg.timestamp, msg.category, msg.currentRadius, msg.shrinkduration, msg.endradius, match.mapOffset);

            // AndeanのEventクラスに追加する
            const event = new Event(msg.timestamp, msg.category, { stage: msg.stage, center: convertLeefletPOS(match.mapOffset, msg.center), currentradius: msg.currentradius / match.mapOffset[2], endradius: msg.endradius / match.mapOffset[2], shrinkduration: msg.shrinkduration });
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);
            // リングイベントが発生した時間を記録する
            ringEvents.push([packet.t, event]);
            break;
        }
        case "RingFinishedClosing": {
            // AndeanのRingクラスに追加する
            match.addRingElement(new Ring(msg.timestamp, msg.category, msg.stage, msg.center, msg.currentradius, msg.shrinkduration, match.mapOffset));

            // AndeanのEventクラスに追加する
            const event = new Event(msg.timestamp, msg.category, { stage: msg.stage, center: convertLeefletPOS(match.mapOffset, msg.center), currentradius: msg.currentradius / match.mapOffset[2], shrinkduration: msg.shrinkduration });
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);
            // リングイベントが発生した時間を記録する
            ringEvents.push([packet.t, event]);
            break;
        }
        case "PlayerConnected": {
            const msg_player = msg.player;
            checkPlayerInstance(msg_player, match);
            for (let i = 2; i < match.maxTeams + 2; i++) {
                if (match.getTeam(i) == null) {
                    const team = match.addTeam(i, `Team ${i - 1}`);
                }
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
            break;
        }
        case "PlayerUltimateCharged": {
            const player = processUpdatePlayer(msg, match);
            player.setUltimateCharged(true);
            const data = processEventData(msg.player, match);
            data["linkedentity"] = msg.linkedentity;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "PlayerUpgradeTierChanged": {
            const player = processUpdatePlayer(msg, match);
            player.level[String(msg.level)] = { "upgradename": "", "upgradedesc": "", "selected": "" };
            player.level.now = String(msg.level);
            const data = processEventData(msg.player, match);
            data["level"] = msg.level;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "PlayerDamaged": {
            //ダメージを与えた側
            const msg_attacker = msg.attacker;
            const msg_victim = msg.victim;
            let weaponName = getAssociateWeaponId(msg.weapon);
            const penetrator = checkShieldPenetrator(weaponName);
            if (weaponName === undefined) {
                weaponName = msg.weapon;
            }
            const victim = processUpdateMsgPlayer(msg_victim, match);
            match.getTeam(msg_victim.teamid).addTotalDamageRecived(msg.damageinflicted);
            if ("nucleushash" in msg_attacker && msg_attacker.nucleushash !== "") {
                victim.addDamageReceived(msg.damageinflicted, weaponName, msg_attacker.nucleushash, msg_attacker.character, penetrator);
            } else {
                victim.addDamageReceived(msg.damageinflicted, weaponName, "World", "World", penetrator);
            }
            //ダメージを受けた側
            /**
             * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
             * If the attacker is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
             */
            let event;
            if ("nucleushash" in msg_attacker && msg_attacker.nucleushash !== "") {
                const attacker = processUpdateMsgPlayer(msg_attacker, match);
                attacker.addDamageDealt(msg.damageinflicted, weaponName, msg_victim.nucleushash, msg_victim.character, penetrator)
                match.getTeam(msg_attacker.teamid).addTotalDamageDealt(msg.damageinflicted);

                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    { attacker: processEventData(msg_attacker, match), victim: processEventData(msg_victim, match), weapon: msg.weapon, damageinflicted: msg.damageinflicted }
                );
            } else {
                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    {
                        attacker: {
                            id: "World",
                            pos: [0, 0, 0],
                            hp: [0, 0, 0, 0],
                            ang: 0
                        },
                        victim: processEventData(msg_victim, match),
                        weapon: msg.weapon,
                        damageinflicted: msg.damageinflicted
                    }
                );
            }

            // AndeanのEventクラスに追加する
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);
            break;
        }
        case "PlayerKilled": {
            //殺された側
            const msg_awardedto = msg.awardedto;
            const msg_victim = msg.victim;
            let weaponName = getAssociateWeaponId(msg.weapon)
            if (weaponName === undefined) {
                weaponName = msg.weapon;
            }
            const victim = processUpdateMsgPlayer(msg_victim, match);
            victim.setStatus("death");
            if ("nucleushash" in msg_awardedto && msg_awardedto.nucleushash !== "") {
                victim.setKillsReceived(weaponName, msg_awardedto.nucleushash, msg_awardedto.character);
            } else {
                victim.setKillsReceived(weaponName, "World", "World");
            }
            //殺した側
            /**
             * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
             * If the awardedto is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
             */
            let event;
            if ("nucleushash" in msg_awardedto && msg_awardedto.nucleushash !== "") {
                const awardedto = processUpdateMsgPlayer(msg_awardedto, match);
                awardedto.setKills(weaponName, msg_victim.nucleushash, msg_victim.character)
                match.getTeam(msg_awardedto.teamid).addTotalKills();

                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    { attacker: processEventData(msg_awardedto, match), victim: processEventData(msg_victim, match), weapon: msg.weapon }
                );
            } else {
                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    {
                        attacker: {
                            id: "World",
                            pos: [0, 0, 0],
                            hp: [0, 0, 0, 0],
                            ang: 0
                        },
                        victim: processEventData(msg_victim, match),
                        weapon: msg.weapon,
                    }
                );
            }

            // AndeanのEventクラスに追加する
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);

            // AndeanのTeamクラスに追加する 
            const team = match.getTeam(msg_victim.teamid);
            if (team.getPlayerCount(match) === 0) {
                if ("nucleushash" in msg_awardedto && msg_awardedto.nucleushash !== "") {
                    team.setDestroyerId("World");
                } else {
                    team.setDestroyerId(msg_awardedto.nucleushash);
                }
                team.setLastDeath(msg_victim.nucleusHash);
            }
            break;
        }
        case "PlayerDowned": {
            //ダウンした側
            const msg_attacker = msg.attacker;
            const msg_victim = msg.victim;
            let weaponName = getAssociateWeaponId(msg.weapon)
            if (weaponName === undefined) {
                weaponName = msg.weapon;
            }
            const victim = processUpdateMsgPlayer(msg_victim, match);
            victim.setStatus("down");
            if ("nucleushash" in msg_attacker && msg_attacker.nucleushash !== "") {
                victim.setDownsReceived(weaponName, msg_attacker.nucleushash, msg_attacker.character);
            } else {
                victim.setDownsReceived(weaponName, "World", "World");
            }


            //ダウンさせた側
            /**
             * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
             * If the attacker is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
             */
            let event;
            if ("nucleushash" in msg_attacker && msg_attacker.nucleushash !== "") {
                const attacker = processUpdateMsgPlayer(msg_attacker, match);
                attacker.setDowns(weaponName, msg_victim.nucleushash, msg_victim.character)
                match.getTeam(msg_attacker.teamid).addTotalDowns();

                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    { attacker: processEventData(msg_attacker, match), victim: processEventData(msg_victim, match), weapon: msg.weapon }
                );
            } else {
                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    {
                        attacker: {
                            id: "World",
                            pos: [0, 0, 0],
                            hp: [0, 0, 0, 0],
                            ang: 0
                        },
                        victim: processEventData(msg_victim, match),
                        weapon: msg.weapon,
                    }
                );
            }

            // AndeanのEventクラスに追加する
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);
            break;
        }
        case "PlayerAssist": {
            //アシストダウンした側
            const msg_assistant = msg.assistant;
            const msg_victim = msg.victim;
            let weaponName = getAssociateWeaponId(msg.weapon)
            if (weaponName === undefined) {
                weaponName = msg.weapon;
            }
            const victim = processUpdateMsgPlayer(msg_victim, match);
            if ("nucleushash" in msg_assistant && msg_assistant.nucleushash !== "") {
                victim.setKillAssistsReceived(weaponName, msg_assistant.nucleushash, msg_assistant.character);
            } else {
                victim.setKillAssistsReceived(weaponName, "World", "World");
            }
            //アシストした側
            /**
             * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
             * If the attacker is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
             */
            let event;
            if ("nucleushash" in msg_assistant && msg_assistant.nucleushash !== "") {
                const assistant = processUpdateMsgPlayer(msg_assistant, match);
                assistant.setKillAssists(weaponName, msg_victim.nucleushash, msg_victim.character)
                match.getTeam(msg_assistant.teamid).addTotalKillAssists();

                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    {
                        attacker: processEventData(msg_assistant, match),
                        victim: processEventData(msg_victim, match),
                        weapon: msg.weapon,
                    }
                );
            } else {
                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    {
                        attacker: {
                            id: "World",
                            pos: [0, 0, 0],
                            hp: [0, 0, 0, 0],
                            ang: 0
                        },
                        victim: processEventData(msg_victim, match),
                        weapon: msg.weapon,
                    }
                );
            }

            // AndeanのEventクラスに追加する
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);
            break;
        }
        case "SquadEliminated": {
            const msg_playersList = msg.playersList;
            const msg_player = msg_playersList[0];
            for (const msg_player of msg_playersList) {
                const player = processUpdateMsgPlayer(msg_player, match);
                player.setStatus("eliminated");
            }
            const team = match.getTeam(msg_player.teamid);
            ranks.push(msg_player.teamid);
            const event = new Event(msg.timestamp, msg.category, { teamId: msg_player.teamid, lastPlayer: team.lastDeath, destroyer: team.destroyerId });
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "GibraltarShieldAbsorbed": {
            //ダメージを与えた側
            const msg_attacker = msg.attacker;
            const msg_victim = msg.victim;
            let weaponName = getAssociateWeaponId(msg.weapon);
            const penetrator = checkShieldPenetrator(weaponName);
            if (weaponName === undefined) {
                weaponName = msg.weapon;
            }
            const victim = processUpdateMsgPlayer(msg_victim, match);
            victim.addGibraltarShieldAbsorbed(msg.damageinflicted);
            if ("nucleushash" in msg_attacker && msg_attacker.nucleushash !== "") {
                victim.addDamageReceived(msg.damageinflicted, "Unknown by GibraltarShieldAbsorbed", msg_attacker.nucleushash, msg_attacker.character, penetrator);
            } else {
                victim.addDamageReceived(msg.damageinflicted, "Unknown by GibraltarShieldAbsorbed", "World", "World", penetrator);
            }
            //ダメージを受けた側
            /**
             * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
             * If the attacker is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
             */
            let event;
            if ("nucleushash" in msg_attacker && msg_attacker.nucleushash !== "") {
                const attacker = processUpdateMsgPlayer(msg_attacker, match);
                attacker.addDamageDealt(msg.damageinflicted, "Unknown by GibraltarShieldAbsorbed", msg_victim.nucleushash, msg_victim.character, penetrator);

                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    { attacker: processEventData(msg_attacker, match), victim: processEventData(msg_victim, match), damageinflicted: msg.damageinflicted }
                );
            } else {
                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    {
                        attacker: {
                            id: "World",
                            pos: [0, 0, 0],
                            hp: [0, 0, 0, 0],
                            ang: 0
                        },
                        victim: processEventData(msg_victim, match),
                        damageinflicted: msg.damageinflicted
                    }
                );
            }

            // AndeanのEventクラスに追加する
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);
            break;
        }
        case "RevenantForgedShadowDamaged": {
            //ダメージを与えた側
            const msg_attacker = msg.attacker;
            const msg_victim = msg.victim;
            let weaponName = getAssociateWeaponId(msg.weapon);
            const penetrator = checkShieldPenetrator(weaponName);
            if (weaponName === undefined) {
                weaponName = msg.weapon;
            }
            const victim = processUpdateMsgPlayer(msg_victim, match);
            victim.addForgedShadowDamaged(msg.damageinflicted);
            if ("nucleushash" in msg_attacker && msg_attacker.nucleushash !== "") {
                victim.addDamageReceived(msg.damageinflicted, "Unknown by RevenantForgedShadowDamaged", msg_attacker.nucleushash, msg_attacker.character, penetrator);
            } else {
                victim.addDamageReceived(msg.damageinflicted, "Unknown by RevenantForgedShadowDamaged", "World", "World", penetrator);
            }
            //ダメージを受けた側
            /**
             * もしアタッカーがプレーヤーではなくリングダメージや落下ダメージの場合worldとなりハッシュ値が""で返って来るため無視する
             * If the attacker is not a player but instead caused by ring damage or fall damage, it will be identified as "world," and the nucleushash value will return as an empty string (""). Therefore, it should be ignored.
             */
            let event;
            if ("nucleushash" in msg_attacker && msg_attacker.nucleushash !== "") {
                const attacker = processUpdateMsgPlayer(msg_attacker, match);
                attacker.addDamageDealt(msg.damageinflicted, "Unknown by RevenantForgedShadowDamaged", msg_victim.nucleushash, msg_victim.character, penetrator)

                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    { attacker: processEventData(msg_attacker, match), victim: processEventData(msg_victim, match), damageinflicted: msg.damageinflicted }
                );
            } else {
                // AndeanのEventクラスに追加する
                event = new Event(
                    msg.timestamp, msg.category,
                    {
                        attacker: {
                            id: "World",
                            pos: [0, 0, 0],
                            hp: [0, 0, 0, 0],
                            ang: 0
                        },
                        victim: processEventData(msg_victim, match),
                        damageinflicted: msg.damageinflicted
                    }
                );
            }

            // AndeanのEventクラスに追加する
            match.addEventElement(event);
            // AndeanのPacketクラスに追加する
            packet.addEvent(event);
            break;
        }
        case "ChangeCamera": {  // 今のところ何もイベント発生しない
            break;
        }
        case "PauseToggle": {  // 今のところ何もイベント発生しない
            break;
        }
        case "CustomMatch_SetSettings": {
            const playlistName = msg.playlistname;
            if (playlistName === "") {
                console.log(`[CustomMatch_SetSettings] Playlist ${playlistName} does not exist`);
                break;
            }
            const playlists = playlists_r5.playlists.Playlists;
            const playlist = playlists[playlistName];
            if (!playlist) {
                console.log(`[CustomMatch_SetSettings] Playlist ${playlistName} does not exist`);
                break;
            }
            let inherit = null;
            try {
                inherit = playlist.inherit;
            } catch (error) {
                console.log(`[CustomMatch_SetSettings] Playlist ${playlistName} does not have inherit`);
            }
            if (!playlist.vars["max_teams"]) {
                while (playlists[inherit].vars["max_teams"]) {
                    inherit = playlists[inherit].inherit;
                    if (!playlists[inherit]) {
                        console.log(`[CustomMatch_SetSettings] Playlist ${playlistName} does not have max_teams`);
                        break;
                    }
                }
            }
            const basePlaylist = playlists[inherit];
            const maxTeams = basePlaylist.vars["max_teams"];
            const maxPlayers = basePlaylist.vars["max_players"];
            let mapName = "";
            for (const key in basePlaylist.include) {
                if (key.includes("map")) {
                    mapName = key;
                }
            }
            const mapObj = playlists_r5.playlists.Includes[mapName];
            let map = null;
            if (mapObj) {
                map = Object.keys(mapObj.gamemodes.survival.maps)[0];
            }
            const gamemodeKey = Object.keys(gamemodeVars).filter(key => gamemodeVars[key] === playlistName)[0];
            const gamemodeNum = gamemodeKey.match(/\D*(\d+)/)[1];
            let gamemode = gamemodeVars[`custom_match_playlist_category_${gamemodeNum}_name`]
            if (gamemode.includes("#")) {
                gamemode = gamemode.replace("#", "");
            }

            const data = msg;
            data["maxPlayers"] = maxPlayers;
            data["maxTeams"] = maxTeams;
            data["gamemode"] = gamemode;
            data["map"] = map;
            waitMessages["CustomMatch_SetSettings"] = data;
            lobby.maxPlayers = maxPlayers;
            lobby.maxTeams = maxTeams;
            lobby.mapName = map;
            break;
        }
        case "PlayerRespawnTeam": {
            const msg_player = msg.player;
            const player = processUpdatePlayer(msg, match);
            const data = processEventData(msg_player, match);
            const respawnedteammatesList = [];
            for (const msg_respawnedteammates of msg.respawnedteammatesList) {
                const teammate = processUpdateMsgPlayer(msg_respawnedteammates, match);
                teammate.setStatus("alive");
                respawnedteammatesList.push(processEventData(msg_respawnedteammates, match));
                match.getTeam(msg_respawnedteammates.teamid).addTotalRespawns();
            }
            data["respawnedteammatesList"] = respawnedteammatesList;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "PlayerRevive": {
            const player = processUpdatePlayer(msg, match);
            const revived = processUpdateMsgPlayer(msg.revived, match);
            revived.setStatus("alive");
            revived.setCanRevive(false);
            match.getTeam(msg.player.teamid).addTotalRevives();
            const data = processEventData(msg.player, match);
            data["revived"] = processEventData(msg.revived, match);
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
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
            const item = msg.item;
            const itemName = splitBracketParts(item);
            const quantity = msg.quantity;
            const itemId = getWeaponIdOrItemId(item);
            const data = processEventData(msg.player, match);
            if (itemId === undefined) {
                player.inventory.addOrUpdateItem(item, quantity, checkItemLevel(item));
                data["item"] = item;
            } else {
                if (itemId[0] === "weapon") {
                    player.inventory.addOrUpdateWeapon(itemId[1], item, checkItemLevel(item));
                    data["item"] = itemId[1];
                } else if (itemId[0] === "item") {
                    player.inventory.addOrUpdateItem(itemId[1], quantity, checkItemLevel(item));
                    data["item"] = itemId[1];
                } else if (itemName != null) {
                    player.inventory.addOrUpdateItem(itemName[0], quantity, checkItemLevel(item));
                    data["item"] = itemName[0];
                }
            }
            data["quantity"] = quantity;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "InventoryDrop": {
            const player = processUpdatePlayer(msg, match);
            const item = msg.item;
            const itemName = splitBracketParts(item);
            const quantity = msg.quantity;
            const itemId = getWeaponIdOrItemId(item);
            const data = processEventData(msg.player, match);
            if (itemId === undefined) {
                player.inventory.addOrUpdateItem(item, -(quantity), checkItemLevel(item));
                data["item"] = item;
            } else {
                if (itemId[0] === "weapon") {
                    player.inventory.removeWeapon(itemId[1], checkItemLevel(item));
                    data["item"] = itemId[1];
                } else if (itemId[0] === "item") {
                    player.inventory.addOrUpdateItem(itemId[1], -(quantity), checkItemLevel(item));
                    data["item"] = itemId[1];
                } else if (itemName != null) {
                    player.inventory.addOrUpdateItem(itemName[0], -(quantity), checkItemLevel(item));
                    data["item"] = itemName[0];
                }
            }
            data["quantity"] = quantity;
            data["extradataList"] = msg.extradataList;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "InventoryUse": {
            const player = processUpdatePlayer(msg, match);
            const item = msg.item;
            const itemName = splitBracketParts(item);
            const quantity = msg.quantity;
            const itemId = getItemId(item);
            const data = processEventData(msg.player, match);
            if (itemId != undefined) {
                player.inventory.addOrUpdateItem(itemId, -(quantity), checkItemLevel(item));
                data["item"] = itemId;
            } else if (itemName != null) {
                player.inventory.addOrUpdateItem(itemName, -(quantity), checkItemLevel(item));
                data["item"] = itemName;
            } else {
                player.inventory.addOrUpdateItem(item, -(quantity), checkItemLevel(item));
                data["item"] = item;
            }
            let name = splitBracketParts(item);
            if (name === null) {
                name = item;
            } else {
                name = name[0];
            }
            let healHealth = 0;
            let rechargeShield = 0;
            switch (name) {
                case "Med Kit":
                    healHealth = 100;
                    break;
                case "Syringe":
                    healHealth = 25;
                    break;
                case "Shield Battery":
                    rechargeShield = 100;
                    break;
                case "Shield Cell":
                    rechargeShield = 25;
                    break;
            }
            player.updateHealthAndShields(msg.currenthealth + healHealth, msg.maxhealth, msg.shieldhealth + rechargeShield, msg.shieldmaxhealth);
            match.getTeam(msg.player.teamid).addTotalHealing(healHealth + rechargeShield);
            data["quantity"] = msg.quantity;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "BannerCollected": {
            const player = processUpdatePlayer(msg, match);
            const collecter = processUpdateMsgPlayer(msg.collected, match);
            collecter.addBannerCollectedCount();
            player.setCanRevive(true);
            const data = processEventData(msg.player, match);
            data["collected"] = processEventData(msg.collected, match);
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "PlayerAbilityUsed": {
            const player = processUpdatePlayer(msg, match);
            const abilityType = splitBracketParts(msg.linkedentity);
            const characterName = getLegendId(msg.player.character);
            if (characterName === undefined) { break; }
            const abilityName = getAbilityId(characterName, msg.linkedentity);
            if (abilityType[0] === "Ultimate") {
                player.addUltimateUseCount(abilityName);
                player.setUltimateCharged(false);
            } else if (abilityType[0] === "Tactical") {
                player.addAbilityUseCount(abilityName);
            }
            const data = processEventData(msg.player, match);
            data["linkedentity"] = abilityName;
            data["character"] = characterName;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "LegendUpgradeSelected": {
            const player = processUpdatePlayer(msg, match);
            const characterName = getLegendId(msg.player.character);
            const levelObj = player.level[String(msg.level)];
            const level = msg.level;
            const upgradeName = msg.upgradename;
            const upgradeDesc = msg.upgradedesc;
            levelObj.upgradename = upgradeName;
            levelObj.upgradedesc = upgradeDesc;
            let select;
            const upgradesObj = language.legends_label[characterName].upgrade[level];
            for (const key in upgradesObj) {
                if (upgradesObj[key].name === upgradeName && upgradesObj[key].description === upgradeDesc) {
                    select = key;
                }
            }
            if (select === undefined) {
                console.log(`[LegendUpgradeSelected] Error: ${upgradeName} is not found in ${characterName} upgrade\nPlease update localization file`);
                break;
            }
            levelObj.selected = select;
            const data = processEventData(msg.player, match);
            data["character"] = characterName;
            data["selected"] = select;
            data["level"] = level;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "ZiplineUsed": {
            const player = processUpdatePlayer(msg, match);
            player.addZiplineUseCount();
            const data = processEventData(msg.player, match);
            data["linkedentity"] = msg.linkedentity;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "GrenadeThrown": {
            const player = processUpdatePlayer(msg, match);
            const itemName = msg.linkedentity;
            const itemId = getItemId(itemName);
            const data = processEventData(msg.player, match);
            if (itemId !== undefined) {
                player.inventory.addOrUpdateItem(itemId, -1, checkItemLevel(itemName));
                player.addGrenadeUseCount(itemId);
                data["linkedentity"] = itemId;
            } else {
                player.inventory.addOrUpdateItem(itemName, -1, checkItemLevel(itemName));
                player.addGrenadeUseCount(itemName);
                data["linkedentity"] = itemName;
            }
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "BlackMarketAction": {
            const player = processUpdatePlayer(msg, match);
            const item = msg.item;
            const itemId = getItemId(item);
            const data = processEventData(msg.player, match);
            if (itemId !== undefined) {
                player.addBlackMarketUseCount(itemId);
                data["item"] = itemId;
            } else {
                player.addBlackMarketUseCount(item);
                data["item"] = item;
            }
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "WraithPortal": {
            const player = processUpdatePlayer(msg, match);
            player.addWraithPortalUseCount();
            const data = processEventData(msg.player, match);
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "WarpGateUsed": {
            const player = processUpdatePlayer(msg, match);
            player.addWarpGateUseCount();
            const data = processEventData(msg.player, match);
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "AmmoUsed": {
            const player = processUpdatePlayer(msg, match);
            const ammoType = msg.ammotype;
            player.inventory.addOrUpdateItem(ammoType, -(msg.amountused), checkItemLevel(ammoType));
            const data = processEventData(msg.player, match);
            data["ammotype"] = msg.ammotype;
            data["amountused"] = msg.amountused;
            data["oldammocount"] = msg.oldammocount;
            data["newammocount"] = msg.newammocount;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            packet.addEvent(event);
            break;
        }
        case "WeaponSwitched": {
            const player = processUpdatePlayer(msg, match);
            player.inHand = msg.newweapon;
            const data = processEventData(msg.player, match);
            data["oldweapon"] = msg.oldweapon;
            data["newweapon"] = msg.newweapon;
            const event = new Event(msg.timestamp, msg.category, data);
            match.addEventElement(event);
            if (match.state === "Playing" && packet) {
                packet.addEvent(event);
            }
            break;
        }
        case "ObserverSwitched": {
            if (!packet) { break; }
            const targetPlayerList = msg.targetteamList
            const keepedIds = {};
            for (i = 0; i < packet.data.length; i++) {
                keepedIds[packet.data[i].id] = i;
            }
            for (let i = 0; i < targetPlayerList.length; i++) {
                const msg_target = targetPlayerList[i];

                // AndeanのPlayerクラスに追加する
                updatePlayer(msg_target, match.getPlayer(msg_target.nucleushash), match.mapOffset);

                // 追加するdataを作成する
                const data = { id: msg_target.nucleushash, pos: convertLeefletPOS(match.mapOffset, msg_target.pos), ang: msg_target.angles.y, hp: [msg_target.currenthealth, msg_target.maxhealth, msg_target.shieldhealth, msg_target.shieldmaxhealth] };

                // AndeanのPacketクラスに追加する
                if (!Object.keys(keepedIds).includes(msg_target.nucleushash)) {
                    packet.addData(data);
                } else {
                    packet.updateData(keepedIds[msg_target.nucleushash], data);
                }
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
 * @param {object} mapOffset
 * @param {Boolean} characterSelected
 */
function updatePlayer(json, player, mapOffset, characterSelected = false) {
    player.updatePositionAndAngles(json.pos.x, json.pos.y, json.pos.z, json.angles.y, mapOffset);
    player.updateHealthAndShields(json.currenthealth, json.maxhealth, json.shieldhealth, json.shieldmaxhealth);
    if (player.teamName === "") {
        player.setTeamName(json.teamname);
    }
    if (player.squadIndex === -1) {
        player.setSquadIndex(json.squadindex);
    }
    if (characterSelected) {
        player.updateLegend(getLegendId(json.character), json.skin);
    }
    return player
}

/**
 * 
 * @param {Object} msg
 * @param {CustomMatch} match
 * @param {boolean} [characterSelected=false]
 * @return {Player} 
 */
function processUpdatePlayer(msg, match, characterSelected = false) {
    const msg_player = msg.player;
    checkPlayerInstance(msg_player, match);
    const player = match.getPlayer(msg_player.nucleushash);
    updatePlayer(msg_player, player, match.mapOffset, characterSelected);
    return player;
}

/**
 *
 *
 * @param {Object} msg_player
 * @param {CustomMatch} match
 * @return {Player}
 */
function processUpdateMsgPlayer(msg_player, match) {
    checkPlayerInstance(msg_player, match);
    const player = match.getPlayer(msg_player.nucleushash);
    updatePlayer(msg_player, player, match.mapOffset);
    return player;
}


/**
 * プレイヤーのインスタンスが存在するかどうかのチェック
 * なければ追加する
 * @param {JSON} msg_player 
 * @param {CustomMatch} match 
 */
function checkPlayerInstance(msg_player, match) {
    const nucleushash = msg_player.nucleushash;
    if (match.getPlayer(nucleushash) == null) {
        match.addPlayer(new Player(msg_player.name, msg_player.teamid, nucleushash, msg_player.hardwarename), msg_player.teamname);
    }
}


/**
 * LiveAPIEventのposデータをLeedlet形式のposデータに変換する
 * @param {Array} _mapOffset - マップのオフセット
 * @param {JSON} _pos - LiveAPIEventのposデータ
 */
function convertLeefletPOS(_mapOffset, _pos) {
    return [(_pos.x + _mapOffset[0]) / _mapOffset[2], (_pos.y + _mapOffset[1]) / _mapOffset[2], _pos.z / _mapOffset[2]];
}

/**
 * LiveAPIEventのデータをEventクラス形式のデータに変換する一般化関数
 * @param {Object} msg_player - LiveAPIEventのデータ
 * @param {CustomMatch} match - CustomMatchクラスのインスタンス
 */
function processEventData(msg_player, match) {
    return {
        id: msg_player.nucleushash,
        pos: convertLeefletPOS(match.mapOffset, msg_player.pos),
        hp: [msg_player.currenthealth, msg_player.maxhealth, msg_player.shieldhealth, msg_player.shieldmaxhealth],
        ang: msg_player.angles.y
    }
}

/**
 * アイテム名からレベルをチェックする
 * @param {String} name
 */
function checkItemLevel(name) {
    //debug中
    let level = new RegExp(`\\(${language.item.level_label} (\\d+)\\)`).exec(name);
    if (level == null) {
        level = 1;
    } else {
        level = Number(level[1]);
    }
    return level;
}

/**
 * シールド貫通武器かどうかのチェック
 * @param {string} perpetrator - 武器名
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
    for (const team of Object.values(match.teams)) {
        if (team.players.length === 0) { continue; }
        const player = match.getPlayer(team.players[0]);
        if (["death", "eliminated"].includes(player.getStatus()) || !player.getOnlineStatus()) { continue; }
        apexCommon.change_camera("name", player.name);
    }
}

/**
 * 括弧で囲まれた部分とそうでない部分で分割する
 * @param {string} input
 * @returns {string|null} 見つかった場合は配列、見つからなかった場合はnullを返す
 */
function splitBracketParts(input) {
    const split = input.match(/^(.*?)\s*[\(（](.*?)[\)）]$/);
    if (split) {
        return [split[1].trim(), split[2].trim()];
    } else {
        return null;
    }
}


/**
 * 武器・アイテム名からゲーム内IDをチェックする
 * @param {String} name - 武器・アイテム名
 * @returns {Array<String>|undefined}
 */
function getWeaponIdOrItemId(name) {
    const split = splitBracketParts(name);
    let result = "";
    if (split == null) {
        result = ["weapon", Object.keys(language.weapons_label).find((key) => language.weapons_label[key] === name)];
        if (result === undefined) {
            result = ["item", Object.keys(language.items_label).find((key) => language.items_label[key] === name)];
        }
    } else {
        result = ["weapon", Object.keys(language.weapons_label).find((key) => language.weapons_label[key] === split[0])];
        if (result === undefined) {
            result = ["item", Object.keys(language.items_label).find((key) => language.items_label[key] === split[0])];
        }
    }
    if (result === undefined) {
        console.log(`[GET WEAPON OR ITEM ID] Weapon or Item ID not found: ${name}`);
    }
    return result;
}

/**
 * 武器名からゲーム内IDをチェックする
 * @param {String} name
 * @returns {String|undefined}
 */
function getWeaponId(name) {
    const split = splitBracketParts(name);
    let result = "";
    if (split == null) {
        result = Object.keys(language.weapons_label).find((key) => language.weapons_label[key] === name);
    } else {
        result = Object.keys(language.weapons_label).find((key) => language.weapons_label[key] === split[0]);
    }
    if (result === undefined) {
        console.log(`[GET WEAPON ID] Weapon ID not found: ${name}`);
    }
    return result;
}

/**
 * 人に関わる際に渡される武器名からゲーム内IDをチェックする
 * @param {String} name
 * @returns {String|undefined}
 */
function getAssociateWeaponId(name) {
    const split = splitBracketParts(name);
    let result = "";
    if (split == null) {
        result = Object.keys(language.associate_weapons_label).find((key) => language.associate_weapons_label[key] === name);
    } else {
        result = Object.keys(language.associate_weapons_label).find((key) => language.associate_weapons_label[key] === split[0]);
    }
    if (result === undefined) {
        console.log(`[GET ASSOCIATE WEAPON ID] Weapon ID not found: ${name}`);
    }
    return result;
}

/**
 * アビリティ名からゲーム内IDをチェックする
 * @param {String} character - キャラクター名
 * @param {String} name - アビリティ名
 * @returns {String|undefined} 存在した場合はアビリティID、存在しない場合はundefined
 */
function getAbilityId(character, name) {
    const split = splitBracketParts(name);
    const result = language.legends_label[character][split[0].toLowerCase()];
    if (result != split[1]) {
        console.log(`[GET ABILITY ID] Ability name is not match: ${name}`);
    }
    return result;
}

/**
 * レジェンド名からゲーム内IDをチェックする
 * @param {String} name
 * @returns {String|undefined} 存在した場合はレジェンドID、存在しない場合はundefined
 */
function getLegendId(name) {
    let result = Object.keys(language.legends_label).find((key) => language.legends_label[key].name === name);
    if (result === undefined) {
        console.log(`[GET LEGEND ID] Legend ID not found: ${name}`);
    }
    return result;
}

/**
 * アイテム名からゲーム内IDをチェックする
 * @param {String} name
 * @returns {String|undefined}
 */
function getItemId(name) {
    const split = splitBracketParts(name);
    let result = "";
    if (split == null) {
        result = Object.keys(language.items_label).find((key) => language.items_label[key] === name);
    } else if (["Tactical", "Ultimate"].includes(split[0])) {
        result = Object.keys(language.items_label).find((key) => language.items_label[key] === split[1]);
    } else {
        result = Object.keys(language.items_label).find((key) => language.items_label[key] === split[0]);
    }
    if (result === undefined) {
        console.log(`[GET ITEM ID] Item ID not found: ${name}`);
    }
    return result;
}

/**
 * スコアを計算し結果を返す関数
 * @returns {boolean|Object} - スコアが更新されたかどうか
 */
async function calcScore() {
    let scoreBoard = "";
    if (!match) { return false; }
    const score_setting = config.score_setting;
    match.setScoreSettings(score_setting);
    const killPoint = score_setting.kill_point;
    const maxKill = score_setting.max_kill;
    for (let i = 2; i < match.maxTeams + 2; i++) {
        let teamScore = 0;
        let team = match.getTeam(i);
        // Teamが存在し、かつプレイヤーがいる場合
        if (team != null && team.players.length > 0) {
            let rankPoint = score_setting.rank_points[team.rank - 1];
            for (const playerId of team.players) {
                let kill = match.getPlayer(playerId).kills.total;
                console.log(playerId, teamScore, rankPoint, kill, maxKill, killPoint, typeof kill, typeof maxKill, typeof killPoint);
                if (kill > maxKill) {
                    teamScore += maxKill * killPoint;
                } else {
                    teamScore += kill * killPoint;
                }
            }
            team.score = teamScore + rankPoint;
        }
        scoreBoard += `${team.rank}\t${team.totalKills}\t${team.score}\n`;
    }
    console.log("[GET SCORE] scoreBoard", scoreBoard);
    return scoreBoard;
}

/**
 * csvDataをコピーする変数
 * @type {Object}
 * @global
 * @link readCSV
 */
let copyCSVData = {};

/**
 * CSVから取得したプレイヤー名のリスト
 * @type {Object}
 * @global
 * @link readCSV
 */
let csvPlayerNames = {};

/**
 * CSVファイルを読み込む
 * @param {Object} csv - CSVファイル
 * @returns {Boolean} - 読み込みが成功したかどうか
 */
function readCSV(csv) {
    try {
        csvData = {};
        csvPlayerNames = { dupulicate: [] };
        for (const team of csv) {
            const teamId = Number(team.TEAM) + 1;
            const players = [];
            for (let i = 0; i < team.MEMBER_NUM; i++) {
                const name = team[`MEMBER${i + 1}`];
                if (csvPlayerNames[name] || csvPlayerNames.dupulicate.includes(name)) {
                    console.log(`[READ CSV] Duplicate player name: ${name}`);
                    csvData[csvPlayerNames[name].teamId].players = csvData[csvPlayerNames[name].teamId].players.filter((playerName) => playerName !== name);
                    csvPlayerNames.dupulicate.push(name);
                } else {
                    csvPlayerNames[name] = { teamId };
                    players.push(name);
                }
            }
            csvData[`${teamId}`] = { teamName: team.NAME, logoUrl: team.IMG_URL, players };
        }
        copyCSVData = JSON.parse(JSON.stringify(csvData));
        apexCommon.get_lobby_players();
        return true;
    } catch (error) {
        console.error("[READ CSV] Error:", error);
        return false;
    }
}


/**
 * LiveAPIから取得したプレイヤー名のリスト
 * @type {Object}
 * @global
 * @link applyCSVData
 */
let playerNames = {};

/**
 * プレイヤーが設定済みかどうかのフラグ
 * @type {Boolean}
 * @global
 * @link applyCSVData
 */
let isPlayerSet = {
    success: false,
    index: 0
};

/**
 * lobbyにCSVデータを反映する
 * @param {CustomMatch} lobby - ロビー
 * @param {Object} copyCSVData - CSVデータ
 */
function applyCSVData(lobby, copyCSVData) {
    if (Object.keys(copyCSVData).length === 0) {
        return false;
    }
    const teamId = Object.keys(copyCSVData)[0];
    if (isPlayerSet.success) {
        const team = lobby.getTeam(teamId);
        if (team) {
            if (copyCSVData[teamId].teamName !== team.teamName) {
                apexCommon.set_team_name(teamId, copyCSVData[teamId].teamName);
            }
            team.setTeamImg(copyCSVData[teamId].logoUrl);
        }
        delete copyCSVData[teamId];
        isPlayerSet.success = false;
        isPlayerSet.index = 0;
        apexCommon.get_lobby_players();
    } else {
        const playerName = copyCSVData[teamId].players[isPlayerSet.index];
        if (playerNames[playerName]) {
            const player = playerNames[playerName];
            if (lobby.getTeam(0).players.includes(player.nucleusHash)) {
                apexCommon.set_team(teamId, player.hardwareName, player.nucleusHash);
            }
        } else if (playerName === undefined) {
            console.log(`[APPLY CSV DATA] Player is empty, TEAM_ID: ${teamId - 1}`);
        } else {
            console.log(`[APPLY CSV DATA] Player not found, TEAM_ID: ${teamId - 1} PLAYER_NAME: ${playerName}`);
        }
        if (isPlayerSet.index >= copyCSVData[teamId].players.length - 1) {
            isPlayerSet.success = true;
        } else {
            isPlayerSet.index++;
        }
    }
    return true;
}

/**
 * 格納しているメッセージを読みだす
 * @param {string} messageType - メッセージの種類
 * @return {Object|null} - メッセージのオブジェクト
 */
function readLobbyMessage(messageType) {
    if (waitMessages[messageType]) {
        return waitMessages[messageType];
    } else {
        return null;
    }
}

/**
 * Apply CSV Dataの最終適用時間
 * @type {number}
 * @global
 * @link update
 */
let lastApplyTime = 0;

/**
 * メインスレッド
 */
async function update() {
    const now = Date.now();
    if (match && match.startTimeStamp != 0 && match.endTimeStamp === 0) {
        getPlayerStatus(match);
        sendMapData.sendPlayerPositionUpdate(match, config.output);
    }
    if (match && match.startTimeStamp != 0 && !["Resolution", "Postmatch"].includes(match.state)) {
        if (packet && (packet.data.length + packet.events.length) != 0 && packet.t > 2) {
            if (packet.events.length == 0 && Number.isInteger(packet.t)) {
                console.log("[UPDATE] Packet is skipped");
            } else {
                match.addPacketElement(packet.t, packet.toJSON());
            }
        }
        packet = new Packet((now / 1000) - match.startTimeStamp);
    }
    if (!isPlaying) {
        if (now - lastPollTime >= 5000) {
            apexCommon.get_lobby_players();
            apexCommon.get_match_settings();
            lastPollTime = now;
        }
        if (copyCSVData && lobby && now - lastApplyTime >= 50) {
            applyCSVData(lobby, copyCSVData);
            lastApplyTime = now;
        }
    }
}

/** @type {*} */
const intervalId = setInterval(() => {
    update();
}, 1000 / config.data_fps);

// サーバーが全て起動した後に呼ばれる処理
common.registerOnServersStarted((servers) => {
    common.logMessage("サーバーが全て起動しました！");
    // メッセージ処理用のコールバック関数を設定
    common.getServerList().websocketServer.setHandleMessageCallback((message, ws) => {
        const liveAPIEvent = LiveAPIEvent.deserializeBinary(message);
        // common.logMessage('LiveAPIEvent:', liveAPIEvent.toString());

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
    // console.log(`[HANDLE MESSAGE] Received ${messageType} message:`, message.toObject());
    // ログを保存
    if (!(["ObserverSwitched", "Response", "CustomMatch_SetSettings", "CustomMatch_LobbyPlayers"].includes(messageType))) {  // logにObserverSwitchedとResponseを含めないようにする
        common.saveLog(JSON.stringify(message.toObject()), common.getServerList().websocketServer.fileName);
    }
    // common.saveLog(JSON.stringify(message.toObject()), common.getServerList().websocketServer.fileName);
    // common.logMessage(`Received ${messageType} message:`, message.toObject());
    analyze_message(messageType, message.toObject());
}

module.exports = { match, config, gamemodes, lobby, calcScore, startApexLegends, analyze_message, readCSV, readLobbyMessage }