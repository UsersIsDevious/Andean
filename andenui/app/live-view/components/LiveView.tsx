"use client"

import { useState, useEffect, useMemo } from "react"
import { Loader2 } from "lucide-react"
import MatchOverview from "./MatchOverview"
import TeamStandings from "./TeamStandings"
import KillFeed from "./KillFeed"
import PlayerDetails from "./PlayerDetails"
import RawDataViewer from "./RawDataViewer" // 新しいコンポーネントをインポート
// import { useLiveViewSignalR } from "@/lib/hooks/useLiveViewSignalRMock" // 開発用モック
import { useLiveViewSignalR } from "@/lib/hooks/useLiveViewSignalR" // 本番用
import type { CustomMatch } from "@/lib/types/match-types"

export default function LiveView() {
  const { isConnected } = useLiveViewSignalR()
  // モックデータを作成
  const matchData = useMemo(() => {
    return {
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
    } as CustomMatch
  }, [])
  const [mounted, setMounted] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-red-500 animate-spin" />
          <p className="text-xl text-gray-400">ライブビューに接続中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <MatchOverview matchData={matchData} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TeamStandings matchData={matchData} onPlayerSelect={(playerId) => setSelectedPlayer(playerId)} />
        </div>
        <div>
          <KillFeed matchData={matchData} />
        </div>
      </div>

      {selectedPlayer && matchData && (
        <PlayerDetails
          player={matchData.teams.flatMap((t) => t.players).find((p) => p.id === selectedPlayer)}
          onClose={() => setSelectedPlayer(null)}
        />
      )}

      {/* 生データビューアーを追加 */}
      <RawDataViewer matchData={matchData} />
    </div>
  )
}

