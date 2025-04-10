// Use explicit named exports to avoid all naming conflicts

// Export from team-types with renamed types
export type {
    Player as TeamPlayer,
    Team as TeamType,
    TeamData as TeamTypeData,
    PlayerListItem,
  } from "./team-types"
  
  // Export from config-types with renamed types
  export type {
    ApexLegendsConfig,
    ScoreSettingConfig,
    AppConfig,
    UIStatus,
    ConfigData,
    CSVTeamData,
    LobbySettings,
    Team as ConfigTeam,
    TeamPlayer as ConfigTeamPlayer,
    ConfigPlayer,
  } from "./config-types"
  
  // Export from ui-types
  export type {
    POIOption,
    ContextMenuState,
    PlayerMoveState,
  } from "./ui-types"
  
  // Export from match-types with renamed types
  export type {
    PlayerPosition,
    PlayerInventory,
    KillStats,
    PlayerLevel,
    BlackMarket,
    PlayerData,
    TeamData as MatchTeamData,
    DataCenter,
    LoadoutItem,
    StartingLoadout,
    RawCustomMatch,
    Player as MatchPlayer,
    Team as MatchTeam,
    Ring,
    CustomMatch,
    KillFeedEntry,
  } from "./match-types"
  
  // Re-export the conversion function
  export { convertRawMatchData } from "./match-types"
  