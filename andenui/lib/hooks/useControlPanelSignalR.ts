"use client"

import { useState, useEffect } from "react"
import * as signalR from "@microsoft/signalr"
import type { ConfigData, CSVTeamData } from "@/lib/types"

const CONTROL_PANEL_HUB_URL = "https://localhost:7109/ControlPanelHub"

// 型定義を削除し、インポートした型を使用

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

    // ConfigUpdateResponse ハンドラを追加（サーバー側のメソッド名に合わせる）
    newConnection.on("ConfigUpdateResponse", (response) => {
      console.log("📩 Received Config Update Response:", response)
      // 必要に応じて、ユーザーに通知するなどの処理を追加
    })

    setConnection(newConnection)

    return () => {
      newConnection
        .stop()
        .then(() => console.log("🛑 Disconnected from ControlPanelHub"))
        .catch((err) => console.error("❌ Error stopping SignalR connection:", err))
    }
  }, [])

  const startApex = async () => {
    if (connection && isConnected) {
      try {
        console.log("🏆 Sending StartApex request...")
        setIsApexLoading(true)
        await connection.invoke("StartApex")
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

  // updateConfig メソッドを修正して、サーバー側が期待するセクションキーに変換する
  const updateConfig = async (
    sectionKey: keyof ConfigData,
    newData: unknown,
    mode: "overwrite" | "append" | "jsonAppend",
  ) => {
    if (connection && isConnected) {
      try {
        console.log(`🔧 Updating config: ${sectionKey}`)

        // サーバー側が期待するセクションキーに変換
        let serverSectionKey = sectionKey
        let dataToSend = newData

        // appConfig セクションの場合は、具体的なサブセクションに変換
        if (sectionKey === "appConfig") {
          // appConfig の中の特定のプロパティを更新する場合
          const appConfigData = newData as Partial<AppConfig>

          if (appConfigData.apexLegends) {
            serverSectionKey = "apexlegends"
            dataToSend = appConfigData.apexLegends
          } else if (appConfigData.penetrator !== undefined) {
            serverSectionKey = "penetrator"
            dataToSend = appConfigData.penetrator
          } else if (appConfigData.output !== undefined) {
            serverSectionKey = "output"
            dataToSend = appConfigData.output
          } else if (appConfigData.language !== undefined) {
            serverSectionKey = "language"
            dataToSend = appConfigData.language
          } else if (appConfigData.log_Dir !== undefined) {
            serverSectionKey = "log_dir"
            dataToSend = appConfigData.log_Dir
          } else if (appConfigData.data_Fps !== undefined) {
            serverSectionKey = "data_fps"
            dataToSend = appConfigData.data_Fps
          } else if (appConfigData.score_Setting) {
            serverSectionKey = "score_setting"
            dataToSend = appConfigData.score_Setting
          }
        }

        // サーバーに送信
        console.log("UpdateConfig", serverSectionKey, JSON.stringify(dataToSend), mode.toLowerCase())
        await connection.invoke("UpdateConfig", serverSectionKey, JSON.stringify(dataToSend), mode.toLowerCase())
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

  const joinLobby = async (lobbyCode?: string) => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending joinLobby request...", lobbyCode ? `with code: ${lobbyCode}` : "without code")
        setIsLobbyLoading(true)
        // 引数がある場合はそのまま渡し、ない場合は null を渡す
        await connection.invoke("joinLobby", lobbyCode ?? null)
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
  const leaveLobby = async () => {
    if (connection && isConnected) {
      try {
        console.log("🛠️ Sending leaveLobby request...")
        await connection.invoke("leaveLobby")
      } catch (error) {
        console.error("❌ leaveLobby Error:", error)
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

interface AppConfig {
  apexLegends?: any
  penetrator?: any
  output?: any
  language?: any
  log_Dir?: any
  data_Fps?: any
  score_Setting?: any
}

