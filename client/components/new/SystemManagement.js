'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Power, Play } from 'lucide-react'

export default function SystemManagement() {
  return (
    <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-6">システム管理</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <Button
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden"
          >
            <Power className="mr-2 h-5 w-5" />
            システム終了
          </Button>
          <Button
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden"
          >
            <Play className="mr-2 h-5 w-5" />
            ゲーム起動
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  )
}

