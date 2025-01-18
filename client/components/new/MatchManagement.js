'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle, XCircle, Settings } from 'lucide-react'
import Cookies from 'js-cookie'

export default function MatchManagement({
  killPoints,
  setKillPoints,
  maxKills,
  setMaxKills,
  rankPoints,
  setRankPoints,
  lobbyId,
  setLobbyId
}) {
  const TEAM_COUNT = 20;

  const handleRankPointChange = (index, value) => {
    const newRankPoints = [...rankPoints];
    newRankPoints[index] = value;
    setRankPoints(newRankPoints);
  }

  const handleCreateJoinLobby = () => {
    console.log('Creating or joining lobby:', lobbyId)
    Cookies.set('lobbyId', lobbyId, { expires: 7 })
  }

  useEffect(() => {
    Cookies.set('lobbyId', lobbyId, { expires: 7 })
  }, [lobbyId])

  return (
    <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-6">マッチ管理</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden">
              <CheckCircle className="mr-2 h-5 w-5" />
              準備完了/未完了
            </Button>
            <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden">
              <XCircle className="mr-2 h-5 w-5" />
              マッチメイキング終了
            </Button>
            <Button onClick={() => console.log("試合設定取得")} className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden">
              <Settings className="mr-2 h-5 w-5" />
              試合設定取得
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">ロビー管理</h3>
            <div className="flex space-x-2">
              <Input
                placeholder="ロビーID"
                value={lobbyId}
                onChange={(e) => setLobbyId(e.target.value)}
                className="flex-grow bg-white/10 border-none text-white placeholder-gray-400"
              />
              <Button onClick={handleCreateJoinLobby} className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                ロビー作成＆参加
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-300">マッチ設定</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="killPoints" className="text-gray-300">1キルあたりのポイント</Label>
                <Input 
                  type="number" 
                  id="killPoints" 
                  value={killPoints} 
                  onChange={(e) => setKillPoints(Number(e.target.value))}
                  min={0}
                  className="bg-white/10 border-none text-white"
                />
              </div>
              <div>
                <Label htmlFor="maxKills" className="text-gray-300">上限キル数</Label>
                <Input 
                  type="number" 
                  id="maxKills" 
                  value={maxKills} 
                  onChange={(e) => setMaxKills(Number(e.target.value))}
                  min={0}
                  className="bg-white/10 border-none text-white"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-300">順位ポイント設定</h4>
              <ScrollArea className="h-[300px] w-full border border-gray-700 rounded-md p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {rankPoints.map((points, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Label htmlFor={`rank-${index + 1}`} className="w-14 text-gray-300">{index + 1}位:</Label>
                      <Input 
                        type="number" 
                        id={`rank-${index + 1}`}
                        value={points} 
                        onChange={(e) => handleRankPointChange(index, Number(e.target.value))}
                        min={0}
                        className="w-20 bg-white/10 border-none text-white"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

