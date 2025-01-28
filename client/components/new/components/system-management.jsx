import { RequestButton } from "./request-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Power, Play, Zap } from "lucide-react"
import { api } from "../services/api"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { Button } from "@/components/ui/button"

export default function SystemManagement() {
  const [gameRunning, setGameRunning] = useState(false)
  const [isLoading, setIsLoading] = useState({ stopServer: false, startGame: false })

  return (
    <Card className="neon-border">
      <CardHeader>
        <CardTitle className="glow-text">System Management</CardTitle>
        <CardDescription>Control server and game operations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-4">
          <Button
            onClick={async () => {
              setIsLoading((prev) => ({ ...prev, startGame: true }))
              try {
                console.log("Starting game...")
                const result = await api.startGame()
                console.log("Game start result:", result)
                if (result.success) {
                  toast.success("Game started successfully")
                  setGameRunning(true)
                } else {
                  toast.error("Failed to start game")
                }
              } catch (error) {
                console.error("Failed to start game:", error)
                toast.error(`Failed to start game: ${error.message}`)
              } finally {
                setIsLoading((prev) => ({ ...prev, startGame: false }))
              }
            }}
            disabled={isLoading.startGame || gameRunning}
            variant={gameRunning ? "secondary" : "default"}
            className="flex items-center space-x-2 flex-1"
          >
            {gameRunning ? <Zap className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isLoading.startGame ? "Starting..." : gameRunning ? "Game Running" : "Start Game"}</span>
          </Button>
        </div>
        <div className="flex space-x-4">
          <RequestButton
            onClick={async () => {
              if (window.confirm("Are you sure you want to stop the server?")) {
                setIsLoading((prev) => ({ ...prev, stopServer: true }))
                try {
                  console.log("Stopping server...")
                  const result = await api.stopServer()
                  console.log("Server stop result:", result)
                  toast.success("Server stopped successfully")
                  setGameRunning(false)
                } catch (error) {
                  console.error("Failed to stop server:", error)
                  toast.error(`Failed to stop server: ${error.message}`)
                } finally {
                  setIsLoading((prev) => ({ ...prev, stopServer: false }))
                }
              }
            }}
            disabled={isLoading.stopServer}
            variant="destructive"
            className="flex items-center space-x-2 flex-1"
          >
            <Power className="w-4 h-4" />
            <span>{isLoading.stopServer ? "Stopping..." : "Stop Server"}</span>
          </RequestButton>
        </div>
      </CardContent>
    </Card>
  )
}

