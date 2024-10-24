import { useState, useEffect } from "react";

export default function WebSocketPage() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [channelNumber, setChannelNumber] = useState("");

  // WebSocket接続の初期化
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // WebSocketサーバーのURL
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket接続が確立されました");
    };

    ws.onclose = () => {
      console.log("WebSocket接続が切断されました");
    };

    ws.onerror = (error) => {
      console.error("WebSocketエラー:", error);
    };

    return () => {
      ws.close(); // コンポーネントがアンマウントされる時にWebSocketを閉じる
    };
  }, []);

  // メッセージを送信する関数
  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const data = {
        channel: channelNumber,
        message: message,
      };
      socket.send(JSON.stringify(data));
      console.log("送信されたメッセージ:", data);
    } else {
      console.error("WebSocket接続が開かれていません");
    }
  };

  return (
    <div className="container">
      <h1>WebSocket メッセージ送信</h1>
      <div>
        <label>チャンネル番号:</label>
        <input
          type="text"
          value={channelNumber}
          onChange={(e) => setChannelNumber(e.target.value)}
          placeholder="送信先のチャンネル番号を入力"
        />
      </div>
      <div>
        <label>メッセージ:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="送信するメッセージを入力"
        />
      </div>
      <button onClick={sendMessage}>メッセージを送信</button>
    </div>
  );
}
