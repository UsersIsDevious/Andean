import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

export function useSignalR(hubUrl: string) {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!hubUrl) return;

    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl, {
        withCredentials: false, // 認証が不要な場合
        skipNegotiation: true, // WebSocket を直接使用
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    newConnection.start()
      .then(() => console.log(`✅ Connected to ${hubUrl}`))
      .catch(err => console.error(`❌ SignalR Connection Error (${hubUrl}):`, err));

    // 既存のリスナーを削除
    newConnection.off("ReceiveMessage");

    newConnection.on("ReceiveMessage", (message) => {
      console.log(`📩 Received Message from ${hubUrl}:`, message);
      setMessages(prev => [...prev, message]);
    });

    setConnection(newConnection);

    return () => {
      newConnection.stop();
    };
  }, [hubUrl]); // `hubUrl` を変更すると再接続

  return { connection, messages, isLoading };
}
