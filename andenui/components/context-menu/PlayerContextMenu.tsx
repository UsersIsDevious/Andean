"use client"

import { useEffect, useRef, useState } from "react"

interface PlayerContextMenuProps {
  x: number
  y: number
  onKickPlayer: () => void
  onMovePlayer: () => void
  onClose: () => void
  playerName?: string
  playerHardwareName?: string // ハードウェア名を追加
}

const PlayerContextMenu = ({
  x,
  y,
  onKickPlayer,
  onMovePlayer,
  onClose,
  playerName = "プレイヤー",
  playerHardwareName = "PC", // デフォルト値を設定
}: PlayerContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  // クライアントサイドでのみレンダリングするための状態
  const [isMounted, setIsMounted] = useState(false)

  // Client-side mounting effect
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  // サーバーサイドレンダリング時には何も表示しない
  if (!isMounted) {
    return null
  }

  // Adjust position to ensure menu stays within viewport
  const adjustedX = Math.min(x, window.innerWidth - (menuRef.current?.offsetWidth || 200))
  const adjustedY = Math.min(y, window.innerHeight - (menuRef.current?.offsetHeight || 100))

  return (
    <div
      ref={menuRef}
      className="absolute z-50 bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden"
      style={{ left: adjustedX, top: adjustedY }}
    >
      <div className="px-3 py-2 bg-red-900/20 border-b border-gray-800">
        <span className="text-sm font-medium text-gray-200">{playerName}</span>
        <span className="text-xs text-gray-400 block">{playerHardwareName}</span>
      </div>
      <div className="p-1">
        <button
          onClick={() => {
            onMovePlayer()
            onClose() // Close the context menu after selecting move
          }}
          className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-sm"
        >
          プレイヤーを移動
        </button>
        <button
          onClick={() => {
            onKickPlayer()
            onClose() // Close the context menu after selecting kick
          }}
          className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-gray-800 rounded-sm"
        >
          プレイヤーをキック
        </button>
      </div>
    </div>
  )
}

export default PlayerContextMenu
