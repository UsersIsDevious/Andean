'use client'

import { SettingsForm } from "./SettingsForm"
import { GradientCard } from '../common/GradientCard'

export default function SettingsManagement() {
  return (
    <GradientCard title="設定">
      <SettingsForm />
    </GradientCard>
  )
}

