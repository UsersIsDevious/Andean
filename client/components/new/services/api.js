import { fetchWithTimeout } from "../lib/utils"

const API_TIMEOUT = 3000 // 3 seconds

export const api = {
  // Lobby-related API calls
  joinLobby: async (lobbyId) => {
    const response = await fetchWithTimeout("/api/join_lobby", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: lobbyId }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to join lobby")
    return response.json()
  },

  createLobby: async () => {
    const response = await fetchWithTimeout("/api/create_lobby", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to create lobby")
    return response.json()
  },

  leaveLobby: async () => {
    const response = await fetchWithTimeout("/api/leave_lobby", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to leave lobby")
    return response.json()
  },

  getLobbyId: async () => {
    const response = await fetchWithTimeout("/api/get_lobby_id", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to get lobby ID")
    return response.json()
  },

  setReady: async (ready) => {
    const response = await fetchWithTimeout("/api/set_ready", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ready }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to set ready status")
    return response.json()
  },

  // Match-related API calls
  setMatchmaking: async (status) => {
    const response = await fetchWithTimeout("/api/set_matchmaking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ matchmaking: status }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to set matchmaking status")
    return response.json()
  },

  togglePause: async (pauseTime) => {
    const response = await fetchWithTimeout("/api/pause_toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ preTimer: pauseTime }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to toggle pause")
    return response.json()
  },

  calculateScores: async () => {
    const response = await fetchWithTimeout("/getScore", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to calculate scores")
    const data = await response.json()
    return `${data.score}`
  },

  // Config-related API calls
  loadConfig: async () => {
    const response = await fetchWithTimeout("/loadConfig", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to load config")
    return response.json()
  },

  saveConfig: async (config) => {
    const response = await fetchWithTimeout("/saveConfig", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to save config")
    return response.json()
  },

  resetConfig: async () => {
    const response = await fetchWithTimeout("/resetConfig", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to reset config")
    return response.json()
  },

  // Other API calls
  getLobbyPlayers: async () => {
    const response = await fetchWithTimeout("/api/get_lobby_players", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to get lobby players")
    const data = await response.json()
    if (!data.success) throw new Error("Failed to get lobby players")
    return data.result
  },

  getMatchSettings: async () => {
    const response = await fetchWithTimeout("/api/get_match_settings", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to get match settings")
    const data = await response.json()
    if (!data.success) throw new Error("Failed to get match settings")
    return data.result
  },

  setSettings: async (settings) => {
    const response = await fetchWithTimeout("/api/set_settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playlistName: settings.playlistname, adminChat: settings.adminchat, teamRename: settings.teamrename, selfAssign: settings.selfassign, aimAssist: settings.aimassist, anonMode: settings.anonmode }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to set settings")
    return response.json()
  },

  setTeam: async (teamId, targetHardwareName, targetNucleushash) => {
    const response = await fetchWithTimeout("/api/set_team", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        teamId: teamId,
        targetHardwareName: targetHardwareName,
        targetNucleushash: targetNucleushash,
      }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to set team")
    return response.json()
  },

  setTeamName: async (teamId, name) => {
    const response = await fetchWithTimeout("/api/set_team_name", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teamId: teamId, teamName: name }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to set team")
    return response.json()
  },

  changeCamera: async (type, target) => {
    const response = await fetchWithTimeout("/api/change_camera", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, target }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to change camera")
    return response.json()
  },

  stopServer: async () => {
    try {
      const response = await fetchWithTimeout("/stopServer", {
        method: "POST",
        timeout: API_TIMEOUT,
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to stop server")
      }
      return response.json()
    } catch (error) {
      console.error("Error stopping server:", error)
      throw error
    }
  },

  startGame: async () => {
    try {
      const response = await fetchWithTimeout("/startGame", {
        method: "POST",
        timeout: API_TIMEOUT,
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to start game")
      }
      return response.json()
    } catch (error) {
      console.error("Error starting game:", error)
      throw error
    }
  },

  togglePeriodicFetch: async () => {
    const response = await fetchWithTimeout("/api/togglePeriodicFetch", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to toggle periodic fetch")
    return response.json()
  },

  // 新しいAPIコール
  sendCSVData: async (csvData) => {
    const response = await fetchWithTimeout("/readCSV", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ csvData }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to send CSV data")
    return response.json()
  },
  
  getGameModes: async () => {
    const response = await fetchWithTimeout("/api/get_gamemodes", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to get game modes")
    return response.json()
  },
}

