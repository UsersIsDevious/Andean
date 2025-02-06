const { 
    Request, ChangeCamera, PauseToggle, CustomMatch_CreateLobby, CustomMatch_JoinLobby, CustomMatch_LeaveLobby, CustomMatch_SetReady, CustomMatch_SetMatchmaking,
    CustomMatch_SetTeam, CustomMatch_KickPlayer, CustomMatch_SetSettings, CustomMatch_SendChat, CustomMatch_GetLobbyPlayers, CustomMatch_SetTeamName, CustomMatch_GetSettings,
    PlayerOfInterest, CustomMatch_SetSpawnPoint, CustomMatch_SetEndRingExclusion
} = require('../../bin/events_pb'); // events_pb.jsからRequest関連の機能をインポート
const { getServerList, wss } = require('../utils/common');


// "ActionsCase": getActionsCase,
// "ToObject": toObject,
// "SerializeBinary": serializeBinary,
// "GetWithack": getWithack,
// "SetWithack": setWithack,
// "GetPresharedkey": getPresharedkey,
// "SetPresharedkey": setPresharedkey,
// "GetChangecam": getChangecam,
// "SetChangecam": setChangecam,
// "ClearChangecam": clearChangecam,
// "HasChangecam": hasChangecam,
// "GetPausetoggle": getPausetoggle,
// "SetPausetoggle": setPausetoggle,
// "ClearPausetoggle": clearPausetoggle,
// "HasPausetoggle": hasPausetoggle,
// "GetCustommatchCreatelobby": getCustommatchCreatelobby,
// "SetCustommatchCreatelobby": setCustommatchCreatelobby,
// "ClearCustommatchCreatelobby": clearCustommatchCreatelobby,
// "HasCustommatchCreatelobby": hasCustommatchCreatelobby,
// "GetCustommatchJoinlobby": getCustommatchJoinlobby,
// "SetCustommatchJoinlobby": setCustommatchJoinlobby,
// "ClearCustommatchJoinlobby": clearCustommatchJoinlobby,
// "HasCustommatchJoinlobby": hasCustommatchJoinlobby,
// "GetCustommatchLeavelobby": getCustommatchLeavelobby,
// "SetCustommatchLeavelobby": setCustommatchLeavelobby,
// "ClearCustommatchLeavelobby": clearCustommatchLeavelobby,
// "HasCustommatchLeavelobby": hasCustommatchLeavelobby,
// "GetCustommatchSetready": getCustommatchSetready,
// "SetCustommatchSetready": setCustommatchSetready,
// "ClearCustommatchSetready": clearCustommatchSetready,
// "HasCustommatchSetready": hasCustommatchSetready,
// "getCustommatchSetmatchmaking": getCustommatchSetmatchmaking,
// "setCustommatchSetmatchmaking": setCustommatchSetmatchmaking,
// "clearCustommatchSetmatchmaking": clearCustommatchSetmatchmaking,
// "hasCustommatchSetmatchmaking": hasCustommatchSetmatchmaking,
// "getCustommatchSetteam": getCustommatchSetteam,
// "setCustommatchSetteam": setCustommatchSetteam,
// "clearCustommatchSetteam": clearCustommatchSetteam,
// "hasCustommatchSetteam": hasCustommatchSetteam,
// "getCustommatchKickplayer": getCustommatchKickplayer,
// "setCustommatchKickplayer": setCustommatchKickplayer,
// "clearCustommatchKickplayer": clearCustommatchKickplayer,
// "hasCustommatchKickplayer": hasCustommatchKickplayer,
// "getCustommatchSetsettings": getCustommatchSetsettings,
// "setCustommatchSetsettings": setCustommatchSetsettings,
// "clearCustommatchSetsettings": clearCustommatchSetsettings,
// "hasCustommatchSetsettings": hasCustommatchSetsettings,
// "getCustommatchSendchat": getCustommatchSendchat,
// "setCustommatchSendchat": setCustommatchSendchat,
// "clearCustommatchSendchat": clearCustommatchSendchat
//  力尽きた。もし続きが必要なら「proto.rtech.liveapi.Request.prototype.」をevents_pb.jsで調べれば検索できる


/**
 * シリアライズされたリクエストをWebSocket経由でクライアントに送信
 * @param {Request} request - リクエストオブジェクト
 * @param {boolean} ack - 確認応答を要求するかどうか
 */
async function serialized_request(request, ack = true) {
    request.setWithack(ack);  // 確認応答を要求
    const serialized = request.serializeBinary();
    await getServerList().websocketServer.broadcastToAllClients(serialized);  // シリアライズされたデータをWebSocket経由で送信
}

/**
 * カメラを指定されたターゲットに変更
 * @param {string} type - 'poi'または'name'を指定
 * @param {string} value - PlayerOfInterestのタイプまたはプレイヤー名
 */
function change_camera(type, value) {
    const req = new Request();
    const changeCamera = new ChangeCamera();

    if (type === 'poi') {
        const poi_value = PlayerOfInterest[value]; // 例: 'KILL_LEADER' などのプレイヤータイプを指定
        changeCamera.setPoi(poi_value);
    } else if (type === 'name') {
        changeCamera.setName(value); // プレイヤーの名前を指定
    }

    req.setChangecam(changeCamera);
    serialized_request(req, false);
}

/**
 * ポーズの切り替え
 */
function pause_toggle(preTimer) {
    const req = new Request();
    const pauseToggle = new PauseToggle();
    pauseToggle.setPretimer(preTimer)
    req.setPausetoggle(pauseToggle);
    serialized_request(req);
}

/**
 * カスタムマッチロビーを作成
 */
function create_lobby() {
    const req = new Request();
    const createLobby = new CustomMatch_CreateLobby();
    req.setCustommatchCreatelobby(createLobby);
    serialized_request(req);
}

/**
 * カスタムマッチロビーに参加
 * @param {string} token - ロビー参加のためのトークン
 */
function join_lobby(token) {
    const req = new Request();
    const joinLobby = new CustomMatch_JoinLobby();
    joinLobby.setRoletoken(token);
    req.setCustommatchJoinlobby(joinLobby);
    serialized_request(req);
}

/**
 * カスタムマッチロビーから退出
 */
function leave_lobby() {
    const req = new Request();
    const leaveLobby = new CustomMatch_LeaveLobby();
    req.setCustommatchLeavelobby(leaveLobby);
    serialized_request(req);
}

/**
 * 試合の準備完了状態を設定
 * @param {boolean} ready - trueで準備完了、falseで準備未完了を設定
 */
function set_ready(ready) {
    const req = new Request();
    const setReady = new CustomMatch_SetReady();
    setReady.setIsready(ready); // Boolean型（trueまたはfalse）
    req.setCustommatchSetready(setReady);
    serialized_request(req);
}

/**
 * マッチメイキングの有効/無効を設定
 * @param {boolean} matchmaking - trueでマッチメイキング有効、falseで無効
 */
function set_matchmaking(matchmaking) {
    const req = new Request();
    const setMatchmaking = new CustomMatch_SetMatchmaking();
    setMatchmaking.setEnabled(matchmaking); // Boolean型（trueまたはfalse）
    req.setCustommatchSetmatchmaking(setMatchmaking);
    serialized_request(req);
}

/**
 * チームを設定
 * @param {number} teamId - 設定するチームID
 */
function set_team(teamId, targetHardwareName, targetNucleushash) {
    const req = new Request();
    const setTeam = new CustomMatch_SetTeam();
    setTeam.setTeamid(teamId);
    setTeam.setTargethardwarename(targetHardwareName);
    setTeam.setTargetnucleushash(targetNucleushash);
    req.setCustommatchSetteam(setTeam);
    serialized_request(req);
}

/**
 * プレイヤーをキック
 * @param {number} playerId - キックするプレイヤーのID
 */
function kick_player(targetHardwareName, targetNucleushash) {
    const req = new Request();
    const kickPlayer = new CustomMatch_KickPlayer();
    kickPlayer.setTargethardwarename(targetHardwareName);
    kickPlayer.setTargetnucleushash(targetNucleushash);
    req.setCustommatchKickplayer(kickPlayer);
    serialized_request(req);
}

/**
 * 試合設定を適用
 * @param {String} matchName - 現在のマッチプレイリスト名(モード・マップ)を指定
 * @param {boolean} adminChat - チャットを管理者のみに制限
 * @param {boolean} teamRename - チーム名の変更をプレイヤーに許可する
 * @param {boolean} selfAssign - チーム変更をプレイヤーに許可する
 * @param {boolean} aimAssist - すべてのプレイヤーはPCエイムアシスト値を使用する
 * @param {boolean} anonMode - 他のプレイヤーに対し名前を非表示
 */
function set_settings(matchName, adminChat, teamRename, selfAssign, aimAssist, anonMode) {
    const req = new Request();
    const setSettings = new CustomMatch_SetSettings();
    setSettings.setPlaylistname(matchName);
    setSettings.setAdminchat(adminChat);
    setSettings.setTeamrename(teamRename);
    setSettings.setSelfassign(selfAssign);
    setSettings.setAimassist(aimAssist);
    setSettings.setAnonmode(anonMode);
    req.setCustommatchSetsettings(setSettings);
    serialized_request(req);
}

/**
 * チャットメッセージを送信
 * @param {string} message - 送信するメッセージ
 */
function send_chat(message) {
    const req = new Request();
    const sendChat = new CustomMatch_SendChat();
    sendChat.setText(message);
    req.setCustommatchSendchat(sendChat);
    serialized_request(req);
}

/**
 * ロビープレイヤー情報を取得
 */
function get_lobby_players() {
    const req = new Request();
    const getLobbyPlayers = new CustomMatch_GetLobbyPlayers();
    req.setCustommatchGetlobbyplayers(getLobbyPlayers);
    serialized_request(req, false);
}

/**
 * チーム名を設定
 * @param {number} teamId - チームID
 * @param {string} name - 設定するチーム名
 */
function set_team_name(teamId, name) {
    const req = new Request();
    const setTeamName = new CustomMatch_SetTeamName();
    setTeamName.setTeamid(teamId);
    setTeamName.setTeamname(name);
    req.setCustommatchSetteamname(setTeamName);
    serialized_request(req);
}

/**
 * 試合設定を取得
 */
function get_match_settings() {
    const req = new Request();
    const getSettings = new CustomMatch_GetSettings();
    req.setCustommatchGetsettings(getSettings);
    serialized_request(req);
}

/**
 * スポーンポイントを設定
 * @param {number} teamId - チームID
 * @param {number} landmark - 設定するランドマークの番号
 */
function set_spawn_point(teamId, landmark) {
    const req = new Request();
    const setSpawnPoint = new CustomMatch_SetSpawnPoint();
    setSpawnPoint.setTeamid(teamId);
    setSpawnPoint.setSpawnpoint(landmark);
    req.setCustommatchSetspawnpoint(setSpawnPoint);
    serialized_request(req);
}

/**
 * スポーンポイントを設定
 * @param {number} exclusion - 除外設定の有無を指定
 */
function set_end_ring_exclusion(exclusion) {
    const req = new Request();
    const endRingExclusion = new CustomMatch_SetEndRingExclusion();
    endRingExclusion.setSectiontoexclude(exclusion);
    req.setCustomMatchSetEndRingExclusion(endRingExclusion);
    serialized_request(req);
}

// モジュールとして関数をエクスポート
module.exports = {
    change_camera,
    pause_toggle,
    create_lobby,
    join_lobby,
    leave_lobby,
    set_ready,
    set_matchmaking,
    set_team,
    kick_player,
    set_settings,
    send_chat,
    get_lobby_players,
    set_team_name,
    get_match_settings,
    set_spawn_point,
    set_end_ring_exclusion
};