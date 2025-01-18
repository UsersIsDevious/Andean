'use client'

import { useState } from 'react';
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, RotateCcw } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function SettingsManagement({
  language,
  setLanguage,
  logPath,
  setLogPath,
  commandOptions,
  setCommandOptions,
  websocketPort,
  setWebsocketPort,
  dataFrequency,
  setDataFrequency,
  exportPath,
  setExportPath,
  gamePath,
  setGamePath
}) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleSaveSettings = () => {
    setShowConfirmDialog(true)
  }

  const confirmSaveSettings = () => {
    console.log('Settings saved:', {
      language,
      logPath,
      commandOptions,
      websocketPort,
      dataFrequency,
      exportPath,
      gamePath
    })
    // Here you would typically send these settings to your backend
    setShowConfirmDialog(false)
  }

  const handleResetToDefault = () => {
    setLanguage("日本語");
    setLogPath("");
    setCommandOptions("");
    setWebsocketPort("7777");
    setDataFrequency("60");
    setExportPath("");
    setGamePath("");
  }

  return (
    <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-6">設定</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="language" className="text-gray-300">ゲーム言語</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language" className="w-full bg-white/10 border-none text-white">
                <SelectValue placeholder="言語を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="日本語">日本語</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="中文">中文</SelectItem>
                <SelectItem value="한국어">한국어</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="logPath" className="text-gray-300">ログの保存先</Label>
            <Input
              id="logPath"
              value={logPath}
              onChange={(e) => setLogPath(e.target.value)}
              placeholder="/path/to/logs"
              className="w-full bg-white/10 border-none text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="commandOptions" className="text-gray-300">コマンドオプション</Label>
            <Textarea
              id="commandOptions"
              value={commandOptions}
              onChange={(e) => setCommandOptions(e.target.value)}
              placeholder="-debug -verbose"
              rows={3}
              className="w-full bg-white/10 border-none text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="websocketPort" className="text-gray-300">WebSocketポート番号</Label>
            <Input
              id="websocketPort"
              type="number"
              value={websocketPort}
              onChange={(e) => setWebsocketPort(e.target.value)}
              placeholder="7777"
              className="w-full bg-white/10 border-none text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dataFrequency" className="text-gray-300">1秒間のデータ取得頻度</Label>
            <Input
              id="dataFrequency"
              type="number"
              value={dataFrequency}
              onChange={(e) => setDataFrequency(e.target.value)}
              placeholder="60"
              className="w-full bg-white/10 border-none text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exportPath" className="text-gray-300">データエクスポート先のパス</Label>
            <Input
              id="exportPath"
              value={exportPath}
              onChange={(e) => setExportPath(e.target.value)}
              placeholder="/path/to/export"
              className="w-full bg-white/10 border-none text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gamePath" className="text-gray-300">ゲームのインストール先パス</Label>
            <Input
              id="gamePath"
              value={gamePath}
              onChange={(e) => setGamePath(e.target.value)}
              placeholder="/path/to/game"
              className="w-full bg-white/10 border-none text-white placeholder-gray-400"
            />
          </div>

          <Button
            onClick={handleSaveSettings}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden"
          >
            <Save className="mr-2 h-5 w-5" />
            設定を保存
          </Button>
          <Button
            onClick={handleResetToDefault}
            className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            デフォルトに戻す
          </Button>
        </motion.div>
      </CardContent>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>設定を保存しますか？</AlertDialogTitle>
            <AlertDialogDescription>
              この操作は元に戻すことができません。設定を保存してもよろしいですか？
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction onClick={confirmSaveSettings}>保存</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}

