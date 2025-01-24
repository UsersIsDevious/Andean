"use client"

import { useState, useEffect } from "react"
import { api } from "../services/api"

export function useConfig() {
  const [config, setConfig] = useState({})

  const fetchConfig = async () => {
    try {
      const data = await api.loadConfig()
      setConfig(data || {})
      return data
    } catch (error) {
      console.error("Error fetching config:", error)
    }
  }

  // useEffect(() => {
  //   fetchConfig()
  // }, [])

  const updateConfig = async (newConfig) => {
    try {
      await api.saveConfig(newConfig)
      setConfig(newConfig)
    } catch (error) {
      console.error("Error updating config:", error)
    }
  }

  return { config, updateConfig, fetchConfig }
}

