"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { getTeamColor } from "@/lib/utils/team-utils"
import type { TeamData } from "@/lib/types"

interface TeamSelectorModalProps {
  teamData: TeamData
  sourceTeamId: string
  onSelectTeam: (teamId: string) => void
  onClose: () => void
  playerName?: string
  playerHardwareName?: string // ハードウェア名を追加
  maxTeamPlayer?: number
}

export default function TeamSelectorModal({
  teamData,
  sourceTeamId,
  onSelectTeam,
  onClose,
  playerName = "プレイヤー",
  playerHardwareName = "PC", // デフォルト値を設定
  maxTeamPlayer = 3,
}: TeamSelectorModalProps) {
  // クライアントサイドでのみレンダリングするための状態
  const [isMounted, setIsMounted] = useState(false)

  // Client-side mounting effect
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // サーバーサイドレンダリング時には何も表示しない
  if (!isMounted) {
    return null
  }

  const sourceTeam = teamData[sourceTeamId]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-900/20 to-transparent border-b border-gray-800">
          <h3 className="text-lg font-medium text-red-400">プレイヤーをチームに移動</h3>
          <button onClick={onClose} className="p-1 rounded-full bg-gray-800/50 hover:bg-gray-800">
            <X className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        <div className="px-4 py-3 bg-black/30 border-b border-gray-800">
          <div className="flex items-center">
            <Info className="h-4 w-4 text-gray-400 mr-2" />
            <div>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">{playerName}</span> を
                <span className="font-medium text-white">{sourceTeam?.name || "不明なチーム"}</span> から移動
              </p>
              <p className="text-xs text-gray-400">ハードウェア: {playerHardwareName}</p>
            </div>
          </div>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-2">
            {/* Special Teams */}
            <div className="mb-2">
              <h4 className="text-sm font-medium text-gray-400 mb-1">特殊チーム</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onSelectTeam("0")
                    onClose() // Close the modal after selection
                  }}
                  className="flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-md"
                >
                  <span className="text-sm text-gray-300">未割り当て</span>
                  <span className="text-xs bg-gray-900 px-2 py-0.5 rounded-full text-gray-400">
                    {teamData["0"]?.players.length || 0} 人
                  </span>
                </button>
                <button
                  onClick={() => {
                    onSelectTeam("1")
                    onClose() // Close the modal after selection
                  }}
                  className="flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-md"
                >
                  <span className="text-sm text-gray-300">観戦者</span>
                  <span className="text-xs bg-gray-900 px-2 py-0.5 rounded-full text-gray-400">
                    {teamData["1"]?.players.length || 0} 人
                  </span>
                </button>
              </div>
            </div>

            {/* Regular Teams */}
            <h4 className="text-sm font-medium text-gray-400 mb-1">ゲームチーム</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(teamData)
                .filter((id) => id !== "0" && id !== "1" && id !== sourceTeamId)
                .filter((id) => {
                  // MaxTeamの値を取得するためのロジック
                  // チームIDの数値が21以下（MaxTeam + 1）のものだけを表示します
                  return Number(id) <= 21
                })
                .filter((id) => {
                  // すでに最大人数に達しているチームは表示しない
                  const team = teamData[id]
                  return team.players.length < maxTeamPlayer
                })
                .map((teamId) => {
                  const team = teamData[teamId]
                  const teamNumber = Number.parseInt(teamId)
                  const teamColor = getTeamColor(teamNumber)

                  return (
                    <button
                      key={teamId}
                      onClick={() => {
                        onSelectTeam(teamId)
                        onClose() // Close the modal after selection
                      }}
                      className="flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-md"
                      style={{ borderLeft: `3px solid ${teamColor}` }}
                    >
                      <div className="flex items-center">
                        <div
                          className="w-4 h-4 flex items-center justify-center rounded-full mr-1.5"
                          style={{ backgroundColor: teamColor }}
                        >
                          <span className="text-xs font-medium text-white">{teamNumber - 1}</span>
                        </div>
                        <span className="text-sm text-gray-300 truncate max-w-[80px]">{team.name}</span>
                      </div>
                      <span className="text-xs bg-gray-900 px-2 py-0.5 rounded-full text-gray-400">
                        {team.players.length} / {teamId === "0" || teamId === "1" ? "∞" : maxTeamPlayer}
                      </span>
                    </button>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
