"use client"

import type React from "react"
import type { CSSProperties } from "react"
// Add the Power icon import at the top with the other icons
import { Settings, Play, Sliders, Server, Loader2, Upload, Power, Users } from "lucide-react"
// Add these imports at the top with the other imports
import { Search, Camera, Map, Eye, SkipForward, Zap } from "lucide-react"
import { useControlPanelSignalR } from "@/lib/hooks/useControlPanelSignalR"
import { useState, useEffect, useRef } from "react"
import TeamCard from "@/components/TeamCard"

// CSV データの型定義
interface CSVTeamData {
  TEAM: number
  NAME: string
  IMG_URL: string
  MEMBER_NUM: number
  MEMBERS: string[]
}

// Team data interface
interface Player {
  index: number
  id: string
  name: string
}

interface Team {
  name: string
  logoUrl: string
  spawnPoint: number
  players: Player[]
}

interface TeamData {
  [key: string]: Team
}

// Lobby settings interface
interface LobbySettings {
  playlistname: string
  adminchat: boolean
  teamrename: boolean
  selfassign: boolean
  aimassist: boolean
  anonmode: boolean
  gamemode: string
  map: string
}

// Add POI interface
interface POIOption {
  id: string
  name: string
  icon: React.ReactNode
}

export default function ControlPanelPage() {
  // Add the shutdownSystem to the destructured hook values
  const {
    createLobby,
    startApex,
    readCSV,
    shutdownSystem,
    lobbyResponse,
    apexResponse,
    isLobbyLoading,
    isApexLoading,
    configData,
    updateConfig,
    leaveLobbySignalR,
  } = useControlPanelSignalR()
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("system")
  const [mounted, setMounted] = useState(false)
  const [specialTeamTab, setSpecialTeamTab] = useState("unassigned") // For special teams tabs

  // Add the CSV upload functionality
  // First, import the necessary hooks and components

  // Then, add the CSV processing function inside the component
  // Add this after the existing state declarations
  const [isProcessingCSV, setIsProcessingCSV] = useState(false)
  const [csvResponse, setCsvResponse] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Add state for shutdown confirmation
  const [isShuttingDown, setIsShuttingDown] = useState(false)
  const [showShutdownConfirm, setShowShutdownConfirm] = useState(false)

  const [lobbyCode, setLobbyCode] = useState("")
  const [isLeavingLobby, setIsLeavingLobby] = useState(false)

  // Add state for expanded teams
  const [expandedTeams, setExpandedTeams] = useState<{ [key: string]: boolean }>({})
  const [editingTeam, setEditingTeam] = useState<string | null>(null)
  const [editedTeamName, setEditedTeamName] = useState("")

  // Add these new states after the other state declarations (around line 50)
  const [cameraViewMode, setCameraViewMode] = useState("poi") // "poi" or "player"
  const [selectedPlayer, setSelectedPlayer] = useState("")
  const [playerSearchQuery, setPlayerSearchQuery] = useState("")
  const [selectedPOI, setSelectedPOI] = useState("")
  const [poiSearchQuery, setPoiSearchQuery] = useState("")

  // Define POI options
  const poiOptions: POIOption[] = [
    { id: "killreader", name: "KillReader", icon: <Zap className="h-4 w-4 text-red-400" /> },
    { id: "next", name: "NEXT", icon: <SkipForward className="h-4 w-4 text-red-400" /> },
    { id: "spectatorview", name: "SpectatorView", icon: <Eye className="h-4 w-4 text-red-400" /> },
    { id: "overviewmap", name: "OverviewMap", icon: <Map className="h-4 w-4 text-red-400" /> },
  ]

  // Add this function inside the component
  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsProcessingCSV(true)
    setCsvResponse("Processing CSV file...")

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const csvText = e.target?.result as string
        const jsonData = parseCSV(csvText)

        // Call the readCSV function from the hook
        readCSV(jsonData)

        setCsvResponse(`Successfully processed ${jsonData.length} team records`)
      } catch (error) {
        console.error("Error processing CSV:", error)
        setCsvResponse(`Error processing CSV: ${error instanceof Error ? error.message : String(error)}`)
      } finally {
        setIsProcessingCSV(false)
        // Reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }
    }

    reader.onerror = () => {
      setIsProcessingCSV(false)
      setCsvResponse("Error reading the file")
    }

    reader.readAsText(file)
  }

  // Add the CSV parsing function
  const parseCSV = (csvText: string): CSVTeamData[] => {
    // Split the CSV text into lines
    const lines = csvText.split(/\r\n|\n/)

    // Extract headers (first line)
    const headers = lines[0].split(",")

    // Process data rows
    const result: CSVTeamData[] = []
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue // 空行をスキップ

      const data = lines[i].split(",")

      // CSVTeamData 型のオブジェクトを作成
      const teamData: CSVTeamData = {
        TEAM: Number.parseInt(data[headers.indexOf("TEAM")]) || 0,
        NAME: data[headers.indexOf("NAME")] || "",
        IMG_URL: data[headers.indexOf("IMG_URL")] || "",
        MEMBER_NUM: Number.parseInt(data[headers.indexOf("MEMBER_NUM")]) || 0,
        MEMBERS: [],
      }

      // MEMBERS プロパティの生成 (MEMBER1～MEMBER6 を想定)
      for (let j = 1; j <= 6; j++) {
        const key = `MEMBER${j}`
        const value = data[headers.indexOf(key)]
        if (value && value.trim() !== "") {
          teamData.MEMBERS.push(value)
        }
      }

      result.push(teamData)
    }

    return result
  }

  // Add the handleShutdown function
  const handleShutdown = () => {
    setShowShutdownConfirm(true)
  }

  // Add the confirmShutdown function
  const confirmShutdown = async () => {
    setIsShuttingDown(true)
    await shutdownSystem()
    setIsShuttingDown(false)
    setShowShutdownConfirm(false)
  }

  const leaveLobby = async () => {
    setIsLeavingLobby(true)
    try {
      await leaveLobbySignalR()
    } finally {
      setIsLeavingLobby(false)
    }
  }

  // Toggle team expansion
  const toggleTeamExpansion = (teamId: string) => {
    setExpandedTeams((prev) => ({
      ...prev,
      [teamId]: !prev[teamId],
    }))
  }

  // Start editing team name
  const startEditingTeam = (teamId: string, currentName: string) => {
    setEditingTeam(teamId)
    setEditedTeamName(currentName)
  }

  // Save edited team name
  const saveTeamName = (teamId: string) => {
    if (!configData?.teamData) return

    const updatedTeamData = { ...configData.teamData }
    updatedTeamData[teamId] = {
      ...updatedTeamData[teamId],
      name: editedTeamName,
    }

    updateConfig("teamData", updatedTeamData, "overwrite")
    setEditingTeam(null)
  }

  // Cancel editing team name
  const cancelEditingTeam = () => {
    setEditingTeam(null)
  }

  // Update lobby setting
  const updateLobbySetting = (key: keyof LobbySettings, value: any) => {
    if (!configData?.lobbySettings) return

    const updatedSettings = {
      ...configData.lobbySettings,
      [key]: value,
    }

    updateConfig("lobbySettings", updatedSettings, "overwrite")
  }

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

  // Lobby settings
  const lobbySettings = (configData?.lobbySettings as LobbySettings) || {
    playlistname: "",
    adminchat: false,
    teamrename: false,
    selfassign: true,
    aimassist: true,
    anonmode: false,
    gamemode: "",
    map: "",
  }

  // Team data
  const teamData = (configData?.teamData as TeamData) || {}

  // カスタムスタイル
  const headerStyle: CSSProperties = {
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

  // renderSpecialTeamSlotsメソッドをよりコンパクトに調整します

  // 特殊チーム用のプレースホルダースロットを作成
  const renderSpecialTeamSlots = (teamId: string) => {
    const team = teamData[teamId]
    if (!team) return null

    // 少なくとも5つのスロットを表示、または実際のプレイヤー数が5より大きい場合はその数
    const slotCount = Math.max(5, team.players.length)

    return Array.from({ length: slotCount }).map((_, idx) => {
      const player = team.players[idx]
      return (
        <div key={idx} className="flex items-center bg-black/30 p-1.5 rounded text-xs">
          <div className="w-4 h-4 flex items-center justify-center bg-gray-800 rounded-full mr-1.5">
            <span className="text-xs text-gray-400">{idx + 1}</span>
          </div>
          {player ? (
            <div className="flex justify-between w-full">
              <span className="text-gray-300 text-xs">{player.name}</span>
              <span className="ml-auto text-gray-500 text-xs">{player.id.substring(0, 6)}...</span>
            </div>
          ) : (
            <span className="text-gray-500 italic text-xs">Empty slot</span>
          )}
        </div>
      )
    })
  }

  // Add this function after the other functions (before the return statement)
  // Function to get all players from teams other than 0 and 1
  const getAllPlayers = () => {
    if (!configData?.teamData) return []

    const players: { id: string; name: string; teamId: string; teamName: string }[] = []

    Object.entries(configData.teamData).forEach(([teamId, team]) => {
      if (teamId !== "0" && teamId !== "1" && team.players) {
        team.players.forEach((player) => {
          if (player.name) {
            players.push({
              id: player.id,
              name: player.name,
              teamId,
              teamName: team.name,
            })
          }
        })
      }
    })

    return players
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
        <div className="px-[100px] py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6 text-red-500" />
            <h1 className="text-2xl font-bold" style={gradientTextStyle}>
              APEX CONTROL PANEL
            </h1>
          </div>
          <div className="border border-red-500 text-red-400 rounded-md px-2 py-1 text-xs font-medium">v1.0.0</div>
        </div>
      </header>

      <main className="px-[100px] py-6">
        <div className="w-full mx-auto">
          {/* Custom Tabs */}
          <div className="mb-6">
            <div className="grid grid-cols-5 bg-gray-900/50 border border-red-900/20 rounded-md overflow-hidden">
              <button
                onClick={() => setActiveTab("system")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "system" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "system" ? activeTabStyle : {}}
              >
                <Settings className="mr-2 h-4 w-4" />
                System
              </button>
              <button
                onClick={() => setActiveTab("match")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "match" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "match" ? activeTabStyle : {}}
              >
                <Play className="mr-2 h-4 w-4" />
                Match
              </button>
              <button
                onClick={() => setActiveTab("lobby")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "lobby" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "lobby" ? activeTabStyle : {}}
              >
                <Server className="mr-2 h-4 w-4" />
                Lobby
              </button>
              <button
                onClick={() => setActiveTab("camera")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "camera" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "camera" ? activeTabStyle : {}}
              >
                <svg
                  className="mr-2 h-4 w-4 text-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10L19.5528 7.72361C19.8343 7.58281 20 7.30339 20 7V17C20 17.3034 19.8343 17.5828 19.5528 17.7236L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="6"
                    width="12"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Camera
              </button>
              <button
                onClick={() => setActiveTab("setting")}
                className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "setting" ? "text-red-400" : "text-gray-300"}`}
                style={activeTab === "setting" ? activeTabStyle : {}}
              >
                <Sliders className="mr-2 h-4 w-4" />
                Setting
              </button>
            </div>
          </div>

          {/* System Tab */}
          {activeTab === "system" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Shutdown System Card */}
                <div style={cardStyle} className="rounded-lg overflow-hidden">
                  <div style={{ ...cardHeaderStyle, backgroundColor: "rgba(220, 38, 38, 0.2)" }} className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Power className="h-5 w-5 text-red-500" />
                      <h2 className="text-xl font-bold text-red-400">System Shutdown</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Safely shutdown the system</p>
                  </div>
                  <div className="p-6">
                    {showShutdownConfirm ? (
                      <div className="space-y-4">
                        <div className="bg-red-900/20 border border-red-900/30 rounded-md p-3 text-sm text-red-300">
                          <p className="font-medium">⚠️ Warning: This will shutdown the entire system.</p>
                          <p className="mt-1">Are you sure you want to continue?</p>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={confirmShutdown}
                            disabled={isShuttingDown}
                            className="flex-1 py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                            style={{ backgroundColor: "#dc2626" }} // red-600
                            onMouseOver={(e) => !isShuttingDown && (e.currentTarget.style.backgroundColor = "#b91c1c")}
                            onMouseOut={(e) => !isShuttingDown && (e.currentTarget.style.backgroundColor = "#dc2626")}
                          >
                            {isShuttingDown ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Shutting Down...
                              </>
                            ) : (
                              <>
                                <Power className="mr-2 h-4 w-4" />
                                Yes, Shutdown System
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => setShowShutdownConfirm(false)}
                            disabled={isShuttingDown}
                            className="flex-1 py-3 px-4 rounded-md bg-gray-800 text-white font-medium"
                            onMouseOver={(e) => !isShuttingDown && (e.currentTarget.style.backgroundColor = "#374151")}
                            onMouseOut={(e) => !isShuttingDown && (e.currentTarget.style.backgroundColor = "#1f2937")}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={handleShutdown}
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={{ backgroundColor: "#dc2626" }} // red-600
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
                      >
                        <Power className="mr-2 h-4 w-4" />
                        Shutdown System
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Match Tab */}
          {activeTab === "match" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Create/Join Lobby Card */}
                <div style={cardStyle} className="rounded-lg overflow-hidden">
                  <div style={cardHeaderStyle} className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-red-500" />
                      <h2 className="text-xl font-bold text-red-400">Join Lobby</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Join an existing game lobby</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <input
                      type="text"
                      value={lobbyCode}
                      onChange={(e) => setLobbyCode(e.target.value)}
                      placeholder="Enter lobby code"
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-2"
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => createLobby(lobbyCode)}
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
                            Joining Lobby...
                          </>
                        ) : (
                          <>Join Lobby</>
                        )}
                      </button>

                      <button
                        onClick={leaveLobby}
                        disabled={isLeavingLobby || isLobbyLoading}
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={{ backgroundColor: "#4b5563", ...(isLeavingLobby || isLobbyLoading ? {} : {}) }}
                        onMouseOver={(e) =>
                          !isLeavingLobby && !isLobbyLoading && (e.currentTarget.style.backgroundColor = "#374151")
                        }
                        onMouseOut={(e) =>
                          !isLeavingLobby && !isLobbyLoading && (e.currentTarget.style.backgroundColor = "#4b5563")
                        }
                      >
                        {isLeavingLobby ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Leaving Lobby...
                          </>
                        ) : (
                          <>Leave Lobby</>
                        )}
                      </button>
                    </div>

                    <div
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                      className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
                    >
                      {lobbyResponse ? JSON.stringify(lobbyResponse, null, 2) : "No response"}
                    </div>
                  </div>
                </div>

                {/* CSV Upload Card */}
                <div style={cardStyle} className="rounded-lg overflow-hidden">
                  <div style={cardHeaderStyle} className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Upload className="h-5 w-5 text-red-500" />
                      <h2 className="text-xl font-bold text-red-400">Upload Teams CSV</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Import team data from CSV file</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="relative">
                      <input
                        type="file"
                        accept=".csv"
                        onChange={handleCSVUpload}
                        ref={fileInputRef}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <button
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={buttonStyle}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                        disabled={isProcessingCSV}
                      >
                        {isProcessingCSV ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing CSV...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Select CSV File
                          </>
                        )}
                      </button>
                    </div>

                    <div
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                      className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
                    >
                      {csvResponse || "No CSV processed yet. Upload a file to see results."}
                    </div>

                    <div className="text-xs text-gray-400">
                      <p>Expected CSV format:</p>
                      <code className="block mt-1 p-2 bg-black/30 rounded">
                        TEAM,NAME,IMG_URL,MEMBER_NUM,MEMBER1,...
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Settings Card */}
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div style={cardHeaderStyle} className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-red-400">Score Settings</h2>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Configure match scoring parameters</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div className="p-6 space-y-6">
                  {/* Kill Points Settings - Side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Kill Point */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-red-400">Kill Point</h3>
                      <input
                        type="number"
                        value={killPoint}
                        onChange={(e) =>
                          updateConfig(
                            "appConfig",
                            {
                              score_Setting: {
                                ...configData?.appConfig?.score_Setting,
                                kill_Point: Number(e.target.value),
                              },
                            },
                            "overwrite",
                          )
                        }
                        style={inputStyle}
                        className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        min="0"
                      />
                      <p className="text-xs text-gray-400">Points awarded per kill</p>
                    </div>

                    {/* Max Kill */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-red-400">Max Kill Points</h3>
                      <input
                        type="number"
                        value={maxKill}
                        onChange={(e) =>
                          updateConfig(
                            "appConfig",
                            {
                              score_Setting: {
                                ...configData?.appConfig?.score_Setting,
                                max_Kill: Number(e.target.value),
                              },
                            },
                            "overwrite",
                          )
                        }
                        style={inputStyle}
                        className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        min="1"
                      />
                      <p className="text-xs text-gray-400">Maximum number of kills that award points</p>
                    </div>
                  </div>

                  {/* Rank Score Settings */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">Rank Score Settings</h3>
                    <p className="text-xs text-gray-400 mb-2">Points awarded based on final ranking position</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((rank) => (
                        <div key={rank} className="flex items-center space-x-2">
                          <span className="text-sm text-gray-300 w-24">
                            {rank === 1
                              ? "1st Place:"
                              : rank === 2
                                ? "2nd Place:"
                                : rank === 3
                                  ? "3rd Place:"
                                  : `${rank}th Place:`}
                          </span>
                          <input
                            type="number"
                            value={(configData?.appConfig?.score_Setting?.ranking || [])[rank - 1] || 0}
                            onChange={(e) => {
                              const rankingScores = [...(configData?.appConfig?.score_Setting?.ranking || [])]
                              rankingScores[rank - 1] = Number(e.target.value)
                              updateConfig(
                                "appConfig",
                                {
                                  score_Setting: {
                                    ...configData?.appConfig?.score_Setting,
                                    ranking: rankingScores,
                                  },
                                },
                                "overwrite",
                              )
                            }}
                            style={inputStyle}
                            className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            min="0"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lobby Tab */}
          {activeTab === "lobby" && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Side: Settings Container - 1/4 width */}
              {/* Left Side: Settings Container - 1/4 width */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                  {/* Lobby Settings Card */}
                  <div style={cardStyle} className="rounded-lg overflow-hidden h-[350px] flex flex-col">
                    <div style={cardHeaderStyle} className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-red-500" />
                        <h2 className="text-lg font-bold text-red-400">Lobby Settings</h2>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Configure lobby parameters</p>
                    </div>
                    <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                    <div className="p-4 overflow-y-auto flex-grow">
                      <div className="grid grid-cols-1 gap-4">
                        {/* Playlist Name */}
                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold text-red-400">Playlist Name</h3>
                          <input
                            type="text"
                            value={lobbySettings.playlistname}
                            onChange={(e) => updateLobbySetting("playlistname", e.target.value)}
                            style={inputStyle}
                            className="w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                          />
                        </div>

                        {/* Game Mode */}
                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold text-red-400">Game Mode</h3>
                          <select
                            value={lobbySettings.gamemode}
                            onChange={(e) => updateLobbySetting("gamemode", e.target.value)}
                            style={inputStyle}
                            className="w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                          >
                            <option value="CUSTOMMATCH_BR_TRIOS">BR Trios</option>
                            <option value="CUSTOMMATCH_BR_DUOS">BR Duos</option>
                            <option value="CUSTOMMATCH_CONTROL">Control</option>
                          </select>
                        </div>

                        {/* Map */}
                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold text-red-400">Map</h3>
                          <select
                            value={lobbySettings.map}
                            onChange={(e) => updateLobbySetting("map", e.target.value)}
                            style={inputStyle}
                            className="w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                          >
                            <option value="mp_rr_canyonlands_hu">Kings Canyon</option>
                            <option value="mp_rr_desertlands_hu">World's Edge</option>
                            <option value="mp_rr_olympus_mu">Olympus</option>
                            <option value="mp_rr_tropic_island_mu">Storm Point</option>
                            <option value="mp_rr_divided_moon">Broken Moon</option>
                          </select>
                        </div>

                        {/* Toggle Settings */}
                        <div className="space-y-2">
                          <h3 className="text-sm font-semibold text-red-400">Options</h3>
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                              <h3 className="text-xs font-medium text-gray-300">Admin Chat</h3>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={lobbySettings.adminchat}
                                  onChange={(e) => updateLobbySetting("adminchat", e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                              <h3 className="text-xs font-medium text-gray-300">Team Rename</h3>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={lobbySettings.teamrename}
                                  onChange={(e) => updateLobbySetting("teamrename", e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                              <h3 className="text-xs font-medium text-gray-300">Self Assign</h3>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={lobbySettings.selfassign}
                                  onChange={(e) => updateLobbySetting("selfassign", e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                              <h3 className="text-xs font-medium text-gray-300">Aim Assist</h3>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={lobbySettings.aimassist}
                                  onChange={(e) => updateLobbySetting("aimassist", e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                              <h3 className="text-xs font-medium text-gray-300">Anon Mode</h3>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={lobbySettings.anonmode}
                                  onChange={(e) => updateLobbySetting("anonmode", e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Special Teams Card with Tabs */}
                  <div style={cardStyle} className="rounded-lg overflow-hidden h-[350px] flex flex-col">
                    <div style={cardHeaderStyle} className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-red-500" />
                        <h2 className="text-lg font-bold text-red-400">Special Teams</h2>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Unassigned and Observer teams</p>
                    </div>
                    <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>

                    {/* Tabs for Special Teams */}
                    <div className="flex border-b border-gray-800">
                      <button
                        onClick={() => setSpecialTeamTab("unassigned")}
                        className={`flex-1 py-1.5 px-4 text-xs font-medium ${
                          specialTeamTab === "unassigned" ? "text-red-400 border-b-2 border-red-500" : "text-gray-400"
                        }`}
                      >
                        Unassigned
                      </button>
                      <button
                        onClick={() => setSpecialTeamTab("observers")}
                        className={`flex-1 py-1.5 px-4 text-xs font-medium ${
                          specialTeamTab === "observers" ? "text-red-400 border-b-2 border-red-500" : "text-gray-400"
                        }`}
                      >
                        Observers
                      </button>
                    </div>

                    {/* Special Team Content with Fixed Height and Scroll */}
                    <div className="flex-grow overflow-y-auto">
                      {/* Unassigned Team Tab Content */}
                      {specialTeamTab === "unassigned" && (
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 flex items-center justify-center bg-gray-800 rounded-full">
                                <Users className="h-3 w-3 text-red-400" />
                              </div>
                              <span className="font-medium text-white text-xs">{teamData["0"]?.name}</span>
                            </div>
                          </div>

                          {/* Players List - max height limited to show ~6 items with scrollbar */}
                          <div className="space-y-1 max-h-[204px] overflow-y-auto pr-1">
                            {renderSpecialTeamSlots("0")}
                          </div>
                        </div>
                      )}

                      {/* Observers Team Tab Content */}
                      {specialTeamTab === "observers" && (
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 flex items-center justify-center bg-gray-800 rounded-full">
                                <Users className="h-3 w-3 text-red-400" />
                              </div>
                              <span className="font-medium text-white text-xs">{teamData["1"]?.name}</span>
                            </div>
                          </div>

                          {/* Players List */}
                          <div className="space-y-1">{renderSpecialTeamSlots("1")}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Team Grid - 3/4 width */}
              <div className="lg:col-span-3">
                <div style={cardStyle} className="rounded-lg overflow-hidden h-[710px] flex flex-col">
                  <div style={cardHeaderStyle} className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-red-500" />
                      <h2 className="text-lg font-bold text-red-400">Teams</h2>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">Manage teams and players</p>
                  </div>
                  <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>

                  {/* Team Grid - Only showing regular teams (2-21) with fixed height and scroll */}
                  <div className="p-3 flex-grow overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {/* Regular Teams */}
                      {Object.keys(teamData)
                        .filter((id) => id !== "0" && id !== "1")
                        .map((teamId) => (
                          <TeamCard
                            key={teamId}
                            teamId={teamId}
                            team={teamData[teamId]}
                            editingTeam={editingTeam}
                            editedTeamName={editedTeamName}
                            startEditingTeam={startEditingTeam}
                            saveTeamName={saveTeamName}
                            cancelEditingTeam={cancelEditingTeam}
                            setEditedTeamName={setEditedTeamName}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Camera Tab */}
          {activeTab === "camera" && (
            <div className="space-y-6">
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div style={cardHeaderStyle} className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-red-500" />
                    <h2 className="text-xl font-bold text-red-400">Camera Controls</h2>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Manage camera views and spectator settings</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>

                {/* Camera View Mode Toggle */}
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-900 p-1 rounded-lg inline-flex">
                      <button
                        onClick={() => setCameraViewMode("poi")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          cameraViewMode === "poi"
                            ? "bg-red-700 text-white"
                            : "bg-transparent text-gray-400 hover:text-gray-200"
                        }`}
                      >
                        <Map className="inline-block mr-2 h-4 w-4" />
                        POI View
                      </button>
                      <button
                        onClick={() => setCameraViewMode("player")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          cameraViewMode === "player"
                            ? "bg-red-700 text-white"
                            : "bg-transparent text-gray-400 hover:text-gray-200"
                        }`}
                      >
                        <Eye className="inline-block mr-2 h-4 w-4" />
                        Player View
                      </button>
                    </div>
                  </div>

                  {/* POI View Content - Now using dropdown like Player View */}
                  {cameraViewMode === "poi" && (
                    <div className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search POI options..."
                          value={poiSearchQuery}
                          onChange={(e) => setPoiSearchQuery(e.target.value)}
                          style={inputStyle}
                          className="w-full h-10 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>

                      <div className="bg-black/50 border border-gray-800 rounded-md p-2 max-h-[300px] overflow-y-auto">
                        {poiOptions
                          .filter((poi) => poi.name.toLowerCase().includes(poiSearchQuery.toLowerCase()))
                          .map((poi) => (
                            <div
                              key={poi.id}
                              onClick={() => setSelectedPOI(poi.id)}
                              className={`flex items-center p-2 rounded-md cursor-pointer ${
                                selectedPOI === poi.id ? "bg-red-900/30" : "hover:bg-gray-800"
                              }`}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 rounded-full mr-3">
                                  {poi.icon}
                                </div>
                                <span className="text-sm text-gray-300">{poi.name}</span>
                              </div>
                            </div>
                          ))}

                        {poiOptions.filter((poi) => poi.name.toLowerCase().includes(poiSearchQuery.toLowerCase()))
                          .length === 0 && (
                          <div className="text-center py-4 text-gray-500">
                            No POI options found matching "{poiSearchQuery}"
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          if (selectedPOI) {
                            console.log(`Changing camera to POI: ${selectedPOI}`)
                            // Here you would call the actual function to change the camera
                          }
                        }}
                        disabled={!selectedPOI}
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={!selectedPOI ? { backgroundColor: "#4b5563" } : buttonStyle}
                        onMouseOver={(e) =>
                          selectedPOI && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                        }
                        onMouseOut={(e) =>
                          selectedPOI && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                        }
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Change Camera
                      </button>
                    </div>
                  )}

                  {/* Player View Content */}
                  {cameraViewMode === "player" && (
                    <div className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search players..."
                          value={playerSearchQuery}
                          onChange={(e) => setPlayerSearchQuery(e.target.value)}
                          style={inputStyle}
                          className="w-full h-10 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>

                      <div className="bg-black/50 border border-gray-800 rounded-md p-2 max-h-[300px] overflow-y-auto">
                        {getAllPlayers()
                          .filter(
                            (player) =>
                              player.name.toLowerCase().includes(playerSearchQuery.toLowerCase()) ||
                              player.teamName.toLowerCase().includes(playerSearchQuery.toLowerCase()),
                          )
                          .map((player) => (
                            <div
                              key={player.id}
                              onClick={() => setSelectedPlayer(player.id)}
                              className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                                selectedPlayer === player.id ? "bg-red-900/30" : "hover:bg-gray-800"
                              }`}
                            >
                              <div className="flex items-center">
                                <div className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full mr-2">
                                  <span className="text-xs text-gray-400">{player.teamId}</span>
                                </div>
                                <span className="text-sm text-gray-300">{player.name}</span>
                              </div>
                              <span className="text-xs text-gray-500">{player.teamName}</span>
                            </div>
                          ))}

                        {getAllPlayers().filter(
                          (player) =>
                            player.name.toLowerCase().includes(playerSearchQuery.toLowerCase()) ||
                            player.teamName.toLowerCase().includes(playerSearchQuery.toLowerCase()),
                        ).length === 0 && (
                          <div className="text-center py-4 text-gray-500">
                            No players found matching "{playerSearchQuery}"
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          if (selectedPlayer) {
                            console.log(`Changing camera to player: ${selectedPlayer}`)
                            // Here you would call the actual function to change the camera
                          }
                        }}
                        disabled={!selectedPlayer}
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={!selectedPlayer ? { backgroundColor: "#4b5563" } : buttonStyle}
                        onMouseOver={(e) =>
                          selectedPlayer && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                        }
                        onMouseOut={(e) =>
                          selectedPlayer && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                        }
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Change Camera
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Setting Tab */}
          {activeTab === "setting" && (
            <div className="space-y-6">
              {/* General Settings Card */}
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div style={cardHeaderStyle} className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-red-400">General Settings</h2>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Configure general application settings</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div className="p-6 space-y-6">
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

                  {/* Apex Legends Path */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">Apex Legends Path</h3>
                    <input
                      value={apexLegendsPath}
                      onChange={(e) =>
                        updateConfig(
                          "appConfig",
                          { apexLegends: { ...configData?.appConfig?.apexLegends, path: e.target.value } },
                          "overwrite",
                        )
                      }
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter Apex Legends path"
                    />
                  </div>

                  {/* Apex Legends Option */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">Apex Legends Option</h3>
                    <input
                      value={apexOption}
                      onChange={(e) =>
                        updateConfig(
                          "appConfig",
                          { apexLegends: { ...configData?.appConfig?.apexLegends, option: e.target.value } },
                          "overwrite",
                        )
                      }
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter Apex Legends launch options"
                    />
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
                    <p className="text-xs text-gray-400">Frames per second for data collection</p>
                  </div>
                </div>
              </div>

              {/* File Settings Card */}
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div style={cardHeaderStyle} className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-red-400">File Settings</h2>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Configure file paths and directories</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div className="p-6 space-y-6">
                  {/* Output Directory */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">Output Directory</h3>
                    <input
                      value={outputDir}
                      onChange={(e) => updateConfig("appConfig", { output: e.target.value }, "overwrite")}
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter output directory path"
                    />
                    <p className="text-xs text-gray-400">Directory where output files will be saved</p>
                  </div>

                  {/* Log Directory */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">Log Directory</h3>
                    <input
                      value={logDir}
                      onChange={(e) => updateConfig("appConfig", { log_Dir: e.target.value }, "overwrite")}
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter log directory path"
                    />
                    <p className="text-xs text-gray-400">Directory where log files will be stored</p>
                  </div>
                </div>
              </div>

              {/* Configuration JSON Card */}
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
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// モバイル表示用のメディアクエリを追加（小さい画面でのパディング調整）
const media = `@media (max-width: 768px)`
const max = `{
  main {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  header > div {
    padding-left: 20px;
    padding-right: 20px;
  }
}`

