"use client"

import { useState, useEffect } from "react"
import * as signalR from "@microsoft/signalr"

const CONTROL_PANEL_HUB_URL = "https://localhost:7109/ControlPanelHub"

// 設定データの型定義
interface ApexLegendsConfig {
  path: string
  api_Port: string
  api_Option: string
  option: string
}

interface ScoreSettingConfig {
  kill_Point: number
  max_Kill: number
  rank_Points: number[]
}

interface AppConfig {
  apexLegends: ApexLegendsConfig
  penetrator: string[]
  output: string
  language: string
  log_Dir: string
  data_Fps: number
  score_Setting: ScoreSettingConfig
}

// Add UIStatus interface after the existing interfaces
interface UIStatus {
  lobbyJoinButtonEnabled: boolean
  gameStartButtonEnabled: boolean
  leaveLobbyButtonEnabled: boolean
  isLobbyJoined: boolean
  maxTeamPlayer?: number
  maxTeam?: number
  gameStatus?: string
}

// Add UIStatus to ConfigData interface
interface ConfigData {
  sharedData: string
  selectedDataKeys: string[]
  appConfig: AppConfig
  lastLobbyResponse: string
  lastApexResponse: string
  uiStatus?: UIStatus // Add this line
}

// CSV データの型定義
interface CSVTeamData {
  TEAM: number
  NAME: string
  IMG_URL: string
  MEMBER_NUM: number
  MEMBERS: string[]
}

export const useControlPanelSignalR = () => {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [configData, setConfigData] = useState<ConfigData | null>(null)
  const [lobbyResponse, setLobbyResponse] = useState<string | null>(null)
  const [apexResponse, setApexResponse] = useState<string | null>(null)
  const [isLobbyLoading, setIsLobbyLoading] = useState(false)
  const [isApexLoading, setIsApexLoading] = useState(false)

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(CONTROL_PANEL_HUB_URL, {
        withCredentials: false,
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build()

    newConnection
      .start()
      .then(() => {
        console.log("✅ Connected to ControlPanelHub")
        setIsConnected(true)
      })
      .catch((err) => console.error("❌ ControlPanelHub Connection Error:", err))

    newConnection.on("LobbyResponse", (response) => {
      console.log("📩 Received Lobby Response:", response)
      setLobbyResponse(response)
      setIsLobbyLoading(false)
    })

    newConnection.on("ApexResponse", (response) => {
      console.log("📩 Received Apex Response:", response)
      setApexResponse(response)
      setIsApexLoading(false)
    })

    newConnection.on("ReceiveStatus", (response) => {
      console.log("📩 Received Config Data:", response)
      setConfigData(response)
    })

    newConnection.on("ReceiveMessage", (message) => {
      console.log("📩 Received Message:", message)
    })

    newConnection.on("NotifyShutdown", (message) => {
      console.log("🛑 Received Shutdown Notification:", message)
      alert("System is shutting down. This page will close.")
      window.close() // 🔹 ページを閉じる
    })

    // 新しいイベントハンドラーを追加します
    // 既存のuseEffect内のnewConnection.onイベントリスナーに以下を追加してください

    newConnection.on("RequestReceived", (requestType, message) => {
      console.log(`📩 Request Received: ${requestType}`, message)

      // リクエストタイプに応じてローディング状態を解除
      switch (requestType) {
        case "StartApex":
          setIsApexLoading(false)
          break
        case "JoinLobby":
          setIsLobbyLoading(false)
          break
        case "LeaveLobby":
          // ロビー退出中の状態を管理する変数があれば、ここでfalseに設定
          break
        default:
          console.log(`未処理のリクエストタイプ: ${requestType}`)
      }
    })

    setConnection(newConnection)

    return () => {
      newConnection
        .stop()
        .then(() => console.log("🛑 Disconnected from ControlPanelHub"))
        .catch((err) => console.error("❌ Error stopping SignalR connection:", err))
    }
  }, [])

  // startApex関数を更新
  const startApex = async () => {
    if (connection && isConnected) {
      try {
        console.log("🏆 Sending StartApex request...")
        setIsApexLoading(true)
        await connection.invoke("StartApex")
        // RequestReceivedイベントが発生しない場合のフォールバックとして、
        // タイムアウト後にローディング状態を解除
        setTimeout(() => {
          setIsApexLoading(false)
        }, 10000) // 10秒のタイムアウト
      } catch (error) {
        console.error("❌ StartApex Error:", error)
        setIsApexLoading(false)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send StartApex request.")
    }
  }

  const readCSV = async (jsonData: CSVTeamData[]) => {
    if (connection && isConnected) {
      try {
        console.log("📤 Sending CSV data to readCSV...")
        await connection.invoke("readCSV", jsonData)
      } catch (error) {
        console.error("❌ readCSV Error:", error)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send CSV data.")
    }
  }

  const updateConfig = async (
    sectionKey: keyof ConfigData,
    newData: unknown,
    mode: "overwrite" | "append" | "jsonAppend",
  ) => {
    if (connection && isConnected) {
      try {
        console.log(`🔧 Updating config: ${sectionKey}`)
        await connection.invoke("UpdateConfig", sectionKey, JSON.stringify(newData), mode)
      } catch (error) {
        console.error("❌ UpdateConfig Error:", error)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot update config.")
    }
  }

  const shutdown = async () => {
    if (connection && isConnected) {
      try {
        console.log("🛑 Sending Shutdown request...")
        await connection.invoke("Shutdown")
      } catch (error) {
        console.error("❌ Shutdown Error:", error)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send Shutdown request.")
    }
  }

  // joinLobby関数を更新
  const joinLobby = async (lobbyCode?: string) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending joinLobby request...", lobbyCode ? `with code: ${lobbyCode}` : "without code")
        setIsLobbyLoading(true)
        // 引数がある場合はそのまま渡し、ない場合は null を渡す
        await connection.invoke("joinLobby", lobbyCode ?? null)
        // RequestReceivedイベントが発生しない場合のフォールバックとして、
        // タイムアウト後にローディング状態を解除
        setTimeout(() => {
          setIsLobbyLoading(false)
        }, 10000) // 10秒のタイムアウト
      } catch (error) {
        console.error("❌ joinLobby Error:", error)
        setIsLobbyLoading(false)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send joinLobby request.")
    }
  }

  const setReady = async (ready: boolean) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending set_ready request...", ready)
        await connection.invoke("set_ready", ready)
      } catch (error) {
        console.error("❌ set_ready Error:", error)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send set_ready request.")
    }
  }

  const setTeam = async (teamId: number, targetHardwareName: string, targetNucleushash: string) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending setTeam request...", teamId, targetHardwareName, targetNucleushash)
        await connection.invoke("setTeam", teamId, targetHardwareName, targetNucleushash)
      } catch (error) {
        console.error("❌ setTeam Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setTeamリクエストを送信できません。")
    }
  }

  const setTeamName = async (teamId: number, teamName: string) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending setTeamName request...", teamId, teamName)
        await connection.invoke("setTeamName", teamId, teamName)
      } catch (error) {
        console.error("❌ setTeamName Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setTeamNameリクエストを送信できません。")
    }
  }

  const setSpawnPoint = async (teamId: number, spawnPoint: number) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending setSpawnPoint request...", teamId, spawnPoint)
        await connection.invoke("setSpawnPoint", teamId, spawnPoint)
      } catch (error) {
        console.error("❌ setSpawnPoint Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setSpawnPointリクエストを送信できません。")
    }
  }

  const changeCamera = async (type: string, value: string) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending changeCamera request...", type, value)
        await connection.invoke("changeCamera", type, value)
      } catch (error) {
        console.error("❌ changeCamera Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。changeCameraリクエストを送信できません。")
    }
  }

  const sendChat = async (message: string) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending sendChat request...", message)
        await connection.invoke("sendChat", message)
      } catch (error) {
        console.error("❌ sendChat Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。sendChatリクエストを送信できません。")
    }
  }

  const kickPlayer = async (targetHardwareName: string, targetNucleushash: string) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending kickPlayer request...", targetHardwareName, targetNucleushash)
        await connection.invoke("kickPlayer", targetHardwareName, targetNucleushash)
      } catch (error) {
        console.error("❌ kickPlayer Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。kickPlayerリクエストを送信できません。")
    }
  }

  const setSettings = async (
    matchName: string,
    adminChat: boolean,
    teamRename: boolean,
    selfAssign: boolean,
    aimAssist: boolean,
    anonMode: boolean,
  ) => {
    if (connection && isConnected) {
      try {
        console.log(
          "🛠️ Sending setSettings request...",
          matchName,
          adminChat,
          teamRename,
          selfAssign,
          aimAssist,
          anonMode,
        )
        await connection.invoke("setSettings", matchName, adminChat, teamRename, selfAssign, aimAssist, anonMode)
      } catch (error) {
        console.error("❌ setSettings Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setSettingsリクエストを送信できません。")
    }
  }
  // leaveLobby関数を更新
  const leaveLobby = async () => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending leaveLobby request...")
        // ロビー退出中の状態を管理する変数があれば、ここでtrueに設定
        await connection.invoke("leaveLobby")
        // RequestReceivedイベントが発生しない場合のフォールバックとして、
        // タイムアウト後にローディング状態を解除
        setTimeout(() => {
          // ロビー退出中の状態を管理する変数があれば、ここでfalseに設定
        }, 10000) // 10秒のタイムアウト
      } catch (error) {
        console.error("❌ leaveLobby Error:", error)
        // ロビー退出中の状態を管理する変数があれば、ここでfalseに設定
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。leaveLobbyリクエストを送信できません。")
    }
  }
  const setEndRingExclusion = async (exclusion: number) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending setEndRingExclusion request...", exclusion)
        await connection.invoke("setEndRingExclusion", exclusion)
      } catch (error) {
        console.error("❌ setEndRingExclusion Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setEndRingExclusionリクエストを送信できません。")
    }
  }

  const setMatchmaking = async (matchmaking: boolean) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending setMatchmaking request...", matchmaking)
        await connection.invoke("setMatchmaking", matchmaking)
      } catch (error) {
        console.error("❌ setMatchmaking Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setMatchmakingリクエストを送信できません。")
    }
  }

  const pauseToggle = async (preTimer = 0) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending pauseToggle request...", preTimer)
        await connection.invoke("pauseToggle", preTimer)
      } catch (error) {
        console.error("❌ pauseToggle Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。pauseToggleリクエストを送信できません。")
    }
  }

  // In the useControlPanelSignalR hook, add the leaveLobby function to the return object
  return {
    startApex,
    readCSV,
    updateConfig,
    shutdown,
    joinLobby,
    leaveLobby, // Add this line
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
    isConnected,
  }
}

