// マッチデータの型定義
export interface PlayerPosition {
  x: number
  y: number
  z: number
}

export interface PlayerInventory {
  items: unknown[]
  weapons: unknown[]
}

export interface KillStats {
  total: number
  weapons: Record<string, number>
  players: Record<string, number>
  legends: Record<string, number>
}

export interface PlayerLevel {
  [key: string]: unknown
  now: string
}

export interface BlackMarket {
  useCount: number
  items: Record<string, unknown>
}

export interface PlayerData {
  name: string
  teamId: number
  nucleusHash: string
  hardwareName: string
  pos: PlayerPosition
  original_pos: PlayerPosition
  angles: number
  currentHealth: number
  maxHealth: number
  shieldHealth: number
  shieldMaxHealth: number
  teamName: string
  squadIndex: number
  legend: string
  skin: string
  inventory: PlayerInventory
  kills: KillStats
  killsReceived: KillStats
  killAssists: KillStats
  killAssistsReceived: KillStats
  downs: KillStats
  downsReceived: KillStats
  damageDealt: KillStats
  damageReceived: KillStats
  status: string
  isOnline: boolean
  level: PlayerLevel
  weaponList: string[]
  inHand: string
  abilityUseCount: number
  ziplineUseCount: number
  grenadeUseCount: Record<string, number>
  blackMarket: BlackMarket
  wraithPortalUseCount: number
}

export interface TeamData {
  teamName: string
  players: string[] // nucleusHash配列
  destroyerId: string
  lastDeath: string
  teamImg: string
  rank: number
  score: number
  totalDowns: number
  totalKills: number
  totalKillAssists: number
  totalDamageDealt: number
  totalDamageRecived: number
  totalHealing: number
  totalRevives: number
  totalRespawns: number
}

export interface DataCenter {
  timestamp: number
  category: string
  name: string
}

export interface LoadoutItem {
  name: string
  level: number
  quantity: number
}

export interface StartingLoadout {
  items: LoadoutItem[]
  weapons: unknown[]
}

export interface RawCustomMatch {
  matchName: string
  startTimeStamp: number
  endTimeStamp: number
  players: Record<string, PlayerData>
  teams: Record<string, TeamData>
  maxPlayers: number
  state: string
  mapName: string
  playlistName: string
  playlistDesc: string
  datacenter: DataCenter
  aimassiston: boolean
  anonymousMode: boolean
  serverId: string
  startingLoadout: StartingLoadout
  eventLists: unknown[]
  packetLists: unknown[]
  rings: unknown[]
  mapOffset: number[]
}

// 既存の型定義（UI表示用）
export interface Player {
  id: string
  name: string
  hardwareName: string
  nucleusHash: string
  teamId: number
  kills: number
  damage: number
  assists: number
  rank: number
  isAlive: boolean
  position?: { x: number; y: number; z: number }
  health?: number
  maxHealth?: number
  shield?: number
  maxShield?: number
  legend?: string
  skin?: string
  status?: string
  isOnline?: boolean
  squadIndex?: number
}

export interface Team {
  id: number
  name: string
  placement: number
  totalKills: number
  totalDamage: number
  totalDowns?: number
  totalAssists?: number
  totalHealing?: number
  totalRevives?: number
  totalRespawns?: number
  players: Player[]
  isAlive: boolean
  teamImg?: string
  spawnPoint?: number
  score?: number
}

export interface Ring {
  currentStage: number
  nextStage: number
  currentRadius: number
  nextRadius: number
  currentCenter: { x: number; y: number }
  nextCenter: { x: number; y: number }
  closingStartTime: number
  closingEndTime: number
  currentTimestamp: number
}

export interface CustomMatch {
  matchId: string
  matchName?: string
  gameVersion?: string
  gameState: string // "NotStarted", "InProgress", "Paused", "Finished"
  mapName: string
  playlistName?: string
  playlistDesc?: string
  remainingTeams: number
  remainingPlayers: number
  elapsedTime: number
  startTimeStamp?: number
  endTimeStamp?: number
  teams: Team[]
  ring: Ring
  killFeed: KillFeedEntry[]
  aimassist?: boolean
  anonymousMode?: boolean
  serverId?: string
  lobbyId?: string
  datacenter?: {
    name: string
    region: string
    ip: string
  }
  rawData?: RawCustomMatch // 生データへの参照を追加
}

export interface KillFeedEntry {
  timestamp: number
  killerName: string
  killerTeamId: number
  victimName: string
  victimTeamId: number
  weaponName: string
  isKnocked: boolean
  legend?: string
}

// 生データから表示用データへの変換関数
export function convertRawMatchData(rawData: RawCustomMatch[] | RawCustomMatch): CustomMatch {
  // 配列でない場合は配列に変換
  const dataArray = Array.isArray(rawData) ? rawData : [rawData]

  if (!dataArray || dataArray.length === 0) {
    return {
      matchId: "unknown",
      gameState: "NotStarted",
      mapName: "Unknown",
      remainingTeams: 0,
      remainingPlayers: 0,
      elapsedTime: 0,
      teams: [],
      ring: {
        currentStage: 0,
        nextStage: 1,
        currentRadius: 0,
        nextRadius: 0,
        currentCenter: { x: 0, y: 0 },
        nextCenter: { x: 0, y: 0 },
        closingStartTime: 0,
        closingEndTime: 0,
        currentTimestamp: 0,
      },
      killFeed: [],
      rawData: dataArray[0],
    }
  }

  const data = dataArray[0]

  // チームデータの変換
  const teams: Team[] = Object.entries(data.teams).map(([teamId, teamData]) => {
    // プレイヤーデータの変換 - 型アノテーションを削除
    const playersArray = teamData.players
      .map((nucleusHash) => {
        const playerData = data.players[nucleusHash]
        if (!playerData) return null

        return {
          id: nucleusHash,
          name: playerData.name,
          hardwareName: playerData.hardwareName,
          nucleusHash: playerData.nucleusHash,
          teamId: playerData.teamId,
          kills: playerData.kills.total,
          damage: playerData.damageDealt.total,
          assists: playerData.killAssists.total,
          rank: teamData.rank,
          isAlive: playerData.status === "alive",
          position: playerData.pos,
          health: playerData.currentHealth,
          maxHealth: playerData.maxHealth,
          shield: playerData.shieldHealth,
          maxShield: playerData.shieldMaxHealth,
          legend: playerData.legend,
          skin: playerData.skin,
          status: playerData.status,
          isOnline: playerData.isOnline,
          squadIndex: playerData.squadIndex,
        }
      })
      .filter(Boolean) as Player[] // 型アサーションを使用

    return {
      id: Number.parseInt(teamId),
      name: teamData.teamName,
      placement: teamData.rank,
      totalKills: teamData.totalKills,
      totalDamage: teamData.totalDamageDealt,
      totalDowns: teamData.totalDowns,
      totalAssists: teamData.totalKillAssists,
      totalHealing: teamData.totalHealing,
      totalRevives: teamData.totalRevives,
      totalRespawns: teamData.totalRespawns,
      players: playersArray,
      isAlive: playersArray.some((p) => p.isAlive),
      teamImg: teamData.teamImg,
      score: teamData.score,
    }
  })

  // 残りのチーム数とプレイヤー数を計算
  const remainingTeams = teams.filter((team) => team.isAlive && team.id > 1).length
  const remainingPlayers = teams
    .flatMap((team) => team.players)
    .filter((player) => player.isAlive && player.teamId > 1).length

  // ゲームの状態を判断
  let gameState = "NotStarted"
  if (data.state === "Playing") {
    gameState = "InProgress"
  } else if (data.state === "Finished") {
    gameState = "Finished"
  } else if (data.state === "Paused") {
    gameState = "Paused"
  }

  // リング情報（サンプルデータにはないので仮の値を設定）
  const ring: Ring = {
    currentStage: 1,
    nextStage: 2,
    currentRadius: 1000,
    nextRadius: 500,
    currentCenter: { x: 0, y: 0 },
    nextCenter: { x: 0, y: 0 },
    closingStartTime: 0,
    closingEndTime: 0,
    currentTimestamp: 0,
  }

  // 現在の時刻から経過時間を計算
  const currentTime = Math.floor(Date.now() / 1000)
  const elapsedTime = data.startTimeStamp ? Math.max(0, currentTime - data.startTimeStamp) : 0

  return {
    matchId: data.serverId || "unknown",
    matchName: data.matchName,
    gameState,
    mapName: data.mapName,
    playlistName: data.playlistName,
    playlistDesc: data.playlistDesc,
    remainingTeams,
    remainingPlayers,
    elapsedTime: elapsedTime, // 経過時間を計算
    startTimeStamp: data.startTimeStamp,
    endTimeStamp: data.endTimeStamp,
    teams,
    ring,
    killFeed: [], // サンプルデータにはキルフィードがないので空配列を設定
    aimassist: data.aimassiston,
    anonymousMode: data.anonymousMode,
    serverId: data.serverId,
    datacenter: {
      name: data.datacenter?.name || "",
      region: "",
      ip: "",
    },
    rawData: data, // 生データを保存
  }
}

