"use client"

import React, { createContext, useContext, useReducer, useEffect } from "react"

// 初期状態
const initialState = {
  lobbyId: null,
  isInLobby: false,
}

// アクションタイプ
const ActionTypes = {
  JOIN_LOBBY: "JOIN_LOBBY",
  LEAVE_LOBBY: "LEAVE_LOBBY",
}

// リデューサー
function lobbyReducer(state, action) {
  switch (action.type) {
    case ActionTypes.JOIN_LOBBY:
      return {
        ...state,
        lobbyId: action.payload,
        isInLobby: true,
      }
    case ActionTypes.LEAVE_LOBBY:
      return {
        ...state,
        lobbyId: null,
        isInLobby: false,
      }
    default:
      return state
  }
}

// コンテキストの作成
const LobbyContext = createContext()

// プロバイダーコンポーネント
export function LobbyProvider({ children }) {
  const [state, dispatch] = useReducer(lobbyReducer, initialState)

  // ローカルストレージから状態を復元
  useEffect(() => {
    const savedState = localStorage.getItem("lobbyState")
    if (savedState) {
      const { lobbyId, isInLobby } = JSON.parse(savedState)
      dispatch({ type: ActionTypes.JOIN_LOBBY, payload: lobbyId })
    }
  }, [])

  // 状態が変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem("lobbyState", JSON.stringify(state))
  }, [state])

  // アクション
  const joinLobby = (lobbyId) => {
    dispatch({ type: ActionTypes.JOIN_LOBBY, payload: lobbyId })
  }

  const leaveLobby = () => {
    dispatch({ type: ActionTypes.LEAVE_LOBBY })
  }

  return <LobbyContext.Provider value={{ ...state, joinLobby, leaveLobby }}>{children}</LobbyContext.Provider>
}

// カスタムフック
export const useLobby = () => useContext(LobbyContext)

