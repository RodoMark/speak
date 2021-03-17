import React, { useState } from 'react'



console.log(useCameraData)

const overlayModes = {
  HIDDEN: "HIDDEN",
  CALLING: "CALLING",
  RECEIVING: "RECEIVING",
  CONNECTING: "CONNECTING",
  ERROR: "ERROR",
  CONFIRMING: "CONFIRMING",
}

const OverlayContext = React.createContext(null)

export const OverlayContextProvider = ({ children }) => {
  const [overlayState, setOverlayState] = useState(overlayModes.HIDDEN)

  const transitionOverlay = (newType) => {
    setOverlayState(newType)  
  }

  

  const layout = {
    overlayState, 
    overlayModes,
    transitionOverlay,
    receivingCall,
    callAccepted,
    callEnded,
    callCancelled
  }

  const data = { cam, layout }

  return (
    <OverlayContext.Provider value={data}>
      {children}
    </OverlayContext.Provider>
  )
}

export {
  OverlayContext
}