(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_cf2b88._.js", {

"[project]/app/control-panel/components/navigation/TabNavigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TabNavigation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-client] (ecmascript) <export default as Sliders>");
"use client";
;
;
function TabNavigation({ activeTab, onTabChange }) {
    const activeTabStyle = {
        backgroundColor: "rgba(139, 0, 0, 0.2)",
        color: "#f87171"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-5 bg-gray-900/50 border border-red-900/20 rounded-md overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange("system"),
                    className: `flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "system" ? "text-red-400" : "text-gray-300"}`,
                    style: activeTab === "system" ? activeTabStyle : {},
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        "システム"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange("match"),
                    className: `flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "match" ? "text-red-400" : "text-gray-300"}`,
                    style: activeTab === "match" ? activeTabStyle : {},
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        "マッチ"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange("lobby"),
                    className: `flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "lobby" ? "text-red-400" : "text-gray-300"}`,
                    style: activeTab === "lobby" ? activeTabStyle : {},
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        "ロビー"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange("camera"),
                    className: `flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "camera" ? "text-red-400" : "text-gray-300"}`,
                    style: activeTab === "camera" ? activeTabStyle : {},
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "mr-2 h-4 w-4 text-current",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 10L19.5528 7.72361C19.8343 7.58281 20 7.30339 20 7V17C20 17.3034 19.8343 17.5828 19.5528 17.7236L15 15",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "3",
                                    y: "6",
                                    width: "12",
                                    height: "12",
                                    rx: "2",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        "カメラ"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange("setting"),
                    className: `flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "setting" ? "text-red-400" : "text-gray-300"}`,
                    style: activeTab === "setting" ? activeTabStyle : {},
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        "設定"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/control-panel/components/navigation/TabNavigation.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = TabNavigation;
var _c;
__turbopack_refresh__.register(_c, "TabNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/hooks/useControlPanelSignalR.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useControlPanelSignalR": (()=>useControlPanelSignalR)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$microsoft$2f$signalr$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@microsoft/signalr/dist/esm/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const CONTROL_PANEL_HUB_URL = "https://localhost:7109/ControlPanelHub";
const useControlPanelSignalR = ()=>{
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [configData, setConfigData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lobbyResponse, setLobbyResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [apexResponse, setApexResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLobbyLoading, setIsLobbyLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isApexLoading, setIsApexLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // connectionをuseRefで保持して、コンポーネントのレンダリング間で一貫性を保つ
    const connectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useControlPanelSignalR.useEffect": ()=>{
            let isMounted = true;
            const startConnection = {
                "useControlPanelSignalR.useEffect.startConnection": async ()=>{
                    try {
                        const newConnection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$microsoft$2f$signalr$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.HubConnectionBuilder().withUrl(CONTROL_PANEL_HUB_URL, {
                            withCredentials: false,
                            skipNegotiation: true,
                            transport: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$microsoft$2f$signalr$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.HttpTransportType.WebSockets
                        }).withAutomaticReconnect().configureLogging(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$microsoft$2f$signalr$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.LogLevel.Information).build();
                        // イベントハンドラを設定
                        newConnection.on("LobbyResponse", {
                            "useControlPanelSignalR.useEffect.startConnection": (response)=>{
                                if (isMounted) {
                                    console.log("📩 Received Lobby Response:", response);
                                    setLobbyResponse(response);
                                    setIsLobbyLoading(false);
                                }
                            }
                        }["useControlPanelSignalR.useEffect.startConnection"]);
                        newConnection.on("ApexResponse", {
                            "useControlPanelSignalR.useEffect.startConnection": (response)=>{
                                if (isMounted) {
                                    console.log("📩 Received Apex Response:", response);
                                    setApexResponse(response);
                                    setIsApexLoading(false);
                                }
                            }
                        }["useControlPanelSignalR.useEffect.startConnection"]);
                        newConnection.on("ReceiveStatus", {
                            "useControlPanelSignalR.useEffect.startConnection": (response)=>{
                                if (isMounted) {
                                    console.log("📩 Received Config Data:", response);
                                    setConfigData(response);
                                }
                            }
                        }["useControlPanelSignalR.useEffect.startConnection"]);
                        newConnection.on("ReceiveMessage", {
                            "useControlPanelSignalR.useEffect.startConnection": (message)=>{
                                if (isMounted) {
                                    console.log("📩 Received Message:", message);
                                }
                            }
                        }["useControlPanelSignalR.useEffect.startConnection"]);
                        newConnection.on("NotifyShutdown", {
                            "useControlPanelSignalR.useEffect.startConnection": (message)=>{
                                if (isMounted) {
                                    console.log("🛑 Received Shutdown Notification:", message);
                                    alert("System is shutting down. This page will close.");
                                    window.close() // 🔹 ページを閉じる
                                    ;
                                }
                            }
                        }["useControlPanelSignalR.useEffect.startConnection"]);
                        newConnection.on("ConfigUpdateResponse", {
                            "useControlPanelSignalR.useEffect.startConnection": (response)=>{
                                if (isMounted) {
                                    console.log("📩 Received Config Update Response:", response);
                                }
                            }
                        }["useControlPanelSignalR.useEffect.startConnection"]);
                        // 接続を開始
                        await newConnection.start();
                        if (isMounted) {
                            console.log("✅ Connected to ControlPanelHub");
                            connectionRef.current = newConnection;
                            setIsConnected(true);
                        } else {
                            // コンポーネントがアンマウントされていた場合は接続を停止
                            await newConnection.stop();
                            console.log("🛑 Connection stopped due to component unmount");
                        }
                    } catch (err) {
                        console.error("❌ ControlPanelHub Connection Error:", err);
                    }
                }
            }["useControlPanelSignalR.useEffect.startConnection"];
            startConnection();
            // クリーンアップ関数
            return ({
                "useControlPanelSignalR.useEffect": ()=>{
                    isMounted = false;
                    const stopConnection = {
                        "useControlPanelSignalR.useEffect.stopConnection": async ()=>{
                            if (connectionRef.current) {
                                try {
                                    await connectionRef.current.stop();
                                    console.log("🛑 Disconnected from ControlPanelHub");
                                } catch (err) {
                                    console.error("❌ Error stopping SignalR connection:", err);
                                }
                                connectionRef.current = null;
                            }
                        }
                    }["useControlPanelSignalR.useEffect.stopConnection"];
                    stopConnection();
                }
            })["useControlPanelSignalR.useEffect"];
        }
    }["useControlPanelSignalR.useEffect"], []);
    const startApex = async ()=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🏆 Sending StartApex request...");
                setIsApexLoading(true);
                await connectionRef.current.invoke("StartApex");
            } catch (error) {
                console.error("❌ StartApex Error:", error);
                setIsApexLoading(false);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send StartApex request.");
        }
    };
    const readCSV = async (jsonData)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("📤 Sending CSV data to readCSV...");
                await connectionRef.current.invoke("readCSV", jsonData);
            } catch (error) {
                console.error("❌ readCSV Error:", error);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send CSV data.");
        }
    };
    // updateConfig メソッドを修正して、サーバー側が期待するセクションキーに変換する
    const updateConfig = async (sectionKey, newData, mode)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log(`🔧 Updating config: ${sectionKey}`);
                // サーバー側が期待するセクションキーに変換
                let serverSectionKey = sectionKey;
                let dataToSend = newData;
                // appConfig セクションの場合は、具体的なサブセクションに変換
                if (sectionKey === "appConfig") {
                    // appConfig の中の特定のプロパティを更新する場合
                    const appConfigData = newData;
                    if (appConfigData.apexLegends) {
                        serverSectionKey = "apexlegends";
                        dataToSend = appConfigData.apexLegends;
                    } else if (appConfigData.penetrator !== undefined) {
                        serverSectionKey = "penetrator";
                        dataToSend = appConfigData.penetrator;
                    } else if (appConfigData.output !== undefined) {
                        serverSectionKey = "output";
                        dataToSend = appConfigData.output;
                    } else if (appConfigData.language !== undefined) {
                        serverSectionKey = "language";
                        dataToSend = appConfigData.language;
                    } else if (appConfigData.log_Dir !== undefined) {
                        serverSectionKey = "log_dir";
                        dataToSend = appConfigData.log_Dir;
                    } else if (appConfigData.data_Fps !== undefined) {
                        serverSectionKey = "data_fps";
                        dataToSend = appConfigData.data_Fps;
                    } else if (appConfigData.score_Setting) {
                        serverSectionKey = "score_setting";
                        // If we're updating score settings with rank_Points
                        if (appConfigData.score_Setting.rank_Points) {
                            // Ensure the array has enough elements for all teams
                            const maxTeam = configData?.uiStatus?.maxTeam || 20;
                            const rankPoints = [
                                ...appConfigData.score_Setting.rank_Points
                            ];
                            // Fill with zeros if needed
                            while(rankPoints.length < maxTeam){
                                rankPoints.push(0);
                            }
                            // Update the data to send
                            appConfigData.score_Setting.rank_Points = rankPoints;
                        }
                        dataToSend = appConfigData.score_Setting;
                    }
                }
                // サーバーに送信
                await connectionRef.current.invoke("UpdateConfig", serverSectionKey, JSON.stringify(dataToSend), mode.toLowerCase());
            } catch (error) {
                console.error("❌ UpdateConfig Error:", error);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot update config.");
        }
    };
    const shutdown = async ()=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛑 Sending Shutdown request...");
                await connectionRef.current.invoke("Shutdown");
            } catch (error) {
                console.error("❌ Shutdown Error:", error);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send Shutdown request.");
        }
    };
    const joinLobby = async (lobbyCode)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending joinLobby request...", lobbyCode ? `with code: ${lobbyCode}` : "without code");
                setIsLobbyLoading(true);
                // 引数がある場合はそのまま渡し、ない場合は null を渡す
                await connectionRef.current.invoke("joinLobby", lobbyCode ?? null);
            } catch (error) {
                console.error("❌ joinLobby Error:", error);
                setIsLobbyLoading(false);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send joinLobby request.");
        }
    };
    const setReady = async (ready)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending set_ready request...", ready);
                await connectionRef.current.invoke("set_ready", ready);
            } catch (error) {
                console.error("❌ set_ready Error:", error);
            }
        } else {
            console.warn("⚠️ Connection not established. Cannot send set_ready request.");
        }
    };
    const setTeam = async (teamId, targetHardwareName, targetNucleushash)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending setTeam request...", teamId, targetHardwareName, targetNucleushash);
                await connectionRef.current.invoke("setTeam", teamId, targetHardwareName, targetNucleushash);
            } catch (error) {
                console.error("❌ setTeam Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。setTeamリクエストを送信できません。");
        }
    };
    const setTeamName = async (teamId, teamName)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending setTeamName request...", teamId, teamName);
                await connectionRef.current.invoke("setTeamName", teamId, teamName);
            } catch (error) {
                console.error("❌ setTeamName Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。setTeamNameリクエストを送信できません。");
        }
    };
    const setSpawnPoint = async (teamId, spawnPoint)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending setSpawnPoint request...", teamId, spawnPoint);
                await connectionRef.current.invoke("setSpawnPoint", teamId, spawnPoint);
            } catch (error) {
                console.error("❌ setSpawnPoint Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。setSpawnPointリクエストを送信できません。");
        }
    };
    const changeCamera = async (type, value)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending changeCamera request...", type, value);
                await connectionRef.current.invoke("changeCamera", type, value);
            } catch (error) {
                console.error("❌ changeCamera Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。changeCameraリクエストを送信できません。");
        }
    };
    const sendChat = async (message)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending sendChat request...", message);
                await connectionRef.current.invoke("sendChat", message);
            } catch (error) {
                console.error("❌ sendChat Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。sendChatリクエストを送信できません。");
        }
    };
    const kickPlayer = async (targetHardwareName, targetNucleushash)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending kickPlayer request...", targetHardwareName, targetNucleushash);
                await connectionRef.current.invoke("kickPlayer", targetHardwareName, targetNucleushash);
            } catch (error) {
                console.error("❌ kickPlayer Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。kickPlayerリクエストを送信できません。");
        }
    };
    const setSettings = async (matchName, adminChat, teamRename, selfAssign, aimAssist, anonMode)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending setSettings request...", matchName, adminChat, teamRename, selfAssign, aimAssist, anonMode);
                await connectionRef.current.invoke("setSettings", matchName, adminChat, teamRename, selfAssign, aimAssist, anonMode);
            } catch (error) {
                console.error("❌ setSettings Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。setSettingsリクエストを送信できません。");
        }
    };
    const leaveLobby = async ()=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending leaveLobby request...");
                await connectionRef.current.invoke("leaveLobby");
            } catch (error) {
                console.error("❌ leaveLobby Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。leaveLobbyリクエストを送信できません。");
        }
    };
    const setEndRingExclusion = async (exclusion)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending setEndRingExclusion request...", exclusion);
                await connectionRef.current.invoke("setEndRingExclusion", exclusion);
            } catch (error) {
                console.error("❌ setEndRingExclusion Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。setEndRingExclusionリクエストを送信できません。");
        }
    };
    const setMatchmaking = async (matchmaking)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending setMatchmaking request...", matchmaking);
                await connectionRef.current.invoke("setMatchmaking", matchmaking);
            } catch (error) {
                console.error("❌ setMatchmaking Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。setMatchmakingリクエストを送信できません。");
        }
    };
    const pauseToggle = async (preTimer = 0)=>{
        if (connectionRef.current && isConnected) {
            try {
                console.log("🛠️ Sending pauseToggle request...", preTimer);
                await connectionRef.current.invoke("pauseToggle", preTimer);
            } catch (error) {
                console.error("❌ pauseToggle Error:", error);
            }
        } else {
            console.warn("⚠️ 接続が確立されていません。pauseToggleリクエストを送信できません。");
        }
    };
    return {
        startApex,
        readCSV,
        updateConfig,
        shutdown,
        joinLobby,
        leaveLobby,
        setReady,
        setTeam,
        setTeamName,
        setSpawnPoint,
        changeCamera,
        sendChat,
        kickPlayer,
        setSettings,
        setEndRingExclusion,
        setMatchmaking,
        pauseToggle,
        lobbyResponse,
        apexResponse,
        configData,
        isLobbyLoading,
        isApexLoading,
        isConnected
    };
};
_s(useControlPanelSignalR, "WHlqgosKSjXERASZf9tr/gjlUrk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils/team-utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Define the Team type
__turbopack_esm__({
    "getAllPlayersFromTeams": (()=>getAllPlayersFromTeams),
    "getTeamColor": (()=>getTeamColor),
    "movePlayerBetweenTeams": (()=>movePlayerBetweenTeams),
    "removePlayerFromTeam": (()=>removePlayerFromTeam)
});
const getTeamColor = (id)=>{
    const colors = {
        2: "rgb(6, 131, 149)",
        3: "rgb(27, 71, 105)",
        4: "rgb(31, 84, 205)",
        5: "rgb(68, 42, 96)",
        6: "rgb(110, 44, 111)",
        7: "rgb(173, 45, 119)",
        8: "rgb(176, 28, 81)",
        9: "rgb(195, 0, 11)",
        10: "rgb(197, 67, 32)",
        11: "rgb(120, 30, 19)",
        12: "rgb(159, 59, 13)",
        13: "rgb(119, 75, 0)",
        14: "rgb(204, 121, 19)",
        15: "rgb(150, 125, 0)",
        16: "rgb(133, 147, 10)",
        17: "rgb(73, 88, 3)",
        18: "rgb(112, 151, 67)",
        19: "rgb(57, 137, 52)",
        20: "rgb(47, 90, 26)",
        21: "rgb(0, 116, 88)"
    };
    return colors[id] || "rgb(31, 41, 55)" // デフォルトはグレー
    ;
};
const getAllPlayersFromTeams = (teamData)=>{
    if (!teamData) return [];
    const players = [];
    Object.entries(teamData).forEach(([teamId, team])=>{
        if (teamId !== "0" && teamId !== "1" && team.players) {
            team.players.forEach((player)=>{
                if (player.name) {
                    players.push({
                        id: player.id,
                        name: player.name,
                        teamId,
                        teamName: team.name
                    });
                }
            });
        }
    });
    return players;
};
const movePlayerBetweenTeams = (teamData, sourceTeamId, playerId, destinationTeamId)=>{
    if (!teamData) return teamData;
    const updatedTeamData = {
        ...teamData
    };
    // Find the player in the source team
    const playerToMoveData = updatedTeamData[sourceTeamId].players.find((player)=>player.id === playerId);
    if (!playerToMoveData) return teamData;
    // Remove player from source team
    updatedTeamData[sourceTeamId] = {
        ...updatedTeamData[sourceTeamId],
        players: updatedTeamData[sourceTeamId].players.filter((player)=>player.id !== playerId)
    };
    // Add player to destination team
    updatedTeamData[destinationTeamId] = {
        ...updatedTeamData[destinationTeamId],
        players: [
            ...updatedTeamData[destinationTeamId].players,
            playerToMoveData
        ]
    };
    return updatedTeamData;
};
const removePlayerFromTeam = (teamData, teamId, playerId)=>{
    if (!teamData) return teamData;
    const updatedTeamData = {
        ...teamData
    };
    // Filter out the player to kick
    updatedTeamData[teamId] = {
        ...updatedTeamData[teamId],
        players: updatedTeamData[teamId].players.filter((player)=>player.id !== playerId)
    };
    return updatedTeamData;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/components/context/ControlPanelProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ControlPanelContext": (()=>ControlPanelContext),
    "ControlPanelProvider": (()=>ControlPanelProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
//import { useControlPanelSignalR } from "@/lib/hooks/useControlPanelSignalRMock" // モック用
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useControlPanelSignalR$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/useControlPanelSignalR.ts [app-client] (ecmascript)"); // 本番用
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$team$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/team-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ControlPanelContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const ControlPanelProvider = ({ children })=>{
    _s();
    // SignalR フック
    const { joinLobby: signalRJoinLobby, startApex: signalRStartApex, readCSV: signalRReadCSV, shutdown: signalRShutdown, leaveLobby: signalRLeaveLobby, lobbyResponse, apexResponse, isLobbyLoading, isApexLoading, configData, updateConfig: signalRUpdateConfig, setTeam, setTeamName: signalRSetTeamName, changeCamera: signalRChangeCamera, setSettings, pauseToggle: signalRPauseToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useControlPanelSignalR$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelSignalR"])();
    // UI state
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("system");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [specialTeamTab, setSpecialTeamTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("unassigned");
    // CSV upload state
    const [isProcessingCSV, setIsProcessingCSV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [csvResponse, setCsvResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // System state
    const [isShuttingDown, setIsShuttingDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showShutdownConfirm, setShowShutdownConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Lobby state
    const [lobbyCode, setLobbyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLeavingLobby, setIsLeavingLobby] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Team state
    const [editingTeam, setEditingTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editedTeamName, setEditedTeamName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Camera state
    const [cameraViewMode, setCameraViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("poi");
    const [selectedPlayer, setSelectedPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [playerSearchQuery, setPlayerSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedPOI, setSelectedPOI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [poiSearchQuery, setPoiSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Context menu and player movement state
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showTeamSelector, setShowTeamSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playerToMove, setPlayerToMove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Define POI options
    const poiOptions = [
        {
            id: "killreader",
            name: "キルリーダー",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-4 w-4 text-red-400",
                children: "⚡"
            }, void 0, false, {
                fileName: "[project]/app/control-panel/components/context/ControlPanelProvider.tsx",
                lineNumber: 146,
                columnNumber: 47
            }, this)
        },
        {
            id: "next",
            name: "次",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-4 w-4 text-red-400",
                children: "⏭"
            }, void 0, false, {
                fileName: "[project]/app/control-panel/components/context/ControlPanelProvider.tsx",
                lineNumber: 147,
                columnNumber: 36
            }, this)
        },
        {
            id: "spectatorview",
            name: "観戦ビュー",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-4 w-4 text-red-400",
                children: "👁"
            }, void 0, false, {
                fileName: "[project]/app/control-panel/components/context/ControlPanelProvider.tsx",
                lineNumber: 148,
                columnNumber: 49
            }, this)
        },
        {
            id: "overviewmap",
            name: "マップ概要",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-4 w-4 text-red-400",
                children: "🗺"
            }, void 0, false, {
                fileName: "[project]/app/control-panel/components/context/ControlPanelProvider.tsx",
                lineNumber: 149,
                columnNumber: 47
            }, this)
        }
    ];
    // Loading state effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ControlPanelProvider.useEffect": ()=>{
            if (configData) {
                setIsLoading(false);
            }
        }
    }["ControlPanelProvider.useEffect"], [
        configData
    ]);
    // Safe access to nested properties
    const teamData = configData?.teamData || {};
    // Lobby settings
    const lobbySettings = configData?.lobbySettings || {
        playlistname: "",
        adminchat: false,
        teamrename: false,
        selfassign: true,
        aimassist: true,
        anonmode: false,
        gamemode: "",
        map: ""
    };
    // CSV upload handler
    const handleCSVUpload = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        setIsProcessingCSV(true);
        setCsvResponse("CSVファイルを処理中...");
        const reader = new FileReader();
        reader.onload = (e)=>{
            try {
                const csvText = e.target?.result;
                const jsonData = parseCSV(csvText);
                // Call the readCSV function from the hook
                signalRReadCSV(jsonData);
                setCsvResponse(`${jsonData.length}件のチームレコードを正常に処理しました`);
            } catch (error) {
                console.error("CSVの処理エラー:", error);
                setCsvResponse(`CSVの処理エラー: ${error instanceof Error ? error.message : String(error)}`);
            } finally{
                setIsProcessingCSV(false);
                // Reset the file input
                if (event.target) {
                    event.target.value = "";
                }
            }
        };
        reader.onerror = ()=>{
            setIsProcessingCSV(false);
            setCsvResponse("ファイルの読み込みエラー");
        };
        reader.readAsText(file);
    };
    // CSV parsing function
    const parseCSV = (csvText)=>{
        // Split the CSV text into lines
        const lines = csvText.split(/\r\n|\n/);
        // Extract headers (first line)
        const headers = lines[0].split(",");
        // Process data rows
        const result = [];
        for(let i = 1; i < lines.length; i++){
            if (!lines[i].trim()) continue; // 空行をスキップ
            const data = lines[i].split(",");
            // CSVTeamData 型のオブジェクトを作成
            const teamData = {
                TEAM: Number.parseInt(data[headers.indexOf("TEAM")]) || 0,
                NAME: data[headers.indexOf("NAME")] || "",
                IMG_URL: data[headers.indexOf("IMG_URL")] || "",
                MEMBER_NUM: Number.parseInt(data[headers.indexOf("MEMBER_NUM")]) || 0,
                MEMBERS: []
            };
            // MEMBERS プロパティの生成 (MEMBER1～MEMBER6 を想定)
            for(let j = 1; j <= 6; j++){
                const key = `MEMBER${j}`;
                const value = data[headers.indexOf(key)];
                if (value && value.trim() !== "") {
                    teamData.MEMBERS.push(value);
                }
            }
            result.push(teamData);
        }
        return result;
    };
    // System shutdown handlers
    const handleShutdown = ()=>{
        setShowShutdownConfirm(true);
    };
    const confirmShutdown = async ()=>{
        setIsShuttingDown(true);
        await signalRShutdown();
        setIsShuttingDown(false);
        setShowShutdownConfirm(false);
    };
    // Lobby handlers
    const handleLeaveLobby = async ()=>{
        setIsLeavingLobby(true);
        try {
            await signalRLeaveLobby();
        } catch (error) {
            console.error("ロビーを離れる際のエラー:", error);
        } finally{
            setIsLeavingLobby(false);
        }
    };
    // Team management handlers
    const startEditingTeam = (teamId, currentName)=>{
        setEditingTeam(teamId);
        setEditedTeamName(currentName);
    };
    const saveTeamName = (teamId)=>{
        if (!configData?.teamData) return;
        const updatedTeamData = {
            ...configData.teamData
        };
        updatedTeamData[teamId] = {
            ...updatedTeamData[teamId],
            name: editedTeamName
        };
        // Call the SignalR setTeamName function
        signalRSetTeamName(Number.parseInt(teamId), editedTeamName);
        signalRUpdateConfig("teamData", updatedTeamData, "overwrite");
        setEditingTeam(null);
    };
    const cancelEditingTeam = ()=>{
        setEditingTeam(null);
    };
    // Lobby settings handler
    const updateLobbySetting = (key, value)=>{
        if (!configData?.lobbySettings) return;
        const updatedSettings = {
            ...configData.lobbySettings,
            [key]: value
        };
        // updateConfigを削除し、setSettingsのみを呼び出す
        // サーバーからの応答で状態が更新されるため、クライアント側での明示的な更新は不要
        setSettings(updatedSettings.playlistname, updatedSettings.adminchat, updatedSettings.teamrename, updatedSettings.selfassign, updatedSettings.aimassist, updatedSettings.anonmode);
    };
    // Player context menu handlers
    const handlePlayerRightClick = (e, playerId, teamId)=>{
        e.preventDefault();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            playerId,
            teamId
        });
    };
    const closeContextMenu = ()=>{
        setContextMenu(null);
    };
    const handleKickPlayer = ()=>{
        if (!contextMenu || !configData?.teamData) return;
        const { playerId, teamId } = contextMenu;
        const updatedTeamData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$team$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePlayerFromTeam"])(configData.teamData, teamId, playerId);
        signalRUpdateConfig("teamData", updatedTeamData, "overwrite");
        closeContextMenu();
    };
    const handleMovePlayerOption = ()=>{
        if (!contextMenu) return;
        setPlayerToMove({
            playerId: contextMenu.playerId,
            teamId: contextMenu.teamId
        });
        setShowTeamSelector(true);
    };
    const handleMovePlayerToTeam = (destinationTeamId)=>{
        if (!playerToMove || !configData?.teamData) return;
        const { playerId, teamId } = playerToMove;
        const destinationTeam = configData.teamData[destinationTeamId];
        const maxTeamPlayer = configData?.uiStatus?.maxTeamPlayer || 3;
        // 移動先のチームがすでに最大人数に達している場合は処理を中止
        if (destinationTeam.players.length >= maxTeamPlayer) {
            console.error(`チーム ${destinationTeamId} はすでに最大人数（${maxTeamPlayer}人）に達しています`);
            return;
        }
        const updatedTeamData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$team$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["movePlayerBetweenTeams"])(configData.teamData, teamId, playerId, destinationTeamId);
        // Call the SignalR setTeam function
        const player = configData.teamData[teamId].players.find((p)=>p.id === playerId);
        if (player) {
            // Extract hardware name and nucleus hash from player ID
            // Assuming player ID format is "hardwareName:nucleusHash"
            const [hardwareName, nucleusHash] = player.id.split(":");
            if (hardwareName && nucleusHash) {
                setTeam(Number.parseInt(destinationTeamId), hardwareName, nucleusHash);
            }
        }
        signalRUpdateConfig("teamData", updatedTeamData, "overwrite");
        setShowTeamSelector(false);
        setPlayerToMove(null);
    };
    // Add a function to handle the camera change for both POI and player views
    const handleCameraChange = ()=>{
        if (cameraViewMode === "poi" && selectedPOI) {
            signalRChangeCamera("poi", selectedPOI);
            console.log(`カメラをPOIに変更: ${selectedPOI}`);
        } else if (cameraViewMode === "player" && selectedPlayer) {
            // Extract hardware name and nucleus hash from player ID
            // Assuming player ID format is "hardwareName:nucleusHash"
            const [hardwareName, nucleusHash] = selectedPlayer.split(":");
            if (hardwareName && nucleusHash) {
                signalRChangeCamera("player", selectedPlayer);
                console.log(`カメラをプレイヤーに変更: ${selectedPlayer}`);
            }
        }
    };
    // Function to get all players from teams other than 0 and 1
    const getAllPlayers = ()=>{
        if (!configData?.teamData) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$team$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPlayersFromTeams"])(configData.teamData);
    };
    // Wrapper functions for SignalR methods
    const joinLobby = async (code)=>{
        await signalRJoinLobby(code);
    };
    const startApex = async ()=>{
        await signalRStartApex();
    };
    const pauseToggle = async (preTimer = 0)=>{
        await signalRPauseToggle(preTimer);
    };
    const updateConfig = async (sectionKey, newData, mode)=>{
        await signalRUpdateConfig(sectionKey, newData, mode);
    };
    // コンテキスト値の作成
    const contextValue = {
        // 状態
        activeTab,
        isLoading,
        contextMenu,
        showTeamSelector,
        playerToMove,
        configData,
        teamData,
        lobbySettings,
        specialTeamTab,
        editingTeam,
        editedTeamName,
        cameraViewMode,
        selectedPlayer,
        playerSearchQuery,
        selectedPOI,
        poiSearchQuery,
        isProcessingCSV,
        csvResponse,
        lobbyCode,
        isShuttingDown,
        showShutdownConfirm,
        isLeavingLobby,
        lobbyResponse,
        apexResponse,
        isLobbyLoading,
        isApexLoading,
        poiOptions,
        // アクション
        setActiveTab,
        setSpecialTeamTab,
        startEditingTeam,
        saveTeamName,
        cancelEditingTeam,
        setEditedTeamName,
        setCameraViewMode,
        setSelectedPlayer,
        setPlayerSearchQuery,
        setSelectedPOI,
        setPoiSearchQuery,
        handlePlayerRightClick,
        closeContextMenu,
        handleKickPlayer,
        handleMovePlayerOption,
        handleMovePlayerToTeam,
        handleCameraChange,
        handleCSVUpload,
        handleShutdown,
        confirmShutdown,
        handleLeaveLobby,
        setLobbyCode,
        updateLobbySetting,
        joinLobby,
        startApex,
        pauseToggle,
        updateConfig,
        getAllPlayers,
        setShowShutdownConfirm
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlPanelContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/control-panel/components/context/ControlPanelProvider.tsx",
        lineNumber: 496,
        columnNumber: 10
    }, this);
};
_s(ControlPanelProvider, "g6rBMK1vVf4j55uFV1fonJSoBkI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useControlPanelSignalR$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelSignalR"]
    ];
});
_c = ControlPanelProvider;
var _c;
__turbopack_refresh__.register(_c, "ControlPanelProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/hooks/useControlPanelContext.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useControlPanelContext": (()=>useControlPanelContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$context$2f$ControlPanelProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/context/ControlPanelProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const useControlPanelContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$context$2f$ControlPanelProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlPanelContext"]);
    if (!context) {
        throw new Error("useControlPanelContext must be used within a ControlPanelProvider");
    }
    return context;
};
_s(useControlPanelContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/components/tabs/SystemTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SystemTab)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/hooks/useControlPanelContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/power.js [app-client] (ecmascript) <export default as Power>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function SystemTab() {
    _s();
    const { startApex, apexResponse, isApexLoading, configData, handleShutdown, confirmShutdown, isShuttingDown, showShutdownConfirm, setShowShutdownConfirm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"])();
    // Custom styles
    const cardStyle = {
        backgroundColor: "#111827",
        borderColor: "rgba(139, 0, 0, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)"
    };
    const cardHeaderStyle = {
        backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)"
    };
    const buttonStyle = {
        backgroundColor: "#b91c1c",
        color: "white"
    };
    const buttonHoverStyle = {
        backgroundColor: "#991b1b"
    };
    const disabledButtonStyle = {
        backgroundColor: "#4b5563",
        color: "white"
    };
    // Get UI status from configData
    const uiStatus = configData?.uiStatus || {
        lobbyJoinButtonEnabled: true,
        gameStartButtonEnabled: false,
        leaveLobbyButtonEnabled: false,
        isLobbyJoined: false,
        gameStatus: "NotStarted"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: cardStyle,
                    className: "rounded-lg overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: cardHeaderStyle,
                            className: "px-6 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "h-5 w-5 text-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-red-400",
                                            children: "Apex起動"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm mt-1",
                                    children: "Apex Legendsゲームを起動する"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: startApex,
                                    disabled: isApexLoading || !uiStatus.gameStartButtonEnabled,
                                    className: "w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center",
                                    style: isApexLoading || !uiStatus.gameStartButtonEnabled ? disabledButtonStyle : buttonStyle,
                                    onMouseOver: (e)=>!isApexLoading && uiStatus.gameStartButtonEnabled && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor),
                                    onMouseOut: (e)=>!isApexLoading && uiStatus.gameStartButtonEnabled && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor),
                                    children: isApexLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            "Apex起動中..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            "Apexを起動"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        borderColor: "#1f2937"
                                    },
                                    className: "border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto",
                                    children: apexResponse ? JSON.stringify(apexResponse, null, 2) : "レスポンスなし"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: cardStyle,
                    className: "rounded-lg overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...cardHeaderStyle,
                                backgroundColor: "rgba(220, 38, 38, 0.2)"
                            },
                            className: "px-6 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                                            className: "h-5 w-5 text-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-red-400",
                                            children: "システムシャットダウン"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm mt-1",
                                    children: "システムを安全にシャットダウンする"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: showShutdownConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-900/20 border border-red-900/30 rounded-md p-3 text-sm text-red-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: "⚠️ 警告: これによりシステム全体がシャットダウンされます。"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1",
                                                children: "続行してもよろしいですか？"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: confirmShutdown,
                                                disabled: isShuttingDown,
                                                className: "flex-1 py-3 px-4 rounded-md text-white font-medium flex items-center justify-center",
                                                style: isShuttingDown ? disabledButtonStyle : buttonStyle,
                                                onMouseOver: (e)=>!isShuttingDown && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor),
                                                onMouseOut: (e)=>!isShuttingDown && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor),
                                                children: isShuttingDown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "mr-2 h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 25
                                                        }, this),
                                                        "シャットダウン中..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 25
                                                        }, this),
                                                        "はい、システムをシャットダウン"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowShutdownConfirm(false),
                                                disabled: isShuttingDown,
                                                className: "flex-1 py-3 px-4 rounded-md bg-gray-800 text-white font-medium",
                                                onMouseOver: (e)=>!isShuttingDown && (e.currentTarget.style.backgroundColor = "#374151"),
                                                onMouseOut: (e)=>!isShuttingDown && (e.currentTarget.style.backgroundColor = "#1f2937"),
                                                children: "キャンセル"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleShutdown,
                                className: "w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center",
                                style: buttonStyle,
                                onMouseOver: (e)=>e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor,
                                onMouseOut: (e)=>e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this),
                                    "システムをシャットダウン"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/control-panel/components/tabs/SystemTab.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(SystemTab, "KixoWfLVULO2AzIoO6Or1aARoec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"]
    ];
});
_c = SystemTab;
var _c;
__turbopack_refresh__.register(_c, "SystemTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/components/tabs/MatchTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MatchTab)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/hooks/useControlPanelContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function MatchTab() {
    _s();
    const { joinLobby, handleLeaveLobby, lobbyResponse, isLobbyLoading, isLeavingLobby, configData, lobbyCode, setLobbyCode, handleCSVUpload, isProcessingCSV, csvResponse, pauseToggle, updateConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Custom styles
    const cardStyle = {
        backgroundColor: "#111827",
        borderColor: "rgba(139, 0, 0, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)"
    };
    const cardHeaderStyle = {
        backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)"
    };
    const inputStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "#1f2937",
        color: "#e5e7eb"
    };
    const buttonStyle = {
        backgroundColor: "#b91c1c",
        color: "white"
    };
    const buttonHoverStyle = {
        backgroundColor: "#991b1b"
    };
    const disabledButtonStyle = {
        backgroundColor: "#4b5563",
        color: "white"
    };
    // Get UI status from configData
    const uiStatus = configData?.uiStatus || {
        lobbyJoinButtonEnabled: true,
        gameStartButtonEnabled: false,
        leaveLobbyButtonEnabled: false,
        isLobbyJoined: false,
        gameStatus: "NotStarted"
    };
    // Safe access to nested properties
    const killPoint = configData?.appConfig?.score_Setting?.kill_Point || 1;
    const maxKill = configData?.appConfig?.score_Setting?.max_Kill || 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyle,
                        className: "rounded-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardHeaderStyle,
                                className: "px-6 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                className: "h-5 w-5 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-red-400",
                                                children: "ロビー参加"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm mt-1",
                                        children: "既存のゲームロビーに参加する"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: lobbyCode,
                                        onChange: (e)=>setLobbyCode(e.target.value),
                                        placeholder: "ロビーコードを入力",
                                        style: inputStyle,
                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>joinLobby(lobbyCode || undefined),
                                                disabled: isLobbyLoading || !uiStatus.lobbyJoinButtonEnabled,
                                                className: "w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center",
                                                style: isLobbyLoading || !uiStatus.lobbyJoinButtonEnabled ? disabledButtonStyle : buttonStyle,
                                                onMouseOver: (e)=>!isLobbyLoading && uiStatus.lobbyJoinButtonEnabled && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor),
                                                onMouseOut: (e)=>!isLobbyLoading && uiStatus.lobbyJoinButtonEnabled && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor),
                                                children: isLobbyLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "mr-2 h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this),
                                                        "ロビー参加中..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "ロビーに参加"
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLeaveLobby,
                                                disabled: isLeavingLobby || isLobbyLoading || !uiStatus.leaveLobbyButtonEnabled,
                                                className: "w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center",
                                                style: isLeavingLobby || isLobbyLoading || !uiStatus.leaveLobbyButtonEnabled ? disabledButtonStyle : buttonStyle,
                                                onMouseOver: (e)=>!isLeavingLobby && !isLobbyLoading && uiStatus.leaveLobbyButtonEnabled && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor),
                                                onMouseOut: (e)=>!isLeavingLobby && !isLobbyLoading && uiStatus.leaveLobbyButtonEnabled && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor),
                                                children: isLeavingLobby ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "mr-2 h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this),
                                                        "ロビーから退出中..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "ロビーから退出"
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            borderColor: "#1f2937"
                                        },
                                        className: "border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto",
                                        children: lobbyResponse ? JSON.stringify(lobbyResponse, null, 2) : "レスポンスなし"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyle,
                        className: "rounded-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardHeaderStyle,
                                className: "px-6 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "h-5 w-5 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-red-400",
                                                children: "チームCSVアップロード"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm mt-1",
                                        children: "CSVファイルからチームデータをインポート"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".csv",
                                                onChange: handleCSVUpload,
                                                ref: fileInputRef,
                                                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center",
                                                style: isProcessingCSV ? disabledButtonStyle : buttonStyle,
                                                onMouseOver: (e)=>!isProcessingCSV && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor),
                                                onMouseOut: (e)=>!isProcessingCSV && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor),
                                                disabled: isProcessingCSV,
                                                children: isProcessingCSV ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "mr-2 h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 21
                                                        }, this),
                                                        "CSV処理中..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, this),
                                                        "CSVファイルを選択"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            borderColor: "#1f2937"
                                        },
                                        className: "border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto",
                                        children: csvResponse || "まだCSVが処理されていません。ファイルをアップロードしてください。"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "期待されるCSV形式:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "block mt-1 p-2 bg-black/30 rounded",
                                                children: "TEAM,NAME,IMG_URL,MEMBER_NUM,MEMBER1,..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                className: "rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardHeaderStyle,
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-red-400",
                                    children: "ゲームコントロール"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "試合の状態と一時停止制御"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "rgba(139, 0, 0, 0.2)"
                        },
                        className: "h-px w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/50 border border-gray-800 rounded-md p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-red-400",
                                                children: "現在の試合状態"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-3 h-3 rounded-full mr-2 ${uiStatus.gameStatus === "Running" ? "bg-green-500" : uiStatus.gameStatus === "Paused" ? "bg-yellow-500" : uiStatus.gameStatus === "Finished" ? "bg-blue-500" : "bg-gray-500"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-gray-300",
                                                        children: uiStatus.gameStatus === "Running" ? "実行中" : uiStatus.gameStatus === "Paused" ? "一時停止中" : uiStatus.gameStatus === "Finished" ? "終了" : "未開始"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-900/50 p-3 rounded-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500 mb-1",
                                                    children: "ステータス"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-white font-medium",
                                                    children: uiStatus.gameStatus || "不明"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-red-400",
                                        children: "一時停止コントロール"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm text-gray-400",
                                                        children: "カウントダウン時間（秒）"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        max: "60",
                                                        defaultValue: "0",
                                                        id: "preTimerInput",
                                                        style: inputStyle,
                                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const preTimerInput = document.getElementById("preTimerInput");
                                                    const preTimer = Number.parseInt(preTimerInput.value) || 0;
                                                    pauseToggle(preTimer);
                                                },
                                                className: "h-10 px-6 rounded-md text-white font-medium flex items-center justify-center mt-6",
                                                style: buttonStyle,
                                                onMouseOver: (e)=>e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor,
                                                onMouseOut: (e)=>e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor,
                                                disabled: !uiStatus.isLobbyJoined,
                                                children: uiStatus.gameStatus === "Paused" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "再開"
                                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "一時停止"
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "注意: カウントダウン時間を指定すると、その秒数後に一時停止が実行されます。"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "0秒を指定すると、即時に一時停止/再開が行われます。"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                className: "rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardHeaderStyle,
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-red-400",
                                    children: "スコア設定"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "マッチスコアリングパラメータを設定"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "rgba(139, 0, 0, 0.2)"
                        },
                        className: "h-px w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-red-400",
                                                children: "キルポイント"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: killPoint,
                                                onChange: (e)=>updateConfig("appConfig", {
                                                        score_Setting: {
                                                            ...configData?.appConfig?.score_Setting,
                                                            kill_Point: Number(e.target.value)
                                                        }
                                                    }, "overwrite"),
                                                style: inputStyle,
                                                className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                min: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "キル1回あたりのポイント"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-red-400",
                                                children: "最大キルポイント"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: maxKill,
                                                onChange: (e)=>updateConfig("appConfig", {
                                                        score_Setting: {
                                                            ...configData?.appConfig?.score_Setting,
                                                            max_Kill: Number(e.target.value)
                                                        }
                                                    }, "overwrite"),
                                                style: inputStyle,
                                                className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                min: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "ポイントが付与される最大キル数"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 366,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-red-400",
                                        children: "ランクスコア設定"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mb-2",
                                        children: "最終順位に基づいて付与されるポイント"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                        children: Array.from({
                                            length: configData?.uiStatus?.maxTeam || 20
                                        }, (_, i)=>i + 1).map((rank)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-300 w-24",
                                                        children: rank === 1 ? "1位:" : rank === 2 ? "2位:" : rank === 3 ? "3位:" : `${rank}位:`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: (configData?.appConfig?.score_Setting?.rank_Points || [])[rank - 1] || 0,
                                                        onChange: (e)=>{
                                                            const maxTeam = configData?.uiStatus?.maxTeam || 20;
                                                            // Create a copy of the current rank points array or initialize with zeros
                                                            const rankingScores = [
                                                                ...configData?.appConfig?.score_Setting?.rank_Points || []
                                                            ];
                                                            // Set the value at the specific rank position
                                                            rankingScores[rank - 1] = Number(e.target.value);
                                                            // Ensure the array has enough elements for all teams (MaxTeam)
                                                            while(rankingScores.length < maxTeam){
                                                                rankingScores.push(0);
                                                            }
                                                            updateConfig("appConfig", {
                                                                score_Setting: {
                                                                    ...configData?.appConfig?.score_Setting,
                                                                    rank_Points: rankingScores
                                                                }
                                                            }, "overwrite");
                                                        },
                                                        style: inputStyle,
                                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                        min: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, rank, true, {
                                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/control-panel/components/tabs/MatchTab.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(MatchTab, "2OjH0hqmaNLmlEfKx44tqg5ssb0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"]
    ];
});
_c = MatchTab;
var _c;
__turbopack_refresh__.register(_c, "MatchTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/players/PlayerSlot.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PlayerSlot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PlayerSlot({ index, player, onRightClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center bg-black/30 p-1.5 rounded text-xs",
        onContextMenu: player && onRightClick ? onRightClick : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-4 h-4 flex items-center justify-center bg-gray-800 rounded-full mr-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-400",
                    children: index + 1
                }, void 0, false, {
                    fileName: "[project]/components/players/PlayerSlot.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/players/PlayerSlot.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            player ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-300 text-xs",
                        children: player.name
                    }, void 0, false, {
                        fileName: "[project]/components/players/PlayerSlot.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto text-gray-500 text-xs",
                        children: [
                            player.id.substring(0, 6),
                            "..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/players/PlayerSlot.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/players/PlayerSlot.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-500 italic text-xs",
                children: "空きスロット"
            }, void 0, false, {
                fileName: "[project]/components/players/PlayerSlot.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/players/PlayerSlot.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = PlayerSlot;
var _c;
__turbopack_refresh__.register(_c, "PlayerSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TeamCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TeamCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$players$2f$PlayerSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/players/PlayerSlot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$team$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/team-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function TeamCard({ teamId, team, editingTeam, editedTeamName, startEditingTeam, saveTeamName, cancelEditingTeam, setEditedTeamName, onPlayerRightClick, maxTeamPlayer = 3 }) {
    _s();
    const teamNumber = Number.parseInt(teamId);
    const teamColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$team$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeamColor"])(teamNumber);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // カードスタイル
    const cardStyle = {
        backgroundColor: "#0f1623",
        borderColor: "rgba(139, 0, 0, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)",
        borderLeft: `4px solid ${teamColor}`,
        transition: "all 0.2s ease"
    };
    // 入力スタイル
    const inputStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "#1f2937",
        color: "#e5e7eb"
    };
    // プレースホルダーメンバーの生成（常にmaxTeamPlayer人分表示）
    const placeholderMembers = Array.from({
        length: maxTeamPlayer
    }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$players$2f$PlayerSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            index: idx,
            player: team.players[idx] || null,
            onRightClick: team.players[idx] ? (e)=>onPlayerRightClick(e, team.players[idx].id, teamId) : undefined
        }, `placeholder-${idx}`, false, {
            fileName: "[project]/components/TeamCard.tsx",
            lineNumber: 58,
            columnNumber: 5
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: cardStyle,
        className: "rounded-md overflow-hidden",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 bg-gray-900/80 border-b border-gray-800 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 flex items-center justify-center rounded-full",
                                style: {
                                    backgroundColor: teamColor
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-white",
                                    children: teamNumber - 1
                                }, void 0, false, {
                                    fileName: "[project]/components/TeamCard.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/TeamCard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            editingTeam === teamId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: editedTeamName,
                                onChange: (e)=>setEditedTeamName(e.target.value),
                                style: inputStyle,
                                className: "w-full h-6 px-2 py-0.5 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-xs",
                                onClick: (e)=>e.stopPropagation(),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") {
                                        saveTeamName(teamId);
                                    } else if (e.key === "Escape") {
                                        cancelEditingTeam();
                                    }
                                },
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/components/TeamCard.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-white text-xs",
                                children: team.name
                            }, void 0, false, {
                                fileName: "[project]/components/TeamCard.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TeamCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: editingTeam === teamId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>saveTeamName(teamId),
                                    className: "p-0.5 rounded-full bg-green-900/30 hover:bg-green-900/50",
                                    title: "チーム名を保存",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "h-3 w-3 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TeamCard.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/TeamCard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: cancelEditingTeam,
                                    className: "p-0.5 rounded-full bg-red-900/30 hover:bg-red-900/50",
                                    title: "編集をキャンセル",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-3 w-3 text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TeamCard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/TeamCard.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>startEditingTeam(teamId, team.name),
                            className: `p-0.5 rounded-full ${isHovered ? "bg-gray-800" : "bg-gray-800/50"} hover:bg-gray-800`,
                            title: "チーム名を編集",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                className: "h-3 w-3 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/components/TeamCard.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TeamCard.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TeamCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TeamCard.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: placeholderMembers
                }, void 0, false, {
                    fileName: "[project]/components/TeamCard.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TeamCard.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TeamCard.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(TeamCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = TeamCard;
var _c;
__turbopack_refresh__.register(_c, "TeamCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/teams/SpecialTeamView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SpecialTeamView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$players$2f$PlayerSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/players/PlayerSlot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
;
;
function SpecialTeamView({ teamId, team, onPlayerRightClick, maxTeamPlayer = 3 }) {
    if (!team) return null;
    // 少なくともmaxTeamPlayerスロットを表示、または実際のプレイヤー数がmaxTeamPlayerより大きい場合はその数
    const slotCount = Math.max(maxTeamPlayer, team.players.length);
    const slots = Array.from({
        length: slotCount
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5 h-5 flex items-center justify-center bg-gray-800 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "h-3 w-3 text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/components/teams/SpecialTeamView.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/teams/SpecialTeamView.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-white text-xs",
                            children: team.name
                        }, void 0, false, {
                            fileName: "[project]/components/teams/SpecialTeamView.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/teams/SpecialTeamView.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/teams/SpecialTeamView.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1 max-h-[204px] overflow-y-auto pr-1",
                children: slots.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$players$2f$PlayerSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        index: idx,
                        player: team.players[idx] || null,
                        onRightClick: team.players[idx] ? (e)=>onPlayerRightClick(e, team.players[idx].id, teamId) : undefined
                    }, idx, false, {
                        fileName: "[project]/components/teams/SpecialTeamView.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/teams/SpecialTeamView.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/teams/SpecialTeamView.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = SpecialTeamView;
var _c;
__turbopack_refresh__.register(_c, "SpecialTeamView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/components/tabs/LobbyTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LobbyTab)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/hooks/useControlPanelContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/TeamCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$teams$2f$SpecialTeamView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/teams/SpecialTeamView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function LobbyTab() {
    _s();
    const { configData, teamData, lobbySettings, specialTeamTab, setSpecialTeamTab, editingTeam, editedTeamName, startEditingTeam, saveTeamName, cancelEditingTeam, setEditedTeamName, handlePlayerRightClick, updateLobbySetting, setActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"])();
    // Custom styles
    const cardStyle = {
        backgroundColor: "#111827",
        borderColor: "rgba(139, 0, 0, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)"
    };
    const cardHeaderStyle = {
        backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)"
    };
    const inputStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "#1f2937",
        color: "#e5e7eb"
    };
    const buttonStyle = {
        backgroundColor: "#b91c1c",
        color: "white"
    };
    const buttonHoverStyle = {
        backgroundColor: "#991b1b"
    };
    // Check if lobby is joined
    const isLobbyJoined = configData?.uiStatus?.isLobbyJoined || false;
    if (!isLobbyJoined) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                className: "rounded-lg overflow-hidden max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardHeaderStyle,
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                        className: "h-5 w-5 text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-red-400",
                                        children: "ロビーに参加していません"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "先にロビーに参加する必要があります"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black/50 border border-gray-800 rounded-md p-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-4",
                                    children: "チームを表示・管理するには、先にロビーに参加する必要があります。"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setActiveTab("match");
                                    },
                                    className: "py-2 px-4 rounded-md text-white font-medium",
                                    style: buttonStyle,
                                    onMouseOver: (e)=>e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor,
                                    onMouseOut: (e)=>e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                            className: "inline-block mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        "マッチタブへ移動"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: cardStyle,
                            className: "rounded-lg overflow-hidden h-[350px] flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: cardHeaderStyle,
                                    className: "px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                    className: "h-5 w-5 text-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold text-red-400",
                                                    children: "ロビー設定"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-xs mt-1",
                                            children: "ロビーパラメータを設定"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: "rgba(139, 0, 0, 0.2)"
                                    },
                                    className: "h-px w-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 overflow-y-auto flex-grow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-red-400",
                                                        children: "プレイリスト名"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: lobbySettings.playlistname,
                                                        onChange: (e)=>updateLobbySetting("playlistname", e.target.value),
                                                        style: inputStyle,
                                                        className: "w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-red-400",
                                                        children: "ゲームモード"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: lobbySettings.gamemode,
                                                        onChange: (e)=>updateLobbySetting("gamemode", e.target.value),
                                                        style: inputStyle,
                                                        className: "w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "CUSTOMMATCH_BR_TRIOS",
                                                                children: "BRトリオ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "CUSTOMMATCH_BR_DUOS",
                                                                children: "BRデュオ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "CUSTOMMATCH_CONTROL",
                                                                children: "コントロール"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-red-400",
                                                        children: "マップ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: lobbySettings.map,
                                                        onChange: (e)=>updateLobbySetting("map", e.target.value),
                                                        style: inputStyle,
                                                        className: "w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "mp_rr_canyonlands_hu",
                                                                children: "キングスキャニオン"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "mp_rr_desertlands_hu",
                                                                children: "ワールズエッジ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "mp_rr_olympus_mu",
                                                                children: "オリンパス"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "mp_rr_tropic_island_mu",
                                                                children: "ストームポイント"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "mp_rr_divided_moon",
                                                                children: "ブロークンムーン"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-red-400",
                                                        children: "オプション"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between bg-gray-900/50 p-2 rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xs font-medium text-gray-300",
                                                                        children: "管理者チャット"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "relative inline-flex items-center cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: lobbySettings.adminchat,
                                                                                onChange: (e)=>updateLobbySetting("adminchat", e.target.checked),
                                                                                className: "sr-only peer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 156,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 162,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between bg-gray-900/50 p-2 rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xs font-medium text-gray-300",
                                                                        children: "チーム名変更"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "relative inline-flex items-center cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: lobbySettings.teamrename,
                                                                                onChange: (e)=>updateLobbySetting("teamrename", e.target.checked),
                                                                                className: "sr-only peer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 169,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 175,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between bg-gray-900/50 p-2 rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xs font-medium text-gray-300",
                                                                        children: "自己割り当て"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "relative inline-flex items-center cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: lobbySettings.selfassign,
                                                                                onChange: (e)=>updateLobbySetting("selfassign", e.target.checked),
                                                                                className: "sr-only peer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 182,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 188,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between bg-gray-900/50 p-2 rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xs font-medium text-gray-300",
                                                                        children: "エイムアシスト"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "relative inline-flex items-center cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: lobbySettings.aimassist,
                                                                                onChange: (e)=>updateLobbySetting("aimassist", e.target.checked),
                                                                                className: "sr-only peer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 195,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 201,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between bg-gray-900/50 p-2 rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xs font-medium text-gray-300",
                                                                        children: "匿名モード"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "relative inline-flex items-center cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: lobbySettings.anonmode,
                                                                                onChange: (e)=>updateLobbySetting("anonmode", e.target.checked),
                                                                                className: "sr-only peer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 208,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                                lineNumber: 214,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                        lineNumber: 207,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: cardStyle,
                            className: "rounded-lg overflow-hidden h-[350px] flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: cardHeaderStyle,
                                    className: "px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-5 w-5 text-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold text-red-400",
                                                    children: "特殊チーム"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-xs mt-1",
                                            children: "未割り当てと観戦者チーム"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: "rgba(139, 0, 0, 0.2)"
                                    },
                                    className: "h-px w-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSpecialTeamTab("unassigned"),
                                            className: `flex-1 py-1.5 px-4 text-xs font-medium ${specialTeamTab === "unassigned" ? "text-red-400 border-b-2 border-red-500" : "text-gray-400"}`,
                                            children: "未割り当て"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSpecialTeamTab("observers"),
                                            className: `flex-1 py-1.5 px-4 text-xs font-medium ${specialTeamTab === "observers" ? "text-red-400 border-b-2 border-red-500" : "text-gray-400"}`,
                                            children: "観戦者"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-grow overflow-y-auto",
                                    children: [
                                        specialTeamTab === "unassigned" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$teams$2f$SpecialTeamView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            teamId: "0",
                                            team: teamData["0"],
                                            onPlayerRightClick: handlePlayerRightClick,
                                            maxTeamPlayer: 10
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        specialTeamTab === "observers" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$teams$2f$SpecialTeamView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            teamId: "1",
                                            team: teamData["1"],
                                            onPlayerRightClick: handlePlayerRightClick,
                                            maxTeamPlayer: 10
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: cardStyle,
                    className: "rounded-lg overflow-hidden h-[710px] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: cardHeaderStyle,
                            className: "px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-5 w-5 text-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-red-400",
                                            children: "チーム"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-xs mt-1",
                                    children: "チームとプレイヤーを管理"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: "rgba(139, 0, 0, 0.2)"
                            },
                            className: "h-px w-full"
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 flex-grow overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3",
                                children: Object.keys(teamData).filter((id)=>id !== "0" && id !== "1") // 特殊チームを除外
                                .filter((id)=>Number(id) <= (configData?.uiStatus?.maxTeam || 20) + 1) // maxTeamの値に基づいてフィルタリング
                                .sort((a, b)=>Number(a) - Number(b)) // チームIDで昇順ソート
                                .map((teamId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        teamId: teamId,
                                        team: teamData[teamId],
                                        editingTeam: editingTeam,
                                        editedTeamName: editedTeamName,
                                        startEditingTeam: startEditingTeam,
                                        saveTeamName: saveTeamName,
                                        cancelEditingTeam: cancelEditingTeam,
                                        setEditedTeamName: setEditedTeamName,
                                        onPlayerRightClick: handlePlayerRightClick,
                                        maxTeamPlayer: configData?.uiStatus?.maxTeamPlayer || 3
                                    }, teamId, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                        lineNumber: 300,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/control-panel/components/tabs/LobbyTab.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(LobbyTab, "plT5Z7URP9vRU8jFAduYpn+FGdg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"]
    ];
});
_c = LobbyTab;
var _c;
__turbopack_refresh__.register(_c, "LobbyTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/components/tabs/CameraTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CameraTab)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/hooks/useControlPanelContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function CameraTab() {
    _s();
    const { configData, cameraViewMode, setCameraViewMode, selectedPOI, setSelectedPOI, poiSearchQuery, setPoiSearchQuery, selectedPlayer, setSelectedPlayer, playerSearchQuery, setPlayerSearchQuery, handleCameraChange, getAllPlayers, poiOptions, setActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"])();
    // Custom styles
    const cardStyle = {
        backgroundColor: "#111827",
        borderColor: "rgba(139, 0, 0, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)"
    };
    const cardHeaderStyle = {
        backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)"
    };
    const inputStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "#1f2937",
        color: "#e5e7eb"
    };
    const buttonStyle = {
        backgroundColor: "#b91c1c",
        color: "white"
    };
    const buttonHoverStyle = {
        backgroundColor: "#991b1b"
    };
    const disabledButtonStyle = {
        backgroundColor: "#4b5563",
        color: "white"
    };
    // Check if lobby is joined
    const isLobbyJoined = configData?.uiStatus?.isLobbyJoined || false;
    if (!isLobbyJoined) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                className: "rounded-lg overflow-hidden max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardHeaderStyle,
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        className: "h-5 w-5 text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-red-400",
                                        children: "カメラは利用できません"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "先にロビーに参加する必要があります"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black/50 border border-gray-800 rounded-md p-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-4",
                                    children: "カメラコントロールはロビーに参加した後でのみ利用できます。"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setActiveTab("match");
                                    },
                                    className: "py-2 px-4 rounded-md text-white font-medium",
                                    style: buttonStyle,
                                    onMouseOver: (e)=>e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor,
                                    onMouseOut: (e)=>e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                            className: "inline-block mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        "マッチタブへ移動"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: cardStyle,
            className: "rounded-lg overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: cardHeaderStyle,
                    className: "px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    className: "h-5 w-5 text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-red-400",
                                    children: "カメラコントロール"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm mt-1",
                            children: "カメラビューと観戦設定を管理"
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "rgba(139, 0, 0, 0.2)"
                    },
                    className: "h-px w-full"
                }, void 0, false, {
                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-900 p-1 rounded-lg inline-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCameraViewMode("poi"),
                                        className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${cameraViewMode === "poi" ? "bg-red-700 text-white" : "bg-transparent text-gray-400 hover:text-gray-200"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                                className: "inline-block mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            "POIビュー"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCameraViewMode("player"),
                                        className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${cameraViewMode === "player" ? "bg-red-700 text-white" : "bg-transparent text-gray-400 hover:text-gray-200"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "inline-block mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            "プレイヤービュー"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        cameraViewMode === "poi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "POIオプションを検索...",
                                            value: poiSearchQuery,
                                            onChange: (e)=>setPoiSearchQuery(e.target.value),
                                            style: inputStyle,
                                            className: "w-full h-10 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black/50 border border-gray-800 rounded-md p-2 max-h-[300px] overflow-y-auto",
                                    children: [
                                        poiOptions.filter((poi)=>poi.name.toLowerCase().includes(poiSearchQuery.toLowerCase())).map((poi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setSelectedPOI(poi.id),
                                                className: `flex items-center p-2 rounded-md cursor-pointer ${selectedPOI === poi.id ? "bg-red-900/30" : "hover:bg-gray-800"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 flex items-center justify-center bg-red-900/20 rounded-full mr-3",
                                                            children: poi.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-300",
                                                            children: poi.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 23
                                                }, this)
                                            }, poi.id, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this)),
                                        poiOptions.filter((poi)=>poi.name.toLowerCase().includes(poiSearchQuery.toLowerCase())).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-4 text-gray-500",
                                            children: [
                                                '"',
                                                poiSearchQuery,
                                                '"に一致するPOIオプションが見つかりません'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCameraChange,
                                    disabled: !selectedPOI,
                                    className: "w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center",
                                    style: !selectedPOI ? disabledButtonStyle : buttonStyle,
                                    onMouseOver: (e)=>selectedPOI && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor),
                                    onMouseOut: (e)=>selectedPOI && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        "カメラを変更"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        cameraViewMode === "player" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "プレイヤーを検索...",
                                            value: playerSearchQuery,
                                            onChange: (e)=>setPlayerSearchQuery(e.target.value),
                                            style: inputStyle,
                                            className: "w-full h-10 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black/50 border border-gray-800 rounded-md p-2 max-h-[300px] overflow-y-auto",
                                    children: [
                                        getAllPlayers().filter((player)=>player.name.toLowerCase().includes(playerSearchQuery.toLowerCase()) || player.teamName.toLowerCase().includes(playerSearchQuery.toLowerCase())).map((player)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setSelectedPlayer(player.id),
                                                className: `flex items-center justify-between p-2 rounded-md cursor-pointer ${selectedPlayer === player.id ? "bg-red-900/30" : "hover:bg-gray-800"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full mr-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: player.teamId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-300",
                                                                children: player.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500",
                                                        children: player.teamName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, player.id, true, {
                                                fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                                lineNumber: 215,
                                                columnNumber: 21
                                            }, this)),
                                        getAllPlayers().filter((player)=>player.name.toLowerCase().includes(playerSearchQuery.toLowerCase()) || player.teamName.toLowerCase().includes(playerSearchQuery.toLowerCase())).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-4 text-gray-500",
                                            children: [
                                                '"',
                                                playerSearchQuery,
                                                '"に一致するプレイヤーが見つかりません'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCameraChange,
                                    disabled: !selectedPlayer,
                                    className: "w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center",
                                    style: !selectedPlayer ? disabledButtonStyle : buttonStyle,
                                    onMouseOver: (e)=>selectedPlayer && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor),
                                    onMouseOut: (e)=>selectedPlayer && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        "カメラを変更"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/control-panel/components/tabs/CameraTab.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(CameraTab, "2Zo+qvxx7BdEEkWfBOFZFKSngVs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"]
    ];
});
_c = CameraTab;
var _c;
__turbopack_refresh__.register(_c, "CameraTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/components/tabs/SettingTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SettingTab)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/hooks/useControlPanelContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
function SettingTab() {
    _s();
    const { configData, updateConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"])();
    // Custom styles
    const cardStyle = {
        backgroundColor: "#111827",
        borderColor: "rgba(139, 0, 0, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)"
    };
    const cardHeaderStyle = {
        backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)"
    };
    const inputStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "#1f2937",
        color: "#e5e7eb"
    };
    // Safe access to nested properties
    const apexLegendsPath = configData?.appConfig?.apexLegends?.path || "";
    // 未使用変数を削除
    // const apexPort = configData?.appConfig?.apexLegends?.api_Port || ""
    // const apexApiOption = configData?.appConfig?.apexLegends?.api_Option || ""
    const apexOption = configData?.appConfig?.apexLegends?.option || "";
    const language = configData?.appConfig?.language || "";
    const dataFps = configData?.appConfig?.data_Fps || 60;
    const logDir = configData?.appConfig?.log_Dir || "";
    const outputDir = configData?.appConfig?.output || "";
    // 未使用変数を削除
    // const penetratorItems = configData?.appConfig?.penetrator || []
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                className: "rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardHeaderStyle,
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-red-400",
                                    children: "一般設定"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "アプリケーションの一般設定を構成"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "rgba(139, 0, 0, 0.2)"
                        },
                        className: "h-px w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-red-400",
                                        children: "言語"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                        style: inputStyle,
                                        value: language,
                                        onChange: (e)=>updateConfig("appConfig", {
                                                language: e.target.value
                                            }, "overwrite"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "言語を選択"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "english",
                                                children: "英語"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "japanese",
                                                children: "日本語"
                                            }, void 0, false, {
                                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-red-400",
                                        children: "Apex Legendsパス"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: apexLegendsPath,
                                        onChange: (e)=>updateConfig("appConfig", {
                                                apexLegends: {
                                                    ...configData?.appConfig?.apexLegends,
                                                    path: e.target.value
                                                }
                                            }, "overwrite"),
                                        style: inputStyle,
                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                        placeholder: "Apex Legendsのパスを入力"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-red-400",
                                        children: "Apex Legendsオプション"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: apexOption,
                                        onChange: (e)=>updateConfig("appConfig", {
                                                apexLegends: {
                                                    ...configData?.appConfig?.apexLegends,
                                                    option: e.target.value
                                                }
                                            }, "overwrite"),
                                        style: inputStyle,
                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                        placeholder: "Apex Legends起動オプションを入力"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-red-400",
                                        children: "データFPS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: dataFps,
                                        onChange: (e)=>updateConfig("appConfig", {
                                                data_Fps: Number(e.target.value)
                                            }, "overwrite"),
                                        style: inputStyle,
                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                        min: "1",
                                        max: "240"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: "データ収集のフレームレート"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                className: "rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardHeaderStyle,
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-red-400",
                                    children: "ファイル設定"
                                }, void 0, false, {
                                    fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "ファイルパスとディレクトリを設定"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "rgba(139, 0, 0, 0.2)"
                        },
                        className: "h-px w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-red-400",
                                        children: "出力ディレクトリ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: outputDir,
                                        onChange: (e)=>updateConfig("appConfig", {
                                                output: e.target.value
                                            }, "overwrite"),
                                        style: inputStyle,
                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                        placeholder: "出力ディレクトリのパスを入力"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: "出力ファイルが保存されるディレクトリ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-red-400",
                                        children: "ログディレクトリ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: logDir,
                                        onChange: (e)=>updateConfig("appConfig", {
                                                log_Dir: e.target.value
                                            }, "overwrite"),
                                        style: inputStyle,
                                        className: "w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                        placeholder: "ログディレクトリのパスを入力"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: "ログファイルが保存されるディレクトリ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                className: "rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-red-400",
                                children: "設定JSON"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "生の設定データを表示・編集"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "rgba(139, 0, 0, 0.2)"
                        },
                        className: "h-px w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                borderColor: "#1f2937"
                            },
                            className: "border rounded-md p-4 overflow-auto max-h-[500px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "text-sm font-mono text-gray-300 whitespace-pre-wrap",
                                children: configData ? JSON.stringify(configData, null, 2) : "設定データがありません"
                            }, void 0, false, {
                                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/control-panel/components/tabs/SettingTab.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(SettingTab, "5hMQ9UZrn2Ba1zVAvwVYYrU318E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"]
    ];
});
_c = SettingTab;
var _c;
__turbopack_refresh__.register(_c, "SettingTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/context-menu/PlayerContextMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const PlayerContextMenu = ({ x, y, onKickPlayer, onMovePlayer, onClose, playerName = "プレイヤー" })=>{
    _s();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerContextMenu.useEffect": ()=>{
            const handleClickOutside = {
                "PlayerContextMenu.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        onClose();
                    }
                }
            }["PlayerContextMenu.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "PlayerContextMenu.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["PlayerContextMenu.useEffect"];
        }
    }["PlayerContextMenu.useEffect"], [
        onClose
    ]);
    // Adjust position to ensure menu stays within viewport
    const adjustedX = Math.min(x, window.innerWidth - (menuRef.current?.offsetWidth || 200));
    const adjustedY = Math.min(y, window.innerHeight - (menuRef.current?.offsetHeight || 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "absolute z-50 bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden",
        style: {
            left: adjustedX,
            top: adjustedY
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 bg-red-900/20 border-b border-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-gray-200",
                    children: playerName
                }, void 0, false, {
                    fileName: "[project]/components/context-menu/PlayerContextMenu.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/context-menu/PlayerContextMenu.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onMovePlayer();
                            onClose() // Close the context menu after selecting move
                            ;
                        },
                        className: "w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-sm",
                        children: "プレイヤーを移動"
                    }, void 0, false, {
                        fileName: "[project]/components/context-menu/PlayerContextMenu.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onKickPlayer();
                            onClose() // Close the context menu after selecting kick
                            ;
                        },
                        className: "w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-gray-800 rounded-sm",
                        children: "プレイヤーをキック"
                    }, void 0, false, {
                        fileName: "[project]/components/context-menu/PlayerContextMenu.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/context-menu/PlayerContextMenu.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/context-menu/PlayerContextMenu.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
_s(PlayerContextMenu, "lbfKxozlpk19p2tUpYavRIkbEU0=");
_c = PlayerContextMenu;
const __TURBOPACK__default__export__ = PlayerContextMenu;
var _c;
__turbopack_refresh__.register(_c, "PlayerContextMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/TeamSelectorModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TeamSelectorModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$team$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/team-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
"use client";
;
;
;
function TeamSelectorModal({ teamData, sourceTeamId, onSelectTeam, onClose, playerName = "プレイヤー", maxTeamPlayer = 3 }) {
    const sourceTeam = teamData[sourceTeamId];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 border border-gray-800 rounded-lg shadow-lg w-full max-w-md overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-900/20 to-transparent border-b border-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-red-400",
                            children: "プレイヤーをチームに移動"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 rounded-full bg-gray-800/50 hover:bg-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 bg-black/30 border-b border-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "h-4 w-4 text-gray-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-white",
                                        children: playerName
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    " を",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-white",
                                        children: sourceTeam?.name || "不明なチーム"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    " から移動"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 max-h-[60vh] overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-gray-400 mb-1",
                                        children: "特殊チーム"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    onSelectTeam("0");
                                                    onClose() // Close the modal after selection
                                                    ;
                                                },
                                                className: "flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-300",
                                                        children: "未割り当て"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs bg-gray-900 px-2 py-0.5 rounded-full text-gray-400",
                                                        children: [
                                                            teamData["0"]?.players.length || 0,
                                                            " 人"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    onSelectTeam("1");
                                                    onClose() // Close the modal after selection
                                                    ;
                                                },
                                                className: "flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-300",
                                                        children: "観戦者"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs bg-gray-900 px-2 py-0.5 rounded-full text-gray-400",
                                                        children: [
                                                            teamData["1"]?.players.length || 0,
                                                            " 人"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-medium text-gray-400 mb-1",
                                children: "ゲームチーム"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: Object.keys(teamData).filter((id)=>id !== "0" && id !== "1" && id !== sourceTeamId).filter((id)=>{
                                    // MaxTeamの値を取得するためのロジック
                                    // チームIDの数値が21以下（MaxTeam + 1）のものだけを表示します
                                    return Number(id) <= 21;
                                }).filter((id)=>{
                                    // すでに最大人数に達しているチームは表示しない
                                    const team = teamData[id];
                                    return team.players.length < maxTeamPlayer;
                                }).map((teamId)=>{
                                    const team = teamData[teamId];
                                    const teamNumber = Number.parseInt(teamId);
                                    const teamColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$team$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeamColor"])(teamNumber);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onSelectTeam(teamId);
                                            onClose() // Close the modal after selection
                                            ;
                                        },
                                        className: "flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-md",
                                        style: {
                                            borderLeft: `3px solid ${teamColor}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 flex items-center justify-center rounded-full mr-1.5",
                                                        style: {
                                                            backgroundColor: teamColor
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-white",
                                                            children: teamNumber - 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-300 truncate max-w-[80px]",
                                                        children: team.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                lineNumber: 108,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-gray-900 px-2 py-0.5 rounded-full text-gray-400",
                                                children: [
                                                    team.players.length,
                                                    " / ",
                                                    teamId === "0" || teamId === "1" ? "∞" : maxTeamPlayer
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                                lineNumber: 117,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, teamId, true, {
                                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/modals/TeamSelectorModal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/TeamSelectorModal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/modals/TeamSelectorModal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = TeamSelectorModal;
var _c;
__turbopack_refresh__.register(_c, "TeamSelectorModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/components/ui/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
"use client";
;
;
function Header() {
    // Custom styles
    const headerStyle = {
        borderBottom: "1px solid rgba(139, 0, 0, 0.3)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(8px)",
        position: "sticky",
        top: 0,
        zIndex: 10
    };
    const gradientTextStyle = {
        backgroundImage: "linear-gradient(to right, #ef4444, #b91c1c)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: headerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-[100px] py-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "h-6 w-6 text-red-500"
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/ui/Header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold",
                            style: gradientTextStyle,
                            children: "AndeanControlPanel"
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/components/ui/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/components/ui/Header.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-red-500 text-red-400 rounded-md px-2 py-1 text-xs font-medium",
                    children: "v1.0.0"
                }, void 0, false, {
                    fileName: "[project]/app/control-panel/components/ui/Header.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/control-panel/components/ui/Header.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/control-panel/components/ui/Header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_refresh__.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ControlPanelPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$navigation$2f$TabNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/navigation/TabNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$SystemTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/tabs/SystemTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$MatchTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/tabs/MatchTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$LobbyTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/tabs/LobbyTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$CameraTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/tabs/CameraTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$SettingTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/tabs/SettingTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2d$menu$2f$PlayerContextMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context-menu/PlayerContextMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$TeamSelectorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/TeamSelectorModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/ui/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$context$2f$ControlPanelProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/components/context/ControlPanelProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/control-panel/hooks/useControlPanelContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
// メインコンテンツコンポーネント
const ControlPanelContent = ()=>{
    _s();
    const { activeTab, setActiveTab, isLoading, contextMenu, showTeamSelector, playerToMove, configData, handleKickPlayer, handleMovePlayerOption, closeContextMenu, handleMovePlayerToTeam, teamData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-12 w-12 text-red-500 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-400",
                        children: "設定データを読み込み中..."
                    }, void 0, false, {
                        fileName: "[project]/app/control-panel/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/control-panel/page.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/control-panel/page.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/control-panel/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "px-[100px] py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$navigation$2f$TabNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            activeTab: activeTab,
                            onTabChange: setActiveTab
                        }, void 0, false, {
                            fileName: "[project]/app/control-panel/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        activeTab === "system" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$SystemTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/control-panel/page.tsx",
                            lineNumber: 53,
                            columnNumber: 38
                        }, this),
                        activeTab === "match" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$MatchTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/control-panel/page.tsx",
                            lineNumber: 54,
                            columnNumber: 37
                        }, this),
                        activeTab === "lobby" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$LobbyTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/control-panel/page.tsx",
                            lineNumber: 55,
                            columnNumber: 37
                        }, this),
                        activeTab === "camera" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$CameraTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/control-panel/page.tsx",
                            lineNumber: 56,
                            columnNumber: 38
                        }, this),
                        activeTab === "setting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$tabs$2f$SettingTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/control-panel/page.tsx",
                            lineNumber: 57,
                            columnNumber: 39
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/control-panel/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/control-panel/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2d$menu$2f$PlayerContextMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                x: contextMenu.x,
                y: contextMenu.y,
                onKickPlayer: handleKickPlayer,
                onMovePlayer: handleMovePlayerOption,
                onClose: closeContextMenu,
                playerName: configData?.teamData?.[contextMenu.teamId]?.players.find((p)=>p.id === contextMenu.playerId)?.name || "プレイヤー"
            }, void 0, false, {
                fileName: "[project]/app/control-panel/page.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            showTeamSelector && playerToMove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$TeamSelectorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                teamData: teamData,
                sourceTeamId: playerToMove.teamId,
                onSelectTeam: handleMovePlayerToTeam,
                onClose: ()=>{
                    setActiveTab(activeTab) // Keep the current tab active
                    ;
                },
                playerName: configData?.teamData?.[playerToMove.teamId]?.players.find((p)=>p.id === playerToMove.playerId)?.name || "プレイヤー",
                maxTeamPlayer: configData?.uiStatus?.maxTeamPlayer || 3
            }, void 0, false, {
                fileName: "[project]/app/control-panel/page.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/control-panel/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
_s(ControlPanelContent, "mgIfY9u82kFdKL9OG+ouAtVak6g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$hooks$2f$useControlPanelContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlPanelContext"]
    ];
});
_c = ControlPanelContent;
function ControlPanelPage() {
    _s1();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Client-side mounting effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ControlPanelPage.useEffect": ()=>{
            setMounted(true);
        }
    }["ControlPanelPage.useEffect"], []);
    // Return null before client-side mounting
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$control$2d$panel$2f$components$2f$context$2f$ControlPanelProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlPanelProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlPanelContent, {}, void 0, false, {
            fileName: "[project]/app/control-panel/page.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/control-panel/page.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s1(ControlPanelPage, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c1 = ControlPanelPage;
var _c, _c1;
__turbopack_refresh__.register(_c, "ControlPanelContent");
__turbopack_refresh__.register(_c1, "ControlPanelPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/control-panel/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_cf2b88._.js.map