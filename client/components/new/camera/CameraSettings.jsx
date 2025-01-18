'use client'

import { motion } from 'framer-motion'
import { GradientButton } from "../ui/GradientButton"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera } from 'lucide-react'
import { CameraTypeSelector } from "./CameraTypeSelector"
import { POISelector } from "./POISelector"
import { PlayerSelector } from "./PlayerSelector"
import { GradientCard } from '../common/GradientCard'

export default function CameraSettings({
  cameraType = 'poi',
  setCameraType,
  selectedPOI = '',
  setSelectedPOI,
  selectedPlayer = '',
  setSelectedPlayer,
  poiOptions = [],
  playerNames = []
}) {
  return (
    <GradientCard title="カメラ設定">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Removed line */}
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
    </GradientCard>
  )
}

