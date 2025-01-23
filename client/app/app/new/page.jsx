"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/new/components/layout"
import { useConfig } from "@/components/new/hooks/use-config"
import { LobbyProvider } from "@/components/new/contexts/LobbyContext"

export default function Home() {
  const { config, updateConfig, fetchConfig } = useConfig()
  const [pageConfig, setPageConfig] = useState({})
  const [simulatedLobbyData, setSimulatedLobbyData] = useState({
    isInLobby: false,
    lobbyPlayers: [],
    matchSettings: null,
    teams: [],
  })

  useEffect(() => {
    const loadConfig = async () => {
      const loadedConfig = await fetchConfig()
      setPageConfig(loadedConfig || {})
    }
    loadConfig()
  }, [])

  // Function to update simulated lobby data
  const updateSimulatedLobbyData = (newData) => {
    setSimulatedLobbyData((prevData) => ({ ...prevData, ...newData }))
  }

  return (
    <LobbyProvider>
      <Layout
        config={pageConfig}
        updateConfig={updateConfig}
        simulatedLobbyData={simulatedLobbyData}
        updateSimulatedLobbyData={updateSimulatedLobbyData}
      />
    </LobbyProvider>
  )
}

