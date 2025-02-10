"use client"

import { useState, useEffect, useCallback } from "react"
import { useLobby } from "../contexts/LobbyContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LobbySettings } from "./lobby-settings"
import { PlayerTable } from "./player-table"
import { TeamCard } from "./team-card"
import { api } from "../services/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

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
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-indigo-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-teal-200",
  "bg-orange-200",
  "bg-cyan-200",
]

const lobbyOptions = {
  CUSTOMMATCH_BR_TRIOS: {
    can_hu_cm: "MP_RR_CANYONLANDS_HU",
    des_hu_cm: "MP_RR_DESERTLANDS_MU3",
    district_cm: "MP_RR_DISTRICT",
    moon_cm: "MP_RR_DIVIDED_MOON",
    oly_mu2_cm: "MP_RR_OLYMPUS_MU2",
    tropic_mu2_cm: "MP_RR_TROPIC_ISLAND_MU2",
  },
  CUSTOMMATCH_BR_DUOS: {
    duo_can_hu_cm: "duo_can_hu_cm",
    duo_des_hu_cm: "duo_des_hu_cm",
    duo_district_cm: "duo_district_cm",
    duo_moon_cm: "duo_moon_cm",
    duo_oly_mu2_cm: "duo_oly_mu2_cm",
    duo_tropic_mu2_cm: "duo_tropic_mu2_cm",
  },
  CUSTOMMATCH_ALGS: {
    des_new_spawn_pm: "PL_ALGS_DESERTLANDS",
    tropic_new_spawn_pm: "PL_ALGS_TROPIC",
    district_new_spawn_pm: "PL_ALGS_DISTRICT",
    moon_new_spawn_pm: "PL_ALGS_MOON",
  },
  PL_DAYZERO: {
    sm_dayzero_canyonlands_pm: "sm_dayzero_canyonlands_pm",
    sm_dayzero_district_pm: "sm_dayzero_district_pm",
    sm_dayzero_moon_pm: "sm_dayzero_moon_pm",
    sm_dayzero_desertlands_pm: "sm_dayzero_desertlands_pm",
    sm_dayzero_tropics_pm: "sm_dayzero_tropics_pm",
    sm_dayzero_olympus_pm: "sm_dayzero_olympus_pm",
  },
  TDM_NAME: {
    tdm_fragment_s_pm: "tdm_fragment_s_pm",
    tdm_thunderdome_s_pm: "tdm_thunderdome_s_pm",
    tdm_skull_s_pm: "tdm_skull_s_pm",
    tdm_zeus_s_pm: "tdm_zeus_s_pm",
    tdm_core_s_pm: "tdm_core_s_pm",
    tdm_monument_s_pm: "tdm_monument_s_pm",
    tdm_estates_s_pm: "tdm_estates_s_pm",
  },
  GAME_MODE_GUNGAME: {
    gg_fragment_s_pm: "gg_fragment_s_pm",
    gg_thunderdome_s_pm: "gg_thunderdome_s_pm",
    gg_skull_s_pm: "gg_skull_s_pm",
    gg_pylon_s_pm: "gg_pylon_s_pm",
    gg_zeus_s_pm: "gg_zeus_s_pm",
    gg_core_s_pm: "gg_core_s_pm",
    gg_monument_s_pm: "gg_monument_s_pm",
    gg_estates_s_pm: "gg_estates_s_pm",
  },
  CONTROL_NAME: {
    control_barometer_s_pm: "control_barometer_s_pm",
    control_siphon_s_pm: "control_siphon_s_pm",
    control_thunderdome_s_pm: "control_thunderdome_s_pm",
    control_production_s_pm: "control_production_s_pm",
    control_labs_s_pm: "control_labs_s_pm",
    control_caustic_s_pm: "control_caustic_s_pm",
  },
  BTDM_NAME: {
    btdm_fragment_s_pm: "btdm_fragment_s_pm",
    btdm_thunderdome_s_pm: "btdm_thunderdome_s_pm",
    btdm_skull_s_pm: "btdm_skull_s_pm",
    btdm_zeus_s_pm: "btdm_zeus_s_pm",
    btdm_core_s_pm: "btdm_core_s_pm",
    btdm_monument_s_pm: "btdm_monument_s_pm",
    btdm_estates_s_pm: "btdm_estates_s_pm",
  },
  FREEDM_LOCKDOWN_MODE: {
    tr_hunt_the_core_s_pm: "tr_hunt_the_core_s_pm",
    tr_hunt_amps_s_pm: "tr_hunt_amps_s_pm",
    tr_hunt_monument_s_pm: "tr_hunt_monument_s_pm",
    tr_hunt_skull_s_pm: "tr_hunt_skull_s_pm",
    tr_hunt_estates_s_pm: "tr_hunt_estates_s_pm",
    tr_hunt_thunderdome_s_pm: "tr_hunt_thunderdome_s_pm",
  },
}

export default function LobbyManagement({ simulatedLobbyData, updateSimulatedLobbyData, isSimulated }) {
  const { isInLobby, lobbyId } = useLobby()
  const [lobbyData, setLobbyData] = useState({ players: {}, settings: {} })
  const [activeTab, setActiveTab] = useState("unassigned")
  const [error, setError] = useState(null)

  const fetchLobbyData = useCallback(async () => {
    if (isInLobby && lobbyId) {
      try {
        const [playersData, settingsData] = await Promise.all([api.getLobbyPlayers(), api.getMatchSettings()])
        setLobbyData({ players: playersData.result, settings: settingsData })
        setError(null)
      } catch (error) {
        console.error("Error fetching lobby data:", error)
        setError({
          message: `Failed to fetch lobby data: ${error.message}`,
          details: error.response ? await error.response.text() : "No additional details available",
        })
      }
    }
  }, [isInLobby, lobbyId])

  useEffect(() => {
    fetchLobbyData()

    const intervalId = setInterval(fetchLobbyData, 5000)

    return () => clearInterval(intervalId)
  }, [fetchLobbyData])

  const handleSettingsChange = async (newSettings) => {
    if (isSimulated) {
      updateSimulatedLobbyData({ settings: newSettings })
    } else {
      try {
        await api.setSettings(newSettings)
        setLobbyData((prevData) => ({ ...prevData, settings: newSettings }))
      } catch (error) {
        console.error("Error updating lobby settings:", error)
        setError({
          message: `Failed to update lobby settings: ${error.message}`,
          details: error.response ? await error.response.text() : "No additional details available",
        })
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
        await api.setTeamName(teamId, newName)
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
        setError({
          message: `Failed to update team name: ${error.message}`,
          details: error.response ? await error.response.text() : "No additional details available",
        })
      }
    }
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            <p>{error.message}</p>
            <details className="mt-2">
              <summary className="cursor-pointer">View Details</summary>
              <pre className="mt-2 whitespace-pre-wrap text-xs">{error.details}</pre>
            </details>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

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

  const matchName = isSimulated ? simulatedLobbyData.settings?.matchName : lobbyData.settings?.matchName
  const isDuoMode = matchName && matchName.toLowerCase().includes("duo")
  const maxTeams = isDuoMode ? 30 : 20

  const teams = Array.from({ length: maxTeams }, (_, index) => {
    const teamId = (index + 2).toString()
    const team = (isSimulated ? simulatedLobbyData.players : lobbyData.players || {})[teamId] || {
      name: `Team ${index + 1}`,
      players: [],
      logoUrl: "",
      spawnPoint: 0,
    }
    return {
      id: teamId,
      name: team.name,
      players: team.players || [],
      logoUrl: team.logoUrl || `/team-logos/team-${teamId}.png`,
      spawnPoint: team.spawnPoint,
    }
  })

  const unassignedTeam = (isSimulated ? simulatedLobbyData.players : lobbyData.players || {})["0"] || {
    name: "Unassigned",
    players: [],
    logoUrl: "",
    spawnPoint: 0,
  }
  const observerTeam = (isSimulated ? simulatedLobbyData.players : lobbyData.players || {})["1"] || {
    name: "Observers",
    players: [],
    logoUrl: "",
    spawnPoint: 0,
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1 space-y-6">
        <LobbySettings
          settings={isSimulated ? simulatedLobbyData.settings : lobbyData.settings}
          onSettingsChange={handleSettingsChange}
          lobbyOptions={lobbyOptions}
        />
        <Card>
          <CardHeader>
            <CardTitle>Player Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="unassigned" className="flex-1">
                  Unassigned
                </TabsTrigger>
                <TabsTrigger value="observer" className="flex-1">
                  Observers
                </TabsTrigger>
              </TabsList>
              <TabsContent value="unassigned">
                <PlayerTable players={unassignedTeam.players || []} />
              </TabsContent>
              <TabsContent value="observer">
                <PlayerTable players={observerTeam.players || []} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-3 grid grid-cols-5 gap-4">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} onTeamNameChange={handleTeamNameChange} logoUrl={team.logoUrl} />
        ))}
      </div>
    </div>
  )
}

