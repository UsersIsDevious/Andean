'use client'

import { SystemShutdownButton } from "./SystemShutdownButton"
import { GameLaunchButton } from "./GameLaunchButton"
import { GradientCard } from '../common/GradientCard'

export default function SystemManagement() {
  return (
    <GradientCard title="システム管理">
      <div className="space-y-4">
        <SystemShutdownButton />
        <GameLaunchButton />
      </div>
    </GradientCard>
  )
}

