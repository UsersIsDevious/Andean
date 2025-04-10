"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Loader2, Users } from "lucide-react"

interface CreateLobbyButtonProps {
  createLobby: () => void
  lobbyResponse: string
  isLoading: boolean
}

export default function CreateLobbyButton({ createLobby, lobbyResponse, isLoading }: CreateLobbyButtonProps) {
  return (
    <Card className="bg-gray-900 border-red-900/30 shadow-lg shadow-red-900/5 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-red-900/20 to-transparent">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-red-500" />
          <CardTitle className="text-xl font-bold text-red-400">ロビー作成</CardTitle>
        </div>
        <CardDescription className="text-gray-400">新しいゲームロビーを初期化する</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <Button
          onClick={createLobby}
          disabled={isLoading}
          className="w-full bg-red-700 hover:bg-red-800 text-white"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ロビー作成中...
            </>
          ) : (
            <>ロビーを作成</>
          )}
        </Button>

        <div className="bg-black/50 border border-gray-800 rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto">
          {lobbyResponse}
        </div>
      </CardContent>
    </Card>
  )
}
