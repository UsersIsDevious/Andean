"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import TabNavigation from "@/app/control-panel/components/navigation/TabNavigation"
import SystemTab from "@/app/control-panel/components/tabs/SystemTab"
import MatchTab from "@/app/control-panel/components/tabs/MatchTab"
import LobbyTab from "@/app/control-panel/components/tabs/LobbyTab"
import CameraTab from "@/app/control-panel/components/tabs/CameraTab"
import SettingTab from "@/app/control-panel/components/tabs/SettingTab"
import PlayerContextMenu from "@/components/context-menu/PlayerContextMenu"
import TeamSelectorModal from "@/components/modals/TeamSelectorModal"
import Header from "@/app/control-panel/components/ui/Header"
import { ControlPanelProvider } from "@/app/control-panel/components/context/ControlPanelProvider"
import { useControlPanelContext } from "@/app/control-panel/hooks/useControlPanelContext"
import type { TeamPlayer } from "@/lib/types/config-types"

// メインコンテンツコンポーネント
const ControlPanelContent = () => {
  const {
    activeTab,
    setActiveTab,
    isLoading,
    contextMenu,
    showTeamSelector,
    playerToMove,
    configData,
    handleKickPlayer,
    handleMovePlayerOption,
    closeContextMenu,
    handleMovePlayerToTeam,
    teamData,
  } = useControlPanelContext()

  // クライアントサイドでのみレンダリングするための状態
  const [isMounted, setIsMounted] = useState(false)

  // Client-side mounting effect
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // サーバーサイドレンダリング時には何も表示しない
  if (!isMounted) {
    return null
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-red-500 animate-spin" />
          <p className="text-xl text-gray-400">設定データを読み込み中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="px-[100px] py-6">
        <div className="w-full mx-auto">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "system" && <SystemTab />}
          {activeTab === "match" && <MatchTab />}
          {activeTab === "lobby" && <LobbyTab />}
          {activeTab === "camera" && <CameraTab />}
          {activeTab === "setting" && <SettingTab />}
        </div>
      </main>

      {/* Context Menu */}
      {contextMenu && (
        <PlayerContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onKickPlayer={handleKickPlayer}
          onMovePlayer={handleMovePlayerOption}
          onClose={closeContextMenu}
          playerName={
            configData?.teamData?.[contextMenu.teamId]?.players.find((p: TeamPlayer) => p.id === contextMenu.playerId)
              ?.name || "プレイヤー"
          }
        />
      )}

      {/* Team Selector Modal - Separate from context menu */}
      {showTeamSelector && playerToMove && (
        <TeamSelectorModal
          teamData={teamData}
          sourceTeamId={playerToMove.teamId}
          onSelectTeam={handleMovePlayerToTeam}
          onClose={() => {
            setActiveTab(activeTab) // Keep the current tab active
          }}
          playerName={
            configData?.teamData?.[playerToMove.teamId]?.players.find((p: TeamPlayer) => p.id === playerToMove.playerId)
              ?.name || "プレイヤー"
          }
          maxTeamPlayer={configData?.uiStatus?.maxTeamPlayer || 3}
        />
      )}
    </div>
  )
}

// メインページコンポーネント
export default function ControlPanelPage() {
  // クライアントサイドでのみレンダリングするための状態
  const [isMounted, setIsMounted] = useState(false)

  // Client-side mounting effect
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // サーバーサイドレンダリング時には何も表示しない
  if (!isMounted) {
    return null
  }

  return (
    <ControlPanelProvider>
      <ControlPanelContent />
    </ControlPanelProvider>
  )
}
