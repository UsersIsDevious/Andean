import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { useDispatch } from "react-redux";
import { updateData } from "@/redux/slices/dataSlice";

const SIGNALR_URL = "https://localhost:7109/ControlPanelHub";

export function useSignalR() {
  const dispatch = useDispatch();
  const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
  const [lobbyResponse, setLobbyResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(SIGNALR_URL, {
        withCredentials: false,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();

    newConnection.start()
      .then(() => console.log("✅ SignalR Connected"))
      .catch(err => console.error("❌ SignalR Connection Error:", err));

    // 古いリスナーを削除
    newConnection.off("ReceiveMessage");
    newConnection.off("ReceiveTimestamp");
    newConnection.off("LobbyResponse");

    // メッセージ受信
    newConnection.on("ReceiveMessage", (message) => {
      console.log("📩 Received Message:", message);
      dispatch(updateData(message));
    });

    newConnection.on("ReceiveTimestamp", (timestamp) => {
      console.log("📩 Received Timestamp:", timestamp);
      dispatch(updateData(timestamp));
    });

    newConnection.on("LobbyResponse", (response) => {
      console.log("📩 Received Lobby Response:", response);
      setLobbyResponse(response);
      setIsLoading(false);
    });

    setConnection(newConnection);

    return () => {
      newConnection.stop();
    };
  }, [dispatch]); // 依存配列に余計な値を入れない

  const createLobby = async () => {
    if (connection) {
      try {
        console.log("🛠️ Sending CreateLobby request...");
        setIsLoading(true);
        await connection.invoke("CreateLobby");
      } catch (error) {
        console.error("❌ CreateLobby Error:", error);
        setIsLoading(false);
      }
    }
  };

  return { createLobby, lobbyResponse, isLoading };
}
