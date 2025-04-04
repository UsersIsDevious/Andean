"use client"

import { Camera, Search, Map, Eye, Server } from "lucide-react"
import { useControlPanelContext } from "@/app/control-panel/hooks/useControlPanelContext"

export default function CameraTab() {
  const {
    configData,
    cameraViewMode,
    setCameraViewMode,
    selectedPOI,
    setSelectedPOI,
    poiSearchQuery,
    setPoiSearchQuery,
    selectedPlayer,
    setSelectedPlayer,
    playerSearchQuery,
    setPlayerSearchQuery,
    handleCameraChange,
    getAllPlayers,
    poiOptions,
    setActiveTab,
  } = useControlPanelContext()

  // Custom styles
  const cardStyle = {
    backgroundColor: "#111827", // gray-900
    borderColor: "rgba(139, 0, 0, 0.3)",
    boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)",
  }

  const cardHeaderStyle = {
    backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)",
  }

  const inputStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "#1f2937", // gray-800
    color: "#e5e7eb", // gray-200
  }

  const buttonStyle = {
    backgroundColor: "#b91c1c", // red-700
    color: "white",
  }

  const buttonHoverStyle = {
    backgroundColor: "#991b1b", // red-800
  }

  const disabledButtonStyle = {
    backgroundColor: "#4b5563", // gray-600
    color: "white",
  }

  // Check if lobby is joined
  const isLobbyJoined = configData?.uiStatus?.isLobbyJoined || false

  if (!isLobbyJoined) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div style={cardStyle} className="rounded-lg overflow-hidden max-w-md w-full">
          <div style={cardHeaderStyle} className="px-6 py-4">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-bold text-red-400">カメラは利用できません</h2>
            </div>
            <p className="text-gray-400 text-sm mt-1">先にロビーに参加する必要があります</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-black/50 border border-gray-800 rounded-md p-4 text-center">
              <p className="text-gray-300 mb-4">カメラコントロールはロビーに参加した後でのみ利用できます。</p>
              <button
                onClick={() => {
                  setActiveTab("match")
                }}
                className="py-2 px-4 rounded-md text-white font-medium"
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                <Server className="inline-block mr-2 h-4 w-4" />
                マッチタブへ移動
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div style={cardStyle} className="rounded-lg overflow-hidden">
        <div style={cardHeaderStyle} className="px-6 py-4">
          <div className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-red-500" />
            <h2 className="text-xl font-bold text-red-400">カメラコントロール</h2>
          </div>
          <p className="text-gray-400 text-sm mt-1">カメラビューと観戦設定を管理</p>
        </div>
        <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>

        {/* Camera View Mode Toggle */}
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-900 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setCameraViewMode("poi")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  cameraViewMode === "poi"
                    ? "bg-red-700 text-white"
                    : "bg-transparent text-gray-400 hover:text-gray-200"
                }`}
              >
                <Map className="inline-block mr-2 h-4 w-4" />
                POIビュー
              </button>
              <button
                onClick={() => setCameraViewMode("player")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  cameraViewMode === "player"
                    ? "bg-red-700 text-white"
                    : "bg-transparent text-gray-400 hover:text-gray-200"
                }`}
              >
                <Eye className="inline-block mr-2 h-4 w-4" />
                プレイヤービュー
              </button>
            </div>
          </div>

          {/* POI View Content */}
          {cameraViewMode === "poi" && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="POIオプションを検索..."
                  value={poiSearchQuery}
                  onChange={(e) => setPoiSearchQuery(e.target.value)}
                  style={inputStyle}
                  className="w-full h-10 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-md p-2 max-h-[300px] overflow-y-auto">
                {poiOptions
                  .filter((poi) => poi.name.toLowerCase().includes(poiSearchQuery.toLowerCase()))
                  .map((poi) => (
                    <div
                      key={poi.id}
                      onClick={() => setSelectedPOI(poi.id)}
                      className={`flex items-center p-2 rounded-md cursor-pointer ${
                        selectedPOI === poi.id ? "bg-red-900/30" : "hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 rounded-full mr-3">
                          {poi.icon}
                        </div>
                        <span className="text-sm text-gray-300">{poi.name}</span>
                      </div>
                    </div>
                  ))}

                {poiOptions.filter((poi) => poi.name.toLowerCase().includes(poiSearchQuery.toLowerCase())).length ===
                  0 && (
                  <div className="text-center py-4 text-gray-500">
                    &quot;{poiSearchQuery}&quot;に一致するPOIオプションが見つかりません
                  </div>
                )}
              </div>

              <button
                onClick={handleCameraChange}
                disabled={!selectedPOI}
                className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                style={!selectedPOI ? disabledButtonStyle : buttonStyle}
                onMouseOver={(e) =>
                  selectedPOI && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) => selectedPOI && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                <Camera className="mr-2 h-4 w-4" />
                カメラを変更
              </button>
            </div>
          )}

          {/* Player View Content */}
          {cameraViewMode === "player" && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="プレイヤーを検索..."
                  value={playerSearchQuery}
                  onChange={(e) => setPlayerSearchQuery(e.target.value)}
                  style={inputStyle}
                  className="w-full h-10 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-md p-2 max-h-[300px] overflow-y-auto">
                {getAllPlayers()
                  .filter(
                    (player) =>
                      player.name.toLowerCase().includes(playerSearchQuery.toLowerCase()) ||
                      player.teamName.toLowerCase().includes(playerSearchQuery.toLowerCase()),
                  )
                  .map((player) => (
                    <div
                      key={player.id}
                      onClick={() => setSelectedPlayer(player.id)}
                      className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                        selectedPlayer === player.id ? "bg-red-900/30" : "hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full mr-2">
                          <span className="text-xs text-gray-400">{player.teamId}</span>
                        </div>
                        <span className="text-sm text-gray-300">{player.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{player.teamName}</span>
                    </div>
                  ))}

                {getAllPlayers().filter(
                  (player) =>
                    player.name.toLowerCase().includes(playerSearchQuery.toLowerCase()) ||
                    player.teamName.toLowerCase().includes(playerSearchQuery.toLowerCase()),
                ).length === 0 && (
                  <div className="text-center py-4 text-gray-500">
                    &quot;{playerSearchQuery}&quot;に一致するプレイヤーが見つかりません
                  </div>
                )}
              </div>

              <button
                onClick={handleCameraChange}
                disabled={!selectedPlayer}
                className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                style={!selectedPlayer ? disabledButtonStyle : buttonStyle}
                onMouseOver={(e) =>
                  selectedPlayer && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  selectedPlayer && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                <Camera className="mr-2 h-4 w-4" />
                カメラを変更
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

