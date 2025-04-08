"use client"

import { useState, useMemo, useEffect } from "react"
import DeckGL from "@deck.gl/react"
import { ScatterplotLayer, BitmapLayer } from "@deck.gl/layers"
import { OrthographicView } from "@deck.gl/core"
import { getTeamColor } from "@/lib/utils/team-utils"
import type { CustomMatch, Player } from "@/lib/types/match-types"

interface MapViewProps {
  matchData: CustomMatch | null
  onPlayerSelect?: (playerId: string) => void
}

// マップ名からURLを取得する関数
const getMapImageUrl = (mapName: string): string => {
  // マップ名をそのまま使用する
  return `https://usersisdevious.github.io/AndeanWeb/img/${mapName}.png`
}

// プレイヤーの座標を処理する関数（Y座標を反転）
const getPlayerPosition = (player: Player): [number, number] => {
  if (!player.position) return [0, 0]
  return [player.position.x, -player.position.y]
}

// Define a type for our view state to ensure consistency
interface MapViewState {
  target: [number, number, number]
  zoom: number
  minZoom: number
  maxZoom: number
}

export default function MapView({ matchData, onPlayerSelect }: MapViewProps) {
  // Properly type the viewState with explicit tuple for target
  const [viewState, setViewState] = useState<MapViewState>({
    target: [0, 0, 0],
    zoom: 0,
    minZoom: -5,
    maxZoom: 5,
  })

  // マップ画像URL
  const mapImageUrl = useMemo(() => {
    if (!matchData) return ""
    return getMapImageUrl(matchData.mapName)
  }, [matchData])

  const [imageLoaded, setImageLoaded] = useState(false)

  // 画像の読み込みを確認
  useEffect(() => {
    if (!mapImageUrl) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setImageLoaded(true)
    }
    img.onerror = () => {
      console.error("Failed to load map image")
    }
    img.src = mapImageUrl
  }, [mapImageUrl])

  // プレイヤーデータをレイヤー用に変換
  const playerData = useMemo(() => {
    if (!matchData) return []

    return matchData.teams
      .flatMap((team) => team.players)
      .filter((player) => player.isAlive && player.position)
      .map((player) => ({
        id: player.id,
        name: player.name,
        teamId: player.teamId,
        position: getPlayerPosition(player), // Y座標が反転されるようになりました
        color: getTeamColor(player.teamId),
        radius: 150, // マーカーサイズを小さく調整
        legend: player.legend || "Unknown",
      }))
  }, [matchData])

  // リングデータ
  const ringData = useMemo(() => {
    if (!matchData) return []

    const ring = matchData.ring
    return [
      {
        center: [ring.currentCenter.x, -ring.currentCenter.y] as [number, number], // リングのY座標も反転、明示的にタプルとして型付け
        radius: ring.currentRadius,
        color: [255, 255, 255, 100] as [number, number, number, number], // 白色、半透明
      },
    ]
  }, [matchData])

  // レイヤーの配列を作成
  const layers = useMemo(() => {
    const layerArray = []

    // 背景画像レイヤー - 画像が読み込まれた場合のみ追加
    if (imageLoaded) {
      layerArray.push(
        new BitmapLayer({
          id: "background-image",
          image: mapImageUrl,
          bounds: [-2048, 2048, 2048, 2048], // 座標系を調整
          opacity: 1,
        }),
      )
    }

    // リングレイヤー
    if (ringData.length > 0) {
      layerArray.push(
        new ScatterplotLayer({
          id: "ring",
          data: ringData,
          pickable: false,
          stroked: true,
          filled: true,
          opacity: 0.3,
          getPosition: (d) => d.center,
          getRadius: (d) => d.radius,
          getFillColor: (d) => d.color,
          getLineColor: [255, 255, 255, 200] as [number, number, number, number],
          lineWidthMinPixels: 2,
        }),
      )
    }

    // プレイヤーレイヤー
    layerArray.push(
      new ScatterplotLayer({
        id: "players",
        data: playerData,
        pickable: true,
        opacity: 0.8,
        stroked: true,
        filled: true,
        radiusScale: 1,
        radiusMinPixels: 5, // 最小サイズを小さく
        radiusMaxPixels: 15, // 最大サイズも小さく
        lineWidthMinPixels: 1, // 線の幅も細く
        getPosition: (d) => d.position,
        getRadius: (d) => d.radius,
        getFillColor: () => [255, 0, 0, 200] as [number, number, number, number],
        getLineColor: () => [255, 255, 255, 200] as [number, number, number, number],
        onClick: (info) => {
          if (info.object && onPlayerSelect) {
            onPlayerSelect(info.object.id)
          }
        },
      }),
    )

    return layerArray
  }, [mapImageUrl, ringData, playerData, onPlayerSelect, imageLoaded])

  if (!matchData) {
    return (
      <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4 text-center">
        <p className="text-gray-400">マップデータを読み込み中...</p>
      </div>
    )
  }

  // Helper function to ensure target is a valid 3D tuple
  const ensureValidTarget = (
    target: [number, number, number] | [number, number] | number[] | undefined,
  ): [number, number, number] => {
    if (!target || !Array.isArray(target)) {
      return [0, 0, 0]
    }

    if (target.length === 3) {
      return [target[0], target[1], target[2]]
    }

    if (target.length === 2) {
      return [target[0], target[1], 0]
    }

    return [0, 0, 0]
  }

  return (
    <div className="bg-gray-900 border border-red-900/30 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-red-900/20 to-transparent px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-red-400">マップビュー</h2>
        <p className="text-xs text-gray-400">マップ: {matchData.mapName}</p>
      </div>
      <div className="p-0 h-[600px] relative bg-black">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white">マップ画像を読み込み中...</p>
          </div>
        )}

        <DeckGL
          views={
            new OrthographicView({
              flipY: false,
            })
          }
          controller={true}
          viewState={viewState}
          onViewStateChange={(evt) => {
            // Create a new view state with the correct types
            const newViewState: MapViewState = {
              ...viewState,
              ...evt.viewState,
              target: ensureValidTarget(evt.viewState.target),
            }
            setViewState(newViewState)
          }}
          layers={layers}
          getTooltip={({ object }) => object && `${object.name} (${object.legend})`}
        />

        {/* マップ情報 */}
        <div className="absolute bottom-4 left-4 bg-black/70 p-2 rounded-md text-xs text-white">
          <div>マップ: {matchData.mapName}</div>
          <div>
            プレイヤー: {playerData.length} / {matchData.remainingPlayers}
          </div>
          <div>リング: ステージ {matchData.ring.currentStage}</div>
        </div>
      </div>
    </div>
  )
}
