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
        withCredentials: false,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
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
