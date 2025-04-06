"use client"

import { Loader2, Server, Upload } from "lucide-react"
import { useRef } from "react"
import { useControlPanelContext } from "@/app/control-panel/hooks/useControlPanelContext"

export default function MatchTab() {
  const {
    joinLobby,
    handleLeaveLobby,
    lobbyResponse,
    isLobbyLoading,
    isLeavingLobby,
    configData,
    lobbyCode,
    setLobbyCode,
    handleCSVUpload,
    isProcessingCSV,
    csvResponse,
    pauseToggle,
    updateConfig,
  } = useControlPanelContext()

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Custom styles
  const cardStyle = {
    backgroundColor: "#111827", // gray-900
    borderColor: "rgba(139, 0, 0, 0.3)",
    boxShadow: "0 4px 6px -1px rgba(139, 0, 0, 0.05)",
  }

  const cardHeaderStyle = {
    backgroundImage: "linear-gradient(to right, rgba(139, 0, 0, 0.2), transparent)",
  }

  const inputStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "#1f2937", // gray-800
    color: "#e5e7eb", // gray-200
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

  // Safe access to nested properties
  const killPoint = configData?.appConfig?.score_Setting?.kill_Point || 1
  const maxKill = configData?.appConfig?.score_Setting?.max_Kill || 10

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Create/Join Lobby Card */}
        <div style={cardStyle} className="rounded-lg overflow-hidden">
          <div style={cardHeaderStyle} className="px-6 py-4">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-bold text-red-400">ロビー参加</h2>
            </div>
            <p className="text-gray-400 text-sm mt-1">既存のゲームロビーに参加する</p>
          </div>
          <div className="p-6 space-y-4">
            <input
              type="text"
              value={lobbyCode}
              onChange={(e) => setLobbyCode(e.target.value)}
              placeholder="ロビーコードを入力"
              style={inputStyle}
              className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-2"
            />

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => joinLobby(lobbyCode || undefined)}
                disabled={isLobbyLoading || !uiStatus.lobbyJoinButtonEnabled}
                className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                style={isLobbyLoading || !uiStatus.lobbyJoinButtonEnabled ? disabledButtonStyle : buttonStyle}
                onMouseOver={(e) =>
                  !isLobbyLoading &&
                  uiStatus.lobbyJoinButtonEnabled &&
                  (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  !isLobbyLoading &&
                  uiStatus.lobbyJoinButtonEnabled &&
                  (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                {isLobbyLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ロビー参加中...
                  </>
                ) : (
                  <>ロビーに参加</>
                )}
              </button>

              <button
                onClick={handleLeaveLobby}
                disabled={isLeavingLobby || isLobbyLoading || !uiStatus.leaveLobbyButtonEnabled}
                className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                style={
                  isLeavingLobby || isLobbyLoading || !uiStatus.leaveLobbyButtonEnabled
                    ? disabledButtonStyle
                    : buttonStyle
                }
                onMouseOver={(e) =>
                  !isLeavingLobby &&
                  !isLobbyLoading &&
                  uiStatus.leaveLobbyButtonEnabled &&
                  (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  !isLeavingLobby &&
                  !isLobbyLoading &&
                  uiStatus.leaveLobbyButtonEnabled &&
                  (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                {isLeavingLobby ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ロビーから退出中...
                  </>
                ) : (
                  <>ロビーから退出</>
                )}
              </button>
            </div>

            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
              className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
            >
              {lobbyResponse ? JSON.stringify(lobbyResponse, null, 2) : "レスポンスなし"}
            </div>
          </div>
        </div>

        {/* CSV Upload Card */}
        <div style={cardStyle} className="rounded-lg overflow-hidden">
          <div style={cardHeaderStyle} className="px-6 py-4">
            <div className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-bold text-red-400">チームCSVアップロード</h2>
            </div>
            <p className="text-gray-400 text-sm mt-1">CSVファイルからチームデータをインポート</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="relative">
              <input
                type="file"
                accept=".csv"
                onChange={handleCSVUpload}
                ref={fileInputRef}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <button
                className="w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center"
                style={isProcessingCSV ? disabledButtonStyle : buttonStyle}
                onMouseOver={(e) =>
                  !isProcessingCSV && (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  !isProcessingCSV && (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                }
                disabled={isProcessingCSV}
              >
                {isProcessingCSV ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    CSV処理中...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    CSVファイルを選択
                  </>
                )}
              </button>
            </div>

            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
              className="border rounded-md p-3 text-sm font-mono text-gray-300 h-20 overflow-auto"
            >
              {csvResponse || "まだCSVが処理されていません。ファイルをアップロードしてください。"}
            </div>

            <div className="text-xs text-gray-400">
              <p>期待されるCSV形式:</p>
              <code className="block mt-1 p-2 bg-black/30 rounded">TEAM,NAME,IMG_URL,MEMBER_NUM,MEMBER1,...</code>
            </div>
          </div>
        </div>
      </div>

      {/* Game Status & Pause Control Card */}
      <div style={cardStyle} className="rounded-lg overflow-hidden">
        <div style={cardHeaderStyle} className="px-6 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-red-400">ゲームコントロール</h2>
          </div>
          <p className="text-gray-400 text-sm mt-1">試合の状態と一時停止制御</p>
        </div>
        <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
        <div className="p-6 space-y-6">
          {/* Game Status Display */}
          <div className="bg-black/50 border border-gray-800 rounded-md p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-red-400">現在の試合状態</h3>
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    uiStatus.gameStatus === "Running"
                      ? "bg-green-500"
                      : uiStatus.gameStatus === "Paused"
                        ? "bg-yellow-500"
                        : uiStatus.gameStatus === "Finished"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                  }`}
                />
                <span className="text-sm font-medium text-gray-300">
                  {uiStatus.gameStatus === "Running"
                    ? "実行中"
                    : uiStatus.gameStatus === "Paused"
                      ? "一時停止中"
                      : uiStatus.gameStatus === "Finished"
                        ? "終了"
                        : "未開始"}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-900/50 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1">ステータス</div>
                <div className="text-sm text-white font-medium">{uiStatus.gameStatus || "不明"}</div>
              </div>
              {/* 他のゲーム情報を表示する場合はここに追加 */}
            </div>
          </div>

          {/* Pause Control */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400">一時停止コントロール</h3>

            <div className="flex items-center gap-4">
              <div className="space-y-1 flex-1">
                <label className="text-sm text-gray-400">カウントダウン時間（秒）</label>
                <input
                  type="number"
                  min="0"
                  max="60"
                  defaultValue="0"
                  id="preTimerInput"
                  style={inputStyle}
                  className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                onClick={() => {
                  const preTimerInput = document.getElementById("preTimerInput") as HTMLInputElement
                  const preTimer = Number.parseInt(preTimerInput.value) || 0
                  pauseToggle(preTimer)
                }}
                className="h-10 px-6 rounded-md text-white font-medium flex items-center justify-center mt-6"
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                disabled={!uiStatus.isLobbyJoined}
              >
                {uiStatus.gameStatus === "Paused" ? <>再開</> : <>一時停止</>}
              </button>
            </div>

            <div className="text-xs text-gray-400">
              <p>注意: カウントダウン時間を指定すると、その秒数後に一時停止が実行されます。</p>
              <p>0秒を指定すると、即時に一時停止/再開が行われます。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Match Settings Card */}
      <div style={cardStyle} className="rounded-lg overflow-hidden">
        <div style={cardHeaderStyle} className="px-6 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-red-400">スコア設定</h2>
          </div>
          <p className="text-gray-400 text-sm mt-1">マッチスコアリングパラメータを設定</p>
        </div>
        <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
        <div className="p-6 space-y-6">
          {/* Kill Points Settings - Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kill Point */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-red-400">キルポイント</h3>
              <input
                type="number"
                value={killPoint}
                onChange={(e) =>
                  updateConfig(
                    "appConfig",
                    {
                      score_Setting: {
                        ...configData?.appConfig?.score_Setting,
                        kill_Point: Number(e.target.value),
                      },
                    },
                    "overwrite",
                  )
                }
                style={inputStyle}
                className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                min="0"
              />
              <p className="text-xs text-gray-400">キル1回あたりのポイント</p>
            </div>

            {/* Max Kill */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-red-400">最大キルポイント</h3>
              <input
                type="number"
                value={maxKill}
                onChange={(e) =>
                  updateConfig(
                    "appConfig",
                    {
                      score_Setting: {
                        ...configData?.appConfig?.score_Setting,
                        max_Kill: Number(e.target.value),
                      },
                    },
                    "overwrite",
                  )
                }
                style={inputStyle}
                className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                min="1"
              />
              <p className="text-xs text-gray-400">ポイントが付与される最大キル数</p>
            </div>
          </div>

          {/* Rank Score Settings */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-400">ランクスコア設定</h3>
            <p className="text-xs text-gray-400 mb-2">最終順位に基づいて付与されるポイント</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: configData?.uiStatus?.maxTeam || 20 }, (_, i) => i + 1).map((rank) => (
                <div key={rank} className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300 w-24">
                    {rank === 1 ? "1位:" : rank === 2 ? "2位:" : rank === 3 ? "3位:" : `${rank}位:`}
                  </span>
                  <input
                    type="number"
                    value={(configData?.appConfig?.score_Setting?.rank_Points || [])[rank - 1] || 0}
                    onChange={(e) => {
                      const maxTeam = configData?.uiStatus?.maxTeam || 20
                      // Create a copy of the current rank points array or initialize with zeros
                      const rankingScores = [...(configData?.appConfig?.score_Setting?.rank_Points || [])]

                      // Set the value at the specific rank position
                      rankingScores[rank - 1] = Number(e.target.value)

                      // Ensure the array has enough elements for all teams (MaxTeam)
                      while (rankingScores.length < maxTeam) {
                        rankingScores.push(0)
                      }

                      updateConfig(
                        "appConfig",
                        {
                          score_Setting: {
                            ...configData?.appConfig?.score_Setting,
                            rank_Points: rankingScores,
                          },
                        },
                        "overwrite",
                      )
                    }}
                    style={inputStyle}
                    className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    min="0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

