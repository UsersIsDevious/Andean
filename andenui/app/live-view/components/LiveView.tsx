"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import MatchOverview from "./MatchOverview"
import TeamStandings from "./TeamStandings"
import KillFeed from "./KillFeed"
import PlayerDetails from "./PlayerDetails"
import RawDataViewer from "./RawDataViewer"
import MapView from "./MapView" // 新しく追加したMapViewコンポーネント
// import { useLiveViewSignalR } from "@/lib/hooks/useLiveViewSignalRMock" // 開発用モック
import { useLiveViewSignalR } from "@/lib/hooks/useLiveViewSignalR" // 本番用

export default function LiveView() {
  const { isConnected, matchData } = useLiveViewSignalR()
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [waitingTime, setWaitingTime] = useState(0)

  // マウント状態を追跡
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // 待機時間を追跡
  useEffect(() => {
    if (!matchData) {
      const timer = setInterval(() => {
        setWaitingTime((prev) => prev + 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [matchData])

  // サーバーサイドレンダリング時には何も表示しない
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

  if (!matchData) {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <Loader2 className="h-12 w-12 text-red-500 animate-spin" />
        <p className="text-xl text-gray-400">マッチデータを待機中... ({waitingTime}秒)</p>
        <p className="text-sm text-gray-500">
          サーバーからデータが送信されるまでお待ちください。
          <br />
          マッチが開始されていない場合は、データが表示されません。
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <MatchOverview matchData={matchData} />

      {/* マップビューを追加 */}
      <MapView matchData={matchData} onPlayerSelect={(playerId) => setSelectedPlayer(playerId)} />

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
