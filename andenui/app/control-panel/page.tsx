"use client"

import type React from "react"
import type { CSSProperties } from "react"
import { Settings, Play, Server, Loader2, Upload, Power, Users } from "lucide-react"
import { Search, Camera, Map, Eye, SkipForward, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Custom components
import TeamCard from "@/components/control-panel/TeamCard"
import PlayerContextMenu from "@/components/control-panel/context-menu/PlayerContextMenu"
import TeamSelectorModal from "@/components/control-panel/modals/TeamSelectorModal"
import TabNavigation from "@/components/control-panel/navigation/TabNavigation"
import SpecialTeamView from "@/components/control-panel/teams/SpecialTeamView"

// Hooks and utilities
 import { useControlPanelSignalR } from "@/lib/hooks/useControlPanelSignalR" // 本番用
//import { useControlPanelSignalR } from "@/lib/hooks/useControlPanelSignalRMock" // モック用
import { getAllPlayersFromTeams, movePlayerBetweenTeams, removePlayerFromTeam } from "@/lib/utils/team-utils"

// Types
import type { TeamData, LobbySettings, CSVTeamData, POIOption, ContextMenuState, PlayerMoveState } from "@/lib/types"

// CSV データの型定義は削除（インポートに置き換え）

// Add POI interface
// interface POIOption {
//   id: string
//   name: string
//   icon: React.ReactNode
// }

export default function ControlPanelPage() {
  // Hook for SignalR connection
  const {
    joinLobby,
    startApex,
    readCSV,
    shutdown,
    leaveLobby, // Add this line
    lobbyResponse,
    apexResponse,
    isLobbyLoading,
    isApexLoading,
    configData,
    updateConfig,
    isConnected,
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
  } = useControlPanelSignalR()

  // UI state
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("system")
  const [mounted, setMounted] = useState(false)
  const [specialTeamTab, setSpecialTeamTab] = useState("unassigned")

  // CSV upload state
  const [isProcessingCSV, setIsProcessingCSV] = useState(false)
  const [csvResponse, setCsvResponse] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // System state
  const [isShuttingDown, setIsShuttingDown] = useState(false)
  const [showShutdownConfirm, setShowShutdownConfirm] = useState(false)

  // Lobby state
  const [lobbyCode, setLobbyCode] = useState("")
  const [isLeavingLobby, setIsLeavingLobby] = useState(false)

  // Team state
  const [expandedTeams, setExpandedTeams] = useState<{ [key: string]: boolean }>({})
  const [editingTeam, setEditingTeam] = useState<string | null>(null)
  const [editedTeamName, setEditedTeamName] = useState("")

  // Camera state
  const [cameraViewMode, setCameraViewMode] = useState("poi")
  const [selectedPlayer, setSelectedPlayer] = useState("")
  const [playerSearchQuery, setPlayerSearchQuery] = useState("")
  const [selectedPOI, setSelectedPOI] = useState("")
  const [poiSearchQuery, setPoiSearchQuery] = useState("")

  // Context menu and player movement state
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null)
  const [showTeamSelector, setShowTeamSelector] = useState(false)
  const [playerToMove, setPlayerToMove] = useState<PlayerMoveState | null>(null)

  // Define POI options
  const poiOptions: POIOption[] = [
    { id: "killreader", name: "キルリーダー", icon: <Zap className="h-4 w-4 text-red-400" /> },
    { id: "next", name: "次", icon: <SkipForward className="h-4 w-4 text-red-400" /> },
    { id: "spectatorview", name: "観戦ビュー", icon: <Eye className="h-4 w-4 text-red-400" /> },
    { id: "overviewmap", name: "マップ概要", icon: <Map className="h-4 w-4 text-red-400" /> },
  ]

  // CSV upload handler
  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsProcessingCSV(true)
    setCsvResponse("CSVファイルを処理中...")

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const csvText = e.target?.result as string
        const jsonData = parseCSV(csvText)

        // Call the readCSV function from the hook
        readCSV(jsonData)

        setCsvResponse(`${jsonData.length}件のチームレコードを正常に処理しました`)
      } catch (error) {
        console.error("CSVの処理エラー:", error)
        setCsvResponse(`CSVの処理エラー: ${error instanceof Error ? error.message : String(error)}`)
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
      setCsvResponse("ファイルの読み込みエラー")
    }

    reader.readAsText(file)
  }

  // CSV parsing function
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

  // System shutdown handlers
  const handleShutdown = () => {
    setShowShutdownConfirm(true)
  }

  const confirmShutdown = async () => {
    setIsShuttingDown(true)
    await shutdown()
    setIsShuttingDown(false)
    setShowShutdownConfirm(false)
  }

  // Lobby handlers
  // Since there's no direct leaveLobby function in the new implementation,
  // we'll keep this as a placeholder that could be implemented later
  const handleLeaveLobby = async () => {
    setIsLeavingLobby(true)
    try {
      await leaveLobby()
    } catch (error) {
      console.error("ロビーを離れる際のエラー:", error)
    } finally {
      setIsLeavingLobby(false)
    }
  }

  // Team management handlers
  const toggleTeamExpansion = (teamId: string) => {
    setExpandedTeams((prev) => ({
      ...prev,
      [teamId]: !prev[teamId],
    }))
  }

  const startEditingTeam = (teamId: string, currentName: string) => {
    setEditingTeam(teamId)
    setEditedTeamName(currentName)
  }

  const saveTeamName = (teamId: string) => {
    if (!configData?.teamData) return

    const updatedTeamData = { ...configData.teamData }
    updatedTeamData[teamId] = {
      ...updatedTeamData[teamId],
      name: editedTeamName,
    }

    // Call the SignalR setTeamName function
    setTeamName(Number.parseInt(teamId), editedTeamName)

    updateConfig("teamData", updatedTeamData, "overwrite")
    setEditingTeam(null)
  }

  const cancelEditingTeam = () => {
    setEditingTeam(null)
  }

  // Lobby settings handler
  const updateLobbySetting = (key: keyof LobbySettings, value: any) => {
    if (!configData?.lobbySettings) return

    const updatedSettings = {
      ...configData.lobbySettings,
      [key]: value,
    }

    // updateConfigを削除し、setSettingsのみを呼び出す
    // サーバーからの応答で状態が更新されるため、クライアント側での明示的な更新は不要
    setSettings(
      updatedSettings.playlistname,
      updatedSettings.adminchat,
      updatedSettings.teamrename,
      updatedSettings.selfassign,
      updatedSettings.aimassist,
      updatedSettings.anonmode,
    )
  }

  // Player context menu handlers
  const handlePlayerRightClickOriginal = (e: React.MouseEvent, playerId: string, teamId: string) => {
    e.preventDefault()
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      playerId,
      teamId,
    })
  }

  const closeContextMenuOriginal = () => {
    setContextMenu(null)
  }

  const handleKickPlayerOriginal = () => {
    if (!contextMenu || !configData?.teamData) return

    const { playerId, teamId } = contextMenu
    const updatedTeamData = removePlayerFromTeam(configData.teamData, teamId, playerId)

    updateConfig("teamData", updatedTeamData, "overwrite")
    closeContextMenu()
  }

  const handleMovePlayerOptionOriginal = () => {
    if (!contextMenu) return

    setPlayerToMove({
      playerId: contextMenu.playerId,
      teamId: contextMenu.teamId,
    })
    setShowTeamSelector(true)
    closeContextMenu()
  }

  const handleMovePlayerToTeam = (destinationTeamId: string) => {
    if (!playerToMove || !configData?.teamData) return

    const { playerId, teamId } = playerToMove
    const destinationTeam = configData.teamData[destinationTeamId]
    const maxTeamPlayer = configData?.uiStatus?.MaxTeamPlayer || 3

    // 移動先のチームがすでに最大人数に達している場合は処理を中止
    if (destinationTeam.players.length >= maxTeamPlayer) {
      console.error(`チーム ${destinationTeamId} はすでに最大人数（${maxTeamPlayer}人）に達しています`)
      return
    }

    const updatedTeamData = movePlayerBetweenTeams(configData.teamData, teamId, playerId, destinationTeamId)

    // Call the SignalR setTeam function
    const player = configData.teamData[teamId].players.find((p) => p.id === playerId)
    if (player) {
      // Extract hardware name and nucleus hash from player ID
      // Assuming player ID format is "hardwareName:nucleusHash"
      const [hardwareName, nucleusHash] = player.id.split(":")
      if (hardwareName && nucleusHash) {
        setTeam(Number.parseInt(destinationTeamId), hardwareName, nucleusHash)
      }
    }

    updateConfig("teamData", updatedTeamData, "overwrite")
    setShowTeamSelector(false)
    setPlayerToMove(null)
  }

  // Client-side mounting effect
  useEffect(() => {
    setMounted(true)
  }, [])

  // Loading state effect
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

  // Custom styles
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

  // buttonStyle と buttonHoverStyle の定義を更新
  const buttonStyle = {
    backgroundColor: "#b91c1c", // red-700
    color: "white",
  }

  const buttonHoverStyle = {
    backgroundColor: "#991b1b", // red-800
  }

  const disabledButtonStyle = {
    backgroundColor: "#4b5563", // gray-600
    color: "white",
  }

  const activeTabStyle = {
    backgroundColor: "rgba(139, 0, 0, 0.2)",
    color: "#f87171", // red-400
  }

  // Add these functions before the return statement

  // Handle right-click on player
  const handlePlayerRightClick = (e: React.MouseEvent, playerId: string, teamId: string) => {
    e.preventDefault()

    // Find the player to get their name
    const player = configData?.teamData?.[teamId]?.players.find((p) => p.id === playerId)

    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      playerId,
      teamId,
    })
  }

  // Close context menu
  const closeContextMenu = () => {
    setContextMenu(null)
  }

  // Handle kick player
  const handleKickPlayer = () => {
    if (!contextMenu || !configData?.teamData) return

    const { playerId, teamId } = contextMenu
    const updatedTeamData = removePlayerFromTeam(configData.teamData, teamId, playerId)

    updateConfig("teamData", updatedTeamData, "overwrite")
    closeContextMenu()
  }

  // Handle move player option selection
  const handleMovePlayerOption = () => {
    if (!contextMenu) return

    setPlayerToMove({
      playerId: contextMenu.playerId,
      teamId: contextMenu.teamId,
    })
    setShowTeamSelector(true)
    closeContextMenu()
  }

  // Handle move player to team
  const handleMovePlayerToTeamOriginal = (destinationTeamId: string) => {
    if (!playerToMove || !configData?.teamData) return

    const { playerId, teamId } = playerToMove
    const updatedTeamData = movePlayerBetweenTeams(configData.teamData, teamId, playerId, destinationTeamId)

    // Call the SignalR setTeam function
    const player = configData.teamData[teamId].players.find((p) => p.id === playerId)
    if (player) {
      // Extract hardware name and nucleus hash from player ID
      // Assuming player ID format is "hardwareName:nucleusHash"
      const [hardwareName, nucleusHash] = player.id.split(":")
      if (hardwareName && nucleusHash) {
        setTeam(Number.parseInt(destinationTeamId), hardwareName, nucleusHash)
      }
    }

    updateConfig("teamData", updatedTeamData, "overwrite")
    setShowTeamSelector(false)
    setPlayerToMove(null)
  }

  // Add a function to handle the camera change for both POI and player views
  const handleCameraChange = () => {
    if (cameraViewMode === "poi" && selectedPOI) {
      changeCamera("poi", selectedPOI)
      console.log(`カメラをPOIに変更: ${selectedPOI}`)
    } else if (cameraViewMode === "player" && selectedPlayer) {
      // Extract hardware name and nucleus hash from player ID
      // Assuming player ID format is "hardwareName:nucleusHash"
      const [hardwareName, nucleusHash] = selectedPlayer.split(":")
      if (hardwareName && nucleusHash) {
        changeCamera("player", selectedPlayer)
        console.log(`カメラをプレイヤーに変更: ${selectedPlayer}`)
      }
    }
  }

  // Update the renderSpecialTeamSlots function to include right-click handling
  const renderSpecialTeamSlots = (teamId: string) => {
    const team = teamData[teamId]
    if (!team) return null

    // 少なくとも5つのスロットを表示、または実際のプレイヤー数が5より大きい場合はその数
    const slotCount = Math.max(5, team.players.length)

    return Array.from({ length: slotCount }).map((_, idx) => {
      const player = team.players[idx]
      return (
        <div
          key={idx}
          className="flex items-center bg-black/30 p-1.5 rounded text-xs"
          onContextMenu={player ? (e) => handlePlayerRightClickOriginal(e, player.id, teamId) : undefined}
        >
          <div className="w-4 h-4 flex items-center justify-center bg-gray-800 rounded-full mr-1.5">
            <span className="text-xs text-gray-400">{idx + 1}</span>
          </div>
          {player ? (
            <div className="flex justify-between w-full">
              <span className="text-gray-300 text-xs">{player.name}</span>
              <span className="ml-auto text-gray-500 text-xs">{player.id.substring(0, 6)}...</span>
            </div>
          ) : (
            <span className="text-gray-500 italic text-xs">空きスロット</span>
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

  // Get UI status from configData
  const uiStatus = configData?.uiStatus || {
    LobbyJoinButtonEnabled: true,
    GameStartButtonEnabled: false,
    LeaveLobbyButtonEnabled: false,
    IsLobbyJoined: false,
    GameStatus: "NotStarted", // ゲームステータスのデフォルト値
  }

  // Return loading state or null before client-side mounting
  if (!mounted) return null

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-red-500 animate-spin" />
          <p className="text-xl text-gray-400">設定データを読み込み中...</p>
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
              AndeanControlPanel
            </h1>
          </div>
          <div className="border border-red-500 text-red-400 rounded-md px-2 py-1 text-xs font-medium">v1.0.0</div>
        </div>
      </header>

      <main className="px-[100px] py-6">
        <div className="w-full mx-auto">
          {/* Custom Tabs */}
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          {/* System Tab */}
          {activeTab === "system" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Apex Card */}
                <div style={cardStyle} className="rounded-lg overflow-hidden">
                  <div style={cardHeaderStyle} className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-red-500" />
                      <h2 className="text-xl font-bold text-red-400">Apex起動</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Apex Legendsゲームを起動する</p>
                  </div>
                  <div className="p-6 space-y-4">
                    {/* 以下のようにすべてのボタンのスタイル適用を統一します
                    // 例: Start Apex ボタン */}
                    <button
                      onClick={startApex}
                      disabled={isApexLoading || !uiStatus.GameStartButtonEnabled}
                      className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                      style={isApexLoading || !uiStatus.GameStartButtonEnabled ? disabledButtonStyle : buttonStyle}
                      onMouseOver={(e) =>
                        !isApexLoading &&
                        uiStatus.GameStartButtonEnabled &&
                        (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                      }
                      onMouseOut={(e) =>
                        !isApexLoading &&
                        uiStatus.GameStartButtonEnabled &&
                        (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                      }
                    >
                      {isApexLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Apex起動中...
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Apexを起動
                        </>
                      )}
                    </button>

                    <div
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                      className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
                    >
                      {apexResponse ? JSON.stringify(apexResponse, null, 2) : "レスポンスなし"}
                    </div>
                  </div>
                </div>

                {/* Shutdown System Card */}
                <div style={cardStyle} className="rounded-lg overflow-hidden">
                  <div style={{ ...cardHeaderStyle, backgroundColor: "rgba(220, 38, 38, 0.2)" }} className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Power className="h-5 w-5 text-red-500" />
                      <h2 className="text-xl font-bold text-red-400">システムシャットダウン</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">システムを安全にシャットダウンする</p>
                  </div>
                  <div className="p-6">
                    {showShutdownConfirm ? (
                      <div className="space-y-4">
                        <div className="bg-red-900/20 border border-red-900/30 rounded-md p-3 text-sm text-red-300">
                          <p className="font-medium">⚠️ 警告: これによりシステム全体がシャットダウンされます。</p>
                          <p className="mt-1">続行してもよろしいですか？</p>
                        </div>
                        <div className="flex gap-3">
                          {/* Shutdown Confirm ボタンを更新 */}
                          <button
                            onClick={confirmShutdown}
                            disabled={isShuttingDown}
                            className="flex-1 py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                            style={isShuttingDown ? disabledButtonStyle : buttonStyle}
                            onMouseOver={(e) =>
                              !isShuttingDown &&
                              (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                            }
                            onMouseOut={(e) =>
                              !isShuttingDown && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                            }
                          >
                            {isShuttingDown ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                シャットダウン中...
                              </>
                            ) : (
                              <>
                                <Power className="mr-2 h-4 w-4" />
                                はい、システムをシャットダウン
                              </>
                            )}
                          </button>
                          {/* Cancel ボタンを更新 */}
                          <button
                            onClick={() => setShowShutdownConfirm(false)}
                            disabled={isShuttingDown}
                            className="flex-1 py-3 px-4 rounded-md bg-gray-800 text-white font-medium"
                            onMouseOver={(e) => !isShuttingDown && (e.currentTarget.style.backgroundColor = "#374151")}
                            onMouseOut={(e) => !isShuttingDown && (e.currentTarget.style.backgroundColor = "#1f2937")}
                          >
                            キャンセル
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Shutdown System ボタンを更新 */
                      <button
                        onClick={handleShutdown}
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={buttonStyle}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                      >
                        <Power className="mr-2 h-4 w-4" />
                        システムをシャットダウン
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
                      <h2 className="text-xl font-bold text-red-400">ロビー参加</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">既存のゲームロビーに参加する</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <input
                      type="text"
                      value={lobbyCode}
                      onChange={(e) => setLobbyCode(e.target.value)}
                      placeholder="ロビーコードを入力"
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-2"
                    />

                    <div className="grid grid-cols-2 gap-3">
                      {/* Start Apex ボタン */}
                      <button
                        onClick={() => joinLobby(lobbyCode || undefined)}
                        disabled={isLobbyLoading || !uiStatus.LobbyJoinButtonEnabled}
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={isLobbyLoading || !uiStatus.LobbyJoinButtonEnabled ? disabledButtonStyle : buttonStyle}
                        onMouseOver={(e) =>
                          !isLobbyLoading &&
                          uiStatus.LobbyJoinButtonEnabled &&
                          (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                        }
                        onMouseOut={(e) =>
                          !isLobbyLoading &&
                          uiStatus.LobbyJoinButtonEnabled &&
                          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                        }
                      >
                        {isLobbyLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ロビー参加中...
                          </>
                        ) : (
                          <>ロビーに参加</>
                        )}
                      </button>

                      {/* Leave Lobby ボタンを更新 */}
                      <button
                        onClick={handleLeaveLobby}
                        disabled={isLeavingLobby || isLobbyLoading || !uiStatus.LeaveLobbyButtonEnabled}
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={
                          isLeavingLobby || isLobbyLoading || !uiStatus.LeaveLobbyButtonEnabled
                            ? disabledButtonStyle
                            : buttonStyle
                        }
                        onMouseOver={(e) =>
                          !isLeavingLobby &&
                          !isLobbyLoading &&
                          uiStatus.LeaveLobbyButtonEnabled &&
                          (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                        }
                        onMouseOut={(e) =>
                          !isLeavingLobby &&
                          !isLobbyLoading &&
                          uiStatus.LeaveLobbyButtonEnabled &&
                          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                        }
                      >
                        {isLeavingLobby ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ロビーから退出中...
                          </>
                        ) : (
                          <>ロビーから退出</>
                        )}
                      </button>
                    </div>

                    <div
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                      className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
                    >
                      {lobbyResponse ? JSON.stringify(lobbyResponse, null, 2) : "レスポンスなし"}
                    </div>
                  </div>
                </div>

                {/* CSV Upload Card */}
                <div style={cardStyle} className="rounded-lg overflow-hidden">
                  <div style={cardHeaderStyle} className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Upload className="h-5 w-5 text-red-500" />
                      <h2 className="text-xl font-bold text-red-400">チームCSVアップロード</h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">CSVファイルからチームデータをインポート</p>
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
                      {/* CSV Upload ボタンを更新 */}
                      <button
                        className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                        style={isProcessingCSV ? disabledButtonStyle : buttonStyle}
                        onMouseOver={(e) =>
                          !isProcessingCSV && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                        }
                        onMouseOut={(e) =>
                          !isProcessingCSV && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                        }
                        disabled={isProcessingCSV}
                      >
                        {isProcessingCSV ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            CSV処理中...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            CSVファイルを選択
                          </>
                        )}
                      </button>
                    </div>

                    <div
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                      className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
                    >
                      {csvResponse || "まだCSVが処理されていません。ファイルをアップロードしてください。"}
                    </div>

                    <div className="text-xs text-gray-400">
                      <p>期待されるCSV形式:</p>
                      <code className="block mt-1 p-2 bg-black/30 rounded">
                        TEAM,NAME,IMG_URL,MEMBER_NUM,MEMBER1,...
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Status & Pause Control Card - 新しいカード */}
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div style={cardHeaderStyle} className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-red-400">ゲームコントロール</h2>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">試合の状態と一時停止制御</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div className="p-6 space-y-6">
                  {/* Game Status Display */}
                  <div className="bg-black/50 border border-gray-800 rounded-md p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-red-400">現在の試合状態</h3>
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full mr-2 ${
                            uiStatus.GameStatus === "Running"
                              ? "bg-green-500"
                              : uiStatus.GameStatus === "Paused"
                                ? "bg-yellow-500"
                                : uiStatus.GameStatus === "Finished"
                                  ? "bg-blue-500"
                                  : "bg-gray-500"
                          }`}
                        />
                        <span className="text-sm font-medium text-gray-300">
                          {uiStatus.GameStatus === "Running"
                            ? "実行中"
                            : uiStatus.GameStatus === "Paused"
                              ? "一時停止中"
                              : uiStatus.GameStatus === "Finished"
                                ? "終了"
                                : "未開始"}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-900/50 p-3 rounded-md">
                        <div className="text-xs text-gray-500 mb-1">ステータス</div>
                        <div className="text-sm text-white font-medium">{uiStatus.GameStatus || "不明"}</div>
                      </div>
                      {/* 他のゲーム情報を表示する場合はここに追加 */}
                    </div>
                  </div>

                  {/* Pause Control */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-400">一時停止コントロール</h3>

                    <div className="flex items-center gap-4">
                      <div className="space-y-1 flex-1">
                        <label className="text-sm text-gray-400">カウントダウン時間（秒）</label>
                        <input
                          type="number"
                          min="0"
                          max="60"
                          defaultValue="0"
                          id="preTimerInput"
                          style={inputStyle}
                          className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>

                      <button
                        onClick={() => {
                          const preTimerInput = document.getElementById("preTimerInput") as HTMLInputElement
                          const preTimer = Number.parseInt(preTimerInput.value) || 0
                          pauseToggle(preTimer)
                        }}
                        className="h-10 px-6 rounded-md text-white font-medium flex items-center justify-center mt-6"
                        style={buttonStyle}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                        disabled={!uiStatus.IsLobbyJoined}
                      >
                        {uiStatus.GameStatus === "Paused" ? <>再開</> : <>一時停止</>}
                      </button>
                    </div>

                    <div className="text-xs text-gray-400">
                      <p>注意: カウントダウン時間を指定すると、その秒数後に一時停止が実行されます。</p>
                      <p>0秒を指定すると、即時に一時停止/再開が行われます。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Settings Card */}
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div style={cardHeaderStyle} className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-red-400">スコア設定</h2>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">マッチスコアリングパラメータを設定</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div className="p-6 space-y-6">
                  {/* Kill Points Settings - Side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Kill Point */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-red-400">キルポイント</h3>
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
                      <p className="text-xs text-gray-400">キル1回あたりのポイント</p>
                    </div>

                    {/* Max Kill */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-red-400">最大キルポイント</h3>
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
                      <p className="text-xs text-gray-400">ポイントが付与される最大キル数</p>
                    </div>
                  </div>

                  {/* Rank Score Settings */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">ランクスコア設定</h3>
                    <p className="text-xs text-gray-400 mb-2">最終順位に基づいて付与されるポイント</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((rank) => (
                        <div key={rank} className="flex items-center space-x-2">
                          <span className="text-sm text-gray-300 w-24">
                            {rank === 1 ? "1位:" : rank === 2 ? "2位:" : rank === 3 ? "3位:" : `${rank}位:`}
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
            <>
              {configData?.uiStatus?.IsLobbyJoined ? (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* 既存のLobbyタブコンテンツ */}
                  {/* Left Side: Settings Container - 1/4 width */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                      {/* Lobby Settings Card */}
                      <div style={cardStyle} className="rounded-lg overflow-hidden h-[350px] flex flex-col">
                        <div style={cardHeaderStyle} className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Server className="h-5 w-5 text-red-500" />
                            <h2 className="text-lg font-bold text-red-400">ロビー設定</h2>
                          </div>
                          <p className="text-gray-400 text-xs mt-1">ロビーパラメータを設定</p>
                        </div>
                        <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                        <div className="p-4 overflow-y-auto flex-grow">
                          <div className="grid grid-cols-1 gap-4">
                            {/* Playlist Name */}
                            <div className="space-y-1">
                              <h3 className="text-sm font-semibold text-red-400">プレイリスト名</h3>
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
                              <h3 className="text-sm font-semibold text-red-400">ゲームモード</h3>
                              <select
                                value={lobbySettings.gamemode}
                                onChange={(e) => updateLobbySetting("gamemode", e.target.value)}
                                style={inputStyle}
                                className="w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                              >
                                <option value="CUSTOMMATCH_BR_TRIOS">BRトリオ</option>
                                <option value="CUSTOMMATCH_BR_DUOS">BRデュオ</option>
                                <option value="CUSTOMMATCH_CONTROL">コントロール</option>
                              </select>
                            </div>

                            {/* Map */}
                            <div className="space-y-1">
                              <h3 className="text-sm font-semibold text-red-400">マップ</h3>
                              <select
                                value={lobbySettings.map}
                                onChange={(e) => updateLobbySetting("map", e.target.value)}
                                style={inputStyle}
                                className="w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                              >
                                <option value="mp_rr_canyonlands_hu">キングスキャニオン</option>
                                <option value="mp_rr_desertlands_hu">ワールズエッジ</option>
                                <option value="mp_rr_olympus_mu">オリンパス</option>
                                <option value="mp_rr_tropic_island_mu">ストームポイント</option>
                                <option value="mp_rr_divided_moon">ブロークンムーン</option>
                              </select>
                            </div>

                            {/* Toggle Settings */}
                            <div className="space-y-2">
                              <h3 className="text-sm font-semibold text-red-400">オプション</h3>
                              <div className="grid grid-cols-1 gap-2">
                                <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                                  <h3 className="text-xs font-medium text-gray-300">管理者チャット</h3>
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
                                  <h3 className="text-xs font-medium text-gray-300">チーム名変更</h3>
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
                                  <h3 className="text-xs font-medium text-gray-300">自己割り当て</h3>
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
                                  <h3 className="text-xs font-medium text-gray-300">エイムアシスト</h3>
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
                                  <h3 className="text-xs font-medium text-gray-300">匿名モード</h3>
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
                            <h2 className="text-lg font-bold text-red-400">特殊チーム</h2>
                          </div>
                          <p className="text-gray-400 text-xs mt-1">未割り当てと観戦者チーム</p>
                        </div>
                        <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>

                        {/* Tabs for Special Teams */}
                        <div className="flex border-b border-gray-800">
                          <button
                            onClick={() => setSpecialTeamTab("unassigned")}
                            className={`flex-1 py-1.5 px-4 text-xs font-medium ${
                              specialTeamTab === "unassigned"
                                ? "text-red-400 border-b-2 border-red-500"
                                : "text-gray-400"
                            }`}
                          >
                            未割り当て
                          </button>
                          <button
                            onClick={() => setSpecialTeamTab("observers")}
                            className={`flex-1 py-1.5 px-4 text-xs font-medium ${
                              specialTeamTab === "observers"
                                ? "text-red-400 border-b-2 border-red-500"
                                : "text-gray-400"
                            }`}
                          >
                            観戦者
                          </button>
                        </div>

                        {/* Special Team Content with Fixed Height and Scroll */}
                        <div className="flex-grow overflow-y-auto">
                          {specialTeamTab === "unassigned" && (
                            <SpecialTeamView
                              teamId="0"
                              team={teamData["0"]}
                              onPlayerRightClick={handlePlayerRightClick}
                              maxTeamPlayer={10}
                            />
                          )}

                          {/* Observers Team Tab Content */}
                          {specialTeamTab === "observers" && (
                            <SpecialTeamView
                              teamId="1"
                              team={teamData["1"]}
                              onPlayerRightClick={handlePlayerRightClick}
                              maxTeamPlayer={10}
                            />
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
                          <h2 className="text-lg font-bold text-red-400">チーム</h2>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">チームとプレイヤーを管理</p>
                      </div>
                      <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>

                      {/* Team Grid - Only showing regular teams (2-21) with fixed height and scroll */}
                      <div className="p-3 flex-grow overflow-y-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                          {/* Regular Teams - MaxTeam制限に基づいて表示 */}
                          {Object.keys(teamData)
                            .filter((id) => id !== "0" && id !== "1") // 特殊チームを除外
                            .filter((id) => Number(id) <= (configData?.uiStatus?.MaxTeam || 20) + 1) // MaxTeamの値に基づいてフィルタリング
                            .sort((a, b) => Number(a) - Number(b)) // チームIDで昇順ソート
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
                                onPlayerRightClick={handlePlayerRightClick}
                                maxTeamPlayer={configData?.uiStatus?.MaxTeamPlayer || 3}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16">
                  <div style={cardStyle} className="rounded-lg overflow-hidden max-w-md w-full">
                    <div style={cardHeaderStyle} className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-red-500" />
                        <h2 className="text-xl font-bold text-red-400">ロビーに参加していません</h2>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">先にロビーに参加する必要があります</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="bg-black/50 border border-gray-800 rounded-md p-4 text-center">
                        <p className="text-gray-300 mb-4">
                          チームを表示・管理するには、先にロビーに参加する必要があります。
                        </p>
                        <button
                          onClick={() => {
                            setActiveTab("match")
                          }}
                          className="py-2 px-4 rounded-md text-white font-medium"
                          style={buttonStyle}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                          }
                          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                        >
                          <Server className="inline-block mr-2 h-4 w-4" />
                          マッチタブへ移動
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Camera Tab */}
          {activeTab === "camera" && (
            <>
              {configData?.uiStatus?.IsLobbyJoined ? (
                <div className="space-y-6">
                  <div style={cardStyle} className="rounded-lg overflow-hidden">
                    <div style={cardHeaderStyle} className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Camera className="h-5 w-5 text-red-500" />
                        <h2 className="text-xl font-bold text-red-400">カメラコントロール</h2>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">カメラビューと観戦設定を管理</p>
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
                            POIビュー
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
                            プレイヤービュー
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
                              placeholder="POIオプションを検索..."
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
                                "{poiSearchQuery}"に一致するPOIオプションが見つかりません
                              </div>
                            )}
                          </div>

                          {/* POI Camera Change ボタンを更新 */}
                          <button
                            onClick={handleCameraChange}
                            disabled={!selectedPOI}
                            className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                            style={!selectedPOI ? disabledButtonStyle : buttonStyle}
                            onMouseOver={(e) =>
                              selectedPOI && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                            }
                            onMouseOut={(e) =>
                              selectedPOI && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                            }
                          >
                            <Camera className="mr-2 h-4 w-4" />
                            カメラを変更
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
                              placeholder="プレイヤーを検索..."
                              value={playerSearchQuery}
                              onChange={(e) => setPlayerSearchQuery(e.target.value)}
                              style={inputStyle}
                              className="w-full h-10 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                          </div>

                          <div className="bg-black/50 border border-gray-800 rounded-md p-2 max-h-[300px] overflow-y-auto">
                            {getAllPlayersFromTeams(teamData)
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

                            {getAllPlayersFromTeams(teamData).filter(
                              (player) =>
                                player.name.toLowerCase().includes(playerSearchQuery.toLowerCase()) ||
                                player.teamName.toLowerCase().includes(playerSearchQuery.toLowerCase()),
                            ).length === 0 && (
                              <div className="text-center py-4 text-gray-500">
                                "{playerSearchQuery}"に一致するプレイヤーが見つかりません
                              </div>
                            )}
                          </div>

                          {/* Player Camera Change ボタンを更新 */}
                          <button
                            onClick={handleCameraChange}
                            disabled={!selectedPlayer}
                            className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                            style={!selectedPlayer ? disabledButtonStyle : buttonStyle}
                            onMouseOver={(e) =>
                              selectedPlayer &&
                              (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                            }
                            onMouseOut={(e) =>
                              selectedPlayer && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                            }
                          >
                            <Camera className="mr-2 h-4 w-4" />
                            カメラを変更
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16">
                  <div style={cardStyle} className="rounded-lg overflow-hidden max-w-md w-full">
                    <div style={cardHeaderStyle} className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Camera className="h-5 w-5 text-red-500" />
                        <h2 className="text-xl font-bold text-red-400">カメラは利用できません</h2>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">先にロビーに参加する必要があります</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="bg-black/50 border border-gray-800 rounded-md p-4 text-center">
                        <p className="text-gray-300 mb-4">カメラコントロールはロビーに参加した後でのみ利用できます。</p>
                        <button
                          onClick={() => {
                            setActiveTab("match")
                          }}
                          className="py-2 px-4 rounded-md text-white font-medium"
                          style={buttonStyle}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                          }
                          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                        >
                          <Server className="inline-block mr-2 h-4 w-4" />
                          マッチタブへ移動
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Setting Tab */}
          {activeTab === "setting" && (
            <div className="space-y-6">
              {/* General Settings Card */}
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div style={cardHeaderStyle} className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-red-400">一般設定</h2>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">アプリケーションの一般設定を構成</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div className="p-6 space-y-6">
                  {/* Language */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">言語</h3>
                    <select
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      style={inputStyle}
                      value={language}
                      onChange={(e) => updateConfig("appConfig", { language: e.target.value }, "overwrite")}
                    >
                      <option value="">言語を選択</option>
                      <option value="english">英語</option>
                      <option value="japanese">日本語</option>
                    </select>
                  </div>

                  {/* Apex Legends Path */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">Apex Legendsパス</h3>
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
                      placeholder="Apex Legendsのパスを入力"
                    />
                  </div>

                  {/* Apex Legends Option */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">Apex Legendsオプション</h3>
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
                      placeholder="Apex Legends起動オプションを入力"
                    />
                  </div>

                  {/* Data FPS */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">データFPS</h3>
                    <input
                      type="number"
                      value={dataFps}
                      onChange={(e) => updateConfig("appConfig", { data_Fps: Number(e.target.value) }, "overwrite")}
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      min="1"
                      max="240"
                    />
                    <p className="text-xs text-gray-400">データ収集のフレームレート</p>
                  </div>
                </div>
              </div>

              {/* File Settings Card */}
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div style={cardHeaderStyle} className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-red-400">ファイル設定</h2>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">ファイルパスとディレクトリを設定</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div className="p-6 space-y-6">
                  {/* Output Directory */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">出力ディレクトリ</h3>
                    <input
                      value={outputDir}
                      onChange={(e) => updateConfig("appConfig", { output: e.target.value }, "overwrite")}
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="出力ディレクトリのパスを入力"
                    />
                    <p className="text-xs text-gray-400">出力ファイルが保存されるディレクトリ</p>
                  </div>

                  {/* Log Directory */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-red-400">ログディレクトリ</h3>
                    <input
                      value={logDir}
                      onChange={(e) => updateConfig("appConfig", { log_Dir: e.target.value }, "overwrite")}
                      style={inputStyle}
                      className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="ログディレクトリのパスを入力"
                    />
                    <p className="text-xs text-gray-400">ログファイルが保存されるディレクトリ</p>
                  </div>
                </div>
              </div>

              {/* Configuration JSON Card */}
              <div style={cardStyle} className="rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h2 className="text-lg font-semibold text-red-400">設定JSON</h2>
                  <p className="text-gray-400 text-sm mt-1">生の設定データを表示・編集</p>
                </div>
                <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
                <div className="p-4">
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
                    className="border rounded-md p-4 overflow-auto max-h-[500px]"
                  >
                    <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
                      {configData ? JSON.stringify(configData, null, 2) : "設定データがありません"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Context Menu */}
      {contextMenu && (
        <PlayerContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onKickPlayer={handleKickPlayer}
          onMovePlayer={handleMovePlayerOption}
          onClose={closeContextMenu}
          playerName={
            configData?.teamData?.[contextMenu.teamId]?.players.find((p) => p.id === contextMenu.playerId)?.name ||
            "プレイヤー"
          }
        />
      )}

      {/* Team Selector Modal */}
      {showTeamSelector && playerToMove && (
        <TeamSelectorModal
          teamData={teamData}
          sourceTeamId={playerToMove.teamId}
          onSelectTeam={handleMovePlayerToTeam}
          onClose={() => {
            setShowTeamSelector(false)
            setPlayerToMove(null)
          }}
          playerName={
            configData?.teamData?.[playerToMove.teamId]?.players.find((p) => p.id === playerToMove.playerId)?.name ||
            "プレイヤー"
          }
          maxTeamPlayer={configData?.uiStatus?.MaxTeamPlayer || 3}
        />
      )}
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

