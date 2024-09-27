const protobuf = require("protobufjs");

// protoファイルを読み込む
protobuf.load("events.proto", (err, root) => {
    if (err) {
        throw err;
    }

    // メッセージ型を取得
    const Event = root.lookupType("events.Event");

    // メッセージを作成
    const message = Event.create({
        id: "123",
        name: "Sample Event",
        timestamp: Date.now()
    });

    // メッセージをエンコード
    const buffer = Event.encode(message).finish();

    console.log("Encoded Buffer:", buffer);

    // デコード
    const decodedMessage = Event.decode(buffer);
    console.log("Decoded Message:", decodedMessage);
});
