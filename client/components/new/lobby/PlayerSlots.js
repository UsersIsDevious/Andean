import { Droppable } from 'react-beautiful-dnd'
import PlayerSlot from "./PlayerSlot"

const MAX_PLAYERS_PER_TEAM = 3;

export function PlayerSlots({ teamId, players = [] }) {
  return (
    <Droppable droppableId={teamId}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="space-y-2 h-[170px] overflow-y-auto p-2 bg-black bg-opacity-20"
        >
          {Array.from({ length: MAX_PLAYERS_PER_TEAM }).map((_, index) => (
            <PlayerSlot key={index} player={players[index]} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

