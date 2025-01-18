import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const MAX_PLAYERS_PER_TEAM = 3;
const TOTAL_TEAMS = 20;

export default function CSVImportButton({ onImport }) {
  const fileInputRef = useRef(null)

  const handleCSVUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result
        const lines = content.split('\n')
        const newTeams = []

        lines.forEach((line, index) => {
          if (index === 0) return // Skip header row
          const [teamName, playerName] = line.split(',')
          const trimmedTeamName = teamName.trim()
          const trimmedPlayerName = playerName.trim()

          let team = newTeams.find(t => t.name === trimmedTeamName)
          if (!team) {
            team = { id: `team-${newTeams.length + 1}`, name: trimmedTeamName, players: [] }
            newTeams.push(team)
          }

          if (team.players.length < MAX_PLAYERS_PER_TEAM) {
            const playerId = `player-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            team.players.push({ id: playerId, name: trimmedPlayerName });
          }
        })

        // Fill remaining teams if less than TOTAL_TEAMS
        while (newTeams.length < TOTAL_TEAMS) {
          newTeams.push({
            id: `team-${newTeams.length + 1}`,
            name: `Team ${newTeams.length + 1}`,
            players: []
          })
        }

        onImport(newTeams)
        toast({
          title: "CSVインポート完了!",
          description: "チームとプレイヤーの情報が更新されました。",
        })
      }
      reader.readAsText(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <Input
        type="file"
        accept=".csv"
        onChange={handleCSVUpload}
        className="hidden"
        ref={fileInputRef}
      />
      <Button onClick={triggerFileInput}>CSVインポート</Button>
    </>
  )
}

