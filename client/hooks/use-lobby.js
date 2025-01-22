"use client"

import { useState, useEffect } from "react"
import { fetchWithTimeout } from "../lib/utils"

export function useLobby() {
  const [lobbyPlayers, setLobbyPlayers] = useState([])
  const [matchSettings, setMatchSettings] = useState(null)
  const [isInLobby, setIsInLobby] = useState(false)
  const [teams, setTeams] = useState([])

  useEffect(() => {
    if (isInLobby) {
      const interval = setInterval(() => {
        fetchLobbyInfo()
      }, 5000) // Fetch every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isInLobby])

  const fetchLobbyInfo = async () => {
    try {
      const [playersResponse, settingsResponse, teamsResponse] = await Promise.all([
        fetchWithTimeout("/api/get_lobby_players"),
        fetchWithTimeout("/api/get_match_settings"),
        fetchWithTimeout("/api/get_teams"),
      ])

      if (playersResponse.ok && settingsResponse.ok && teamsResponse.ok) {
        const players = await playersResponse.json()
        const settings = await settingsResponse.json()
        const teams = await teamsResponse.json()
        setLobbyPlayers(players)
        setMatchSettings(settings)
        setTeams(teams)
      } else {
        console.error("Failed to fetch lobby info")
      }
    } catch (error) {
      console.error("Error fetching lobby info:", error)
    }
  }

  const joinLobby = async (lobbyId) => {
    try {
      const response = await fetchWithTimeout("/api/join_lobby", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lobbyId }),
      })
      if (response.ok) {
        setIsInLobby(true)
        fetchLobbyInfo()
      } else {
        console.error("Failed to join lobby")
      }
    } catch (error) {
      console.error("Error joining lobby:", error)
    }
  }

  const createLobby = async () => {
    try {
      const response = await fetchWithTimeout("/api/create_lobby", {
        method: "POST",
      })
      if (response.ok) {
        const { lobbyId } = await response.json()
        setIsInLobby(true)
        fetchLobbyInfo()
        return lobbyId
      } else {
        console.error("Failed to create lobby")
      }
    } catch (error) {
      console.error("Error creating lobby:", error)
    }
  }

  const updateLobbySettings = async (settings) => {
    try {
      const response = await fetchWithTimeout("/api/set_settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      })
      if (response.ok) {
        setMatchSettings(settings)
      } else {
        console.error("Failed to update lobby settings")
      }
    } catch (error) {
      console.error("Error updating lobby settings:", error)
    }
  }

  const updateTeamName = async (teamId, newName) => {
    try {
      const response = await fetchWithTimeout("/api/set_team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teamId, name: newName }),
      })
      if (response.ok) {
        setTeams(teams.map((team) => (team.id === teamId ? { ...team, name: newName } : team)))
      } else {
        console.error("Failed to update team name")
      }
    } catch (error) {
      console.error("Error updating team name:", error)
    }
  }

  return { lobbyPlayers, matchSettings, isInLobby, teams, joinLobby, createLobby, updateLobbySettings, updateTeamName }
}

