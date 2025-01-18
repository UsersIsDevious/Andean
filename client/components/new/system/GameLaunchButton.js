'use client'

import { Play } from 'lucide-react'
import { GradientButton } from "../ui/GradientButton"
import { useToast } from "@/components/ui/use-toast"

export function GameLaunchButton() {
  const { toast } = useToast()
  const handleGameLaunch = async () => {
    try {
      const response = await fetch('/startGame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        toast({
          title: "ゲーム起動",
          description: "ゲームの起動を開始しました。",
        });
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error launching the game:', error);
      toast({
        title: "エラー",
        description: "ゲーム起動中にエラーが発生しました。",
        variant: "destructive",
      });
    }
  }

  return (
    <GradientButton
      onClick={handleGameLaunch}
      fromColor="green-500"
      toColor="teal-500"
      hoverFromColor="green-600"
      hoverToColor="teal-600"
      icon={Play}
    >
      ゲーム起動
    </GradientButton>
  )
}

