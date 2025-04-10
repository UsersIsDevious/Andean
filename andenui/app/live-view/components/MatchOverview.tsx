"use client"

import { useEffect, useState } from "react"
import type { CustomMatch } from "@/lib/types/match-types"

interface MatchOverviewProps {
  matchData: CustomMatch | null
}

export default function MatchOverview({ matchData }: MatchOverviewProps) {
  const [elapsedTimeFormatted, setElapsedTimeFormatted] = useState("00:00")

  useEffect(() => {
    if (matchData) {
      // 経過時間をフォーマット（MM:SS）
      const minutes = Math.floor(matchData.elapsedTime / 60)
      const seconds = matchData.elapsedTime % 60
      setElapsedTimeFormatted(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)
    }
  }, [matchData])

  if (!matchData) {
    return (
      <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4 text-center">
        <p className="text-gray-400">マッチデータを読み込み中...</p>
      </div>
    )
  }

  // ゲーム状態に応じた色を設定
  const getGameStateColor = () => {
    switch (matchData.gameState) {
      case "InProgress":
        return "bg-green-500"
      case "Paused":
        return "bg-yellow-500"
      case "Finished":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  // ゲーム状態の日本語表示
  const getGameStateText = () => {
    switch (matchData.gameState) {
      case "NotStarted":
        return "未開始"
      case "InProgress":
        return "進行中"
      case "Paused":
        return "一時停止"
      case "Finished":
        return "終了"
      default:
        return "不明"
    }
  }

  return (
    <div className="bg-gray-900 border border-red-900/30 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-red-900/20 to-transparent px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-red-400">マッチ概要</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* マップ名 */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="text-xs text-gray-500 mb-1">マップ</div>
            <div className="text-sm text-white font-medium">
              {matchData.mapName} {matchData.playlistName && `(${matchData.playlistName})`}
            </div>
          </div>

          {/* ゲーム状態 */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="text-xs text-gray-500 mb-1">状態</div>
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${getGameStateColor()}`}></div>
              <div className="text-sm text-white font-medium">{getGameStateText()}</div>
            </div>
          </div>

          {/* 経過時間 */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="text-xs text-gray-500 mb-1">経過時間</div>
            <div className="text-sm text-white font-medium">{elapsedTimeFormatted}</div>
          </div>

          {/* リング情報 */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="text-xs text-gray-500 mb-1">リング</div>
            <div className="text-sm text-white font-medium">
              ラウンド {matchData.ring.currentStage} / {matchData.ring.nextStage}
            </div>
          </div>

          {/* 残りチーム数 */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="text-xs text-gray-500 mb-1">残りチーム</div>
            <div className="text-sm text-white font-medium">{matchData.remainingTeams} チーム</div>
          </div>

          {/* 残りプレイヤー数 */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="text-xs text-gray-500 mb-1">残りプレイヤー</div>
            <div className="text-sm text-white font-medium">{matchData.remainingPlayers} 人</div>
          </div>

          {/* 追加情報を表示 */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="text-xs text-gray-500 mb-1">サーバー</div>
            <div className="text-sm text-white font-medium">{matchData.datacenter?.name || "不明"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
