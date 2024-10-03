const wss = require('./common');

const { 
    Request,
    CustomMatch_CreateLobby 
} = require('../bin/events_pb'); // Requestをインポート

function hoge(e){
    return ""
}

function create_lobby() {
    const req = new Request();  // Requestオブジェクトを作成
    const createLobby = new CustomMatch_CreateLobby();

    req.setCustommatchCreatelobby(createLobby);
    req.setWithack(true);  // ack（確認応答）を要求

    const serialized = req.serializeBinary();
    wss.send(serialized);  // シリアライズされたリクエストをWebSocket経由で送信

    console.log("Do IT !!!!");  // 動作テスト用
}

// モジュールとしてエクスポート
module.exports = { 
    hoge,
    create_lobby
};