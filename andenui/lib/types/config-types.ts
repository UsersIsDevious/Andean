// 設定データの型定義
export interface ApexLegendsConfig {
    path: string
    api_Port: string
    api_Option: string
    option: string
  }
  
  export interface ScoreSettingConfig {
    kill_Point: number
    max_Kill: number
    ranking?: number[]
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
  
  // UI状態の型定義
  export interface UIStatus {
    LobbyJoinButtonEnabled: boolean
    GameStartButtonEnabled: boolean
    LeaveLobbyButtonEnabled: boolean
    IsLobbyJoined: boolean
    MaxTeamPlayer?: number
    MaxTeam?: number
    GameStatus?: string
  }
  
  // 設定データ全体の型定義
  export interface ConfigData {
    sharedData: string
    selectedDataKeys: string[]
    appConfig: AppConfig
    lastLobbyResponse: string
    lastApexResponse: string
    teamData?: any
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
  
  