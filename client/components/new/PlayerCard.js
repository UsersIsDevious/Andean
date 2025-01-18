import { Draggable } from 'react-beautiful-dnd'

export default function PlayerCard({ player, index }) {
  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`w-full h-[40px] p-2 mb-2 text-xs bg-primary text-primary-foreground rounded-md flex items-center ${
            snapshot.isDragging ? 'opacity-50' : ''
          }`}
        >
          {player.name}
        </div>
      )}
    </Draggable>
  )
}

