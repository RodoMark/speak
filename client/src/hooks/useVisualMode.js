import { useState } from 'react'

export function useVisualMode(initMode) {
  const [mode, setMode] = useState(initMode)

  const transition = (newMode) => {
    setMode(newMode)
  }
}

return {
  mode,
  transition,
}
