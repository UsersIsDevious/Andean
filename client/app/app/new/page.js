'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SystemManagement from "../../../components/new/system/SystemManagement"
import SettingsManagement from "../../../components/new/settings/SettingsManagement"
import MatchManagement from "../../../components/new/match/MatchManagement"
import CameraSettings from "../../../components/new/camera/CameraSettings"
import LobbyManagement from "../../../components/new/lobby/LobbyManagement"
import { Settings, Users, Camera, Gamepad2, LayoutDashboard } from 'lucide-react'
import { TOTAL_TEAMS, POI_OPTIONS } from '../../../config/constants'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

export default function ControlPanel() {
  const [activeTab, setActiveTab] = useState("system")
  const [cameraType, setCameraType] = useState('poi')
  const [selectedPOI, setSelectedPOI] = useState('')
  const [selectedPlayer, setSelectedPlayer] = useState('')
  const [playerNames, setPlayerNames] = useState([])

  const tabData = [
    { value: "system", label: "システム管理", icon: LayoutDashboard },
    { value: "match", label: "マッチ管理", icon: Gamepad2 },
    { value: "lobby", label: "ロビー管理", icon: Users },
    { value: "camera", label: "カメラ設定", icon: Camera },
    { value: "settings", label: "設定", icon: Settings },
  ]

  useEffect(() => {
    // This is a placeholder. In a real application, you would fetch this data from your API
    setPlayerNames(['Player1', 'Player2', 'Player3', 'Player4', 'Player5'])
  }, [])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8">コントロールパネル</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 gap-2 mb-8 bg-gray-800 rounded-xl relative overflow-hidden pb-[41px]">
              {tabData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`flex items-center justify-center space-x-2 py-2 px-3 rounded-lg transition-all duration-300 text-sm relative ${
                    activeTab === tab.value
                      ? 'text-white z-10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {activeTab === tab.value && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="system">
                  <SystemManagement />
                </TabsContent>
                <TabsContent value="match">
                  <MatchManagement />
                </TabsContent>
                <TabsContent value="lobby">
                  <LobbyManagement />
                </TabsContent>
                <TabsContent value="camera">
                  <CameraSettings 
                    cameraType={cameraType}
                    setCameraType={setCameraType}
                    selectedPOI={selectedPOI}
                    setSelectedPOI={setSelectedPOI}
                    selectedPlayer={selectedPlayer}
                    setSelectedPlayer={setSelectedPlayer}
                    poiOptions={POI_OPTIONS}
                    playerNames={playerNames}
                  />
                </TabsContent>
                <TabsContent value="settings">
                  <SettingsManagement />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </ErrorBoundary>
  )
}

