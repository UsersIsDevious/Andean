"use client"

import { Edit, Save, X } from "lucide-react"

interface Player {
  index: number
  id: string
  name: string
}

interface Team {
  name: string
  logoUrl: string
  spawnPoint: number
  players: Player[]
}

interface TeamCardProps {
  teamId: string
  team: Team
  editingTeam: string | null
  editedTeamName: string
  startEditingTeam: (teamId: string, currentName: string) => void
  saveTeamName: (teamId: string) => void
  cancelEditingTeam: () => void
  setEditedTeamName: (name: string) => void
}

export default function TeamCard({
  teamId,
  team,
  editingTeam,
  editedTeamName,
  startEditingTeam,
  saveTeamName,
  cancelEditingTeam,
  setEditedTeamName,
}: TeamCardProps) {
  // チームカラーの取得
  const getTeamColor = (id: number): string => {
    const colors: { [key: number]: string } = {
      2: "rgb(6, 131, 149)",
      3: "rgb(27, 71, 105)",
      4: "rgb(31, 84, 205)",
      5: "rgb(68, 42, 96)",
      6: "rgb(110, 44, 111)",
      7: "rgb(173, 45, 119)",
      8: "rgb(176, 28, 81)",
      9: "rgb(195, 0, 11)",
      10: "rgb(197, 67, 32)",
      11: "rgb(120, 30, 19)",
      12: "rgb(159, 59, 13)",
      13: "rgb(119, 75, 0)",
      14: "rgb(204, 121, 19)",
      15: "rgb(150, 125, 0)",
      16: "rgb(133, 147, 10)",
      17: "rgb(73, 88, 3)",
      18: "rgb(112, 151, 67)",
      19: "rgb(57, 137, 52)",
      20: "rgb(47, 90, 26)",
      21: "rgb(0, 116, 88)",
    }
    return colors[id] || "rgb(31, 41, 55)" // デフォルトはグレー
  }

  const teamNumber = Number.parseInt(teamId)
  const teamColor = getTeamColor(teamNumber)

  // TeamCardコンポーネントをよりコンパクトにします
  // カードのパディングとマージンを調整

  // カードスタイル
  const cardStyle = {
    backgroundColor: "#0f1623",
    borderColor: "rgba(139, 0, 0, 0.3)",
    boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)",
    borderLeft: `4px solid ${teamColor}`,
    transition: "all 0.2s ease",
  }

  // 入力スタイル
  const inputStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "#1f2937",
    color: "#e5e7eb",
  }

  // プレースホルダーメンバーの生成（最低3人分）
  const placeholderMembers = [0, 1, 2].map((idx) => {
    const player = team.players[idx]
    return (
      <div key={`placeholder-${idx}`} className="flex items-center bg-black/30 p-1 rounded text-xs">
        <div className="w-4 h-4 flex items-center justify-center bg-gray-800 rounded-full mr-1">
          <span className="text-xs text-gray-400">{idx + 1}</span>
        </div>
        {player ? (
          <span className="text-gray-300 truncate">{player.name}</span>
        ) : (
          <span className="text-gray-500 italic text-xs">Empty slot</span>
        )}
      </div>
    )
  })

  return (
    <div style={cardStyle} className="rounded-md overflow-hidden">
      <div className="p-2 bg-gray-900/80 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: teamColor }}>
            <span className="text-xs font-medium text-white">{teamNumber - 1}</span>
          </div>
          {editingTeam === teamId ? (
            <input
              type="text"
              value={editedTeamName}
              onChange={(e) => setEditedTeamName(e.target.value)}
              style={inputStyle}
              className="w-full h-6 px-2 py-0.5 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-xs"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <span className="font-medium text-white text-xs">{team.name}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {editingTeam === teamId ? (
            <>
              <button
                onClick={() => saveTeamName(teamId)}
                className="p-0.5 rounded-full bg-green-900/30 hover:bg-green-900/50"
              >
                <Save className="h-3 w-3 text-green-400" />
              </button>
              <button onClick={cancelEditingTeam} className="p-0.5 rounded-full bg-red-900/30 hover:bg-red-900/50">
                <X className="h-3 w-3 text-red-400" />
              </button>
            </>
          ) : (
            <button
              onClick={() => startEditingTeam(teamId, team.name)}
              className="p-0.5 rounded-full bg-gray-800/50 hover:bg-gray-800"
            >
              <Edit className="h-3 w-3 text-gray-400" />
            </button>
          )}
        </div>
      </div>
      <div className="p-1.5">
        <div className="space-y-1">{placeholderMembers}</div>
      </div>
    </div>
  )
}

