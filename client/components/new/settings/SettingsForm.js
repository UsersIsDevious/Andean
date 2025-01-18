'use client'

import { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { Save, RotateCcw } from 'lucide-react'
import { SettingInput } from "./SettingInput"
import { SettingSelect } from "./SettingSelect"
import { SettingTextarea } from "./SettingTextarea"
import { GradientButton } from "../ui/GradientButton"

const languageOptions = [
  { value: "日本語", label: "日本語" },
  { value: "English", label: "English" },
  { value: "中文", label: "中文" },
  { value: "한국어", label: "한국어" },
]

export function SettingsForm() {
  const [settings, setSettings] = useState({
    language: "日本語",
    logPath: "",
    commandOptions: "",
    websocketPort: "7777",
    dataFrequency: "60",
    exportPath: "",
    gamePath: "",
  })
  const { toast } = useToast()

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSaveSettings = async () => {
    try {
      const response = await fetch('/saveConfig', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })
      if (response.ok) {
        toast({ title: "設定保存完了", description: "設定が正常に保存されました。" })
      } else {
        throw new Error('Server responded with an error')
      }
    } catch (error) {
      console.error('Error saving settings:', error)
      toast({ title: "エラー", description: "設定の保存中にエラーが発生しました。", variant: "destructive" })
    }
  }

  const handleResetToDefault = async () => {
    try {
      const response = await fetch('/resetConfig', { method: 'POST' })
      if (response.ok) {
        const defaultSettings = await response.json()
        setSettings(defaultSettings)
        toast({ title: "設定リセット完了", description: "設定がデフォルトに戻されました。" })
      } else {
        throw new Error('Server responded with an error')
      }
    } catch (error) {
      console.error('Error resetting settings:', error)
      toast({ title: "エラー", description: "設定のリセット中にエラーが発生しました。", variant: "destructive" })
    }
  }

  return (
    <div className="space-y-6">
      <SettingSelect
        id="language"
        label="ゲーム言語"
        value={settings.language}
        onChange={(value) => handleChange('language', value)}
        options={languageOptions}
      />
      <SettingInput
        id="logPath"
        label="ログの保存先"
        value={settings.logPath}
        onChange={(value) => handleChange('logPath', value)}
        placeholder="/path/to/logs"
      />
      <SettingTextarea
        id="commandOptions"
        label="コマンドオプション"
        value={settings.commandOptions}
        onChange={(value) => handleChange('commandOptions', value)}
        placeholder="-debug -verbose"
      />
      <SettingInput
        id="websocketPort"
        label="WebSocketポート番号"
        value={settings.websocketPort}
        onChange={(value) => handleChange('websocketPort', value)}
        type="number"
        placeholder="7777"
      />
      <SettingInput
        id="dataFrequency"
        label="1秒間のデータ取得頻度"
        value={settings.dataFrequency}
        onChange={(value) => handleChange('dataFrequency', value)}
        type="number"
        placeholder="60"
      />
      <SettingInput
        id="exportPath"
        label="データエクスポート先のパス"
        value={settings.exportPath}
        onChange={(value) => handleChange('exportPath', value)}
        placeholder="/path/to/export"
      />
      <SettingInput
        id="gamePath"
        label="ゲームのインストール先パス"
        value={settings.gamePath}
        onChange={(value) => handleChange('gamePath', value)}
        placeholder="/path/to/game"
      />
      <GradientButton
        onClick={handleSaveSettings}
        fromColor="green-500"
        toColor="emerald-500"
        hoverFromColor="green-600"
        hoverToColor="emerald-600"
        icon={Save}
      >
        設定を保存
      </GradientButton>
      <GradientButton
        onClick={handleResetToDefault}
        fromColor="yellow-500"
        toColor="amber-500"
        hoverFromColor="yellow-600"
        hoverToColor="amber-600"
        icon={RotateCcw}
      >
        デフォルトに戻す
      </GradientButton>
    </div>
  )
}

