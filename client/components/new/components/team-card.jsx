import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

export function TeamCard({ team, onTeamNameChange, backgroundColor }) {
  const [isEditing, setIsEditing] = useState(false)
  const [teamName, setTeamName] = useState(team.name)

  const handleNameChange = () => {
    onTeamNameChange(team.id, teamName)
    setIsEditing(false)
  }

  const teamNumber = Number.parseInt(team.id) - 1

  return (
    <Card className={`flex flex-col ${backgroundColor}`}>
      <CardHeader className="p-2">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
            {teamNumber}
          </div>
          {isEditing ? (
            <Input
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              onBlur={handleNameChange}
              onKeyPress={(e) => e.key === "Enter" && handleNameChange()}
              className="flex-grow text-sm"
            />
          ) : (
            <h3 className="text-sm font-semibold flex-grow truncate">{team.name}</h3>
          )}
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)} className="p-1">
            <Pencil className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-2 flex-grow">
        <p className="text-sm font-medium mb-2">Players: {team.players.length} / 3</p>
        <div className="grid grid-cols-1 gap-1 text-xs">
          {[0, 1, 2].map((index) => {
            const player = team.players[index]
            return (
              <div key={index} className="h-6 flex items-center px-2 border border-gray-600 rounded">
                {player ? (
                  <span className="truncate">{player.name}</span>
                ) : (
                  <span className="text-gray-400" aria-label={`Empty player slot ${index + 1}`}>
                    Empty
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

