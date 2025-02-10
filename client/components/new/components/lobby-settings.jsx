"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Shield } from "lucide-react"
import { api } from "../services/api"

export function LobbySettings({ settings = {}, onSettingsChange }) {
  const [localSettings, setLocalSettings] = useState({
    playlistname: settings.playlistname || "can_hu_cm",
    adminchat: settings.adminchat || false,
    teamrename: settings.teamrename || false,
    selfassign: settings.selfassign || false,
    aimassist: settings.aimassist || false,
    anonmode: settings.anonmode || false,
    maxPlayers: settings.maxPlayers || 60,
    maxTeams: settings.maxTeams || 20,
    gameMode: settings.gameMode || "BATTLE ROYALE: TRIOS",
    map: settings.map || "mp_rr_canyonlands_hu",
  })

  useEffect(() => {
    setLocalSettings({
      playlistname: settings.playlistname || "can_hu_cm",
      adminchat: settings.adminchat || false,
      teamrename: settings.teamrename || false,
      selfassign: settings.selfassign || false,
      aimassist: settings.aimassist || false,
      anonmode: settings.anonmode || false,
      maxPlayers: settings.maxPlayers || 60,
      maxTeams: settings.maxTeams || 20,
      gameMode: settings.gameMode || "BATTLE ROYALE: TRIOS",
      map: settings.map || "mp_rr_canyonlands_hu",
    })
  }, [settings])

  const handleSettingChange = async (key, value) => {
    const newSettings = { ...localSettings, [key]: value }
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
            <Label htmlFor="playlistname" className="text-sm font-medium">
              Playlist Name
            </Label>
            <Select
              id="playlistname"
              value={localSettings.playlistname}
              onValueChange={(value) => handleSettingChange("playlistname", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select playlist name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="can_hu_cm">Kings Canyon</SelectItem>
                <SelectItem value="oly_mu2_cm">Olympus</SelectItem>
                <SelectItem value="district_cm">E-District</SelectItem>
                <SelectItem value="des_hu_cm">World's Edge</SelectItem>
                <SelectItem value="moon_cm">Broken Moon</SelectItem>
                <SelectItem value="tropic_mu2_cm">Storm Point</SelectItem>
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
          <Separator />
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
                <SelectItem value="BATTLE ROYALE: TRIOS">Battle Royale: Trios</SelectItem>
                <SelectItem value="BATTLE ROYALE: DUOS">Battle Royale: Duos</SelectItem>
                <SelectItem value="ARENAS: TRIOS">Arenas: Trios</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="map" className="text-sm font-medium">
              Map
            </Label>
            <Select id="map" value={localSettings.map} onValueChange={(value) => handleSettingChange("map", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select map" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mp_rr_canyonlands_hu">Canyon Lands</SelectItem>
                <SelectItem value="mp_rr_olympus">Olympus</SelectItem>
                <SelectItem value="mp_rr_kings_canyon">Kings Canyon</SelectItem>
                <SelectItem value="mp_rr_worlds_edge">World's Edge</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

