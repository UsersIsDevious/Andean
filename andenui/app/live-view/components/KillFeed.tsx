"use client"

import { useMemo } from "react"
import type { CustomMatch } from "@/lib/types/match-types"
import { getTeamColor } from "@/lib/utils/team-utils"

interface KillFeedProps {
  matchData: CustomMatch | null
}

export default function KillFeed({ matchData }: KillFeedProps) {
  // キルフィードを時間順に並べ替え（新しいものが上）
  const sortedKillFeed = useMemo(() => {
    if (!matchData) return []
    return [...matchData.killFeed].sort((a, b) => b.timestamp - a.timestamp)
  }, [matchData])

  // 時間をフォーマット（MM:SS）
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  if (!matchData) {
    return (
      <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4 text-center">
        <p className="text-gray-400">キルフィードを読み込み中...</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 border border-red-900/30 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-red-900/20 to-transparent px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-red-400">キルフィード</h2>
      </div>
      <div className="p-4">
        <div className="space-y-2 max-h-[400px] overflow-y-auto">
          {sortedKillFeed.length > 0 ? (
            sortedKillFeed.map((entry, index) => (
              // キルフィード表示を更新
              <div key={index} className="bg-black/30 p-3 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">{formatTime(entry.timestamp)}</div>
                  <div className="text-xs text-gray-500">{entry.isKnocked ? "ノックダウン" : "キル"}</div>
                </div>
                <div className="flex items-center mt-1">
                  <div
                    className="w-3 h-3 rounded-full mr-1"
                    style={{ backgroundColor: getTeamColor(entry.killerTeamId) }}
                  ></div>
                  <span className="text-sm text-white font-medium">{entry.killerName}</span>
                  {entry.legend && <span className="mx-1 text-xs text-gray-400">({entry.legend})</span>}
                  <span className="mx-2 text-gray-400">→</span>
                  <div
                    className="w-3 h-3 rounded-full mr-1"
                    style={{ backgroundColor: getTeamColor(entry.victimTeamId) }}
                  ></div>
                  <span className="text-sm text-white">{entry.victimName}</span>
                  <span className="mx-2 text-gray-400">with</span>
                  <span className="text-sm text-gray-300">{entry.weaponName}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500">キルフィードはまだありません</div>
          )}
        </div>
      </div>
    </div>
  )
}

