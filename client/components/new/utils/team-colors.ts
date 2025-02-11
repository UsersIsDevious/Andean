// チームIDに基づいて色を生成する関数
export function getTeamColor(teamId: number): string {
  // チームID（2始まり）からチーム番号（1始まり）に変換してインデックス（0始まり）を計算
  const teamIndex = teamId - 2

  const baseColors = [
    "0515f0", // blue
    "f01505", // red
    "15f005", // green
    "f0b505", // orange
    "8205f0", // purple
    "f005b5", // pink
    "05f0b5", // teal
    "b5f005", // lime
    "0582f0", // light blue
    "f05805", // coral
  ]

  return baseColors[teamIndex % baseColors.length]
}

// ダークモードに基づいてテキスト色を返す関数
export function getTextColor(isDarkMode: boolean): string {
  return isDarkMode ? "ffffff" : "000000"
}

// チームカラーに基づいてコントラストの高いテキスト色を返す関数
export function getContrastTextColor(backgroundColor: string): string {
  // 背景色をRGB値に変換
  const r = Number.parseInt(backgroundColor.substr(0, 2), 16)
  const g = Number.parseInt(backgroundColor.substr(2, 2), 16)
  const b = Number.parseInt(backgroundColor.substr(4, 2), 16)

  // 輝度を計算
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // 輝度が0.5以上の場合は黒、それ以外は白を返す
  return luminance > 0.5 ? "000000" : "ffffff"
}

