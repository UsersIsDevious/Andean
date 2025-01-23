"use client"

import { useState } from "react"
import { RequestButton } from "./request-button"
import { Input } from "@/components/ui/input"
import { ConfigInput } from "./config-input"
import { useConfig } from "../../hooks/use-config"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Check, X, Users, Play, Pause, Calculator, Shield } from "lucide-react"

export default function MatchManagement() {
  const [readyStatus, setReadyStatus] = useState(false)
  const [lobbyId, setLobbyId] = useState("")
  const { config, updateConfig } = useConfig()

  const handleRankPointsChange = (index, value) => {
    const newRankPoints = [...config.rankPoints]
    newRankPoints[index] = Number.parseInt(value, 10)
    updateConfig({ ...config, rankPoints: newRankPoints })
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
                placeholder="Enter Lobby ID"
                value={lobbyId}
                onChange={(e) => setLobbyId(e.target.value)}
                className="flex-1"
              />
            </div>
            <RequestButton
              url={lobbyId ? "/api/join_lobby" : "/api/create_lobby"}
              method="POST"
              body={lobbyId ? { token: lobbyId } : undefined}
              onSuccess={(data) => {
                if (!lobbyId) {
                  setLobbyId(data.lobbyId)
                }
                alert(lobbyId ? "Joined lobby successfully" : `Created lobby with ID: ${data.lobbyId}`)
              }}
              className="flex items-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>{lobbyId ? "Join Lobby" : "Create Lobby"}</span>
            </RequestButton>
          </div>
          <div className="flex space-x-4">
            <RequestButton
              url="/api/set_ready"
              method="POST"
              body={{ ready: !readyStatus }}
              onSuccess={() => setReadyStatus(!readyStatus)}
              variant={readyStatus ? "outline" : "default"}
              className="flex items-center space-x-2"
            >
              {readyStatus ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
              <span>{readyStatus ? "Set Not Ready" : "Set Ready"}</span>
            </RequestButton>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Point Settings</CardTitle>
          <CardDescription>Configure scoring rules and calculate results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <ConfigInput configKey="pointsPerKill" label="Points per Kill" type="number" />
            <ConfigInput configKey="maxKills" label="Max Kills" type="number" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="w-12 text-sm text-muted-foreground">{`Rank ${index + 1}`}</span>
                <Input
                  type="number"
                  placeholder={`Points`}
                  value={config?.rankPoints?.[index] || ""}
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

