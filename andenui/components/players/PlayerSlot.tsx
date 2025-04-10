import type React from "react"
import type { TeamPlayer } from "@/lib/types/config-types"

interface PlayerSlotProps {
  index: number
  player: TeamPlayer | null
  onRightClick?: (e: React.MouseEvent) => void
}

export default function PlayerSlot({ index, player, onRightClick }: PlayerSlotProps) {
  return (
    <div
      className="flex items-center bg-black/30 p-1.5 rounded text-xs"
      onContextMenu={player && onRightClick ? onRightClick : undefined}
    >
      <div className="w-4 h-4 flex items-center justify-center bg-gray-800 rounded-full mr-1.5">
        <span className="text-xs text-gray-400">{index + 1}</span>
      </div>
      {player ? (
        <div className="flex justify-between w-full">
          <span className="text-gray-300 text-xs">{player.name}</span>
          <span className="ml-auto text-gray-500 text-xs">
            {player.hardwareName ? `${player.hardwareName}:` : ""}
            {player.id.substring(0, 6)}...
          </span>
        </div>
      ) : (
        <span className="text-gray-500 italic text-xs">空きスロット</span>
      )}
    </div>
  )
}
