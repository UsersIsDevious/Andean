"use client"

import { useState, useEffect } from "react"
import { fetchWithTimeout } from "../lib/utils"

export function useLobby() {
  const [lobbyData, setLobbyData] = useState({})
  const [isInLobby, setIsInLobby] = useState(false)

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
      const [playersResponse, settingsResponse] = await Promise.all([
        fetchWithTimeout("/api/get_lobby_players"),
        fetchWithTimeout("/api/get_match_settings"),
      ])

      if (playersResponse.ok && settingsResponse.ok) {
        const players = await playersResponse.json()
        const settings = await settingsResponse.json()
        setLobbyData({ players, settings })
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
        setLobbyData((prevData) => ({ ...prevData, settings }))
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
        setLobbyData((prevData) => ({
          ...prevData,
          players: {
            ...prevData.players,
            [teamId]: {
              ...prevData.players[teamId],
              name: newName,
            },
          },
        }))
      } else {
        console.error("Failed to update team name")
      }
    } catch (error) {
      console.error("Error updating team name:", error)
    }
  }

  return { lobbyData, isInLobby, joinLobby, createLobby, updateLobbySettings, updateTeamName }
}

