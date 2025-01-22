"use client"

import { useState, useEffect } from "react"
import { useLobby } from "../hooks/use-lobby"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LobbySettings } from "./lobby-settings"
import { PlayerTable } from "./player-table"
import { TeamCard } from "./team-card"

export default function LobbyManagement({ simulatedLobbyData, updateSimulatedLobbyData, isSimulated }) {
  const realLobbyData = useLobby()
  const { lobbyPlayers, matchSettings, isInLobby, teams, updateLobbySettings, updateTeamName } = isSimulated
    ? simulatedLobbyData
    : realLobbyData

  const [activeTab, setActiveTab] = useState("observer")

  useEffect(() => {
    if (isSimulated && !simulatedLobbyData.isInLobby) {
      const dummyTeams = [...Array(20)].map((_, index) => ({
        id: index + 1,
        name: `Test Team ${index + 1}`,
        logo: `/placeholder.svg?height=32&width=32`,
        players: [
          { id: index * 4 + 1, name: `Player ${index * 4 + 1}`, role: "Captain", status: "Ready" },
          { id: index * 4 + 2, name: `Player ${index * 4 + 2}`, role: "Member", status: "Not Ready" },
          { id: index * 4 + 3, name: `Player ${index * 4 + 3}`, role: "Member", status: "Ready" },
          { id: index * 4 + 4, name: `Player ${index * 4 + 4}`, role: "Member", status: "Ready" },
        ],
      }))

      updateSimulatedLobbyData({
        isInLobby: true,
        lobbyPlayers: dummyTeams.flatMap((team) => team.players),
        matchSettings: {
          gameMode: "battle_royale",
          allowTeamNameChange: true,
          selfAssignment: false,
          aimAssist: true,
          adminChat: false,
          anonymousMode: false,
        },
        teams: dummyTeams,
      })
    }
  }, [isSimulated, simulatedLobbyData.isInLobby, updateSimulatedLobbyData])

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

  const handleSettingsChange = (newSettings) => {
    if (isSimulated) {
      updateSimulatedLobbyData({ matchSettings: newSettings })
    } else {
      updateLobbySettings(newSettings)
    }
  }

  const handleTeamNameChange = (teamId, newName) => {
    if (isSimulated) {
      updateSimulatedLobbyData({
        teams: teams.map((team) => (team.id === teamId ? { ...team, name: newName } : team)),
      })
    } else {
      updateTeamName(teamId, newName)
    }
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1 space-y-6">
        <LobbySettings settings={matchSettings} onSettingsChange={handleSettingsChange} />
        <Card>
          <CardHeader>
            <CardTitle>Player Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="observer" className="flex-1">
                  Observer
                </TabsTrigger>
                <TabsTrigger value="unassigned" className="flex-1">
                  Unassigned
                </TabsTrigger>
              </TabsList>
              <TabsContent value="observer">
                <PlayerTable players={lobbyPlayers.filter((player) => player.team_id === 1)} />
              </TabsContent>
              <TabsContent value="unassigned">
                <PlayerTable players={lobbyPlayers.filter((player) => player.team_id === 0)} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 grid grid-cols-4 gap-x-4 gap-y-3">
        {[...Array(20)].map((_, index) => (
          <TeamCard
            key={index}
            team={teams[index] || { id: index + 1, name: `Team ${index + 1}`, players: [] }}
            onTeamNameChange={handleTeamNameChange}
          />
        ))}
      </div>
    </div>
  )
}

