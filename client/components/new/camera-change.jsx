"use client"

import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { SearchableDropdown } from "./ui/searchable-dropdown"
import { RequestButton } from "./request-button"
import { fetchWithTimeout } from "../lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { MapPin, User } from "lucide-react"

const POI_OPTIONS = [
  { value: "KillReader", label: "Kill Reader" },
  { value: "NEXT", label: "NEXT" },
  { value: "SpectatorView", label: "Spectator View" },
  { value: "OverviewMap", label: "Overview Map" },
]

export function CameraChange({ isSimulated, simulatedLobbyData }) {
  const [isPOI, setIsPOI] = useState(true)
  const [selectedOption, setSelectedOption] = useState("")
  const [players, setPlayers] = useState([])

  useEffect(() => {
    if (isSimulated) {
      setPlayers(simulatedLobbyData?.lobbyPlayers?.map((player) => ({ value: player.name, label: player.name })) || [])
    } else {
      const fetchPlayers = async () => {
        try {
          const response = await fetchWithTimeout("/api/get_lobby_players")
          if (response.ok) {
            const data = await response.json()
            setPlayers(data.map((player) => ({ value: player, label: player })))
          }
        } catch (error) {
          console.error("Error fetching players:", error)
        }
      }

      fetchPlayers()
      const interval = setInterval(fetchPlayers, 5000) // Fetch every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isSimulated, simulatedLobbyData])

  const handleCameraChange = async () => {
    if (isSimulated) {
      console.log(`Simulated camera change to ${isPOI ? "POI" : "Player"}: ${selectedOption}`)
      alert(`Simulated: Camera changed to ${isPOI ? "POI" : "Player"}: ${selectedOption}`)
    } else {
      try {
        const response = await fetchWithTimeout("/api/change_camera", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type: isPOI ? "POI" : "Player", target: selectedOption }),
        })
        if (response.ok) {
          alert("Camera changed successfully")
        } else {
          throw new Error("Failed to change camera")
        }
      } catch (error) {
        alert(`Failed to change camera: ${error.message}`)
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Camera Control</CardTitle>
        <CardDescription>Switch between POI and player views</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-secondary p-1 rounded-md">
          <ToggleGroup
            type="single"
            value={isPOI ? "poi" : "player"}
            onValueChange={(value) => setIsPOI(value === "poi")}
            className="grid grid-cols-2 w-full"
          >
            <ToggleGroupItem
              value="poi"
              aria-label="Switch to POI view"
              className="flex items-center justify-center space-x-2 py-3 px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              <MapPin className="h-5 w-5" />
              <span className="font-medium">POI View</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="player"
              aria-label="Switch to Player view"
              className="flex items-center justify-center space-x-2 py-3 px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              <User className="h-5 w-5" />
              <span className="font-medium">Player View</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <SearchableDropdown
          options={isPOI ? POI_OPTIONS : players}
          value={selectedOption}
          onChange={setSelectedOption}
          placeholder={isPOI ? "Select POI" : "Select Player"}
        />
        <RequestButton onClick={handleCameraChange} className="w-full">
          Change Camera
        </RequestButton>
      </CardContent>
    </Card>
  )
}

