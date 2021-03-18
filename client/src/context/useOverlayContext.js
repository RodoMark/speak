import React, { useState } from 'react'
import useCameraData from '../hooks/useCameraData'



const OverlayContext = React.createContext(null)



export const OverlayContextProvider = () => {
  const {
    endingCallConfirm,
    answerCall,
    rejectCall,
    cancelCall,
    leaveCall,
  } = useCameraData()

  const overlayData = {
    onAnswer: answerCall,
    onReject: rejectCall,
    //destroy the room
    onCloseLobby: leaveCall,
    //leave the call
    onLeaveLobby: cancelCall,
    //cancel request to leave/destroy room
    onCancel: () => {
      setEndingCall(false);
      setReceivingCall(false);
    },
    onConfirm: endingCallConfirm,
  }
 

  return (
    <OverlayContext.Provider values={{overlayData}}>
      {children}
    </OverlayContext.Provider>
  )
}

export {
  OverlayContext
}