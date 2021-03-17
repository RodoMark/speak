const overlayModes = {
  HIDDEN: "HIDDEN",
  CALLING: "CALLING",
  RECEIVING: "RECEIVING",
  CONNECTING: "CONNECTING",
  ERROR: "ERROR",
  CONFIRMING: "CONFIRMING",
}





const data = {
    overlayState, 
    overlayModes,
    transitionOverlay,
    receivingCall,
    callAccepted,
    callEnded,
    callCancelled
  }



import React, { useContext } from 'react'

export const OverlayContext = React.createContext(data)

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

