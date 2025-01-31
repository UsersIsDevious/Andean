"use client"

import { useState, useEffect } from "react"
import { api } from "../services/api"

export function useLobby() {
  const [lobbyData, setLobbyData] = useState({})
  const [isInLobby, setIsInLobby] = useState(false)

  useEffect(() => {
    if (isInLobby) {
      const interval = setInterval(() => {
        fetchLobbyInfo()
      }, 10000) // Fetch every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isInLobby])

  const fetchLobbyInfo = async () => {
    try {
      const [players, settings] = await Promise.all([api.getLobbyPlayers(), api.getMatchSettings()])
      setLobbyData({ players, settings })
    } catch (error) {
      console.error("Error fetching lobby info:", error)
    }
  }

  const joinLobby = async (lobbyId) => {
    try {
      await api.joinLobby(lobbyId)
      setIsInLobby(true)
      fetchLobbyInfo()
    } catch (error) {
      console.error("Error joining lobby:", error)
    }
  }

  const createLobby = async () => {
    try {
      const { lobbyId } = await api.createLobby()
      setIsInLobby(true)
      fetchLobbyInfo()
      return lobbyId
    } catch (error) {
      console.error("Error creating lobby:", error)
    }
  }

  const updateLobbySettings = async (settings) => {
    try {
      await api.setSettings(settings)
      setLobbyData((prevData) => ({ ...prevData, settings }))
    } catch (error) {
      console.error("Error updating lobby settings:", error)
    }
  }

  const updateTeamName = async (teamId, newName) => {
    try {
      await api.setTeam(teamId, newName)
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
    } catch (error) {
      console.error("Error updating team name:", error)
    }
  }

  return { lobbyData, isInLobby, joinLobby, createLobby, updateLobbySettings, updateTeamName }
}

