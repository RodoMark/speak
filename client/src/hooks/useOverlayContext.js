import React, { useState } from 'react'
import useCameraData from './useCameraData'



const OverlayContext = React.createContext(null)



export const OverlayContextProvider = () => {
  const {
    endingCallConfirm,
    answerCall,
    cancelCall,
  } = useCameraData()

  const overlayData = {
    onConfirm: answerCall,
    onReject: cancelCall,
    onLeave: cancelCall,
    onCancel: () =>  {
      setEndingCall(false);
      setReceivingCall(false);
    },
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