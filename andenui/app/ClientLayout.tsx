"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // クライアントサイドでのみレンダリングするための状態
  const [isMounted, setIsMounted] = useState(false)

  // Client-side mounting effect
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // サーバーサイドレンダリング時には最小限のHTMLを返す
  if (!isMounted) {
    return (
      <html lang="en">
        <body>
          <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl text-gray-400">Loading...</p>
            </div>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
