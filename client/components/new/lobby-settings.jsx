import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Shield } from "lucide-react"

export function LobbySettings({ settings, onSettingsChange }) {
  const [localSettings, setLocalSettings] = useState(settings)

  useEffect(() => {
    setLocalSettings(settings)
  }, [settings])

  const handleSettingChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value }
    setLocalSettings(newSettings)
    onSettingsChange(newSettings)
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
              Game Mode & Map
            </Label>
            <Select
              id="gameMode"
              value={localSettings?.gameMode}
              onValueChange={(value) => handleSettingChange("gameMode", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select game mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="battle_royale">Battle Royale</SelectItem>
                <SelectItem value="team_deathmatch">Team Deathmatch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="teamNameChange" className="text-sm">
                Team Name Changes
              </Label>
              <Switch
                id="teamNameChange"
                checked={localSettings?.allowTeamNameChange}
                onCheckedChange={(checked) => handleSettingChange("allowTeamNameChange", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="selfAssignment" className="text-sm">
                Self Assignment
              </Label>
              <Switch
                id="selfAssignment"
                checked={localSettings?.selfAssignment}
                onCheckedChange={(checked) => handleSettingChange("selfAssignment", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="aimAssist" className="text-sm">
                Aim Assist
              </Label>
              <Switch
                id="aimAssist"
                checked={localSettings?.aimAssist}
                onCheckedChange={(checked) => handleSettingChange("aimAssist", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="adminChat" className="text-sm">
                Admin Chat
              </Label>
              <Switch
                id="adminChat"
                checked={localSettings?.adminChat}
                onCheckedChange={(checked) => handleSettingChange("adminChat", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="anonymousMode" className="text-sm">
                Anonymous Mode
              </Label>
              <Switch
                id="anonymousMode"
                checked={localSettings?.anonymousMode}
                onCheckedChange={(checked) => handleSettingChange("anonymousMode", checked)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

