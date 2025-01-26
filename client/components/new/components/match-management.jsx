"use client"

import { useState, useEffect } from "react"
import { RequestButton } from "./request-button"
import { Input } from "@/components/ui/input"
import { ConfigInput } from "./config-input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Check, X, Users, Play, Pause, Calculator, Shield, LogOut } from "lucide-react"
import { useLobby } from "../contexts/LobbyContext"
import { Button } from "@/components/ui/button"
import { api } from "../services/api"

export default function MatchManagement({ config, updateConfig }) {
  const [readyStatus, setReadyStatus] = useState(false)
  const [lobbyIdInput, setLobbyIdInput] = useState("")
  const { lobbyId, isInLobby, joinLobby, leaveLobby } = useLobby()
  const [rankPoints, setRankPoints] = useState(Array(20).fill(0))
  const [matchmakingStatus, setMatchmakingStatus] = useState(false) // Updated state
  const [pauseTime, setPauseTime] = useState(0) // Added state

  useEffect(() => {
    if (config.score_setting && config.score_setting.rank_points) {
      setRankPoints(config.score_setting.rank_points)
    }
  }, [config.score_setting])

  const handleRankPointsChange = (index, value) => {
    const newRankPoints = [...rankPoints]
    newRankPoints[index] = Number.parseInt(value, 10)
    setRankPoints(newRankPoints)
    const newConfig = {
      score_setting: {
        ...config.score_setting,
        rank_points: newRankPoints,
      },
    }
    updateConfig(newConfig)
  }

  const handleJoinOrCreateLobby = async () => {
    if (isInLobby) {
      alert("You are already in a lobby. Please leave the current lobby first.")
      return
    }

    try {
      let data
      if (lobbyIdInput) {
        data = await api.joinLobby(lobbyIdInput)
      } else {
        data = await api.createLobby()
      }
      const newLobbyId = lobbyIdInput || data.lobbyId
      joinLobby(newLobbyId)
      alert(lobbyIdInput ? "Joined lobby successfully" : `Created lobby with ID: ${newLobbyId}`)
      setLobbyIdInput("")
    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }

  const handleLeaveLobby = async () => {
    try {
      await api.leaveLobby()
      leaveLobby()
      alert("Left lobby successfully")
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
          <div className="w-full">
            <Button
              onClick={async () => {
                try {
                  await api.setReady(!readyStatus)
                  setReadyStatus(!readyStatus)
                } catch (error) {
                  console.error("Failed to set ready status:", error)
                  alert(`Error: ${error.message}`)
                }
              }}
              variant={readyStatus ? "destructive" : "default"}
              className="flex items-center justify-center space-x-2 w-full"
              disabled={!isInLobby}
            >
              {readyStatus ? (
                <>
                  <X className="w-4 h-4" />
                  <span>Cancel Ready</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Set Ready</span>
                </>
              )}
            </Button>
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
              configKey="score_setting.kill_point"
              label="Points per Kill"
              type="number"
              value={config.score_setting?.kill_point}
              onChange={(value) => {
                const newConfig = {
                  score_setting: {
                    ...config.score_setting,
                    kill_point: Number(value),
                  },
                }
                updateConfig(newConfig)
              }}
            />
            <ConfigInput
              configKey="score_setting.max_kill"
              label="Max Kills"
              type="number"
              value={config.score_setting?.max_kill}
              onChange={(value) => {
                const newConfig = {
                  score_setting: {
                    ...config.score_setting,
                    max_kill: Number(value),
                  },
                }
                updateConfig(newConfig)
              }}
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
            onClick={async () => {
              try {
                const response = await fetch("/getScore", {method: "POST"})
                const data = await response.json()
                const scoreString = `${data.score}`
                await navigator.clipboard.writeText(scoreString)
                alert("Score copied to clipboard: " + scoreString)
              } catch (error) {
                console.error("Error calculating scores:", error)
                alert("Failed to calculate scores: " + error.message)
              }
            }}
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
          <div className="w-full">
            <Button
              onClick={async () => {
                const newStatus = !matchmakingStatus
                try {
                  await api.setMatchmaking(newStatus)
                  setMatchmakingStatus(newStatus)
                  alert(`Matchmaking ${newStatus ? "started" : "stopped"}`)
                } catch (error) {
                  alert(`Failed to ${newStatus ? "start" : "stop"} matchmaking: ${error.message}`)
                }
              }}
              className={`flex items-center justify-center space-x-2 w-full ${
                matchmakingStatus ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {matchmakingStatus ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Stop Matchmaking</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Start Matchmaking</span>
                </>
              )}
            </Button>
          </div>
          <div className="flex space-x-4 items-end">
            <div className="flex-1">
              <ConfigInput
                configKey="pauseTime"
                label="Pause Time (seconds)"
                type="number"
                value={pauseTime}
                onChange={(value) => setPauseTime(Number(value))}
              />
            </div>
            <RequestButton
              onClick={async () => {
                try {
                  await api.togglePause({ preTimer: pauseTime })
                  alert(`Game paused/unpaused with ${pauseTime} seconds pre-timer`)
                } catch (error) {
                  alert(`Failed to toggle pause: ${error.message}`)
                }
              }}
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