import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { useDispatch } from "react-redux";
import { updateData } from "@/redux/slices/dataSlice";

const SIGNALR_URL = "https://localhost:7109/ControlPanelHub";

export function useSignalR() {
  const dispatch = useDispatch();
  const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
  const [lobbyResponse, setLobbyResponse] = useState<string | null>(null);
  const [apexResponse, setApexResponse] = useState<string | null>(null);
  const [isLobbyLoading, setIsLobbyLoading] = useState(false);
  const [isApexLoading, setIsApexLoading] = useState(false);

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

    // イベントリスナーをクリア
    newConnection.off("LobbyResponse");
    newConnection.off("ApexResponse");

    // LobbyResponse を受信
    newConnection.on("LobbyResponse", (response) => {
      console.log("📩 Received Lobby Response:", response);
      setLobbyResponse(response);
      setIsLobbyLoading(false);
    });

    // ApexResponse を受信
    newConnection.on("ApexResponse", (response) => {
      console.log("📩 Received Apex Response:", response);
      setApexResponse(response);
      setIsApexLoading(false);
    });

    setConnection(newConnection);

    return () => {
      newConnection.stop();
    };
  }, [dispatch]);

  // 🛠️ CreateLobby を呼び出す関数
  const createLobby = async () => {
    if (connection) {
      try {
        console.log("🛠️ Sending CreateLobby request...");
        setIsLobbyLoading(true);
        await connection.invoke("CreateLobby");
      } catch (error) {
        console.error("❌ CreateLobby Error:", error);
        setIsLobbyLoading(false);
      }
    }
  };

  // 🏆 StartApex を呼び出す関数
  const startApex = async () => {
    if (connection) {
      try {
        console.log("🏆 Sending StartApex request to server...");
        setIsApexLoading(true);
        await connection.invoke("StartApex");
        console.log("✅ StartApex request successfully sent.");
      } catch (error) {
        console.error("❌ StartApex Error (client side):", error);
        setIsApexLoading(false);
      }
    } else {
      console.error("❌ SignalR connection is not established.");
    }
  };
  

  return { createLobby, startApex, lobbyResponse, apexResponse, isLobbyLoading, isApexLoading };
}
