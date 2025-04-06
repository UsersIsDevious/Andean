import type { ReactNode } from "react"

// POIオプションの型定義
export interface POIOption {
  id: string
  name: string
  icon: ReactNode
}

// コンテキストメニューの型定義
export interface ContextMenuState {
  x: number
  y: number
  playerId: string
  teamId: string
}

// プレイヤー移動の型定義
export interface PlayerMoveState {
  playerId: string
  teamId: string
}

