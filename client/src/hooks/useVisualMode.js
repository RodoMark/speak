import {useState} from 'react'

export function useVisualMode(initMode){
  const [mode, setMode] = useState(initMode)
  const [history, setHistory] = useState([initMode])

  const transition = (newMode, replace) => {
    
    if(replace) {
      setHistory(prevHistory => [...prevHistory.slice(0, prevHistory.length-1), newMode]) 
      setMode(newMode)  
    } else {
      setHistory(prevHistory => [...prevHistory, newMode])
      setMode(newMode) 
    }
  
    
  }

  const back = () => {
    if(history.length <= 1) return

    const newHistory = [...history]
    newHistory.pop()
    setHistory(newHistory)
    setMode(...newHistory.slice(-1))
  }

  return {
    mode,
    history, 
    transition,
    back
  }
}