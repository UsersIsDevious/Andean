import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

export function TeamCard({ team, onTeamNameChange }) {
  const [isEditing, setIsEditing] = useState(false)
  const [teamName, setTeamName] = useState(team.name)

  const handleNameChange = () => {
    onTeamNameChange(team.id, teamName)
    setIsEditing(false)
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="p-2">
        <div className="flex items-center space-x-2">
          <img src={team.logo || "/placeholder.svg"} alt={`${team.name} logo`} className="w-6 h-6 rounded-full" />
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
        <p className="text-xs text-muted-foreground mb-2">Players: {`${Math.min(team.players.length, 3)}/3`}</p>
        <div className="grid grid-cols-1 gap-1 text-xs">
          {team.players.slice(0, 3).map((player) => (
            <div key={player.id} className="truncate">
              {player.name}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

