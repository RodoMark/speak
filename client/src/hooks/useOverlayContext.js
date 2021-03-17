import React, { useState } from 'react'

import useCameraData from '../hooks/useCameraData';

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

  const {
    stream,
    myVideo,
    callAccepted,
    callEnded,
    callCancelled,
    userVideo,
    name,
    me,
    idToCall,
    setName,
    setIdToCall,
    leaveCall,
    callUser,
    receivingCall,
    answerCall,
  } = useCameraData();

  const data = {
    overlayState, 
    overlayModes,
    transitionOverlay,
    receivingCall,
    callAccepted,
    callEnded,
    callCancelled
  }



  return (
    <OverlayContext.Provider value={data}>
      {children}
    </OverlayContext.Provider>
  )
}

export {
  OverlayContext
}