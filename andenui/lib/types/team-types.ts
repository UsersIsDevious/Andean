export interface Player {
  index: number
  id: string
  name: string
}

export interface Team {
  name: string
  logoUrl: string
  spawnPoint: number
  players: Player[]
}

export interface TeamData {
  [key: string]: Team
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

