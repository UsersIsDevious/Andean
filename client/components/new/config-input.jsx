"use client"

import { useState, useEffect } from "react"
import { Input } from "./ui/input"
import { useConfig } from "../hooks/use-config"

export function ConfigInput({ configKey, label, type = "text", ...props }) {
  const { config, updateConfig } = useConfig()
  const [value, setValue] = useState("")

  useEffect(() => {
    if (config && config[configKey] !== undefined) {
      setValue(config[configKey])
    }
  }, [config, configKey])

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    updateConfig({ ...config, [configKey]: newValue })
  }

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={configKey}>{label}</label>
      <Input id={configKey} type={type} value={value} onChange={handleChange} {...props} />
    </div>
  )
}

