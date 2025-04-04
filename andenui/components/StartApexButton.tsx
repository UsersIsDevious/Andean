"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Loader2, Play } from "lucide-react"

interface StartApexButtonProps {
  startApex: () => void
  apexResponse: string
  isApexLoading: boolean
}

export default function StartApexButton({ startApex, apexResponse, isApexLoading }: StartApexButtonProps) {
  return (
    <Card className="bg-gray-900 border-red-900/30 shadow-lg shadow-red-900/5 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-red-900/20 to-transparent">
        <div className="flex items-center gap-2">
          <Play className="h-5 w-5 text-red-500" />
          <CardTitle className="text-xl font-bold text-red-400">Apex起動</CardTitle>
        </div>
        <CardDescription className="text-gray-400">Apex Legendsゲームを起動する</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <Button
          onClick={startApex}
          disabled={isApexLoading}
          className="w-full bg-red-700 hover:bg-red-800 text-white"
          size="lg"
        >
          {isApexLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Apex起動中...
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Apexを起動
            </>
          )}
        </Button>

        <div className="bg-black/50 border border-gray-800 rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto">
          {apexResponse}
        </div>
      </CardContent>
    </Card>
  )
}

