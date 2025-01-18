'use client'

import { DragDropContext } from 'react-beautiful-dnd'
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import TeamCard from "./TeamCard"
import CSVImportButton from "./CSVImportButton"
import WarningToggle from "./WarningToggle"
import LobbySettings from "./LobbySettings"
import PlayerAreaTabs from "./PlayerAreaTabs"

const MAX_PLAYERS_PER_TEAM = 3;

export default function LobbyManagement({
  teams,
  setTeams,
  observers,
  setObservers,
  unassigned,
  setUnassigned,
  warningsEnabled,
  setWarningsEnabled
}) {
  const onDragEnd = (result) => {
    const { source, destination } = result

    if (!destination) return

    const sourceId = source.droppableId
    const destId = destination.droppableId

    if (sourceId === destId) {
      // Moving within the same list
      if (sourceId === 'observers') {
        const newObservers = Array.from(observers)
        const [reorderedItem] = newObservers.splice(source.index, 1)
        newObservers.splice(destination.index, 0, reorderedItem)
        setObservers(newObservers)
      } else if (sourceId === 'unassigned') {
        const newUnassigned = Array.from(unassigned)
        const [reorderedItem] = newUnassigned.splice(source.index, 1)
        newUnassigned.splice(destination.index, 0, reorderedItem)
        setUnassigned(newUnassigned)
      } else {
        // Moving within a team
        const newTeams = [...teams]
        const teamIndex = newTeams.findIndex(team => team.id === sourceId)
        const newPlayers = Array.from(newTeams[teamIndex].players)
        const [reorderedPlayer] = newPlayers.splice(source.index, 1)
        newPlayers.splice(destination.index, 0, reorderedPlayer)
        newTeams[teamIndex] = { ...newTeams[teamIndex], players: newPlayers }
        setTeams(newTeams)
      }
    } else {
      // Moving between different lists
      let sourceList
      let setSourceList
      let destList
      let setDestList

      if (sourceId === 'observers') {
        sourceList = observers
        setSourceList = setObservers
      } else if (sourceId === 'unassigned') {
        sourceList = unassigned
        setSourceList = setUnassigned
      } else {
        const sourceTeamIndex = teams.findIndex(team => team.id === sourceId)
        sourceList = teams[sourceTeamIndex].players
        setSourceList = (players) => {
          const newTeams = [...teams]
          newTeams[sourceTeamIndex] = { ...newTeams[sourceTeamIndex], players }
          setTeams(newTeams)
        }
      }

      if (destId === 'observers') {
        destList = observers
        setDestList = setObservers
      } else if (destId === 'unassigned') {
        destList = unassigned
        setDestList = setUnassigned
      } else {
        const destTeamIndex = teams.findIndex(team => team.id === destId)
        destList = teams[destTeamIndex].players
        setDestList = (players) => {
          const newTeams = [...teams]
          newTeams[destTeamIndex] = { ...newTeams[destTeamIndex], players }
          setTeams(newTeams)
        }
      }

      if (destId !== 'observers' && destId !== 'unassigned' && destList.length >= MAX_PLAYERS_PER_TEAM) {
        if (warningsEnabled) {
          toast({
            title: "移動できません",
            description: "チームのプレイヤー数が上限に達しています。",
            variant: "destructive",
          })
        }
        return
      }

      const [movedItem] = sourceList.splice(source.index, 1)
      destList.splice(destination.index, 0, movedItem)

      setSourceList([...sourceList])
      setDestList([...destList])
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 p-4">
          <WarningToggle enabled={warningsEnabled} onToggle={setWarningsEnabled} />
          <div className="flex items-center space-x-2">
            <CSVImportButton onImport={setTeams} />
            <Button onClick={() => console.log("ロビープレーヤー取得")}>ロビープレーヤー取得</Button>
          </div>
        </div>
        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/3 flex flex-col pr-4">
            <div className="mb-4">
              <LobbySettings />
            </div>
            <div className="flex-grow overflow-hidden">
              <PlayerAreaTabs observers={observers} unassigned={unassigned} />
            </div>
          </div>
          <div className="w-2/3">
            <ScrollArea className="h-full">
              <div className="grid grid-cols-4 gap-4 p-4">
                {teams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </DragDropContext>
  )
}

