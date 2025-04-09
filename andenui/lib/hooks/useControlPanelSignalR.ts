"use client"

import { useState, useEffect, useRef } from "react"
import * as signalR from "@microsoft/signalr"
import type { ConfigData, CSVTeamData, AppConfig, UIStatus } from "@/lib/types"
// Update the CONTROL_PANEL_HUB_URL to use the utility function
import { getSignalRHubUrl } from "@/lib/utils/signalr-utils"

// Replace the hardcoded URL with the dynamic one
const CONTROL_PANEL_HUB_URL = getSignalRHubUrl("controlPanelHub")

export const useControlPanelSignalR = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [configData, setConfigData] = useState<ConfigData | null>(null)
  const [lobbyResponse, setLobbyResponse] = useState<string | null>(null)
  const [apexResponse, setApexResponse] = useState<string | null>(null)
  const [isLobbyLoading, setIsLobbyLoading] = useState(false)
  const [isApexLoading, setIsApexLoading] = useState(false)

  // connectionをuseRefで保持して、コンポーネントのレンダリング間で一貫性を保つ
  const connectionRef = useRef<signalR.HubConnection | null>(null)

  useEffect(() => {
    let isMounted = true

    const startConnection = async () => {
      try {
        const newConnection = new signalR.HubConnectionBuilder()
          .withUrl(CONTROL_PANEL_HUB_URL, {
            withCredentials: false,
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
          })
          .withAutomaticReconnect()
          .configureLogging(signalR.LogLevel.Information)
          .build()

        // イベントハンドラを設定
        newConnection.on("LobbyResponse", (response) => {
          if (isMounted) {
            console.log("📩 Received Lobby Response:", response)
            setLobbyResponse(response)
            setIsLobbyLoading(false)
          }
        })

        newConnection.on("ApexResponse", (response) => {
          if (isMounted) {
            console.log("📩 Received Apex Response:", response)
            setApexResponse(response)
            setIsApexLoading(false)
          }
        })

        newConnection.on("ReceiveStatus", (response) => {
          if (isMounted) {
            console.log("📩 Received Config Data:", response)
            setConfigData(response)
          }
        })

        newConnection.on("ReceiveMessage", (message) => {
          if (isMounted) {
            console.log("📩 Received Message:", message)
          }
        })

        newConnection.on("ShutdownNotification", (message) => {
          if (isMounted) {
            console.log("🛑 Received Shutdown ShutdownNotification:", message)
            alert("System is shutting down. This page will close.")
            window.close() // 🔹 ページを閉じる
          }
        })

        newConnection.on("ConfigUpdateResponse", (response) => {
          if (isMounted) {
            console.log("📩 Received Config Update Response:", response)
          }
        })

        // 接続を開始
        await newConnection.start()

        if (isMounted) {
          console.log("✅ Connected to ControlPanelHub")
          connectionRef.current = newConnection
          setIsConnected(true)
        } else {
          // コンポーネントがアンマウントされていた場合は接続を停止
          await newConnection.stop()
          console.log("🛑 Connection stopped due to component unmount")
        }
      } catch (err) {
        console.error("❌ ControlPanelHub Connection Error:", err)
      }
    }

    startConnection()

    // クリーンアップ関数
    return () => {
      isMounted = false

      const stopConnection = async () => {
        if (connectionRef.current) {
          try {
            await connectionRef.current.stop()
            console.log("🛑 Disconnected from ControlPanelHub")
          } catch (err) {
            console.error("❌ Error stopping SignalR connection:", err)
          }
          connectionRef.current = null
        }
      }

      stopConnection()
    }
  }, [])

  const startApex = async () => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🏆 Sending StartApex request...")
        setIsApexLoading(true)
        await connectionRef.current.invoke("StartApex")
      } catch (error) {
        console.error("❌ StartApex Error:", error)
        setIsApexLoading(false)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send StartApex request.")
    }
  }

  const readCSV = async (jsonData: CSVTeamData[]) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("📤 Sending CSV data to readCSV...")
        await connectionRef.current.invoke("readCSV", jsonData)
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
    if (connectionRef.current && isConnected) {
      try {
        console.log(`🔧 Updating config: ${sectionKey}`)

        // 特別なケース: uiStatus.isMatchmaking の更新がカウントダウン終了時に行われる場合
        // サーバーにリクエストを送らずにクライアント側の状態だけを更新
        if (
          sectionKey === "uiStatus" &&
          typeof newData === "object" &&
          newData !== null &&
          "isMatchmaking" in newData &&
          newData.isMatchmaking === false
        ) {
          console.log("🔧 Updating isMatchmaking locally without server request")

          // クライアント側の状態を更新 - 非同期で実行
          setTimeout(() => {
            setConfigData((prev) => {
              if (!prev) return prev

              // If we're updating uiStatus, merge with existing uiStatus instead of replacing it
              if (sectionKey === "uiStatus") {
                return {
                  ...prev,
                  uiStatus: {
                    ...prev.uiStatus,
                    ...(newData as Partial<UIStatus>),
                  } as UIStatus, // Add this type assertion
                }
              }

              // For other sections, replace the entire section
              return {
                ...prev,
                [sectionKey]: newData,
              }
            })
          }, 0)

          return
        }

        // 通常のケース: サーバーにリクエストを送信
        // サーバー側が期待するセクションキーに変換
        let serverSectionKey: string = sectionKey as string
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
            // Ensure we're not double-stringifying
            dataToSend = appConfigData.output
          } else if (appConfigData.language !== undefined) {
            serverSectionKey = "language"
            dataToSend = appConfigData.language
          } else if (appConfigData.log_Dir !== undefined) {
            serverSectionKey = "log_dir"
            // Ensure we're not double-stringifying
            dataToSend = appConfigData.log_Dir
          } else if (appConfigData.data_Fps !== undefined) {
            serverSectionKey = "data_fps"
            dataToSend = appConfigData.data_Fps
          } else if (appConfigData.score_Setting) {
            serverSectionKey = "score_setting"

            // If we're updating score settings with rank_Points
            if (appConfigData.score_Setting.rank_Points) {
              // Ensure the array has enough elements for all teams
              const maxTeam = configData?.uiStatus?.maxTeam || 20
              const rankPoints = [...appConfigData.score_Setting.rank_Points]

              // Fill with zeros if needed
              while (rankPoints.length < maxTeam) {
                rankPoints.push(0)
              }

              // Update the data to send
              appConfigData.score_Setting.rank_Points = rankPoints
            }

            dataToSend = appConfigData.score_Setting
          }
        }

        // サーバーに送信
        // If dataToSend is already a string and we're updating output or log_dir, don't stringify again
        const dataToSendToServer =
          typeof dataToSend === "string" && (serverSectionKey === "output" || serverSectionKey === "log_dir")
            ? dataToSend
            : JSON.stringify(dataToSend)

        await connectionRef.current.invoke("UpdateConfig", serverSectionKey, dataToSendToServer, mode.toLowerCase())
      } catch (error) {
        console.error("❌ UpdateConfig Error:", error)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot update config.")
    }
  }

  const shutdown = async () => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛑 Sending Shutdown request...")
        await connectionRef.current.invoke("Shutdown")
      } catch (error) {
        console.error("❌ Shutdown Error:", error)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send Shutdown request.")
    }
  }

  const joinLobby = async (lobbyCode?: string) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending joinLobby request...", lobbyCode ? `with code: ${lobbyCode}` : "without code")
        setIsLobbyLoading(true)
        // 引数がある場合はそのまま渡し、ない場合は null を渡す
        await connectionRef.current.invoke("joinLobby", lobbyCode ?? null)
      } catch (error) {
        console.error("❌ joinLobby Error:", error)
        setIsLobbyLoading(false)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send joinLobby request.")
    }
  }

  const setReady = async (ready: boolean) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending set_ready request...", ready)
        await connectionRef.current.invoke("set_ready", ready)
      } catch (error) {
        console.error("❌ set_ready Error:", error)
      }
    } else {
      console.warn("⚠️ Connection not established. Cannot send set_ready request.")
    }
  }

  const setTeam = async (teamId: number, targetHardwareName: string, targetNucleushash: string) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending setTeam request...", teamId, targetHardwareName, targetNucleushash)
        await connectionRef.current.invoke("setTeam", teamId, targetHardwareName, targetNucleushash)
      } catch (error) {
        console.error("❌ setTeam Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setTeamリクエストを送信できません。")
    }
  }

  const setTeamName = async (teamId: number, teamName: string) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending setTeamName request...", teamId, teamName)
        await connectionRef.current.invoke("setTeamName", teamId, teamName)
      } catch (error) {
        console.error("❌ setTeamName Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setTeamNameリクエストを送信できません。")
    }
  }

  const setSpawnPoint = async (teamId: number, spawnPoint: number) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending setSpawnPoint request...", teamId, spawnPoint)
        await connectionRef.current.invoke("setSpawnPoint", teamId, spawnPoint)
      } catch (error) {
        console.error("❌ setSpawnPoint Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setSpawnPointリクエストを送信できません。")
    }
  }

  const changeCamera = async (type: string, value: string) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending changeCamera request...", type, value)
        await connectionRef.current.invoke("changeCamera", type, value)
      } catch (error) {
        console.error("❌ changeCamera Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。changeCameraリクエストを送信できません。")
    }
  }

  const sendChat = async (message: string) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending sendChat request...", message)
        await connectionRef.current.invoke("sendChat", message)
      } catch (error) {
        console.error("❌ sendChat Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。sendChatリクエストを送信できません。")
    }
  }

  const kickPlayer = async (targetHardwareName: string, targetNucleushash: string) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending kickPlayer request...", targetHardwareName, targetNucleushash)
        await connectionRef.current.invoke("kickPlayer", targetHardwareName, targetNucleushash)
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
    if (connectionRef.current && isConnected) {
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
        await connectionRef.current.invoke(
          "setSettings",
          matchName,
          adminChat,
          teamRename,
          selfAssign,
          aimAssist,
          anonMode,
        )
      } catch (error) {
        console.error("❌ setSettings Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setSettingsリクエストを送信できません。")
    }
  }
  const leaveLobby = async () => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending leaveLobby request...")
        await connectionRef.current.invoke("leaveLobby")
      } catch (error) {
        console.error("❌ leaveLobby Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。leaveLobbyリクエストを送信できません。")
    }
  }
  const setEndRingExclusion = async (exclusion: number) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending setEndRingExclusion request...", exclusion)
        await connectionRef.current.invoke("setEndRingExclusion", exclusion)
      } catch (error) {
        console.error("❌ setEndRingExclusion Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setEndRingExclusionリクエストを送信できません。")
    }
  }

  // setMatchmaking メソッドを修正
  const setMatchmaking = async (matchmaking: boolean) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending setMatchmaking request...", matchmaking)

        // 非同期で実行
        setTimeout(async () => {
          try {
            await connectionRef.current?.invoke("setMatchmaking", matchmaking)
          } catch (innerError) {
            console.error("❌ setMatchmaking Inner Error:", innerError)
          }
        }, 0)

        // キャンセル時は即座にローカルで状態を更新
        if (!matchmaking) {
          setTimeout(() => {
            setConfigData((prev) => {
              if (!prev) return prev
              return {
                ...prev,
                uiStatus: {
                  ...prev.uiStatus,
                  isMatchmaking: false,
                } as UIStatus, // Add this type assertion
              }
            })
          }, 0)
        }
      } catch (error) {
        console.error("❌ setMatchmaking Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。setMatchmakingリクエストを送信できません。")
    }
  }

  const pauseToggle = async (preTimer = 0) => {
    if (connectionRef.current && isConnected) {
      try {
        console.log("🛠️ Sending pauseToggle request...", preTimer)
        await connectionRef.current.invoke("pauseToggle", preTimer)
      } catch (error) {
        console.error("❌ pauseToggle Error:", error)
      }
    } else {
      console.warn("⚠️ 接続が確立されていません。pauseToggleリクエストを送信できません。")
    }
  }

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
    isConnected,
  }
}
