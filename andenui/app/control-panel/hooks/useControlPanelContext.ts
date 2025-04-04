"use client"

import { useContext } from "react"
import { ControlPanelContext } from "@/app/control-panel/components/context/ControlPanelProvider"

export const useControlPanelContext = () => {
  const context = useContext(ControlPanelContext)

  if (!context) {
    throw new Error("useControlPanelContext must be used within a ControlPanelProvider")
  }

  return context
}

