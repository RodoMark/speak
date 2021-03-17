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

  const data = {
    stream,
    myVideo,
    callAccepted,
    callEnded,
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
    io,
    message,
    handle,
    overlayState, 
    overlayModes,
    transitionOverlay,
    receivingCall,
    callAccepted,
    callEnded,
    callCancelled
  } = userCameraData();


  return (
    <OverlayContext.Provider value={data}>
      {children}
    </OverlayContext.Provider>
  )
}

export {
  OverlayContext
}