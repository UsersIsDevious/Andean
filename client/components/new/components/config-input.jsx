"use client"

import { Input } from "./ui/input"
import { Label } from "@/components/ui/label"

export function ConfigInput({ configKey, label, type = "text", value, onChange, ...props }) {
  const handleChange = (e) => {
    const newValue = e.target.type === "number" ? Number(e.target.value) : e.target.value
    onChange(newValue)
  }

  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor={configKey}>{label}</Label>
      <Input id={configKey} type={type} value={value} onChange={handleChange} {...props} />
    </div>
  )
}

