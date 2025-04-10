"use client"

import { X, Shield, Heart, Award, Zap } from "lucide-react"
import type { Player } from "@/lib/types/match-types"

interface PlayerDetailsProps {
  player: Player | undefined
  onClose: () => void
}

export default function PlayerDetails({ player, onClose }: PlayerDetailsProps) {
  if (!player) {
    return null
  }

  // プレイヤーの状態に応じた色を取得
  const getStatusColor = () => {
    if (!player.isAlive) return "bg-red-500"
    if (player.health && player.health < 30) return "bg-yellow-500"
    return "bg-green-500"
  }

  // シールドレベルに応じた色を取得
  const getShieldColor = () => {
    if (!player.shield || player.shield === 0) return "bg-gray-700"
    if (player.maxShield && player.maxShield <= 50) return "bg-white"
    if (player.maxShield && player.maxShield <= 75) return "bg-blue-500"
    if (player.maxShield && player.maxShield <= 100) return "bg-purple-500"
    return "bg-red-500" // 赤進化シールド
  }

  return (
    <div className="bg-gray-900 border border-red-900/30 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-red-900/20 to-transparent px-6 py-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-xl font-bold text-red-400">プレイヤー詳細</h2>
        <button onClick={onClose} className="p-1 rounded-full bg-gray-800/50 hover:bg-gray-800">
          <X className="h-4 w-4 text-gray-400" />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor()}`}></div>
          <h3 className="text-lg font-semibold text-white">{player.name}</h3>
          {player.legend && <span className="ml-2 text-sm text-gray-400">({player.legend})</span>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* 体力 */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Heart className="h-3 w-3 mr-1 text-red-500" />
              <span>体力</span>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-white font-medium">
                {player.health || 0} / {player.maxHealth || 100}
              </div>
              <div className="ml-2 flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-red-500 h-full"
                  style={{
                    width: `${((player.health || 0) / (player.maxHealth || 100)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* シールド */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Shield className="h-3 w-3 mr-1 text-blue-500" />
              <span>シールド</span>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-white font-medium">
                {player.shield || 0} / {player.maxShield || 0}
              </div>
              <div className="ml-2 flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                <div
                  className={`${getShieldColor()} h-full`}
                  style={{
                    width: `${player.maxShield ? ((player.shield || 0) / player.maxShield) * 100 : 0}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* キル */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Award className="h-3 w-3 mr-1 text-yellow-500" />
              <span>キル</span>
            </div>
            <div className="text-sm text-white font-medium">{player.kills}</div>
          </div>

          {/* アシスト */}
          <div className="bg-black/30 p-3 rounded-md">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Zap className="h-3 w-3 mr-1 text-purple-500" />
              <span>アシスト</span>
            </div>
            <div className="text-sm text-white font-medium">{player.assists}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* プレイヤー情報 */}
          <div className="bg-black/30 p-3 rounded-md">
            <h4 className="text-sm font-semibold text-red-400 mb-2">プレイヤー情報</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">チームID:</span>
                <span className="text-white">{player.teamId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ハードウェア:</span>
                <span className="text-white">{player.hardwareName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">スクワッドインデックス:</span>
                <span className="text-white">{player.squadIndex !== undefined ? player.squadIndex : "不明"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">オンライン:</span>
                <span className="text-white">{player.isOnline ? "はい" : "いいえ"}</span>
              </div>
            </div>
          </div>

          {/* 戦績 */}
          <div className="bg-black/30 p-3 rounded-md">
            <h4 className="text-sm font-semibold text-red-400 mb-2">戦績</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">ダメージ:</span>
                <span className="text-white">{player.damage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">キル:</span>
                <span className="text-white">{player.kills}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">アシスト:</span>
                <span className="text-white">{player.assists}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ランク:</span>
                <span className="text-white">{player.rank || "未確定"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
