'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera } from 'lucide-react'
import { CameraTypeSelector } from './camera-settings/CameraTypeSelector'
import { POISelector } from './camera-settings/POISelector'
import { PlayerSelector } from './camera-settings/PlayerSelector'

export default function CameraSettings({
  cameraType,
  setCameraType,
  selectedPOI,
  setSelectedPOI,
  selectedPlayer,
  setSelectedPlayer,
  poiOptions,
  playerNames
}) {
  return (
    <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-6">カメラ設定</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <CameraTypeSelector cameraType={cameraType} setCameraType={setCameraType} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {cameraType === 'poi' ? (
              <POISelector selectedPOI={selectedPOI} setSelectedPOI={setSelectedPOI} poiOptions={poiOptions} />
            ) : (
              <PlayerSelector selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} playerNames={playerNames} />
            )}
          </motion.div>

          <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden">
            <Camera className="mr-2 h-5 w-5" />
            カメラ変更
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  )
}

