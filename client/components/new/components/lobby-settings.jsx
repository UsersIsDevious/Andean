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
    matchName: settings.matchName || "mp_rr_olympus",
    adminChat: settings.adminChat || false,
    teamRename: settings.teamRename || false,
    selfAssign: settings.selfAssign || false,
    aimAssist: settings.aimAssist || false,
    anonMode: settings.anonMode || false,
  })
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setLocalSettings({
      matchName: settings.matchName || "mp_rr_olympus",
      adminChat: settings.adminChat || false,
      teamRename: settings.teamRename || false,
      selfAssign: settings.selfAssign || false,
      aimAssist: settings.aimAssist || false,
      anonMode: settings.anonMode || false,
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
            <Label htmlFor="matchName" className="text-sm font-medium">
              Match Name
            </Label>
            <Select
              id="matchName"
              value={localSettings.matchName}
              onValueChange={(value) => handleSettingChange("matchName", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select match name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mp_rr_olympus">Olympus</SelectItem>
                <SelectItem value="mp_rr_kings_canyon">Kings Canyon</SelectItem>
                <SelectItem value="mp_rr_worlds_edge">World's Edge</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="teamRename" className="text-sm">
                Team Name Changes
              </Label>
              <Switch
                id="teamRename"
                checked={localSettings.teamRename}
                onCheckedChange={(checked) => handleSettingChange("teamRename", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="selfAssign" className="text-sm">
                Self Assignment
              </Label>
              <Switch
                id="selfAssign"
                checked={localSettings.selfAssign}
                onCheckedChange={(checked) => handleSettingChange("selfAssign", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="aimAssist" className="text-sm">
                Aim Assist
              </Label>
              <Switch
                id="aimAssist"
                checked={localSettings.aimAssist}
                onCheckedChange={(checked) => handleSettingChange("aimAssist", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="adminChat" className="text-sm">
                Admin Chat
              </Label>
              <Switch
                id="adminChat"
                checked={localSettings.adminChat}
                onCheckedChange={(checked) => handleSettingChange("adminChat", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="anonMode" className="text-sm">
                Anonymous Mode
              </Label>
              <Switch
                id="anonMode"
                checked={localSettings.anonMode}
                onCheckedChange={(checked) => handleSettingChange("anonMode", checked)}
              />
            </div>
          </div>
        </div>
        {/* {isLoading && <p className="text-sm text-muted-foreground mt-2">Updating settings...</p>} */}
      </CardContent>
    </Card>
  )
}

