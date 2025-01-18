'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SystemManagement from "../../../components/new/SystemManagement"
import SettingsManagement from "../../../components/new/SettingsManagement"
import MatchManagement from "../../../components/new/MatchManagement"
import CameraSettings from "../../../components/new/CameraSettings"
import LobbyManagement from "../../../components/new/LobbyManagement"
import { Settings, Users, Camera, Gamepad2, LayoutDashboard } from 'lucide-react'

// Constants
const MAX_PLAYERS_PER_TEAM = 3;
const TOTAL_TEAMS = 20;
const poiOptions = ['KillReader', 'NEXT', 'SpectatorView', 'OverviewMap']
const playerNames = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'] // This should be fetched from your data source

export default function ControlPanel() {
  const [activeTab, setActiveTab] = useState("system")
  
  // Lobby Management State
  const [teams, setTeams] = useState(() => {
    return Array.from({ length: TOTAL_TEAMS }, (_, i) => ({
      id: `team-${i + 1}`,
      name: `Team ${i + 1}`,
      players: [],
      image: '/placeholder.svg?height=32&width=32',
    }));
  });
  const [observers, setObservers] = useState([]);
  const [unassigned, setUnassigned] = useState([]);
  const [warningsEnabled, setWarningsEnabled] = useState(true)

  // Camera Settings State
  const [cameraType, setCameraType] = useState('poi')
  const [selectedPOI, setSelectedPOI] = useState('')
  const [selectedPlayer, setSelectedPlayer] = useState('')

  // Match Management State
  const [killPoints, setKillPoints] = useState(1)
  const [maxKills, setMaxKills] = useState(20)
  const [rankPoints, setRankPoints] = useState(Array(TOTAL_TEAMS).fill(0))
  const [lobbyId, setLobbyId] = useState("")

  // Settings Management State
  const [language, setLanguage] = useState("日本語")
  const [logPath, setLogPath] = useState("")
  const [commandOptions, setCommandOptions] = useState("")
  const [websocketPort, setWebsocketPort] = useState("7777")
  const [dataFrequency, setDataFrequency] = useState("60")
  const [exportPath, setExportPath] = useState("")
  const [gamePath, setGamePath] = useState("")

  const tabData = [
    { value: "system", label: "システム管理", icon: LayoutDashboard },
    { value: "match", label: "マッチ管理", icon: Gamepad2 },
    { value: "lobby", label: "ロビー管理", icon: Users },
    { value: "camera", label: "カメラ設定", icon: Camera },
    { value: "settings", label: "設定", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8">コントロールパネル</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 gap-2 mb-8 bg-gray-800 rounded-xl relative overflow-hidden">
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
                <MatchManagement 
                  killPoints={killPoints}
                  setKillPoints={setKillPoints}
                  maxKills={maxKills}
                  setMaxKills={setMaxKills}
                  rankPoints={rankPoints}
                  setRankPoints={setRankPoints}
                  lobbyId={lobbyId}
                  setLobbyId={setLobbyId}
                />
              </TabsContent>
              <TabsContent value="lobby">
                <LobbyManagement 
                  teams={teams}
                  setTeams={setTeams}
                  observers={observers}
                  setObservers={setObservers}
                  unassigned={unassigned}
                  setUnassigned={setUnassigned}
                  warningsEnabled={warningsEnabled}
                  setWarningsEnabled={setWarningsEnabled}
                />
              </TabsContent>
              <TabsContent value="camera">
                <CameraSettings 
                  cameraType={cameraType}
                  setCameraType={setCameraType}
                  selectedPOI={selectedPOI}
                  setSelectedPOI={setSelectedPOI}
                  selectedPlayer={selectedPlayer}
                  setSelectedPlayer={setSelectedPlayer}
                  poiOptions={poiOptions}
                  playerNames={playerNames}
                />
              </TabsContent>
              <TabsContent value="settings">
                <SettingsManagement 
                  language={language}
                  setLanguage={setLanguage}
                  logPath={logPath}
                  setLogPath={setLogPath}
                  commandOptions={commandOptions}
                  setCommandOptions={setCommandOptions}
                  websocketPort={websocketPort}
                  setWebsocketPort={setWebsocketPort}
                  dataFrequency={dataFrequency}
                  setDataFrequency={setDataFrequency}
                  exportPath={exportPath}
                  setExportPath={setExportPath}
                  gamePath={gamePath}
                  setGamePath={setGamePath}
                />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </div>
  )
}

