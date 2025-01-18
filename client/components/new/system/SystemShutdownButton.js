'use client'

import { Power } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import { GradientButton } from "../ui/GradientButton"

export function SystemShutdownButton() {
  const { toast } = useToast()

  const handleSystemShutdown = async () => {
    try {
      const response = await fetch('/stopServer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        toast({
          title: "システム終了",
          description: "システムのシャットダウンを開始しました。",
        });
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error shutting down the system:', error);
      toast({
        title: "エラー",
        description: "システム終了中にエラーが発生しました。",
        variant: "destructive",
      });
    }
  }

  return (
    <GradientButton
      onClick={handleSystemShutdown}
      fromColor="red-500"
      toColor="orange-500"
      hoverFromColor="red-600"
      hoverToColor="orange-600"
      icon={Power}
    >
      システム終了
    </GradientButton>
  )
}

