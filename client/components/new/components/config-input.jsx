"use client"

import { useState, useEffect } from "react"
import { Input } from "./ui/input"
import { useConfig } from "../hooks/use-config"
import { Label } from "@/components/ui/label"

export function ConfigInput({ configKey, label, type = "text", ...props }) {
  const { config, updateConfig } = useConfig()
  const [value, setValue] = useState("")

  useEffect(() => {
    if (config) {
      const keys = configKey.split(".")
      let currentValue = config
      for (const key of keys) {
        if (currentValue && currentValue.hasOwnProperty(key)) {
          currentValue = currentValue[key]
        } else {
          currentValue = undefined
          break
        }
      }
      if (currentValue !== undefined) {
        setValue(currentValue)
      }
    }
  }, [config, configKey])

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    const keys = configKey.split(".")
    const lastKey = keys.pop()
    const currentConfig = { ...config }
    let pointer = currentConfig
    for (const key of keys) {
      if (!pointer[key]) pointer[key] = {}
      pointer = pointer[key]
    }
    pointer[lastKey] = newValue
    updateConfig(currentConfig)
  }

  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor={configKey}>{label}</Label>
      <Input id={configKey} type={type} value={value} onChange={handleChange} {...props} />
    </div>
  )
}

