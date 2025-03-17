"use client"

import type React from "react"

import { Edit, Save, X } from "lucide-react"
import PlayerSlot from "@/components/control-panel/players/PlayerSlot"
import { getTeamColor } from "@/lib/utils/team-utils"
import type { Team } from "@/lib/types/team-types"

interface TeamCardProps {
  teamId: string
  team: Team
  editingTeam: string | null
  editedTeamName: string
  startEditingTeam: (teamId: string, currentName: string) => void
  saveTeamName: (teamId: string) => void
  cancelEditingTeam: () => void
  setEditedTeamName: (name: string) => void
  onPlayerRightClick: (e: React.MouseEvent, playerId: string, teamId: string) => void
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
  onPlayerRightClick,
}: TeamCardProps) {
  const teamNumber = Number.parseInt(teamId)
  const teamColor = getTeamColor(teamNumber)

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
  const placeholderMembers = [0, 1, 2].map((idx) => (
    <PlayerSlot
      key={`placeholder-${idx}`}
      index={idx}
      player={team.players[idx] || null}
      onRightClick={team.players[idx] ? (e) => onPlayerRightClick(e, team.players[idx].id, teamId) : undefined}
    />
  ))

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

