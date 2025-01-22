"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { Moon, Sun, Server, Users, Camera, SettingsIcon, Zap } from "lucide-react"
import SystemManagement from "./system-management"
import MatchManagement from "./match-management"
import LobbyManagement from "./lobby-management"
import CameraSettings from "./camera-settings"
import Settings from "./settings"
import { useLobby } from "../../hooks/use-lobby"

export default function Layout({ config, updateConfig, simulatedLobbyData, updateSimulatedLobbyData }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { isInLobby } = useLobby()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", isDarkMode ? "light" : "dark")
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 transition-colors duration-200 ease-in-out ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Game Control Panel
          </h1>
          <Button variant="outline" size="icon" onClick={toggleDarkMode} className="bg-gray-800 border-gray-700">
            {isDarkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
            )}
          </Button>
        </header>
        <Tabs defaultValue="system" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 gap-4 bg-gray-800 p-1 rounded-lg">
            <TabsTrigger value="system" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Server className="w-5 h-5 mr-2" />
              <span>System</span>
            </TabsTrigger>
            <TabsTrigger value="match" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Zap className="w-5 h-5 mr-2" />
              <span>Match</span>
            </TabsTrigger>
            <TabsTrigger value="lobby" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Users className="w-5 h-5 mr-2" />
              <span>Lobby</span>
            </TabsTrigger>
            <TabsTrigger value="camera" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Camera className="w-5 h-5 mr-2" />
              <span>Camera</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <SettingsIcon className="w-5 h-5 mr-2" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="system" className="space-y-4 animate-in fade-in-50">
            <SystemManagement />
          </TabsContent>
          <TabsContent value="match" className="space-y-4 animate-in fade-in-50">
            <MatchManagement />
          </TabsContent>
          <TabsContent value="lobby" className="space-y-4 animate-in fade-in-50">
            <LobbyManagement
              simulatedLobbyData={simulatedLobbyData}
              updateSimulatedLobbyData={updateSimulatedLobbyData}
              isSimulated={config?.simulateLobby ?? false}
            />
          </TabsContent>
          <TabsContent value="camera" className="space-y-4 animate-in fade-in-50">
            <CameraSettings
              isInLobby={isInLobby}
              isSimulated={config?.simulateLobby}
              simulatedLobbyData={simulatedLobbyData}
            />
          </TabsContent>
          <TabsContent value="settings" className="space-y-4 animate-in fade-in-50">
            <Settings config={config} updateConfig={updateConfig} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

