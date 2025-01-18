import { TabsContent } from "@/components/ui/tabs"
import ObserverArea from "./ObserverArea"
import UnassignedArea from "./UnassignedArea"

export function TabContent({ observers, unassigned }) {
  return (
    <>
      <TabsContent value="observers" className="flex-grow overflow-hidden">
        <ObserverArea players={observers} />
      </TabsContent>
      <TabsContent value="unassigned" className="flex-grow overflow-hidden">
        <UnassignedArea players={unassigned} />
      </TabsContent>
    </>
  )
}

