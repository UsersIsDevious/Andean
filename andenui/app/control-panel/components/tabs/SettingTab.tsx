"use client"

import { useControlPanelContext } from "@/app/control-panel/hooks/useControlPanelContext"

export default function SettingTab() {
  const { configData, updateConfig } = useControlPanelContext()

  // Helper function to safely parse JSON strings
  const tryParseJsonString = (value: string): string => {
    try {
      // If the value is a JSON string (starts and ends with quotes)
      if (value.startsWith('"') && value.endsWith('"')) {
        return JSON.parse(value)
      }
      return value
    } catch (e) {
      console.error("Error parsing JSON string:", e)
      return value
    }
  }

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

  // Safe access to nested properties
  const apexLegendsPath = configData?.appConfig?.apexLegends?.path || ""
  // Add game_Lancher property
  const apexGameLauncher = configData?.appConfig?.apexLegends?.game_Lancher || "Steam"
  // 未使用変数を削除
  // const apexPort = configData?.appConfig?.apexLegends?.api_Port || ""
  // const apexApiOption = configData?.appConfig?.apexLegends?.api_Option || ""
  const apexOption = configData?.appConfig?.apexLegends?.option || ""
  const language = configData?.appConfig?.language || ""
  const dataFps = configData?.appConfig?.data_Fps || 60
  const logDir =
    typeof configData?.appConfig?.log_Dir === "string"
      ? tryParseJsonString(configData?.appConfig?.log_Dir)
      : configData?.appConfig?.log_Dir || ""
  const outputDir =
    typeof configData?.appConfig?.output === "string"
      ? tryParseJsonString(configData?.appConfig?.output)
      : configData?.appConfig?.output || ""
  // 未使用変数を削除
  // const penetratorItems = configData?.appConfig?.penetrator || []

  // Get supported languages from uiStatus
  const supportedLanguages = configData?.uiStatus?.supportedLanguages || [
    "en",
    "ja",
    "fr",
    "de",
    "es",
    "it",
    "ru",
    "zh",
  ]

  // Language name mapping (since the API only provides codes)
  const languageNames: Record<string, string> = {
    en: "英語 (English)",
    ja: "日本語 (Japanese)",
    fr: "フランス語 (French)",
    de: "ドイツ語 (German)",
    es: "スペイン語 (Spanish)",
    it: "イタリア語 (Italian)",
    ru: "ロシア語 (Russian)",
    zh: "中国語 (Chinese)",
    ko: "韓国語 (Korean)",
    pt: "ポルトガル語 (Portuguese)",
    ar: "アラビア語 (Arabic)",
    hi: "ヒンディー語 (Hindi)",
    tr: "トルコ語 (Turkish)",
    nl: "オランダ語 (Dutch)",
    pl: "ポーランド語 (Polish)",
    sv: "スウェーデン語 (Swedish)",
    fi: "フィンランド語 (Finnish)",
    da: "デンマーク語 (Danish)",
    no: "ノルウェー語 (Norwegian)",
    cs: "チェコ語 (Czech)",
    hu: "ハンガリー語 (Hungarian)",
    th: "タイ語 (Thai)",
    vi: "ベトナム語 (Vietnamese)",
  }

  return (
    <div className="space-y-6">
      {/* General Settings Card */}
      <div style={cardStyle} className="rounded-lg overflow-hidden">
        <div style={cardHeaderStyle} className="px-6 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-red-400">一般設定</h2>
          </div>
          <p className="text-gray-400 text-sm mt-1">アプリケーションの一般設定を構成</p>
        </div>
        <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
        <div className="p-6 space-y-6">
          {/* Language */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-400">言語 (ISO 639)</h3>
            <select
              className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              style={inputStyle}
              value={language}
              onChange={(e) => updateConfig("appConfig", { language: e.target.value }, "overwrite")}
            >
              <option value="">言語を選択</option>
              {supportedLanguages.map((langCode) => (
                <option key={langCode} value={langCode}>
                  {languageNames[langCode] || langCode}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-400">ISO 639 言語コード: {language}</p>
          </div>

          {/* Apex Legends Path */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-400">Apex Legendsパス</h3>
            <input
              value={apexLegendsPath}
              onChange={(e) =>
                updateConfig(
                  "appConfig",
                  { apexLegends: { ...configData?.appConfig?.apexLegends, path: e.target.value } },
                  "overwrite",
                )
              }
              style={inputStyle}
              className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Apex Legendsのパスを入力"
            />
          </div>

          {/* Apex Game Launcher */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-400">ゲームランチャー</h3>
            <select
              value={apexGameLauncher}
              onChange={(e) =>
                updateConfig(
                  "appConfig",
                  { apexLegends: { ...configData?.appConfig?.apexLegends, game_Lancher: e.target.value } },
                  "overwrite",
                )
              }
              style={inputStyle}
              className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Steam">Steam</option>
              <option value="EA">EA App</option>
            </select>
            <p className="text-xs text-gray-400">Apex Legendsを起動するランチャーを選択</p>
          </div>

          {/* Apex Legends Option */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-400">Apex Legendsオプション</h3>
            <input
              value={apexOption}
              onChange={(e) =>
                updateConfig(
                  "appConfig",
                  { apexLegends: { ...configData?.appConfig?.apexLegends, option: e.target.value } },
                  "overwrite",
                )
              }
              style={inputStyle}
              className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Apex Legends起動オプションを入力"
            />
          </div>

          {/* Data FPS */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-400">データFPS</h3>
            <input
              type="number"
              value={dataFps}
              onChange={(e) => updateConfig("appConfig", { data_Fps: Number(e.target.value) }, "overwrite")}
              style={inputStyle}
              className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              min="1"
              max="240"
            />
            <p className="text-xs text-gray-400">データ収集のフレームレート</p>
          </div>
        </div>
      </div>

      {/* File Settings Card */}
      <div style={cardStyle} className="rounded-lg overflow-hidden">
        <div style={cardHeaderStyle} className="px-6 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-red-400">ファイル設定</h2>
          </div>
          <p className="text-gray-400 text-sm mt-1">ファイルパスとディレクトリを設定</p>
        </div>
        <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
        <div className="p-6 space-y-6">
          {/* Output Directory */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-400">出力ディレクトリ</h3>
            <input
              value={outputDir}
              onChange={(e) => updateConfig("appConfig", { output: e.target.value }, "overwrite")}
              style={inputStyle}
              className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="出力ディレクトリのパスを入力"
            />
            <p className="text-xs text-gray-400">出力ファイルが保存されるディレクトリ</p>
          </div>

          {/* Log Directory */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-400">ログディレクトリ</h3>
            <input
              value={logDir}
              onChange={(e) => updateConfig("appConfig", { log_Dir: e.target.value }, "overwrite")}
              style={inputStyle}
              className="w-full h-10 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="ログディレクトリのパスを入力"
            />
            <p className="text-xs text-gray-400">ログファイルが保存されるディレクトリ</p>
          </div>
        </div>
      </div>

      {/* Configuration JSON Card */}
      <div style={cardStyle} className="rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-red-400">設定JSON</h2>
          <p className="text-gray-400 text-sm mt-1">生の設定データを表示・編集</p>
        </div>
        <div style={{ backgroundColor: "rgba(139, 0, 0, 0.2)" }} className="h-px w-full"></div>
        <div className="p-4">
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderColor: "#1f2937" }}
            className="border rounded-md p-4 overflow-auto max-h-[500px]"
          >
            <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
              {configData ? JSON.stringify(configData, null, 2) : "設定データがありません"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

