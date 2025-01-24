"use client"

import { useState, useEffect } from "react"
import { useLobby } from "../contexts/LobbyContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LobbySettings } from "./lobby-settings"
import { PlayerTable } from "./player-table"
import { TeamCard } from "./team-card"

const teamColors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-indigo-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-teal-100",
  "bg-orange-100",
  "bg-cyan-100",
  "bg-lime-100",
  "bg-emerald-100",
  "bg-sky-100",
  "bg-violet-100",
  "bg-fuchsia-100",
  "bg-rose-100",
  "bg-amber-100",
  "bg-gray-100",
  "bg-slate-100",
  "bg-zinc-100",
]

export default function LobbyManagement({ simulatedLobbyData, updateSimulatedLobbyData, isSimulated }) {
  const { isInLobby, lobbyId } = useLobby()
  const [lobbyData, setLobbyData] = useState({ players: {}, settings: {} })
  const [activeTab, setActiveTab] = useState("unassigned")

  useEffect(() => {
    const fetchLobbyData = async () => {
      if (isInLobby && lobbyId) {
        try {
          const [playersResponse, settingsResponse] = await Promise.all([
            fetch("/api/get_lobby_players"),
            fetch("/api/get_match_settings"),
          ])
          const players = await playersResponse.json()
          const settings = await settingsResponse.json()
          setLobbyData({ players, settings })
        } catch (error) {
          console.error("Error fetching lobby data:", error)
        }
      }
    }

    fetchLobbyData()
  }, [isInLobby, lobbyId])

  if (!isInLobby) {
    return (
      <div className="flex items-center justify-center h-full">
        <Card>
          <CardHeader>
            <CardTitle>Not in a Lobby</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Please join or create a lobby to access lobby management features.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleSettingsChange = async (newSettings) => {
    if (isSimulated) {
      updateSimulatedLobbyData({ settings: newSettings })
    } else {
      try {
        const response = await fetch("/api/set_settings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSettings),
        })
        if (response.ok) {
          setLobbyData((prevData) => ({ ...prevData, settings: newSettings }))
        } else {
          console.error("Failed to update lobby settings")
        }
      } catch (error) {
        console.error("Error updating lobby settings:", error)
      }
    }
  }

  const handleTeamNameChange = async (teamId, newName) => {
    if (isSimulated) {
      updateSimulatedLobbyData({
        players: {
          ...simulatedLobbyData.players,
          [teamId]: {
            ...simulatedLobbyData.players[teamId],
            name: newName,
          },
        },
      })
    } else {
      try {
        const response = await fetch("/api/set_team", {
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
  }

  const teams = Array.from({ length: 22 }, (_, index) => {
    const teamId = index.toString()
    let teamName
    if (index === 0) {
      teamName = "未割当"
    } else if (index === 1) {
      teamName = "オブザーバー"
    } else {
      teamName = `チーム ${index - 1}`
    }
    const team = (isSimulated ? simulatedLobbyData.players : lobbyData.players || {})[teamId] || {
      name: teamName,
      players: [],
    }
    return {
      id: teamId,
      name: team.name,
      players: team.players || [],
    }
  })

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1 space-y-6">
        <LobbySettings
          settings={isSimulated ? simulatedLobbyData.settings : lobbyData.settings}
          onSettingsChange={handleSettingsChange}
        />
        <Card>
          <CardHeader>
            <CardTitle>Player Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="unassigned" className="flex-1">
                  未割当
                </TabsTrigger>
                <TabsTrigger value="observer" className="flex-1">
                  オブザーバー
                </TabsTrigger>
              </TabsList>
              <TabsContent value="unassigned">
                <PlayerTable players={teams.find((team) => team.id === "0")?.players || []} />
              </TabsContent>
              <TabsContent value="observer">
                <PlayerTable players={teams.find((team) => team.id === "1")?.players || []} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 grid grid-cols-4 gap-4">
        {teams.slice(2).map((team, index) => (
          <TeamCard
            key={team.id}
            team={team}
            onTeamNameChange={handleTeamNameChange}
            backgroundColor={teamColors[index % teamColors.length]}
          />
        ))}
      </div>
    </div>
  )
}

