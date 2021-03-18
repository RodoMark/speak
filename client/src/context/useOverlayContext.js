import React, { createContext, useState } from 'react'
import useCameraData from '../hooks/useCameraData'

export const OverlayContext = createContext(null)

export const OverlayContextProvider = (props) => {

  const { endingCall, setEndingCall, receivingCall, setReceivingCall } = useCameraData();
  const data = { endingCall, setEndingCall, receivingCall, setReceivingCall };
  
  return (
    <OverlayContext.Provider value={data}>
      {props.children}
    </OverlayContext.Provider>
  )
}

export default OverlayContextProvider
