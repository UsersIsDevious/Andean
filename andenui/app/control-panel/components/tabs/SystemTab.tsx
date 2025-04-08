"use client"

import { Loader2, Power, Play, BarChart2 } from "lucide-react"
import { useControlPanelContext } from "@/app/control-panel/hooks/useControlPanelContext"
import Link from "next/link"

export default function SystemTab() {
  const {
    startApex,
    apexResponse,
    isApexLoading,
    configData,
    handleShutdown,
    confirmShutdown,
    isShuttingDown,
    showShutdownConfirm,
    setShowShutdownConfirm,
  } = useControlPanelContext()

  // Custom styles
  const cardStyle = {
    backgroundColor: "#111827", // gray-900
    borderColor: "rgba(139, 0, 0, 0.3)",
    boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)",
  }

  const cardHeaderStyle = {
    backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)",
  }

  const buttonStyle = {
    backgroundColor: "#b91c1c", // red-700
    color: "white",
  }

  const buttonHoverStyle = {
    backgroundColor: "#991b1b", // red-800
  }

  const disabledButtonStyle = {
    backgroundColor: "#4b5563", // gray-600
    color: "white",
  }

  // Get UI status from configData
  const uiStatus = configData?.uiStatus || {
    lobbyJoinButtonEnabled: true,
    gameStartButtonEnabled: false,
    leaveLobbyButtonEnabled: false,
    isLobbyJoined: false,
    gameStatus: "NotStarted", // ゲームステータスのデフォルト値
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Start Apex Card */}
        <div style={cardStyle} className="rounded-lg overflow-hidden">
          <div style={cardHeaderStyle} className="px-6 py-4">
            <div className="flex items-center gap-2">
              <Play className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-bold text-red-400">Apex起動</h2>
            </div>
            <p className="text-gray-400 text-sm mt-1">Apex Legendsゲームを起動する</p>
          </div>
          <div className="p-6 space-y-4">
            <button
              onClick={startApex}
              disabled={isApexLoading || !uiStatus.gameStartButtonEnabled}
              className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
              style={isApexLoading || !uiStatus.gameStartButtonEnabled ? disabledButtonStyle : buttonStyle}
              onMouseOver={(e) =>
                !isApexLoading &&
                uiStatus.gameStartButtonEnabled &&
                (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
              }
              onMouseOut={(e) =>
                !isApexLoading &&
                uiStatus.gameStartButtonEnabled &&
                (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
              }
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
            </button>

            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
              className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
            >
              {apexResponse ? JSON.stringify(apexResponse, null, 2) : "レスポンスなし"}
            </div>
          </div>
        </div>

        {/* Shutdown System Card */}
        <div style={cardStyle} className="rounded-lg overflow-hidden">
          <div style={{ ...cardHeaderStyle, backgroundColor: "rgba(220, 38, 38, 0.2)" }} className="px-6 py-4">
            <div className="flex items-center gap-2">
              <Power className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-bold text-red-400">システムシャットダウン</h2>
            </div>
            <p className="text-gray-400 text-sm mt-1">システムを安全にシャットダウンする</p>
          </div>
          <div className="p-6">
            {showShutdownConfirm ? (
              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-900/30 rounded-md p-3 text-sm text-red-300">
                  <p className="font-medium">⚠️ 警告: これによりシステム全体がシャットダウンされます。</p>
                  <p className="mt-1">続行してもよろしいですか？</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={confirmShutdown}
                    disabled={isShuttingDown}
                    className="flex-1 py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                    style={isShuttingDown ? disabledButtonStyle : buttonStyle}
                    onMouseOver={(e) =>
                      !isShuttingDown && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                    }
                    onMouseOut={(e) =>
                      !isShuttingDown && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                    }
                  >
                    {isShuttingDown ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        シャットダウン中...
                      </>
                    ) : (
                      <>
                        <Power className="mr-2 h-4 w-4" />
                        はい、システムをシャットダウン
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setShowShutdownConfirm(false)}
                    disabled={isShuttingDown}
                    className="flex-1 py-3 px-4 rounded-md bg-gray-800 text-white font-medium"
                    onMouseOver={(e) => !isShuttingDown && (e.currentTarget.style.backgroundColor = "#374151")}
                    onMouseOut={(e) => !isShuttingDown && (e.currentTarget.style.backgroundColor = "#1f2937")}
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleShutdown}
                className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                <Power className="mr-2 h-4 w-4" />
                システムをシャットダウン
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Live View Card - 別の行に移動 */}
      <div style={cardStyle} className="rounded-lg overflow-hidden">
        <div style={cardHeaderStyle} className="px-6 py-4">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-red-500" />
            <h2 className="text-xl font-bold text-red-400">ライブビュー</h2>
          </div>
          <p className="text-gray-400 text-sm mt-1">マッチのリアルタイムデータを表示</p>
        </div>
        <div className="p-6 space-y-4">
          <Link href="/live-view" passHref>
            <button
              className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
              style={buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              ライブビューを開く
            </button>
          </Link>

          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
            className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
          >
            マッチのリアルタイムデータを表示するページを開きます。チーム、プレイヤー、キルフィードなどの情報を確認できます。
          </div>
        </div>
      </div>
    </div>
  )
}

