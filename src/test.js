const protobuf = require("protobufjs");
const path = require("path");

const protoPath = path.join(__dirname, "events.proto");

protobuf.load(protoPath, (err, root) => {
    if (err) {
        throw err;
    }

    const Init = root.lookupType("rtech.liveapi.Init");
    
    // メッセージのサンプルデータを作成
    const initMessage = Init.create({
        timestamp: Date.now(),
        category: "game_start",
        gameVersion: "1.0",
        apiVersion: { major_num: 1, minor_num: 0, build_stamp: 1234, revision: "abc" },
        platform: "PC",
        name: "MyGameSession"
    });

    // メッセージをバッファにエンコード
    const buffer = Init.encode(initMessage).finish();
    console.log("Encoded buffer:", buffer);

    // エンコードしたバッファをデコード
    const decodedMessage = Init.decode(buffer);
    console.log("Decoded message:", decodedMessage);
});
