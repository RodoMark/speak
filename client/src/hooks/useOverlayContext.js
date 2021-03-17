import React, { useState } from 'react'
import useCameraData from './useCameraData'



const OverlayContext = React.createContext(null)



export const OverlayContextProvider = () => {
  const {
    cancelCall,
    answerCall,
    
  } = useCameraData()

  const overlayData = {

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