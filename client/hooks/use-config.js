"use client"

import { useState, useEffect } from "react"
import { fetchWithTimeout } from "../lib/utils"

export function useConfig() {
  const [config, setConfig] = useState({})

  useEffect(() => {
    fetchConfig()
  }, [])

  const fetchConfig = async () => {
    try {
      const response = await fetchWithTimeout("/loadConfig")
      if (response.ok) {
        const data = await response.json()
        setConfig(data || {})
      } else {
        console.error("Failed to fetch config")
      }
    } catch (error) {
      console.error("Error fetching config:", error)
    }
  }

  const updateConfig = async (newConfig) => {
    try {
      const response = await fetchWithTimeout("/saveConfig", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConfig),
      })
      if (response.ok) {
        setConfig(newConfig)
      } else {
        console.error("Failed to update config")
      }
    } catch (error) {
      console.error("Error updating config:", error)
    }
  }

  return { config, updateConfig, fetchConfig }
}

