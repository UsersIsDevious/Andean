import { TabsTrigger } from "@/components/ui/tabs"

export function TabTriggers() {
  return (
    <>
      <TabsTrigger
        value="observers"
        className="px-3 py-2 text-sm font-semibold text-white rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-violet-500 data-[state=active]:text-white transition-all duration-300 hover:bg-white/10"
      >
        オブザーバー
      </TabsTrigger>
      <TabsTrigger
        value="unassigned"
        className="px-3 py-2 text-sm font-semibold text-white rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-violet-500 data-[state=active]:text-white transition-all duration-300 hover:bg-white/10"
      >
        未割り当て
      </TabsTrigger>
    </>
  )
}

