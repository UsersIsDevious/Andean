import { CameraChange } from "./camera-change"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Camera } from "lucide-react"

export default function CameraSettings({ isInLobby, isSimulated, simulatedLobbyData }) {
  if (!isInLobby && !isSimulated) {
    return (
      <div className="flex items-center justify-center h-full">
        <Card>
          <CardHeader>
            <CardTitle>Not in a Lobby</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Please join or create a lobby to access camera settings.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const lobbyData = isSimulated ? simulatedLobbyData : null

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Camera className="w-5 h-5" />
            <span>Camera Control</span>
          </CardTitle>
          <CardDescription>Switch between POI and player views</CardDescription>
        </CardHeader>
        <CardContent>
          <CameraChange isSimulated={isSimulated} simulatedLobbyData={lobbyData} />
        </CardContent>
      </Card>
    </div>
  )
}

