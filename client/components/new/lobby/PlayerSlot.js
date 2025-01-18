import { Draggable } from 'react-beautiful-dnd'

export default function PlayerSlot({ player, index }) {
  if (player) {
    return (
      <Draggable draggableId={player.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`w-full h-[40px] p-2 text-xs bg-white bg-opacity-10 text-white rounded-md flex items-center ${
              snapshot.isDragging ? 'opacity-50' : ''
            }`}
          >
            {player.name}
          </div>
        )}
      </Draggable>
    )
  }

  return (
    <div className="w-full h-[40px] flex items-center justify-center text-xs text-gray-400 bg-black bg-opacity-20 border border-gray-600 border-dashed rounded-md">
      空きスロット
    </div>
  )
}

