import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";

const OVERLAY_CONTROL_HUB_URL = "https://localhost:7109/OverlayControlPanelHub";

export function useOverlayControlSignalR() {
    //const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    const [controlCommands, setControlCommands] = useState<string[]>([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(OVERLAY_CONTROL_HUB_URL, {
                withCredentials: false,
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .build();

        newConnection.start()
            .then(() => {
                console.log("✅ Connected to OverlayControlPanelHub");
                setIsConnected(true);
            })
            .catch(err => console.error("❌ OverlayControlPanelHub Connection Error:", err));

        newConnection.on("ReceiveControlCommand", command => {
            console.log("📩 Received Control Command:", command);
            setControlCommands(prev => [...prev, command]);
        });

        //setConnection(newConnection);

        return () => {
            newConnection.stop();
        };
    }, []);

    return { controlCommands, isConnected };
}
