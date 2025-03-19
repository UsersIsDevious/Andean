import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";

const CONTROL_PANEL_HUB_URL = "https://localhost:7109/ControlPanelHub";

// 設定データの型定義
interface ApexLegendsConfig {
    path: string;
    api_Port: string;
    api_Option: string;
    option: string;
}

interface ScoreSettingConfig {
    kill_Point: number;
    max_Kill: number;
    rank_Points: number[];
}

interface AppConfig {
    apexLegends: ApexLegendsConfig;
    penetrator: string[];
    output: string;
    language: string;
    log_Dir: string;
    data_Fps: number;
    score_Setting: ScoreSettingConfig;
}

interface ConfigData {
    sharedData: string;
    selectedDataKeys: string[];
    appConfig: AppConfig;
    lastLobbyResponse: string;
    lastApexResponse: string;
}

// CSV データの型定義
interface CSVTeamData {
    TEAM: number;
    NAME: string;
    IMG_URL: string;
    MEMBER_NUM: number;
    MEMBERS: string[];
}

export function useControlPanelSignalR() {
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [configData, setConfigData] = useState<ConfigData | null>(null);
    const [lobbyResponse, setLobbyResponse] = useState<string | null>(null);
    const [apexResponse, setApexResponse] = useState<string | null>(null);
    const [isLobbyLoading, setIsLobbyLoading] = useState(false);
    //const [messages, setMessages] = useState<string[]>([]);
    const [isApexLoading, setIsApexLoading] = useState(false);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(CONTROL_PANEL_HUB_URL, {
                withCredentials: false,
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Information)
            .build();

        newConnection.start()
            .then(() => {
                console.log("✅ Connected to ControlPanelHub");
                setIsConnected(true);
            })
            .catch(err => console.error("❌ ControlPanelHub Connection Error:", err));

        newConnection.on("LobbyResponse", response => {
            console.log("📩 Received Lobby Response:", response);
            setLobbyResponse(response);
            setIsLobbyLoading(false);
        });

        newConnection.on("ApexResponse", response => {
            console.log("📩 Received Apex Response:", response);
            setApexResponse(response);
            setIsApexLoading(false);
        });

        newConnection.on("ReceiveStatus", response => {
            console.log("📩 Received Config Data:", response);
            setConfigData(response);
        });
        newConnection.on("ReceiveMessage", message => {
            console.log("📩 Received Message:", message);
            //setMessages(prevMessages => [...prevMessages, message]);
        });
        newConnection.on("NotifyShutdown", message => {
            console.log("🛑 Received Shutdown Notification:", message);
            alert("System is shutting down. This page will close.");
            window.close(); // 🔹 ページを閉じる
        });

        setConnection(newConnection);

        return () => {
            newConnection.stop()
                .then(() => console.log("🛑 Disconnected from ControlPanelHub"))
                .catch(err => console.error("❌ Error stopping SignalR connection:", err));
        };
    }, []);

    const joinLobby = async () => {
        if (connection && isConnected) {
            try {
                console.log("🛠️ Sending CreateLobby request...");
                setIsLobbyLoading(true);
                await connection.invoke("CreateLobby");
            } catch (error) {
                console.error("❌ CreateLobby Error:", error);
                setIsLobbyLoading(false);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send CreateLobby request.");
        }
    };
    const startApex = async () => {
        if (connection && isConnected) {
            try {
                console.log("🏆 Sending StartApex request...");
                setIsApexLoading(true);
                await connection.invoke("StartApex");
            } catch (error) {
                console.error("❌ StartApex Error:", error);
                setIsApexLoading(false);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send StartApex request.");
        }
    };
    const updateConfig = async (sectionKey: keyof ConfigData, newData: unknown, mode: "overwrite" | "append" | "jsonAppend") => {
        if (connection && isConnected) {
            try {
                console.log(`🔧 Updating config: ${sectionKey}`);
                await connection.invoke("UpdateConfig", sectionKey, JSON.stringify(newData), mode);
            } catch (error) {
                console.error("❌ UpdateConfig Error:", error);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot update config.");
        }
    };
    const readCSV = async (jsonData: CSVTeamData[]) => {
        if (connection && isConnected) {
            try {
                console.log("📤 Sending CSV data to readCSV...");
                await connection.invoke("readCSV", jsonData);
            } catch (error) {
                console.error("❌ readCSV Error:", error);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send CSV data.");
        }
    };
    const shutdownSystem = async () => {
        if (connection && isConnected) {
            try {
                console.log("🛑 Sending Shutdown request...");
                await connection.invoke("Shutdown");
            } catch (error) {
                console.error("❌ Shutdown Error:", error);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send Shutdown request.");
        }
    };
    const changeCamera = async (cameraId: string) => {
        if (connection && isConnected) {
          try {
            console.log("🛠️ Sending change_camera request...", cameraId);
            await connection.invoke("change_camera", cameraId);
          } catch (error) {
            console.error("❌ change_camera Error:", error);
          }
        } else {
          console.warn("⚠️ Connection not established. Cannot send change_camera request.");
        }
      };
      const leaveLobbySignalR = async () => {
        if (connection && isConnected) {
          try {
            console.log("🛠️ Sending leave_lobby request...");
            await connection.invoke("leave_lobby");
          } catch (error) {
            console.error("❌ leave_lobby Error:", error);
          }
        } else {
          console.warn("⚠️ Connection not established. Cannot send leave_lobby request.");
        }
      };
      const setReady = async (ready: boolean) => {
        if (connection && isConnected) {
          try {
            console.log("🛠️ Sending set_ready request...", ready);
            await connection.invoke("set_ready", ready);
          } catch (error) {
            console.error("❌ set_ready Error:", error);
          }
        } else {
          console.warn("⚠️ Connection not established. Cannot send set_ready request.");
        }
      };
      const setMatchmaking = async (matchmaking: boolean) => {
        if (connection && isConnected) {
          try {
            console.log("🛠️ Sending set_matchmaking request...", matchmaking);
            await connection.invoke("set_matchmaking", matchmaking);
          } catch (error) {
            console.error("❌ set_matchmaking Error:", error);
          }
        } else {
          console.warn("⚠️ Connection not established. Cannot send set_matchmaking request.");
        }
      };
      const setTeamName = async (teamId: string, newName: string) => {
        if (connection && isConnected) {
          try {
            console.log("🛠️ Sending set_team_name request...", teamId, newName);
            await connection.invoke("set_team_name", teamId, newName);
          } catch (error) {
            console.error("❌ set_team_name Error:", error);
          }
        } else {
          console.warn("⚠️ Connection not established. Cannot send set_team_name request.");
        }
      };
      const setSpawnPoint = async (teamId: string, spawnPoint: number) => {
        if (connection && isConnected) {
          try {
            console.log("🛠️ Sending set_spawn_point request...", teamId, spawnPoint);
            await connection.invoke("set_spawn_point", teamId, spawnPoint);
          } catch (error) {
            console.error("❌ set_spawn_point Error:", error);
          }
        } else {
          console.warn("⚠️ Connection not established. Cannot send set_spawn_point request.");
        }
      };
      const setEndRingExclusion = async (exclude: boolean) => {
        if (connection && isConnected) {
          try {
            console.log("🛠️ Sending set_end_ring_exclusion request...", exclude);
            await connection.invoke("set_end_ring_exclusion", exclude);
          } catch (error) {
            console.error("❌ set_end_ring_exclusion Error:", error);
          }
        } else {
          console.warn("⚠️ Connection not established. Cannot send set_end_ring_exclusion request.");
        }
      };
    
    

    return { createLobby, startApex, updateConfig, readCSV, shutdownSystem, lobbyResponse, apexResponse, configData, isLobbyLoading, isApexLoading, isConnected};
}
