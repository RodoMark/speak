import React, { useContext } from 'react'

const OverlayContext = React.createContext(null)

export const OverlayContextProvider = ({ children }) => {
  return (
    <OverlayContext.Provider>
      {children}
    </OverlayContext.Provider>
  )
}