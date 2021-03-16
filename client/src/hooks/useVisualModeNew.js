import { useState } from 'react'

export function useVisualMode(initMode) {
  const [mode, setMode] = useState(initMode)
  const [history, setHistory] = useState([initMode])

  const transition = (newMode, replace) => {

  }
}