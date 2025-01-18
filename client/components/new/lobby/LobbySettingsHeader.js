import { motion } from 'framer-motion'
import { ShieldAlert } from 'lucide-react'

export function LobbySettingsHeader() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-4"
      >
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">ロビー設定</h2>
        <ShieldAlert className="h-6 w-6 text-yellow-400" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm text-gray-300 mb-4"
      >
        これらの設定は管理者のみが変更できます。
      </motion.p>
    </>
  )
}

