"use client"

import { useState, useEffect } from "react"
import { RequestButton } from "./request-button"
import { Input } from "@/components/ui/input"
import { ConfigInput } from "./config-input"
// import { useConfig } from "../hooks/use-config" //Removed as per update 5
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Check, X, Users, Play, Pause, Calculator, Shield, LogOut } from "lucide-react"
import { useLobby } from "../contexts/LobbyContext"
import { Button } from "@/components/ui/button"

export default function MatchManagement({ config, updateConfig }) {
  const [readyStatus, setReadyStatus] = useState(false)
  const [lobbyIdInput, setLobbyIdInput] = useState("")
  // Remove the following line:
  // const { config, updateConfig } = useConfig()
  const { lobbyId, isInLobby, joinLobby, leaveLobby } = useLobby()
  const [rankPoints, setRankPoints] = useState(Array(20).fill(0))

  useEffect(() => {
    if (config.score_setting && config.score_setting.rank_points) {
      setRankPoints(config.score_setting.rank_points)
    }
  }, [config.score_setting])

  const handleRankPointsChange = (index, value) => {
    const newRankPoints = [...rankPoints]
    newRankPoints[index] = Number.parseInt(value, 10)
    setRankPoints(newRankPoints)
    updateConfig({
      ...config,
      score_setting: {
        ...config.score_setting,
        rank_points: newRankPoints,
      },
    })
  }

  const handleJoinOrCreateLobby = async () => {
    if (isInLobby) {
      alert("You are already in a lobby. Please leave the current lobby first.")
      return
    }

    try {
      const response = await fetch(lobbyIdInput ? "/api/join_lobby" : "/api/create_lobby", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: lobbyIdInput ? JSON.stringify({ token: lobbyIdInput }) : undefined,
      })

      if (response.ok) {
        const data = await response.json()
        const newLobbyId = lobbyIdInput || data.lobbyId
        joinLobby(newLobbyId)
        alert(lobbyIdInput ? "Joined lobby successfully" : `Created lobby with ID: ${newLobbyId}`)
        setLobbyIdInput("")
      } else {
        throw new Error("Failed to join or create lobby")
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }

  const handleLeaveLobby = async () => {
    try {
      const response = await fetch("/api/leave_lobby", {
        method: "POST",
      })

      if (response.ok) {
        leaveLobby()
        alert("Left lobby successfully")
      } else {
        throw new Error("Failed to leave lobby")
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Match Controls</CardTitle>
          <CardDescription>Manage match settings and status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center space-x-4 flex-1">
              <Label htmlFor="lobbyId" className="whitespace-nowrap">
                Lobby ID
              </Label>
              <Input
                id="lobbyId"
                placeholder={isInLobby ? lobbyId : "Enter Lobby ID"}
                value={lobbyIdInput}
                onChange={(e) => setLobbyIdInput(e.target.value)}
                className="flex-1"
                disabled={isInLobby}
              />
            </div>
            <Button onClick={handleJoinOrCreateLobby} disabled={isInLobby} className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>{lobbyIdInput ? "Join Lobby" : "Create Lobby"}</span>
            </Button>
          </div>
          <div className="flex space-x-4">
            <RequestButton
              url="/api/set_ready"
              method="POST"
              body={{ ready: !readyStatus }}
              onSuccess={() => setReadyStatus(!readyStatus)}
              variant={readyStatus ? "outline" : "default"}
              className="flex items-center space-x-2"
              disabled={!isInLobby}
            >
              {readyStatus ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
              <span>{readyStatus ? "Set Not Ready" : "Set Ready"}</span>
            </RequestButton>
          </div>
          <Button
            onClick={handleLeaveLobby}
            disabled={!isInLobby}
            className="flex items-center space-x-2 w-full justify-center"
            variant="secondary"
          >
            <LogOut className="w-4 h-4" />
            <span>Leave Lobby</span>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Point Settings</CardTitle>
          <CardDescription>Configure scoring rules and calculate results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <ConfigInput
              configKey="kill_point"
              label="Points per Kill"
              type="number"
              value={config.score_setting?.kill_point}
              onChange={(value) =>
                updateConfig({
                  ...config,
                  score_setting: { ...config.score_setting, kill_point: Number(value) },
                })
              }
            />
            <ConfigInput
              configKey="max_kill"
              label="Max Kills"
              type="number"
              value={config.score_setting?.max_kill}
              onChange={(value) =>
                updateConfig({
                  ...config,
                  score_setting: { ...config.score_setting, max_kill: Number(value) },
                })
              }
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {rankPoints.map((points, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="w-12 text-sm text-muted-foreground">{`Rank ${index + 1}`}</span>
                <Input
                  type="number"
                  placeholder={`Points`}
                  value={points}
                  onChange={(e) => handleRankPointsChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <RequestButton
            url="/api/score_calculation"
            method="GET"
            onSuccess={(data) => alert(`Score calculation complete: ${JSON.stringify(data)}`)}
            variant="outline"
            className="flex items-center space-x-2 w-full justify-center"
          >
            <Calculator className="w-4 h-4" />
            <span>Calculate Scores</span>
          </RequestButton>
        </CardContent>
      </Card>
      <Card className="border-2 border-yellow-500">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-yellow-500" />
            <CardTitle>Match Administration</CardTitle>
          </div>
          <CardDescription className="text-yellow-500 font-semibold">Administrator Only</CardDescription>
          <CardDescription>Control matchmaking and game flow</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <RequestButton
              url="/api/set_matchmaking"
              method="POST"
              body={{ status: "start" }}
              onSuccess={() => alert("Matchmaking started")}
              className="flex items-center space-x-2 w-full"
            >
              <Play className="w-4 h-4" />
              <span>Start Matchmaking</span>
            </RequestButton>
            <RequestButton
              url="/api/set_matchmaking"
              method="POST"
              body={{ status: "stop" }}
              onSuccess={() => alert("Matchmaking stopped")}
              variant="secondary"
              className="flex items-center space-x-2 w-full"
            >
              <Pause className="w-4 h-4" />
              <span>Stop Matchmaking</span>
            </RequestButton>
          </div>
          <div className="flex space-x-4 items-end">
            <div className="flex-1">
              <ConfigInput configKey="pauseTime" label="Pause Time (seconds)" type="number" />
            </div>
            <RequestButton
              url="/api/pause_toggle"
              method="POST"
              onSuccess={() => alert("Game paused/unpaused")}
              className="flex items-center space-x-2"
            >
              <Pause className="w-4 h-4" />
              <span>Toggle Pause</span>
            </RequestButton>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

