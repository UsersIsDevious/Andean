// 既存のファイルを拡張

export interface Player {
  index?: number
  id: string
  name: string
}

export interface Team {
  id?: string // idをオプショナルに追加
  name: string
  logoUrl?: string
  spawnPoint?: number
  players: Player[]
}

export interface TeamData {
  [key: string]: Team
}

// プレイヤー一覧表示用の型定義
export interface PlayerListItem {
  id: string
  name: string
  teamId: string
  teamName: string
}

