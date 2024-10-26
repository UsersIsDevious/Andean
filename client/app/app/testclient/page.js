"use client"
import { useState, useEffect } from "react";
import MessageComponent from "./MessageComponent";  // コンポーネントをインポート

export default function Page() {
  const [message, setMessage] = useState(null);  // メッセージの状態を管理

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8888");  // WebSocket接続を確立

    socket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);  // 受信したメッセージをJSONとして解析
      setMessage(data);  // メッセージの状態を更新
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // コンポーネントがアンマウントされた時にソケットを閉じる
    return () => {
      socket.close();
    };
  }, []);

  // 受信したメッセージをコンポーネントに渡す
  return (
    <div>
      <h1>WebSocket Message</h1>
      {message ? (
        <MessageComponent message={message} />
      ) : (
        <p>Waiting for message...</p>
      )}
    </div>
  );
}
