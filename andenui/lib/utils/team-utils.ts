// Define the Team type
interface Team {
  id?: string // idをオプショナルに変更
  name: string
  players: { id: string; name: string }[]
}

// Get team color based on team ID
export const getTeamColor = (id: number): string => {
  const colors: { [key: number]: string } = {
    2: "rgb(6, 131, 149)",
    3: "rgb(27, 71, 105)",
    4: "rgb(31, 84, 205)",
    5: "rgb(68, 42, 96)",
    6: "rgb(110, 44, 111)",
    7: "rgb(173, 45, 119)",
    8: "rgb(176, 28, 81)",
    9: "rgb(195, 0, 11)",
    10: "rgb(197, 67, 32)",
    11: "rgb(120, 30, 19)",
    12: "rgb(159, 59, 13)",
    13: "rgb(119, 75, 0)",
    14: "rgb(204, 121, 19)",
    15: "rgb(150, 125, 0)",
    16: "rgb(133, 147, 10)",
    17: "rgb(73, 88, 3)",
    18: "rgb(112, 151, 67)",
    19: "rgb(57, 137, 52)",
    20: "rgb(47, 90, 26)",
    21: "rgb(0, 116, 88)",
  }
  return colors[id] || "rgb(31, 41, 55)" // デフォルトはグレー
}

// Get all players from teams other than 0 and 1
export const getAllPlayersFromTeams = (teamData: Record<string, Team> | undefined) => {
  if (!teamData) return []

  const players: { id: string; name: string; teamId: string; teamName: string }[] = []

  Object.entries(teamData).forEach(([teamId, team]) => {
    if (teamId !== "0" && teamId !== "1" && team.players) {
      team.players.forEach((player) => {
        if (player.name) {
          players.push({
            id: player.id,
            name: player.name,
            teamId,
            teamName: team.name,
          })
        }
      })
    }
  })

  return players
}

// Move player between teams
export const movePlayerBetweenTeams = (
  teamData: Record<string, Team> | undefined,
  sourceTeamId: string,
  playerId: string,
  destinationTeamId: string,
) => {
  if (!teamData) return teamData

  const updatedTeamData = { ...teamData }

  // Find the player in the source team
  const playerToMoveData = updatedTeamData[sourceTeamId].players.find((player) => player.id === playerId)

  if (!playerToMoveData) return teamData

  // Remove player from source team
  updatedTeamData[sourceTeamId] = {
    ...updatedTeamData[sourceTeamId],
    players: updatedTeamData[sourceTeamId].players.filter((player) => player.id !== playerId),
  }

  // Add player to destination team
  updatedTeamData[destinationTeamId] = {
    ...updatedTeamData[destinationTeamId],
    players: [...updatedTeamData[destinationTeamId].players, playerToMoveData],
  }

  return updatedTeamData
}

// Remove player from team
export const removePlayerFromTeam = (teamData: Record<string, Team> | undefined, teamId: string, playerId: string) => {
  if (!teamData) return teamData

  const updatedTeamData = { ...teamData }

  // Filter out the player to kick
  updatedTeamData[teamId] = {
    ...updatedTeamData[teamId],
    players: updatedTeamData[teamId].players.filter((player) => player.id !== playerId),
  }

  return updatedTeamData
}

