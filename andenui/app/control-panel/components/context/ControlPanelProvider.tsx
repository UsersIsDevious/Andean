"use client"

import type React from "react"

import { createContext, useState, useEffect, type ReactNode } from "react"
//import { useControlPanelSignalR } from "@/lib/hooks/useControlPanelSignalRMock" // モック用
import { useControlPanelSignalR } from "@/lib/hooks/useControlPanelSignalR" // 本番用
import { getAllPlayersFromTeams, movePlayerBetweenTeams, removePlayerFromTeam } from "@/lib/utils/team-utils"
import type {
  Team,
  LobbySettings,
  CSVTeamData,
  POIOption,
  ContextMenuState,
  PlayerMoveState,
  ConfigData,
} from "@/lib/types"

// コンテキストの型定義
interface ControlPanelContextType {
  // 状態
  activeTab: string
  isLoading: boolean
  contextMenu: ContextMenuState | null
  showTeamSelector: boolean
  playerToMove: PlayerMoveState | null
  configData: ConfigData | null
  teamData: Record<string, Team>
  lobbySettings: LobbySettings
  specialTeamTab: string
  editingTeam: string | null
  editedTeamName: string
  cameraViewMode: string
  selectedPlayer: string
  playerSearchQuery: string
  selectedPOI: string
  poiSearchQuery: string
  isProcessingCSV: boolean
  csvResponse: string
  lobbyCode: string
  isShuttingDown: boolean
  showShutdownConfirm: boolean
  isLeavingLobby: boolean
  lobbyResponse: string | null
  apexResponse: string | null
  isLobbyLoading: boolean
  isApexLoading: boolean
  poiOptions: POIOption[]
  // isMatchmakingLoading: boolean // 追加: マッチメイキング中のローディング状態

  // アクション
  setActiveTab: (tab: string) => void
  setSpecialTeamTab: (tab: string) => void
  startEditingTeam: (teamId: string, currentName: string) => void
  saveTeamName: (teamId: string) => void
  cancelEditingTeam: () => void
  setEditedTeamName: (name: string) => void
  setCameraViewMode: (mode: string) => void
  setSelectedPlayer: (playerId: string) => void
  setPlayerSearchQuery: (query: string) => void
  setSelectedPOI: (poiId: string) => void
  setPoiSearchQuery: (query: string) => void
  handlePlayerRightClick: (e: React.MouseEvent, playerId: string, teamId: string) => void
  closeContextMenu: () => void
  handleKickPlayer: () => void
  handleMovePlayerOption: () => void
  handleMovePlayerToTeam: (destinationTeamId: string) => void
  handleCameraChange: () => void
  handleCSVUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleShutdown: () => void
  confirmShutdown: () => void
  handleLeaveLobby: () => void
  setLobbyCode: (code: string) => void
  updateLobbySetting: (key: keyof LobbySettings, value: unknown) => void
  joinLobby: (code?: string) => Promise<void>
  startApex: () => Promise<void>
  pauseToggle: (preTimer?: number) => Promise<void>
  updateConfig: (
    sectionKey: keyof ConfigData,
    newData: unknown,
    mode: "overwrite" | "append" | "jsonAppend",
  ) => Promise<void>
  getAllPlayers: () => { id: string; name: string; teamId: string; teamName: string }[]
  setShowShutdownConfirm: (show: boolean) => void
  setMatchmaking: (matchmaking: boolean) => Promise<void> // 追加: マッチメイキング設定関数
}

// コンテキストの作成
export const ControlPanelContext = createContext<ControlPanelContextType | null>(null)

// プロバイダーコンポーネント
export const ControlPanelProvider = ({ children }: { children: ReactNode }) => {
  // SignalR フック
  const {
    joinLobby: signalRJoinLobby,
    startApex: signalRStartApex,
    readCSV: signalRReadCSV,
    shutdown: signalRShutdown,
    leaveLobby: signalRLeaveLobby,
    lobbyResponse,
    apexResponse,
    isLobbyLoading,
    isApexLoading,
    configData,
    updateConfig: signalRUpdateConfig,
    setTeam,
    setTeamName: signalRSetTeamName,
    changeCamera: signalRChangeCamera,
    setSettings,
    pauseToggle: signalRPauseToggle,
    setMatchmaking: signalRSetMatchmaking, // SignalR フックから setMatchmaking を取得
  } = useControlPanelSignalR()

  // クライアントサイドでのみレンダリングするための状態
  const [isMounted, setIsMounted] = useState(false)

  // Client-side mounting effect
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // UI state
  const [activeTab, setActiveTab] = useState("system")
  const [isLoading, setIsLoading] = useState(true)
  const [specialTeamTab, setSpecialTeamTab] = useState("unassigned")

  // CSV upload state
  const [isProcessingCSV, setIsProcessingCSV] = useState(false)
  const [csvResponse, setCsvResponse] = useState("")

  // System state
  const [isShuttingDown, setIsShuttingDown] = useState(false)
  const [showShutdownConfirm, setShowShutdownConfirm] = useState(false)

  // Lobby state
  const [lobbyCode, setLobbyCode] = useState("")
  const [isLeavingLobby, setIsLeavingLobby] = useState(false)
  // const [isMatchmakingLoading, setIsMatchmakingLoading] = useState(false) // 追加: マッチメイキング中のローディング状態

  // Team state
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
    { id: "killreader", name: "キルリーダー", icon: <span className="h-4 w-4 text-red-400">⚡</span> },
    { id: "next", name: "次", icon: <span className="h-4 w-4 text-red-400">⏭</span> },
    { id: "spectatorview", name: "観戦ビュー", icon: <span className="h-4 w-4 text-red-400">👁</span> },
    { id: "overviewmap", name: "マップ概要", icon: <span className="h-4 w-4 text-red-400">🗺</span> },
  ]

  // Loading state effect
  useEffect(() => {
    if (configData) {
      setIsLoading(false)
    }
  }, [configData])

  // Safe access to nested properties
  const teamData = (configData?.teamData as Record<string, Team>) || {}

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
        signalRReadCSV(jsonData)

        setCsvResponse(`${jsonData.length}件のチームレコードを正常に処理しました`)
      } catch (error) {
        console.error("CSVの処理エラー:", error)
        setCsvResponse(`CSVの処理エラー: ${error instanceof Error ? error.message : String(error)}`)
      } finally {
        setIsProcessingCSV(false)
        // Reset the file input
        if (event.target) {
          event.target.value = ""
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
    await signalRShutdown()
    setIsShuttingDown(false)
    setShowShutdownConfirm(false)
  }

  // Lobby handlers
  const handleLeaveLobby = async () => {
    setIsLeavingLobby(true)
    try {
      await signalRLeaveLobby()
    } catch (error) {
      console.error("ロビーを離れる際のエラー:", error)
    } finally {
      setIsLeavingLobby(false)
    }
  }

  // Team management handlers
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
    signalRSetTeamName(Number.parseInt(teamId), editedTeamName)

    signalRUpdateConfig("teamData", updatedTeamData, "overwrite")
    setEditingTeam(null)
  }

  const cancelEditingTeam = () => {
    setEditingTeam(null)
  }

  // Lobby settings handler
  const updateLobbySetting = (key: keyof LobbySettings, value: unknown) => {
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
  const handlePlayerRightClick = (e: React.MouseEvent, playerId: string, teamId: string) => {
    e.preventDefault()

    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      playerId,
      teamId,
    })
  }

  const closeContextMenu = () => {
    setContextMenu(null)
  }

  const handleKickPlayer = () => {
    if (!contextMenu || !configData?.teamData) return

    const { playerId, teamId } = contextMenu
    const updatedTeamData = removePlayerFromTeam(configData.teamData, teamId, playerId)

    signalRUpdateConfig("teamData", updatedTeamData, "overwrite")
    closeContextMenu()
  }

  const handleMovePlayerOption = () => {
    if (!contextMenu) return

    setPlayerToMove({
      playerId: contextMenu.playerId,
      teamId: contextMenu.teamId,
    })
    setShowTeamSelector(true)
  }

  const handleMovePlayerToTeam = (destinationTeamId: string) => {
    if (!playerToMove || !configData?.teamData) return

    const { playerId, teamId } = playerToMove
    const destinationTeam = configData.teamData[destinationTeamId]
    const maxTeamPlayer = configData?.uiStatus?.maxTeamPlayer || 3

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

    signalRUpdateConfig("teamData", updatedTeamData, "overwrite")
    setShowTeamSelector(false)
    setPlayerToMove(null)
  }

  // Add a function to handle the camera change for both POI and player views
  const handleCameraChange = () => {
    if (cameraViewMode === "poi" && selectedPOI) {
      signalRChangeCamera("poi", selectedPOI)
      console.log(`カメラをPOIに変更: ${selectedPOI}`)
    } else if (cameraViewMode === "player" && selectedPlayer) {
      // Extract hardware name and nucleus hash from player ID
      // Assuming player ID format is "hardwareName:nucleusHash"
      const [hardwareName, nucleusHash] = selectedPlayer.split(":")
      if (hardwareName && nucleusHash) {
        signalRChangeCamera("player", selectedPlayer)
        console.log(`カメラをプレイヤーに変更: ${selectedPlayer}`)
      }
    }
  }

  // Function to get all players from teams other than 0 and 1
  const getAllPlayers = () => {
    if (!configData?.teamData) return []

    return getAllPlayersFromTeams(configData.teamData)
  }

  // Wrapper functions for SignalR methods
  const joinLobby = async (code?: string) => {
    await signalRJoinLobby(code)
  }

  const startApex = async () => {
    await signalRStartApex()
  }

  const pauseToggle = async (preTimer = 0) => {
    await signalRPauseToggle(preTimer)
  }

  const updateConfig = async (
    sectionKey: keyof ConfigData,
    newData: unknown,
    mode: "overwrite" | "append" | "jsonAppend",
  ) => {
    await signalRUpdateConfig(sectionKey, newData, mode)
  }

  // setMatchmaking 関数を修正して、本番環境でも正しく動作するようにします
  const setMatchmaking = async (matchmaking: boolean) => {
    if (!configData?.uiStatus?.isLobbyJoined) return

    try {
      // マッチメイキング状態を設定
      await signalRSetMatchmaking(matchmaking)

      // キャンセル時は即座にローディング状態を解除（サーバーからの応答を待たずに）
      if (!matchmaking) {
        // ローカルでUIStatusを更新（サーバーからの応答を待たずに即座に反映）
        if (configData && configData.uiStatus) {
          const updatedUIStatus = {
            ...configData.uiStatus,
            isMatchmaking: false,
          }

          // 更新されたUIStatusをconfigDataに反映
          // const updatedConfigData = {
          //   ...configData,
          //   uiStatus: updatedUIStatus,
          // }

          // 状態を更新
          signalRUpdateConfig("uiStatus", updatedUIStatus, "overwrite")
        }
      }
    } catch (error) {
      console.error("マッチメイキング設定エラー:", error)
    }
  }

  // コンテキスト値の作成
  const contextValue: ControlPanelContextType = {
    // 状態
    activeTab,
    isLoading: isLoading || !isMounted, // isMountedがfalseの場合もローディング中とみなす
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
    // isMatchmakingLoading, // 追加: マッチメイキング中のローディング状態

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
    setShowShutdownConfirm,
    setMatchmaking, // 追加: マッチメイキング設定関数
  }

  // サーバーサイドレンダリング時には最小限のコンテキストを提供
  if (!isMounted) {
    return <ControlPanelContext.Provider value={contextValue}>{children}</ControlPanelContext.Provider>
  }

  return <ControlPanelContext.Provider value={contextValue}>{children}</ControlPanelContext.Provider>
}
