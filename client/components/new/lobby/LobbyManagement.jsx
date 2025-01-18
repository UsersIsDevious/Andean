'use client'

import { useState, useEffect, useCallback } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import { GradientButton } from "../ui/GradientButton"
import TeamCard from "./TeamCard"
import CSVImportButton from "./CSVImportButton"
import WarningToggle from "./WarningToggle"
import LobbySettings from "./LobbySettings"
import PlayerAreaTabs from "../shared/PlayerAreaTabs"
import { TOTAL_TEAMS, MAX_PLAYERS_PER_TEAM } from '../../../config/constants'
import { GradientCard } from '../common/GradientCard'
import ErrorBoundary from '../common/ErrorBoundary'

export default function LobbyManagement() {
  const { toast } = useToast();

  // Add this null check
  if (!toast) {
    console.error('Toast object is null or undefined');
    return null; // or return a loading state
  }

  const [teams, setTeams] = useState(() => {
    return Array.from({ length: TOTAL_TEAMS }, (_, i) => ({
      id: `team-${i + 1}`,
      name: `Team ${i + 1}`,
      players: [],
      image: '/placeholder.svg?height=32&width=32',
    }));
  });
  const [observers, setObservers] = useState([]);
  const [unassigned, setUnassigned] = useState([]);
  const [warningsEnabled, setWarningsEnabled] = useState(true)

  const handleGetLobbyPlayers = useCallback(async () => {
    try {
      const response = await fetch('/api/get_lobby_players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        setTeams(data.teams || []);
        setObservers(data.observers || []);
        setUnassigned(data.unassigned || []);
      } else {
        throw new Error('Failed to fetch lobby players');
      }
    } catch (error) {
      console.error('Error fetching lobby players:', error);
      toast({
        title: "エラー",
        description: "ロビープレイヤーの取得中にエラーが発生しました。",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    handleGetLobbyPlayers();
    const interval = setInterval(handleGetLobbyPlayers, 1000);
    return () => clearInterval(interval);
  }, [handleGetLobbyPlayers, toast]);

  const onDragEnd = useCallback((result) => {
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
        if (teamIndex !== -1) {
          const newPlayers = Array.from(newTeams[teamIndex].players || [])
          const [reorderedPlayer] = newPlayers.splice(source.index, 1)
          newPlayers.splice(destination.index, 0, reorderedPlayer)
          newTeams[teamIndex] = { ...newTeams[teamIndex], players: newPlayers }
          setTeams(newTeams)
        }
      }
    } else {
      // Moving between different lists
      let sourceList, setSourceList, destList, setDestList

      if (sourceId === 'observers') {
        sourceList = observers
        setSourceList = setObservers
      } else if (sourceId === 'unassigned') {
        sourceList = unassigned
        setSourceList = setUnassigned
      } else {
        const sourceTeamIndex = teams.findIndex(team => team.id === sourceId)
        if (sourceTeamIndex !== -1) {
          sourceList = teams[sourceTeamIndex].players || []
          setSourceList = (players) => {
            const newTeams = [...teams]
            newTeams[sourceTeamIndex] = { ...newTeams[sourceTeamIndex], players }
            setTeams(newTeams)
          }
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
        if (destTeamIndex !== -1) {
          destList = teams[destTeamIndex].players || []
          setDestList = (players) => {
            const newTeams = [...teams]
            newTeams[destTeamIndex] = { ...newTeams[destTeamIndex], players }
            setTeams(newTeams)
          }
        }
      }

      if (destId !== 'observers' && destId !== 'unassigned' && destList && destList.length >= MAX_PLAYERS_PER_TEAM) {
        if (warningsEnabled) {
          toast({
            title: "移動できません",
            description: "チームのプレイヤー数が上限に達しています。",
            variant: "destructive",
          })
        }
        return
      }

      if (sourceList && destList) {
        const [movedItem] = sourceList.splice(source.index, 1)
        destList.splice(destination.index, 0, movedItem)

        setSourceList([...sourceList])
        setDestList([...destList])
      }
    }
    handleGetLobbyPlayers();
  }, [teams, observers, unassigned, setTeams, setObservers, setUnassigned, warningsEnabled, toast]);

  return (
    <ErrorBoundary>
      <DragDropContext onDragEnd={onDragEnd}>
        <GradientCard title="ロビー管理">
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-4 p-4">
              <WarningToggle enabled={warningsEnabled} onToggle={setWarningsEnabled} />
              <div className="flex items-center space-x-2">
                <CSVImportButton onImport={setTeams} />
                <GradientButton
                  onClick={handleGetLobbyPlayers}
                  fromColor="purple-500"
                  toColor="indigo-500"
                  hoverFromColor="purple-600"
                  hoverToColor="indigo-600"
                >
                  ロビー取得
                </GradientButton>
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
        </GradientCard>
      </DragDropContext>
    </ErrorBoundary>
  )
}

