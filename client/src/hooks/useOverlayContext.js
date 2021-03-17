import React, { useContext } from 'react'

export const OverlayContext = React.createContext(null)

export const OverlayContextProvider = ({ children }) => {
  return (
    <OverlayContext.Provider>
      {children}
    </OverlayContext.Provider>
  )
}

