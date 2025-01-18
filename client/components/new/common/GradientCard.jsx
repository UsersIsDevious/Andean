import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'

export function GradientCard({ title, children }) {
  return (
    <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-6">{title}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {children}
        </motion.div>
      </CardContent>
    </Card>
  )
}

