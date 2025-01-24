"use client"

import { useState, useEffect } from "react"
import { ConfigInput } from "./config-input"
import { RequestButton } from "./request-button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Globe, Network, Folder, Save, RefreshCw, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { api } from "../services/api"

export default function Settings({ config: initialConfig, updateConfig }) {
  const [localConfig, setLocalConfig] = useState(initialConfig)
  const [showDebug, setShowDebug] = useState(false)

  useEffect(() => {
    setLocalConfig(initialConfig)
  }, [initialConfig])

  const handleLocalConfigChange = (key, value) => {
    setLocalConfig((prevConfig) => {
      const newConfig = { ...prevConfig }
      const keys = key.split(".")
      let current = newConfig
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {}
        current = current[keys[i]]
      }
      current[keys[keys.length - 1]] = value
      return newConfig
    })
  }

  const handleSaveSettings = async () => {
    try {
      await api.saveConfig(localConfig)
      alert("Settings saved successfully")
    } catch (error) {
      alert(`Error saving settings: ${error.message}`)
    }
  }

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
            <Label htmlFor="language">Game Language</Label>
            <Select
              id="language"
              value={localConfig.language || "en"}
              onValueChange={(value) => handleLocalConfigChange("language", value)}
            >
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
          <ConfigInput
            configKey="log_dir"
            label="Log Directory"
            value={localConfig.log_dir}
            onChange={(value) => handleLocalConfigChange("log_dir", value)}
          />
          <ConfigInput
            configKey="apexlegends.option"
            label="Command Options"
            value={localConfig.apexlegends?.option}
            onChange={(value) => handleLocalConfigChange("apexlegends.option", value)}
          />
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
          <ConfigInput
            configKey="apexlegends.api_port"
            label="WebSocket Port"
            type="number"
            value={localConfig.apexlegends?.api_port}
            onChange={(value) => handleLocalConfigChange("apexlegends.api_port", value)}
          />
          <ConfigInput
            configKey="data_fps"
            label="Data Frequency (per second)"
            type="number"
            value={localConfig.data_fps}
            onChange={(value) => handleLocalConfigChange("data_fps", value)}
          />
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
          <ConfigInput
            configKey="output"
            label="Data Export Directory"
            value={localConfig.output}
            onChange={(value) => handleLocalConfigChange("output", value)}
          />
          <ConfigInput
            configKey="apexlegends.path"
            label="Game Installation Directory"
            value={localConfig.apexlegends?.path}
            onChange={(value) => handleLocalConfigChange("apexlegends.path", value)}
          />
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
            <Button
              onClick={() => {
                if (confirm("Are you sure you want to save these settings?")) {
                  handleSaveSettings()
                }
              }}
              className="flex items-center space-x-2 w-full justify-center"
            >
              <Save className="w-4 h-4" />
              <span>Save Settings</span>
            </Button>
            <RequestButton
              onClick={api.resetConfig}
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
                  checked={localConfig?.simulateLobby ?? false}
                  onCheckedChange={(checked) => handleLocalConfigChange("simulateLobby", checked)}
                  className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-600"
                />
                <Label htmlFor="simulateLobby" className="text-gray-300">
                  Simulate Lobby Join
                </Label>
              </div>
              <RequestButton
                onClick={api.togglePeriodicFetch}
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

