"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Copy, Check } from "lucide-react"
import type { CustomMatch } from "@/lib/types/match-types"

interface RawDataViewerProps {
  matchData: CustomMatch | null
}

export default function RawDataViewer({ matchData }: RawDataViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  if (!matchData) {
    return (
      <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4 text-center">
        <p className="text-gray-400">マッチデータを読み込み中...</p>
      </div>
    )
  }

  const copyToClipboard = () => {
    // 生データがある場合はそれをコピー、なければ整形されたデータをコピー
    const dataToCopy = matchData.rawData || matchData
    navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2))
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="bg-gray-900 border border-red-900/30 rounded-lg overflow-hidden">
      <div
        className="bg-gradient-to-r from-red-900/20 to-transparent px-6 py-4 border-b border-gray-800 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          {isExpanded ? (
            <ChevronDown className="h-5 w-5 text-red-400 mr-2" />
          ) : (
            <ChevronRight className="h-5 w-5 text-red-400 mr-2" />
          )}
          <h2 className="text-xl font-bold text-red-400">生データ</h2>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            copyToClipboard()
          }}
          className="p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 flex items-center"
        >
          {isCopied ? (
            <>
              <Check className="h-4 w-4 mr-1 text-green-500" />
              <span className="text-xs">コピー済み</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              <span className="text-xs">JSONをコピー</span>
            </>
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="p-4">
          <div className="bg-black/50 border border-gray-800 rounded-md p-4 overflow-auto max-h-[500px]">
            <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap">
              {JSON.stringify(matchData.rawData || matchData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
