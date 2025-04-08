"use client"

import { useState, useEffect } from "react"
import Header from "@/app/control-panel/components/ui/Header"
import LiveView from "./components/LiveView"

export default function LiveViewPage() {
  // クライアントサイドでのみレンダリングするための状態
  const [isMounted, setIsMounted] = useState(false)

  // Client-side mounting effect
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // サーバーサイドレンダリング時には何も表示しない
  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="px-[100px] py-6">
        <div className="w-full mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-red-400 mb-2">Apex Legends ライブビュー</h1>
            <p className="text-gray-400">現在進行中のマッチのリアルタイムデータを表示します</p>
          </div>

          <LiveView />
        </div>
      </main>
    </div>
  )
}
