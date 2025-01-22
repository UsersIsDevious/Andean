import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PlayerTable({ players }) {
  return (
    <div className="max-h-60 overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Player Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>{player.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

