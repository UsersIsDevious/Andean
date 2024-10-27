"use client"
import { useState } from "react";

export default function WebSocketPage() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [port, setPort] = useState("");

  // WebSocket接続を作成する関数
  const connectToWebSocket = () => {
    if (!port) {
      console.error("ポート番号を入力してください");
      return;
    }

    const ws = new WebSocket(`ws://localhost:${port}`); // 入力されたポートに接続
    ws.onopen = () => {
      console.log(`WebSocket接続がポート ${port} に確立されました`);
      setSocket(ws); // WebSocketインスタンスをセット
    };

    ws.onclose = () => {
      console.log(`WebSocket接続がポート ${port} から切断されました`);
      setSocket(null); // WebSocketインスタンスをクリア
    };

    ws.onerror = (error) => {
      console.error("WebSocketエラー:", error);
    };
  };

  // メッセージを送信する関数
  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({"data":{message}}));
      console.log("送信されたメッセージ:", message);
    } else {
      console.error("WebSocket接続が開かれていません");
    }
  };

  return (
    <div className="container">
      <h1>WebSocket メッセージ送信</h1>
      <div>
        <label>ポート番号:</label>
        <input
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          placeholder="WebSocketサーバーのポート番号を入力"
        />
        <button onClick={connectToWebSocket}>接続</button>
      </div>
      <div>
        <label>メッセージ:</label>
        <textarea className="w-max h-max"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="送信するメッセージを入力"
        />
      </div>
      <button onClick={sendMessage} disabled={!socket}>メッセージを送信</button>
    </div>
  );
}
