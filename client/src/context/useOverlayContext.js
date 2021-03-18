import React, { createContext, useState } from 'react'
import useCameraData from '../hooks/useCameraData'



const OverlayContext = createContext(null)



export const OverlayContextProvider = () => {

  const {endingCall, setEndingCall, receivingCall, setReceivingCall} = useCameraData()
  
  return (
    <OverlayContext.Provider value={endingCall, setEndingCall, receivingCall, setReceivingCall}>
    </OverlayContext.Provider>
  )
}

export default OverlayContext
