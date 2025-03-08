"use client"

import React, { CSSProperties } from "react"; 
import { useControlPanelSignalR } from "@/lib/hooks/useControlPanelSignalR"
import { useState, useEffect } from "react"
import { Settings, Play, Sliders, Code, Server, Gamepad2, Loader2 } from "lucide-react"

export default function ControlPanelPage() {
  const {
    createLobby,
    startApex,
    lobbyResponse,
    apexResponse,
    isLobbyLoading,
    isApexLoading,
    configData,
    updateConfig,
  } = useControlPanelSignalR()
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("game-controls")
  const [mounted, setMounted] = useState(false)

  // Add useEffect to handle client-side mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Add a useEffect to set loading state
  useEffect(() => {
    if (configData) {
      setIsLoading(false)
    }
  }, [configData])

  // Safe access to nested properties
  const apexLegendsPath = configData?.appConfig?.apexLegends?.path || ""
  const apexPort = configData?.appConfig?.apexLegends?.api_Port || ""
  const apexApiOption = configData?.appConfig?.apexLegends?.api_Option || ""
  const apexOption = configData?.appConfig?.apexLegends?.option || ""
  const language = configData?.appConfig?.language || ""
  const dataFps = configData?.appConfig?.data_Fps || 60
  const killPoint = configData?.appConfig?.score_Setting?.kill_Point || 1
  const maxKill = configData?.appConfig?.score_Setting?.max_Kill || 10
  const logDir = configData?.appConfig?.log_Dir || ""
  const outputDir = configData?.appConfig?.output || ""
  const penetratorItems = configData?.appConfig?.penetrator || []

  // Custom styles to ensure consistent appearance
  const headerStyle:CSSProperties  = {
    borderBottom: "1px solid rgba(139, 0, 0, 0.3)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8px)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  }

  const gradientTextStyle = {
    backgroundImage: "linear-gradient(to right, #ef4444, #b91c1c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  }

  const cardStyle = {
    backgroundColor: "#111827", // gray-900
    borderColor: "rgba(139, 0, 0, 0.3)",
    boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)",
  }

  const cardHeaderStyle = {
    backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)",
  }

  const inputStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "#1f2937", // gray-800
    color: "#e5e7eb", // gray-200
  }

  const buttonStyle = {
    backgroundColor: "#b91c1c", // red-700
    color: "white",
  }

  const buttonHoverStyle = {
    backgroundColor: "#991b1b", // red-800
  }

  const activeTabStyle = {
    backgroundColor: "rgba(139, 0, 0, 0.2)",
    color: "#f87171", // red-400
  }

  // Return loading state or null before client-side mounting
  if (!mounted) return null

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-red-500 animate-spin" />
          <p className="text-xl text-gray-400">Loading configuration data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header style={headerStyle}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6 text-red-500" />
            <h1 className="text-2xl font-bold" style={gradientTextStyle}>
              APEX CONTROL PANEL
            </h1>
          </div>
          <div className="border border-red-500 text-red-400 rounded-md px-2 py-1 text-xs font-medium">v1.0.0</div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="w-full max-w-5xl mx-auto">
          {/* Custom Tabs */}
          <div className="mb-6">
            <div className="grid grid-cols-4 bg-gray-900/50 border border-red-900/20 rounded-md overflow-hidden">
              <button
                onClick={() => setActiveTab("game-controls")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "game-controls" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "game-controls" ? activeTabStyle : {}}
              >
                <Gamepad2 className="mr-2 h-4 w-4" />
                Game Controls
              </button>
              <button
                onClick={() => setActiveTab("basic-settings")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "basic-settings" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "basic-settings" ? activeTabStyle : {}}
              >
                <Settings className="mr-2 h-4 w-4" />
                Basic Settings
              </button>
              <button
                onClick={() => setActiveTab("advanced-settings")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "advanced-settings" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "advanced-settings" ? activeTabStyle : {}}
              >
                <Sliders className="mr-2 h-4 w-4" />
                Advanced
              </button>
              <button
                onClick={() => setActiveTab("json-view")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "json-view" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "json-view" ? activeTabStyle : {}}
              >
                <Code className="mr-2 h-4 w-4" />
                JSON View
              </button>
            </div>
          </div>

          {/* Game Controls Tab */}
          {activeTab === "game-controls" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Create Lobby Card */}
                <div style={cardStyle} className="rounded-lg overflow-hidden">
                  <div style={cardHeaderStyle} className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-red-500" />
                      <h2 className="text-xl font-bold text-red-400">Create Lobby</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Initialize a new game lobby</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <button
                      onClick={createLobby}
                      disabled={isLobbyLoading}
                      className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                      style={isLobbyLoading ? { backgroundColor: "#4b5563" } : buttonStyle}
                      onMouseOver={(e) =>
                        !isLobbyLoading && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                      }
                      onMouseOut={(e) =>
                        !isLobbyLoading && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                      }
                    >
                      {isLobbyLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating Lobby...
                        </>
                      ) : (
                        <>Create Lobby</>
                      )}
                    </button>

                    <div
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                      className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
                    >
                      {lobbyResponse ? JSON.stringify(lobbyResponse, null, 2) : "No response"}
                    </div>
                  </div>
                </div>

                {/* Start Apex Card */}
                <div style={cardStyle} className="rounded-lg overflow-hidden">
                  <div style={cardHeaderStyle} className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-red-500" />
                      <h2 className="text-xl font-bold text-red-400">Start Apex</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Launch the Apex Legends game</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <button
                      onClick={startApex}
                      disabled={isApexLoading}
                      className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                      style={isApexLoading ? { backgroundColor: "#4b5563" } : buttonStyle}
                      onMouseOver={(e) =>
                        !isApexLoading && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                      }
                      onMouseOut={(e) =>
                        !isApexLoading && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                      }
                    >
                      {isApexLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Starting Apex...
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Start Apex
                        </>
                      )}
                    </button>

                    <div
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                      className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
                    >
                      {apexResponse ? JSON.stringify(apexResponse, null, 2) : "No response"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Basic Settings Tab */}
          {activeTab === "basic-settings" && (
            <div style={cardStyle} className="rounded-lg overflow-hidden">
              <div style={cardHeaderStyle} className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-red-400">Basic Configuration</h2>
                </div>
                <p className="text-gray-400 text-sm mt-1">Manage essential game settings</p>
              </div>
              <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
              <div className="p-6 space-y-6">
                {/* Apex Legends Path */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-red-400">Apex Legends Path</h3>
                  </div>
                  <input
                    value={apexLegendsPath}
                    onChange={(e) => updateConfig("appConfig", { apexLegends: { ...configData?.appConfig?.apexLegends, path: e.target.value } }, "overwrite")}
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter Apex Legends path"
                  />
                </div>

                {/* Language */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">Language</h3>
                  <select
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    style={inputStyle}
                    value={language}
                    onChange={(e) => updateConfig("appConfig", { language: e.target.value }, "overwrite")}
                  >
                    <option value="">Select language</option>
                    <option value="english">English</option>
                    <option value="japanese">Japanese</option>
                  </select>
                </div>

                {/* Data FPS */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">Data FPS</h3>
                  <input
                    type="number"
                    value={dataFps}
                    onChange={(e) => updateConfig("appConfig", { data_Fps: Number(e.target.value) }, "overwrite")}
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    min="1"
                    max="240"
                  />
                  <p className="text-xs text-gray-400">Set the data capture frame rate (1-240)</p>
                </div>

                {/* Kill Point */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">Kill Point</h3>
                  <input
                    type="number"
                    value={killPoint}
                    onChange={(e) => 
                        updateConfig("appConfig", { 
                          score_Setting: { ...configData?.appConfig?.score_Setting, kill_Point: Number(e.target.value) } 
                        }, "overwrite")
                      }
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    min="0"
                  />
                  <p className="text-xs text-gray-400">Points awarded per kill</p>
                </div>

                {/* Enable Logging */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-800">
                  <div>
                    <h3 className="text-lg font-semibold text-red-400">Enable Logging</h3>
                    <p className="text-xs text-gray-400">Save game logs to disk</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-800">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={logDir !== ""}
                      onChange={(e) =>
                        updateConfig("appConfig", { log_Dir: e.target.checked ? "../../log" : "" }, "overwrite")
                      }
                    />
                    <span
                      className={`absolute inset-y-0 start-0 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white transition-all ${
                        logDir !== "" ? "translate-x-5 bg-red-500" : "translate-x-0"
                      }`}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Advanced Settings Tab */}
          {activeTab === "advanced-settings" && (
            <div style={cardStyle} className="rounded-lg overflow-hidden">
              <div style={cardHeaderStyle} className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-red-400">Advanced Configuration</h2>
                </div>
                <p className="text-gray-400 text-sm mt-1">Configure detailed game parameters</p>
              </div>
              <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
              <div className="p-6 space-y-6">
                {/* API Port */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">API Port</h3>
                  <input
                    value={apexPort}
                    onChange={(e) => 
                        updateConfig("appConfig", { 
                          apexLegends: { ...configData?.appConfig?.apexLegends, api_Port: e.target.value } 
                        }, "overwrite")
                      }
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter API port"
                  />
                </div>

                {/* API Option */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">API Option</h3>
                  <input
                    value={apexApiOption}
                    onChange={(e) => 
                        updateConfig("appConfig", { 
                          apexLegends: { ...configData?.appConfig?.apexLegends, api_Option: e.target.value } 
                        }, "overwrite")
                      }                      
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter API options"
                  />
                </div>

                {/* Game Options */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">Game Options</h3>
                  <input
                    value={apexOption}
                    onChange={(e) => 
                        updateConfig("appConfig", { 
                          apexLegends: { ...configData?.appConfig?.apexLegends, option: e.target.value } 
                        }, "overwrite")
                      }
                      
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter game options"
                  />
                </div>

                {/* Max Kill */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">Max Kill Points</h3>
                  <input
                    type="number"
                    value={maxKill}
                    onChange={(e) => 
                        updateConfig("appConfig", { 
                          score_Setting: { ...configData?.appConfig?.score_Setting, max_Kill: Number(e.target.value) } 
                        }, "overwrite")
                      }
                      
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    min="1"
                  />
                  <p className="text-xs text-gray-400">Maximum number of kills that award points</p>
                </div>

                {/* Output Directory */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">Output Directory</h3>
                  <input
                    value={outputDir}
                    onChange={(e) => updateConfig("appConfig", { output: e.target.value }, "overwrite")}
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter output directory"
                  />
                </div>

                {/* Penetrator Items */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-400">Penetrator Items</h3>
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                    className="border rounded-md p-3 text-sm text-gray-300 max-h-40 overflow-auto"
                  >
                    {penetratorItems && penetratorItems.length > 0 ? (
                      <ul className="space-y-1">
                        {penetratorItems.map((item, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <span>{item}</span>
                            <button
                              className="h-6 px-2 text-red-400 hover:text-red-300 hover:bg-red-900/10 rounded"
                              onClick={() => {
                                const newItems = [...penetratorItems]
                                newItems.splice(index, 1)
                                updateConfig("appConfig", { penetrator: newItems }, "overwrite")
                              }}
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No items added</p>
                    )}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <input
                      id="new-penetrator-item"
                      style={inputStyle}
                      className="flex-1 h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Add new item"
                    />
                    <button
                      className="px-4 py-2 rounded-md text-white font-medium"
                      style={buttonStyle}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                      onClick={() => {
                        const input = document.getElementById("new-penetrator-item") as HTMLInputElement
                        if (input && input.value) {
                          const newItems = [...penetratorItems, input.value]
                          updateConfig("appConfig", { penetrator: newItems }, "overwrite")
                          input.value = ""
                        }
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* JSON View Tab */}
          {activeTab === "json-view" && (
            <div style={cardStyle} className="rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h2 className="text-lg font-semibold text-red-400">Configuration JSON</h2>
                <p className="text-gray-400 text-sm mt-1">View and edit the raw configuration data</p>
              </div>
              <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
              <div className="p-4">
                <div
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                  className="border rounded-md p-4 overflow-auto max-h-[500px]"
                >
                  <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
                    {configData ? JSON.stringify(configData, null, 2) : "No configuration data available"}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

