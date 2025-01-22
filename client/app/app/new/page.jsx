"use client"

import { useState } from "react"
import Layout from "./components/layout"
import { useConfig } from "./hooks/use-config"

export default function Home() {
  const { config = {}, updateConfig } = useConfig()
  const [simulatedLobbyData, setSimulatedLobbyData] = useState({
    isInLobby: false,
    lobbyPlayers: [],
    matchSettings: null,
    teams: [],
  })

  // Function to update simulated lobby data
  const updateSimulatedLobbyData = (newData) => {
    setSimulatedLobbyData((prevData) => ({ ...prevData, ...newData }))
  }

  return (
    <Layout
      config={config}
      updateConfig={updateConfig}
      simulatedLobbyData={simulatedLobbyData}
      updateSimulatedLobbyData={updateSimulatedLobbyData}
    />
  )
}

