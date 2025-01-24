"use client"

import React, { createContext, useContext, useReducer, useEffect } from "react"

// Initial state
const initialState = {
  lobbyId: null,
  isInLobby: false,
}

// Action types
const ActionTypes = {
  JOIN_LOBBY: "JOIN_LOBBY",
  LEAVE_LOBBY: "LEAVE_LOBBY",
}

// Reducer
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

// Context
const LobbyContext = createContext()

// Provider component
export function LobbyProvider({ children }) {
  const [state, dispatch] = useReducer(lobbyReducer, initialState)

  // Load state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("lobbyState")
    if (savedState) {
      const { lobbyId, isInLobby } = JSON.parse(savedState)
      if (isInLobby && lobbyId) {
        dispatch({ type: ActionTypes.JOIN_LOBBY, payload: lobbyId })
      }
    }
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("lobbyState", JSON.stringify(state))
  }, [state])

  // Actions
  const joinLobby = (lobbyId) => {
    dispatch({ type: ActionTypes.JOIN_LOBBY, payload: lobbyId })
  }

  const leaveLobby = () => {
    dispatch({ type: ActionTypes.LEAVE_LOBBY })
  }

  return <LobbyContext.Provider value={{ ...state, joinLobby, leaveLobby }}>{children}</LobbyContext.Provider>
}

// Custom hook
export const useLobby = () => useContext(LobbyContext)

