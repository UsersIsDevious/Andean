import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";

const LIVE_VIEW_HUB_URL = "https://localhost:7109/LiveViewHub";

export function useLiveViewSignalR() {
    //const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    const [messages, setMessages] = useState<string[]>([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(LIVE_VIEW_HUB_URL, {
                withCredentials: false,
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .build();

        newConnection.start()
            .then(() => {
                console.log("✅ Connected to LiveViewHub");
                setIsConnected(true);
            })
            .catch(err => console.error("❌ LiveViewHub Connection Error:", err));

        newConnection.on("ReceiveMessage", message => {
            console.log("📩 Received Message:", message);
            setMessages(prev => [...prev, message]);
        });

        //setConnection(newConnection);

        return () => {
            newConnection.stop();
        };
    }, []);

    return { messages, isConnected };
}
