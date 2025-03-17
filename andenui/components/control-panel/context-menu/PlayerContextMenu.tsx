"use client"
import { UserMinus, UserPlus } from "lucide-react"

interface PlayerContextMenuProps {
  x: number
  y: number
  onKickPlayer: () => void
  onMovePlayer: () => void
  onClose: () => void
}

export default function PlayerContextMenu({ x, y, onKickPlayer, onMovePlayer, onClose }: PlayerContextMenuProps) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        className="fixed z-50 bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: "translate(-50%, 10px)",
        }}
      >
        <div className="py-1">
          <button
            onClick={onKickPlayer}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-red-900/30 hover:text-red-300"
          >
            <UserMinus className="mr-2 h-4 w-4" />
            Kick Player
          </button>
          <button
            onClick={onMovePlayer}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-gray-100"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Move Player
          </button>
        </div>
      </div>
    </>
  )
}

