"use client"

import { useState, useEffect, useRef } from "react"
import * as signalR from "@microsoft/signalr"
import type { CustomMatch, RawCustomMatch } from "@/lib/types/match-types"
import { convertRawMatchData } from "@/lib/types/match-types"

// URLを修正 - サーバー側のハブ名と完全に一致させる
const LIVE_VIEW_HUB_URL = "https://localhost:7109/liveViewHub"

export const useLiveViewSignalR = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [rawMatchData, setRawMatchData] = useState<RawCustomMatch[] | null>(null)
  const [matchData, setMatchData] = useState<CustomMatch | null>(null)
  const connectionRef = useRef<signalR.HubConnection | null>(null)

  useEffect(() => {
    let isMounted = true
    let connection: signalR.HubConnection | null = null

    const startConnection = async () => {
      try {
        // 接続を作成
        connection = new signalR.HubConnectionBuilder()
          .withUrl(LIVE_VIEW_HUB_URL, {
            withCredentials: false,
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
          })
          .withAutomaticReconnect()
          .configureLogging(signalR.LogLevel.Information)
          .build()

        // イベントハンドラを設定
        connection.on("ReceiveMatchData", (data: RawCustomMatch | RawCustomMatch[]) => {
          if (isMounted) {
            console.log("📩 Received Match Data:", data)
            setRawMatchData(Array.isArray(data) ? data : [data])
            setMatchData(convertRawMatchData(data))
          }
        })

        connection.on("ShutdownNotification", (message: string) => {
          if (isMounted) {
            console.log("🛑 Received Shutdown Notification:", message)
            alert("System is shutting down. This page will close.")
            window.close() // ページを閉じる
          }
        })

        // 接続を開始
        await connection.start()
        console.log("✅ Connected to LiveViewHub")

        if (isMounted) {
          connectionRef.current = connection
          setIsConnected(true)
        }
      } catch (err) {
        console.error("❌ LiveViewHub Connection Error:", err)
        if (isMounted) {
          setIsConnected(false)
        }
      }
    }

    startConnection()

    // クリーンアップ関数
    return () => {
      isMounted = false

      // 接続を停止
      if (connection) {
        connection
          .stop()
          .then(() => console.log("🛑 Disconnected from LiveViewHub"))
          .catch((err) => console.error("❌ Error stopping SignalR connection:", err))
      }
    }
  }, [])

  // デバッグ用のモックデータを追加
  useEffect(() => {
    // 接続できない場合のフォールバックとしてモックデータを使用
    if (!isConnected && !matchData) {
      const timer = setTimeout(() => {
        console.log("⚠️ Using mock data as fallback")
        // 簡易的なモックデータを設定
        setMatchData({
          matchId: "mock-match",
          gameState: "InProgress",
          mapName: "Olympus",
          remainingTeams: 10,
          remainingPlayers: 25,
          elapsedTime: 360,
          teams: [],
          ring: {
            currentStage: 1,
            nextStage: 2,
            currentRadius: 1000,
            nextRadius: 500,
            currentCenter: { x: 0, y: 0 },
            nextCenter: { x: 0, y: 0 },
            closingStartTime: 0,
            closingEndTime: 0,
            currentTimestamp: 0,
          },
          killFeed: [],
        })
      }, 5000) // 5秒後にモックデータを表示

      return () => clearTimeout(timer)
    }
  }, [isConnected, matchData])

  return {
    isConnected,
    matchData,
    rawMatchData: rawMatchData?.[0], // 生データを返す
  }
}
