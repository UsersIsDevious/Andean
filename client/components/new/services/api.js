import { fetchWithTimeout } from "../lib/utils"

const API_TIMEOUT = 8000 // 8 seconds

export const api = {
  // Lobby-related API calls
  joinLobby: async (lobbyId) => {
    const response = await fetchWithTimeout("/api/join_lobby", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lobbyId }),
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
      body: JSON.stringify({ status }),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to set matchmaking status")
    return response.json()
  },

  togglePause: async () => {
    const response = await fetchWithTimeout("/api/pause_toggle", {
      method: "POST",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to toggle pause")
    return response.json()
  },

  calculateScores: async () => {
    const response = await fetchWithTimeout("/api/score_calculation", {
      method: "GET",
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to calculate scores")
    return response.json()
  },

  // Config-related API calls
  loadConfig: async () => {
    const response = await fetchWithTimeout("/loadConfig", {
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
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to get lobby players")
    return response.json()
  },

  getMatchSettings: async () => {
    const response = await fetchWithTimeout("/api/get_match_settings", {
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to get match settings")
    return response.json()
  },

  setSettings: async (settings) => {
    const response = await fetchWithTimeout("/api/set_settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
      timeout: API_TIMEOUT,
    })
    if (!response.ok) throw new Error("Failed to set settings")
    return response.json()
  },

  setTeam: async (teamId, name) => {
    const response = await fetchWithTimeout("/api/set_team", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teamId, name }),
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
}

