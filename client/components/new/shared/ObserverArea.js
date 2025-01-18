import { Droppable } from 'react-beautiful-dnd'
import { Card, CardContent } from "@/components/ui/card"
import PlayerCard from './PlayerCard'

const MAX_OBSERVERS = 10;

export default function ObserverArea({ players = [] }) {
  return (
    <Card className="h-full bg-transparent border border-gray-600">
      <CardContent className="h-full bg-transparent pt-4 overflow-hidden">
        <Droppable droppableId="observers">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2 h-full overflow-y-auto pr-2"
            >
              {Array.from({ length: MAX_OBSERVERS }).map((_, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 rounded-md min-h-[40px]">
                  {players[index] ? (
                    <PlayerCard player={players[index]} index={index} />
                  ) : (
                    <div className="w-full h-[40px] flex items-center justify-center text-xs text-muted-foreground">
                      空きスロット
                    </div>
                  )}
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </CardContent>
    </Card>
  )
}

