const { 
    Request, ChangeCamera, PauseToggle, CustomMatch_CreateLobby, CustomMatch_JoinLobby, CustomMatch_LeaveLobby, CustomMatch_SetReady, CustomMatch_SetMatchmaking,
    CustomMatch_SetTeam, CustomMatch_KickPlayer, CustomMatch_SetSettings, CustomMatch_SendChat, CustomMatch_GetLobbyPlayers, CustomMatch_SetTeamName, CustomMatch_GetSettings
} = require('../../bin/events_pb'); // Requestをインポート
const websocketServer = require('../server/websocketServer')


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


// リクエスト処理はここで実行される
function serialized_request(request) {
    request.setWithack(true);  // ack（確認応答）を要求
    const serialized = request.serializeBinary();
    websocketServer.broadcastToAllClients(serialized);  // シリアライズされたリクエストをWebSocket経由で送信
}

// ロビー作成
function create_lobby() {
    const req = new Request();  // Requestオブジェクトを作成
    const createLobby = new CustomMatch_CreateLobby();  // CustomMatch_CreateLobbyオブジェクトを作成
    req.setCustommatchCreatelobby(createLobby);  // これをするとなぜか作成できる。set~とかget~は上のリストに途中まで書いてある
    serialized_request(req)  // これ以降の処理はすべて共通のため関数化した
};

function join_lobby(token) {
    const req = new Request();
    const joinlobby = new CustomMatch_JoinLobby();
    join_lobby.roleToken = token
    req.setCustommatchJoinlobby(joinlobby);
    serialized_request(req)
}

// モジュールとしてエクスポート
module.exports = {
    create_lobby, join_lobby
};