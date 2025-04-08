"use client"

import { Settings } from "lucide-react"
import type { CSSProperties } from "react"

export default function Header() {
  // Custom styles
  const headerStyle: CSSProperties = {
    borderBottom: "1px solid rgba(139, 0, 0, 0.3)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8px)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  }

  const gradientTextStyle = {
    backgroundImage: "linear-gradient(to right, #ef4444, #b91c1c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  }

  return (
    <header style={headerStyle}>
      <div className="px-[100px] py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6 text-red-500" />
          <h1 className="text-2xl font-bold" style={gradientTextStyle}>
            AndeanControlPanel
          </h1>
        </div>
        <div className="border border-red-500 text-red-400 rounded-md px-2 py-1 text-xs font-medium">v1.0.0</div>
      </div>
    </header>
  )
}

