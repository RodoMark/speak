import React, { useState } from 'react'

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

  return (
    <OverlayContext.Provider>
      {children}
    </OverlayContext.Provider>
  )
}

export {
  OverlayContext
}