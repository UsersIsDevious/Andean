"use client"
import { Settings, Play, Sliders, Server } from "lucide-react"

interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const activeTabStyle = {
    backgroundColor: "rgba(139, 0, 0, 0.2)",
    color: "#f87171", // red-400
  }

  return (
    <div className="mb-6">
      <div className="grid grid-cols-5 bg-gray-900/50 border border-red-900/20 rounded-md overflow-hidden">
        <button
          onClick={() => onTabChange("system")}
          className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "system" ? "text-red-400" : "text-gray-300"}`}
          style={activeTab === "system" ? activeTabStyle : {}}
        >
          <Settings className="mr-2 h-4 w-4" />
          システム
        </button>
        <button
          onClick={() => onTabChange("match")}
          className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "match" ? "text-red-400" : "text-gray-300"}`}
          style={activeTab === "match" ? activeTabStyle : {}}
        >
          <Play className="mr-2 h-4 w-4" />
          マッチ
        </button>
        <button
          onClick={() => onTabChange("lobby")}
          className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "lobby" ? "text-red-400" : "text-gray-300"}`}
          style={activeTab === "lobby" ? activeTabStyle : {}}
        >
          <Server className="mr-2 h-4 w-4" />
          ロビー
        </button>
        <button
          onClick={() => onTabChange("camera")}
          className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "camera" ? "text-red-400" : "text-gray-300"}`}
          style={activeTab === "camera" ? activeTabStyle : {}}
        >
          <svg className="mr-2 h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 10L19.5528 7.72361C19.8343 7.58281 20 7.30339 20 7V17C20 17.3034 19.8343 17.5828 19.5528 17.7236L15 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="6"
              width="12"
              height="12"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          カメラ
        </button>
        <button
          onClick={() => onTabChange("setting")}
          className={`flex items-center justify-center py-2 px-4 text-sm font-medium ${activeTab === "setting" ? "text-red-400" : "text-gray-300"}`}
          style={activeTab === "setting" ? activeTabStyle : {}}
        >
          <Sliders className="mr-2 h-4 w-4" />
          設定
        </button>
      </div>
    </div>
  )
}

