import type React from "react"
import { Users } from "lucide-react"
import PlayerSlot from "@/components/players/PlayerSlot"
import type { Team, TeamPlayer } from "@/lib/types/config-types"

interface SpecialTeamViewProps {
  teamId: string
  team: Team
  onPlayerRightClick: (e: React.MouseEvent, player: TeamPlayer, teamId: string) => void
  maxTeamPlayer?: number
}

export default function SpecialTeamView({ teamId, team, onPlayerRightClick, maxTeamPlayer = 3 }: SpecialTeamViewProps) {
  if (!team) return null

  // 少なくともmaxTeamPlayerスロットを表示、または実際のプレイヤー数がmaxTeamPlayerより大きい場合はその数
  const slotCount = Math.max(maxTeamPlayer, team.players.length)
  const slots = Array.from({ length: slotCount })

  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center bg-gray-800 rounded-full">
            <Users className="h-3 w-3 text-red-400" />
          </div>
          <span className="font-medium text-white text-xs">
            {team.teamName ? team.teamName : team.name || "不明なチーム"}
          </span>
        </div>
      </div>

      {/* Players List - max height limited to show ~6 items with scrollbar */}
      <div className="space-y-1 max-h-[204px] overflow-y-auto pr-1">
        {slots.map((_, idx) => (
          <PlayerSlot
            key={idx}
            index={idx}
            player={team.players[idx] || null}
            onRightClick={team.players[idx] ? (e) => onPlayerRightClick(e, team.players[idx], teamId) : undefined}
          />
        ))}
      </div>
    </div>
  )
}
