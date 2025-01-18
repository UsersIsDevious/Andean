'use client'

import { Tabs, TabsList } from "@/components/ui/tabs"
import { TabTriggers } from "./TabTriggers"
import { TabContent } from "./TabContent"

export default function PlayerAreaTabs({ observers, unassigned }) {
  return (
    <Tabs defaultValue="observers" className="h-full flex flex-col">
      <TabsList className="grid w-full grid-cols-2 p-0.5 pb-[38px] rounded-lg mb-2 bg-transparent border border-gray-600 overflow-hidden items-center">
        <TabTriggers />
      </TabsList>
      <TabContent observers={observers} unassigned={unassigned} />
    </Tabs>
  )
}

