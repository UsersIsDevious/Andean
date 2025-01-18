import { motion } from 'framer-motion'
import { Label } from "@/components/ui/label"
import { Users, Crosshair } from 'lucide-react'

export function CameraTypeSelector({ cameraType, setCameraType }) {
  return (
    <div className="space-y-2">
      <Label className="text-gray-300">カメラタイプ</Label>
      <div className="flex bg-gray-700 p-1 rounded-lg">
        <motion.button
          className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center space-x-2 ${
            cameraType === 'poi' ? 'text-white' : 'text-gray-400'
          }`}
          onClick={() => setCameraType('poi')}
          animate={{
            backgroundColor: cameraType === 'poi' ? 'rgba(236, 72, 153, 0.5)' : 'transparent',
          }}
          whileHover={{ backgroundColor: cameraType === 'poi' ? 'rgba(236, 72, 153, 0.7)' : 'rgba(255, 255, 255, 0.1)' }}
          transition={{ duration: 0.3 }}
        >
          <Crosshair className="w-5 h-5" />
          <span>POI</span>
        </motion.button>
        <motion.button
          className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center space-x-2 ${
            cameraType === 'player' ? 'text-white' : 'text-gray-400'
          }`}
          onClick={() => setCameraType('player')}
          animate={{
            backgroundColor: cameraType === 'player' ? 'rgba(99, 102, 241, 0.5)' : 'transparent',
          }}
          whileHover={{ backgroundColor: cameraType === 'player' ? 'rgba(99, 102, 241, 0.7)' : 'rgba(255, 255, 255, 0.1)' }}
          transition={{ duration: 0.3 }}
        >
          <Users className="w-5 h-5" />
          <span>プレイヤー</span>
        </motion.button>
      </div>
    </div>
  )
}

