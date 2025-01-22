"use client"

import { useState } from "react"
import { ConfigInput } from "./config-input"
import { RequestButton } from "./request-button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Globe, Network, Folder, Save, RefreshCw, Bug } from "lucide-react"

export default function Settings({ config, updateConfig, updateSimulatedLobbyData }) {
  const [showDebug, setShowDebug] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>Game Settings</span>
          </CardTitle>
          <CardDescription>Configure game-related options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="gameLanguage">Game Language</Label>
            <Select id="gameLanguage">
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ConfigInput configKey="logDirectory" label="Log Directory" />
          <ConfigInput configKey="commandOptions" label="Command Options" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Network className="w-5 h-5" />
            <span>Network Settings</span>
          </CardTitle>
          <CardDescription>Configure network-related options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ConfigInput configKey="websocketPort" label="WebSocket Port" type="number" defaultValue="7777" />
          <ConfigInput configKey="dataFrequency" label="Data Frequency (per second)" type="number" defaultValue="60" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Folder className="w-5 h-5" />
            <span>File Management</span>
          </CardTitle>
          <CardDescription>Set file paths for various operations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ConfigInput configKey="exportDirectory" label="Data Export Directory" />
          <ConfigInput configKey="gameInstallDirectory" label="Game Installation Directory" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Save className="w-5 h-5" />
            <span>Configuration Management</span>
          </CardTitle>
          <CardDescription>Save or reset your configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <RequestButton
              url="/api/saveConfig"
              method="POST"
              onSuccess={() => alert("Settings saved successfully")}
              onError={(error) => alert(`Failed to save settings: ${error}`)}
              className="flex items-center space-x-2 w-full justify-center"
            >
              <Save className="w-4 h-4" />
              <span>Save Settings</span>
            </RequestButton>
            <RequestButton
              url="/api/resetConfig"
              method="POST"
              onSuccess={() => {
                if (confirm("Are you sure you want to reset all settings to default? This action cannot be undone.")) {
                  alert("Settings reset to default")
                }
              }}
              onError={(error) => alert(`Failed to reset settings: ${error}`)}
              variant="destructive"
              className="flex items-center space-x-2 w-full justify-center"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset to Default</span>
            </RequestButton>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bug className="w-5 h-5" />
            <span>Debug Options</span>
          </CardTitle>
          <CardDescription>Advanced settings for debugging</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="showDebug"
              checked={showDebug}
              onCheckedChange={setShowDebug}
              className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-600"
            />
            <Label htmlFor="showDebug" className="text-gray-300">
              Show Debug Options
            </Label>
          </div>
          {showDebug && (
            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="simulateLobby"
                  checked={config?.simulateLobby ?? false}
                  onCheckedChange={(checked) => {
                    updateConfig({ ...config, simulateLobby: checked })
                    if (checked) {
                      updateSimulatedLobbyData({
                        isInLobby: true,
                        lobbyPlayers: [],
                        matchSettings: null,
                        teams: [],
                      })
                    }
                  }}
                  className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-600"
                />
                <Label htmlFor="simulateLobby" className="text-gray-300">
                  Simulate Lobby Join
                </Label>
              </div>
              <RequestButton
                url="/api/togglePeriodicFetch"
                method="POST"
                onSuccess={(data) => alert(`Periodic fetch ${data.enabled ? "enabled" : "disabled"}`)}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Toggle Periodic Fetch</span>
              </RequestButton>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

