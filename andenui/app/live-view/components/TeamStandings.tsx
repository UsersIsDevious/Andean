"use client"

// TeamStandingsコンポーネントにプレイヤー選択機能を追加
import { useMemo } from "react"
import type { CustomMatch } from "@/lib/types/match-types"
import { getTeamColor } from "@/lib/utils/team-utils"

interface TeamStandingsProps {
  matchData: CustomMatch | null
  onPlayerSelect?: (playerId: string) => void
}

export default function TeamStandings({ matchData, onPlayerSelect }: TeamStandingsProps) {
  // チームを生存状態とキル数でソート
  const sortedTeams = useMemo(() => {
    if (!matchData) return []

    return [...matchData.teams].sort((a, b) => {
      // 生存チームを優先
      if (a.isAlive && !b.isAlive) return -1
      if (!a.isAlive && b.isAlive) return 1

      // 同じ生存状態ならキル数で降順ソート
      return b.totalKills - a.totalKills
    })
  }, [matchData])

  if (!matchData) {
    return (
      <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4 text-center">
        <p className="text-gray-400">チームデータを読み込み中...</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 border border-red-900/30 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-red-900/20 to-transparent px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-red-400">チーム順位</h2>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-gray-800">
                <th className="px-4 py-2 text-left">順位</th>
                <th className="px-4 py-2 text-left">チーム</th>
                <th className="px-4 py-2 text-center">生存</th>
                <th className="px-4 py-2 text-center">キル</th>
                <th className="px-4 py-2 text-center">ダメージ</th>
                <th className="px-4 py-2 text-center">プレイヤー</th>
              </tr>
            </thead>
            <tbody>
              {sortedTeams.map((team, index) => (
                <tr
                  key={team.id}
                  className={`text-sm ${
                    team.isAlive ? "text-white" : "text-gray-500"
                  } border-b border-gray-800/50 hover:bg-gray-800/30`}
                >
                  <td className="px-4 py-3 text-left">{index + 1}</td>
                  <td className="px-4 py-3 text-left">
                    <div className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: getTeamColor(team.id) }}
                      ></div>
                      <span>
                        {team.name} (#{team.id - 1})
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center">
                      <div className={`w-3 h-3 rounded-full ${team.isAlive ? "bg-green-500" : "bg-red-500"}`}></div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">{team.totalKills}</td>
                  <td className="px-4 py-3 text-center">{team.totalDamage}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center space-x-1">
                      {team.players.map((player) => (
                        <div
                          key={player.id}
                          className={`w-2 h-2 rounded-full ${
                            player.isAlive ? "bg-green-500" : "bg-red-500"
                          } cursor-pointer hover:scale-150 transition-transform`}
                          title={`${player.name} (${player.legend || ""}) - ${player.isAlive ? "生存" : "撃破"}`}
                          onClick={() => onPlayerSelect && onPlayerSelect(player.id)}
                        ></div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

