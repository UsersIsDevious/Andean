import { RequestButton } from "./request-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Power, Play } from "lucide-react"

export default function SystemManagement() {
  return (
    <Card className="neon-border">
      <CardHeader>
        <CardTitle className="glow-text">System Management</CardTitle>
        <CardDescription>Control server and game operations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-4">
          <RequestButton
            url="/stopServer"
            method = "POST"
            onSuccess={() => alert("Server stopped successfully")}
            onError={(error) => alert(`Failed to stop server: ${error}`)}
            variant="destructive"
            className="flex items-center space-x-2 flex-1"
          >
            <Power className="w-4 h-4" />
            <span>Stop Server</span>
          </RequestButton>
        </div>
        <div className="flex space-x-4">
          <RequestButton
            url="/startGame"
            method = "POST"
            onSuccess={() => alert("Game started successfully")}
            onError={(error) => alert(`Failed to start game: ${error}`)}
            variant="default"
            className="flex items-center space-x-2 flex-1"
          >
            <Play className="w-4 h-4" />
            <span>Start Game</span>
          </RequestButton>
        </div>
      </CardContent>
    </Card>
  )
}

