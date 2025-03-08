import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";

const OVERLAY_HUB_URL = "https://localhost:7109/OverlayHub";

export function useOverlaySignalR() {
    //const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    const [overlayData, setOverlayData] = useState<string[]>([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(OVERLAY_HUB_URL, {
                withCredentials: false,
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .build();

        newConnection.start()
            .then(() => {
                console.log("✅ Connected to OverlayHub");
                setIsConnected(true);
            })
            .catch(err => console.error("❌ OverlayHub Connection Error:", err));

        newConnection.on("ReceiveOverlayData", data => {
            console.log("📩 Received Overlay Data:", data);
            setOverlayData(prev => [...prev, data]);
        });

        //setConnection(newConnection);

        return () => {
            newConnection.stop();
        };
    }, []);

    return { overlayData, isConnected };
}
