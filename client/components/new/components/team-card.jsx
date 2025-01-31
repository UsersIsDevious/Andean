"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { getTeamColor, getTextColor, getContrastTextColor } from "../utils/team-colors"

export function TeamCard({ team, onTeamNameChange }) {
  const [isEditing, setIsEditing] = useState(false)
  const [teamName, setTeamName] = useState(team.name)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"))
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const handleNameChange = () => {
    onTeamNameChange(team.id, teamName)
    setIsEditing(false)
  }

  const teamNumber = Number.parseInt(team.id) - 2
  const teamColor = getTeamColor(Number.parseInt(team.id))
  const textColor = getTextColor(isDarkMode)
  const contrastTextColor = getContrastTextColor(teamColor)

  const placeholderUrl = `https://placehold.jp/32/${teamColor}/${textColor}/64x64.png?text=${encodeURIComponent(
    String(teamNumber + 1),
  )}`

  return (
    <Card className={`flex flex-col bg-opacity-90`} style={{ backgroundColor: `#${teamColor}` }}>
      <CardHeader className="p-2">
        <div className="flex items-center space-x-1">
          <img
            src={team.logoUrl || placeholderUrl}
            alt={`${team.name} logo`}
            className="w-8 h-8 rounded-full mr-2"
            onError={(e) => {
              if (!team.logoUrl) {
                e.currentTarget.src = placeholderUrl
              }
            }}
          />
          {isEditing ? (
            <Input
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              onBlur={handleNameChange}
              onKeyPress={(e) => e.key === "Enter" && handleNameChange()}
              className="flex-grow text-sm"
            />
          ) : (
            <h3 className={`text-sm font-semibold flex-grow truncate text-${contrastTextColor}`}>{team.name}</h3>
          )}
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)} className="p-1">
            <Pencil className={`h-3 w-3 text-${contrastTextColor}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-2 flex-grow">
        <p className={`text-sm font-medium mb-2 text-${contrastTextColor}`}>Players: {team.players.length} / 3</p>
        <div className="grid grid-cols-1 gap-1 text-xs">
          {[0, 1, 2].map((index) => {
            const player = team.players[index]
            return (
              <div
                key={index}
                className={`h-6 flex items-center px-2 border border-${contrastTextColor} rounded bg-opacity-20 bg-${contrastTextColor === "000000" ? "white" : "black"}`}
              >
                {player ? (
                  <span className={`truncate text-${contrastTextColor}`}>{player.name}</span>
                ) : (
                  <span
                    className={`text-${contrastTextColor} opacity-60`}
                    aria-label={`Empty player slot ${index + 1}`}
                  >
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

