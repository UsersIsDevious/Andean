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

        setConnection(newConnection);

        return () => {
            newConnection.stop()
                .then(() => console.log("🛑 Disconnected from ControlPanelHub"))
                .catch(err => console.error("❌ Error stopping SignalR connection:", err));
        };
    }, []);

    const createLobby = async () => {
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
    

    return { createLobby, startApex, updateConfig, readCSV, lobbyResponse, apexResponse, configData, isLobbyLoading, isApexLoading, isConnected };
}
