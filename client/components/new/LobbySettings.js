'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { LobbySettingsHeader } from "./lobby/LobbySettingsHeader"
import { SettingsList } from "./lobby/SettingsList"

export default function LobbySettings() {
  const [gameMode, setGameMode] = useState('')
  const [teamNameChange, setTeamNameChange] = useState(false)
  const [selfAssign, setSelfAssign] = useState(false)
  const [aimAssist, setAimAssist] = useState(false)
  const [adminChat, setAdminChat] = useState(false)
  const [anonymousMode, setAnonymousMode] = useState(false)

  const settingItems = [
    { 
      id: "game-mode", 
      label: "ゲームモード & MAP", 
      type: 'select',
      options: [
        { value: "mode1", label: "モード1" },
        { value: "mode2", label: "モード2" },
        { value: "mode3", label: "モード3" },
      ],
      state: gameMode,
      setState: setGameMode
    },
    { id: "team-name-change", label: "チーム名の設定変更", type: 'switch', state: teamNameChange, setState: setTeamNameChange },
    { id: "self-assign", label: "自己割り当て", type: 'switch', state: selfAssign, setState: setSelfAssign },
    { id: "aim-assist", label: "エイムアシスト", type: 'switch', state: aimAssist, setState: setAimAssist },
    { id: "admin-chat", label: "管理者用チャット", type: 'switch', state: adminChat, setState: setAdminChat },
    { id: "anonymous-mode", label: "匿名モード", type: 'switch', state: anonymousMode, setState: setAnonymousMode },
  ];

  return (
    <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <CardContent className="p-4">
        <LobbySettingsHeader />
        <SettingsList items={settingItems} />
      </CardContent>
    </Card>
  )
}

