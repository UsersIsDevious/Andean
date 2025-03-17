"use client"
import { X } from "lucide-react"
import { getTeamColor } from "@/lib/utils/team-utils"
import type { TeamData } from "@/lib/types/team-types"

interface TeamSelectorModalProps {
  teamData: TeamData
  sourceTeamId: string
  onSelectTeam: (teamId: string) => void
  onClose: () => void
}

export default function TeamSelectorModal({ teamData, sourceTeamId, onSelectTeam, onClose }: TeamSelectorModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-900/20 to-transparent border-b border-gray-800">
          <h3 className="text-lg font-medium text-red-400">Select Destination Team</h3>
          <button onClick={onClose} className="p-1 rounded-full bg-gray-800/50 hover:bg-gray-800">
            <X className="h-4 w-4 text-gray-400" />
          </button>
        </div>
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-2">
            {/* Special Teams */}
            <div className="mb-2">
              <h4 className="text-sm font-medium text-gray-400 mb-1">Special Teams</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectTeam("0")}
                  className="flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-md"
                >
                  <span className="text-sm text-gray-300">Unassigned</span>
                  <span className="text-xs bg-gray-900 px-2 py-0.5 rounded-full text-gray-400">
                    {teamData["0"]?.players.length || 0} players
                  </span>
                </button>
                <button
                  onClick={() => onSelectTeam("1")}
                  className="flex items-center justify-between p-2 bg-gray-800 hover:bg-gray-700 rounded-md"
                >
                  <span className="text-sm text-gray-300">Observers</span>
                  <span className="text-xs bg-gray-900 px-2 py-0.5 rounded-full text-gray-400">
                    {teamData["1"]?.players.length || 0} players
                  </span>
                </button>
              </div>
            </div>

            {/* Regular Teams */}
            <h4 className="text-sm font-medium text-gray-400 mb-1">Game Teams</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(teamData)
                .filter((id) => id !== "0" && id !== "1" && id !== sourceTeamId)
                .map((teamId) => {
                  const team = teamData[teamId]
                  const teamNumber = Number.parseInt(teamId)
                  const teamColor = getTeamColor(teamNumber)

                  return (
                    <button
                      key={teamId}
                      onClick={() => onSelectTeam(teamId)}
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
                        {team.players.length} / 3
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

