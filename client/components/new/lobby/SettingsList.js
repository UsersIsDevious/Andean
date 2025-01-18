import { motion } from 'framer-motion'
import { SettingItem } from "./SettingItem"

export function SettingsList({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <SettingItem item={item} />
        </motion.div>
      ))}
    </div>
  )
}

