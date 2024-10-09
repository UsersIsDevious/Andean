const { 
    Request, ChangeCamera, PauseToggle, CustomMatch_CreateLobby, CustomMatch_JoinLobby, CustomMatch_LeaveLobby, CustomMatch_SetReady, CustomMatch_SetMatchmaking,
    CustomMatch_SetTeam, CustomMatch_KickPlayer, CustomMatch_SetSettings, CustomMatch_SendChat, CustomMatch_GetLobbyPlayers, CustomMatch_SetTeamName, CustomMatch_GetSettings
} = require('../bin/events_pb'); // Requestをインポート

let wssInstance;

function setWebSocket(ws) {
  wssInstance = ws;
};


/**
 * API エンドポイント用の処理関数
 * @param {Response} res - クライアントに対するレスポンスオブジェクト
 * @param {Request} req - クライアントのリクエストオブジェクト
 */
function apexLiveApiCall(res, req) {
    // リクエストのクエリパラメーターを取得（例：/API?param=value）
    const queryParam = req.query.param;
  
    // リクエストされたパラメーターに応じた処理を実行
    switch (queryParam) {
      case 'status':
        // クライアントに現在のサーバーステータスを返す
        res.json({ status: 'Server is running', clientsCount: clients.length });
        break;
  
      case 'clients':
        // 現在接続中のクライアント数を返す
        res.json({ clientsCount: clients.length });
        break;
  
      case 'create_lobby':
        // カスタムマッチのロビーを作成
        create_lobby(req);
        res.json({data:"Make match lobby!!"});
        break;
  
      case 'get_players':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case '/get_data/{type}':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'get_data':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'schedule_autostart':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'change_camera':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'pause_toggle':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'set_ready':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'set_matchmaking':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'set_team':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'kick_player':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'set_settings':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'send_chat':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'get_player_names':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'get_hardware_names':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      case 'get_nucleus_hashes':
        // hgoe
        hoge();
        res.json({data:"a"});
        break;
  
      default:
        // デフォルトのレスポンス
        res.json({ message: 'APIエンドポイントにアクセスしました。', query: queryParam });
        break;
    }
}


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
function requester(request) {
    const serialized = request.serializeBinary();
    wssInstance.send(serialized);  // シリアライズされたリクエストをWebSocket経由で送信
}

// ロビー作成
function create_lobby() {
    const req = new Request();  // Requestオブジェクトを作成
    const createLobby = new CustomMatch_CreateLobby();  // CustomMatch_CreateLobbyオブジェクトを作成
    req.setCustommatchCreatelobby(createLobby);  // これをするとなぜか作成できる。set~とかget~は上のリストに途中まで書いてある
    req.setWithack(true);  // ack（確認応答）を要求
    requester(req)  // これ以降の処理はすべて共通のため関数化した
};

// モジュールとしてエクスポート
module.exports = { 
    setWebSocket,
    apexLiveApiCall
};