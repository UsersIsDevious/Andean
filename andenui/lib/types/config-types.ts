// 設定データの型定義
export interface ApexLegendsConfig {
  path: string
  game_Lancher?: string
  api_Port: string
  api_Option: string
  option: string
}

export interface ScoreSettingConfig {
  kill_Point: number
  max_Kill: number
  rank_Points?: number[]
}

export interface AppConfig {
  apexLegends: ApexLegendsConfig
  penetrator: string[]
  output: string
  language: string
  log_Dir: string
  data_Fps: number
  score_Setting: ScoreSettingConfig
}

// Update the UIStatus interface to use camelCase property names to match the actual data
export interface UIStatus {
  lobbyJoinButtonEnabled: boolean
  gameStartButtonEnabled: boolean
  leaveLobbyButtonEnabled: boolean
  isLobbyJoined: boolean
  isMatchmaking?: boolean // 追加: マッチメイキング中かどうかを示すフラグ
  maxTeamPlayer?: number
  maxTeam?: number
  gameStatus?: string
  supportedLanguages?: string[] // ISO 639 language codes array
}

// 設定データ全体の型定義
export interface ConfigData {
  sharedData: string
  selectedDataKeys: string[]
  appConfig: AppConfig
  lastLobbyResponse: string
  lastApexResponse: string
  teamData?: Record<string, Team>
  lobbySettings?: LobbySettings
  uiStatus?: UIStatus
}

// CSV データの型定義
export interface CSVTeamData {
  TEAM: number
  NAME: string
  IMG_URL: string
  MEMBER_NUM: number
  MEMBERS: string[]
}

// ロビー設定の型定義
export interface LobbySettings {
  playlistname: string
  adminchat: boolean
  teamrename: boolean
  selfassign: boolean
  aimassist: boolean
  anonmode: boolean
  gamemode: string
  map: string
}

// Import Team type from team-types to avoid duplicate definitions
import type { Team, Player as TeamPlayer } from "./team-types"

// Re-export Team type with a different name to avoid conflicts
export type { Team, TeamPlayer }

// Define ConfigPlayer type instead of Player to avoid conflict
export interface ConfigPlayer {
  index?: number
  id: string
  name: string
}
