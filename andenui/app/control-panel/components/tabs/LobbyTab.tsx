"use client"

import { Server, Users } from "lucide-react"
import { useControlPanelContext } from "@/app/control-panel/hooks/useControlPanelContext"
import TeamCard from "@/components/TeamCard"
import SpecialTeamView from "@/components/teams/SpecialTeamView"

export default function LobbyTab() {
  const {
    configData,
    teamData,
    lobbySettings,
    specialTeamTab,
    setSpecialTeamTab,
    editingTeam,
    editedTeamName,
    startEditingTeam,
    saveTeamName,
    cancelEditingTeam,
    setEditedTeamName,
    handlePlayerRightClick,
    updateLobbySetting,
    setActiveTab,
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

  // Check if lobby is joined
  const isLobbyJoined = configData?.uiStatus?.isLobbyJoined || false

  if (!isLobbyJoined) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div style={cardStyle} className="rounded-lg overflow-hidden max-w-md w-full">
          <div style={cardHeaderStyle} className="px-6 py-4">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-bold text-red-400">ロビーに参加していません</h2>
            </div>
            <p className="text-gray-400 text-sm mt-1">先にロビーに参加する必要があります</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-black/50 border border-gray-800 rounded-md p-4 text-center">
              <p className="text-gray-300 mb-4">チームを表示・管理するには、先にロビーに参加する必要があります。</p>
              <button
                onClick={() => {
                  setActiveTab("match")
                }}
                className="py-2 px-4 rounded-md text-white font-medium"
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                <Server className="inline-block mr-2 h-4 w-4" />
                マッチタブへ移動
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Side: Settings Container - 1/4 width */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {/* Lobby Settings Card */}
          <div style={cardStyle} className="rounded-lg overflow-hidden h-[350px] flex flex-col">
            <div style={cardHeaderStyle} className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-red-500" />
                <h2 className="text-lg font-bold text-red-400">ロビー設定</h2>
              </div>
              <p className="text-gray-400 text-xs mt-1">ロビーパラメータを設定</p>
            </div>
            <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
            <div className="p-4 overflow-y-auto flex-grow">
              <div className="grid grid-cols-1 gap-4">
                {/* Playlist Name */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-red-400">プレイリスト名</h3>
                  <input
                    type="text"
                    value={lobbySettings.playlistname}
                    onChange={(e) => updateLobbySetting("playlistname", e.target.value)}
                    style={inputStyle}
                    className="w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>

                {/* Game Mode */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-red-400">ゲームモード</h3>
                  <select
                    value={lobbySettings.gamemode}
                    onChange={(e) => updateLobbySetting("gamemode", e.target.value)}
                    style={inputStyle}
                    className="w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  >
                    <option value="CUSTOMMATCH_BR_TRIOS">BRトリオ</option>
                    <option value="CUSTOMMATCH_BR_DUOS">BRデュオ</option>
                    <option value="CUSTOMMATCH_CONTROL">コントロール</option>
                  </select>
                </div>

                {/* Map */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-red-400">マップ</h3>
                  <select
                    value={lobbySettings.map}
                    onChange={(e) => updateLobbySetting("map", e.target.value)}
                    style={inputStyle}
                    className="w-full h-8 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  >
                    <option value="mp_rr_canyonlands_hu">キングスキャニオン</option>
                    <option value="mp_rr_desertlands_hu">ワールズエッジ</option>
                    <option value="mp_rr_olympus_mu">オリンパス</option>
                    <option value="mp_rr_tropic_island_mu">ストームポイント</option>
                    <option value="mp_rr_divided_moon">ブロークンムーン</option>
                  </select>
                </div>

                {/* Toggle Settings */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-red-400">オプション</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                      <h3 className="text-xs font-medium text-gray-300">管理者チャット</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={lobbySettings.adminchat}
                          onChange={(e) => updateLobbySetting("adminchat", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                      <h3 className="text-xs font-medium text-gray-300">チーム名変更</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={lobbySettings.teamrename}
                          onChange={(e) => updateLobbySetting("teamrename", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                      <h3 className="text-xs font-medium text-gray-300">自己割り当て</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={lobbySettings.selfassign}
                          onChange={(e) => updateLobbySetting("selfassign", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                      <h3 className="text-xs font-medium text-gray-300">エイムアシスト</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={lobbySettings.aimassist}
                          onChange={(e) => updateLobbySetting("aimassist", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-md">
                      <h3 className="text-xs font-medium text-gray-300">匿名モード</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={lobbySettings.anonmode}
                          onChange={(e) => updateLobbySetting("anonmode", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Teams Card with Tabs */}
          <div style={cardStyle} className="rounded-lg overflow-hidden h-[350px] flex flex-col">
            <div style={cardHeaderStyle} className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-500" />
                <h2 className="text-lg font-bold text-red-400">特殊チーム</h2>
              </div>
              <p className="text-gray-400 text-xs mt-1">未割り当てと観戦者チーム</p>
            </div>
            <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>

            {/* Tabs for Special Teams */}
            <div className="flex border-b border-gray-800">
              <button
                onClick={() => setSpecialTeamTab("unassigned")}
                className={`flex-1 py-1.5 px-4 text-xs font-medium ${
                  specialTeamTab === "unassigned" ? "text-red-400 border-b-2 border-red-500" : "text-gray-400"
                }`}
              >
                未割り当て
              </button>
              <button
                onClick={() => setSpecialTeamTab("observers")}
                className={`flex-1 py-1.5 px-4 text-xs font-medium ${
                  specialTeamTab === "observers" ? "text-red-400 border-b-2 border-red-500" : "text-gray-400"
                }`}
              >
                観戦者
              </button>
            </div>

            {/* Special Team Content with Fixed Height and Scroll */}
            <div className="flex-grow overflow-y-auto">
              {specialTeamTab === "unassigned" && (
                <SpecialTeamView
                  teamId="0"
                  team={teamData["0"]}
                  onPlayerRightClick={handlePlayerRightClick}
                  maxTeamPlayer={10}
                />
              )}

              {/* Observers Team Tab Content */}
              {specialTeamTab === "observers" && (
                <SpecialTeamView
                  teamId="1"
                  team={teamData["1"]}
                  onPlayerRightClick={handlePlayerRightClick}
                  maxTeamPlayer={10}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Team Grid - 3/4 width */}
      <div className="lg:col-span-3">
        <div style={cardStyle} className="rounded-lg overflow-hidden h-[710px] flex flex-col">
          <div style={cardHeaderStyle} className="px-4 py-3">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-red-500" />
              <h2 className="text-lg font-bold text-red-400">チーム</h2>
            </div>
            <p className="text-gray-400 text-xs mt-1">チームとプレイヤーを管理</p>
          </div>
          <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>

          {/* Team Grid - Only showing regular teams (2-21) with fixed height and scroll */}
          <div className="p-3 flex-grow overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {/* Regular Teams - MaxTeam制限に基づいて表示 */}
              {Object.keys(teamData)
                .filter((id) => id !== "0" && id !== "1") // 特殊チームを除外
                .filter((id) => Number(id) <= (configData?.uiStatus?.maxTeam || 20) + 1) // maxTeamの値に基づいてフィルタリング
                .sort((a, b) => Number(a) - Number(b)) // チームIDで昇順ソート
                .map((teamId) => (
                  <TeamCard
                    key={teamId}
                    teamId={teamId}
                    team={teamData[teamId]}
                    editingTeam={editingTeam}
                    editedTeamName={editedTeamName}
                    startEditingTeam={startEditingTeam}
                    saveTeamName={saveTeamName}
                    cancelEditingTeam={cancelEditingTeam}
                    setEditedTeamName={setEditedTeamName}
                    onPlayerRightClick={handlePlayerRightClick}
                    maxTeamPlayer={configData?.uiStatus?.maxTeamPlayer || 3}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

