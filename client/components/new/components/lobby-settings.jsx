"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Shield } from "lucide-react"
import { api } from "../services/api"

export function LobbySettings({ settings = {}, onSettingsChange, lobbyOptions }) {
  const [localSettings, setLocalSettings] = useState({
    playlistname: settings.playlistname || "can_hu_cm", // Use map as playlistname
    adminchat: settings.adminchat || false,
    teamrename: settings.teamrename || false,
    selfassign: settings.selfassign || false,
    aimassist: settings.aimassist || false,
    anonmode: settings.anonmode || false,
    maxPlayers: settings.maxPlayers || 60,
    maxTeams: settings.maxTeams || 20,
    gameMode: settings.gamemode || "CUSTOMMATCH_BR_TRIOS",
    map: settings.map || "can_hu_cm",
  })

  useEffect(() => {
    setLocalSettings({
      playlistname: settings.playlistname || "can_hu_cm", // Use map as playlistname
      adminchat: settings.adminchat || false,
      teamrename: settings.teamrename || false,
      selfassign: settings.selfassign || false,
      aimassist: settings.aimassist || false,
      anonmode: settings.anonmode || false,
      maxPlayers: settings.maxPlayers || 60,
      maxTeams: settings.maxTeams || 20,
      gameMode: settings.gamemode || "CUSTOMMATCH_BR_TRIOS",
      map: settings.map || "can_hu_cm",
    })
  }, [settings])

  const handleSettingChange = async (key, value) => {
    const newSettings = { ...localSettings, [key]: value }

    // Update playlistname when gameMode or map changes
    if (key === "gameMode" || key === "map") {
      const selectedMap = key === "map" ? value : localSettings.playlistname
      const selectedGameMode = key === "gameMode" ? value : localSettings.gameMode
      newSettings.playlistname = selectedMap // Use the map key as playlistname
      newSettings.gameMode = selectedGameMode
    }

    setLocalSettings(newSettings)

    try {
      await api.setSettings(newSettings)
      onSettingsChange(newSettings)
    } catch (error) {
      console.error("Error updating settings:", error)
      setLocalSettings(localSettings)
    }
  }

  return (
    <Card className="w-full border-2 border-yellow-500">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-yellow-500" />
          <CardTitle>Lobby Settings</CardTitle>
        </div>
        <CardDescription className="text-yellow-500 font-semibold">Administrator Only</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="gameMode" className="text-sm font-medium">
              Game Mode
            </Label>
            <Select
              id="gameMode"
              value={localSettings.gameMode}
              onValueChange={(value) => handleSettingChange("gameMode", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select game mode" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(lobbyOptions).map((mode) => (
                  <SelectItem key={mode} value={mode}>
                    {mode}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="map" className="text-sm font-medium">
              Map
            </Label>
            <Select id="map" value={localSettings.playlistname} onValueChange={(value) => handleSettingChange("map", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select map" />
              </SelectTrigger>
              <SelectContent>
                {lobbyOptions[localSettings.gameMode] &&
                  Object.entries(lobbyOptions[localSettings.gameMode]).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="teamrename" className="text-sm">
                Team Name Changes
              </Label>
              <Switch
                id="teamrename"
                checked={localSettings.teamrename}
                onCheckedChange={(checked) => handleSettingChange("teamrename", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="selfassign" className="text-sm">
                Self Assignment
              </Label>
              <Switch
                id="selfassign"
                checked={localSettings.selfassign}
                onCheckedChange={(checked) => handleSettingChange("selfassign", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="aimassist" className="text-sm">
                Aim Assist
              </Label>
              <Switch
                id="aimassist"
                checked={localSettings.aimassist}
                onCheckedChange={(checked) => handleSettingChange("aimassist", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="adminchat" className="text-sm">
                Admin Chat
              </Label>
              <Switch
                id="adminchat"
                checked={localSettings.adminchat}
                onCheckedChange={(checked) => handleSettingChange("adminchat", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="anonmode" className="text-sm">
                Anonymous Mode
              </Label>
              <Switch
                id="anonmode"
                checked={localSettings.anonmode}
                onCheckedChange={(checked) => handleSettingChange("anonmode", checked)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

