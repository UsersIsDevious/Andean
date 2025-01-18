import { Card, CardContent } from "@/components/ui/card"
import { TeamHeader } from "./team/TeamHeader"
import { PlayerSlots } from "./team/PlayerSlots"
import { getTeamColor } from "../../utils/teamColors"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function TeamCard({ team }) {
  return (
    <Card className="w-full overflow-hidden" style={{ backgroundColor: getTeamColor(team.id) }}>
      <TeamHeader name={team.name} image={team.image} />
      <CardContent className="p-2 pt-3 pb-3 bg-black bg-opacity-30">
        <PlayerSlots teamId={team.id} players={team.players} />
      </CardContent>
    </Card>
  )
}

