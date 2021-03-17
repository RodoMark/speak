import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Footer from './components/Footer';
import Receiving from './components/Overlays/Receiving'
import Confirming from './components/Overlays/Confirming'

import useCameraData from "./hooks/useCameraData"

// import { OverlayContextProvider } from './hooks/useOverlayContext'

function App() {
  const { receivingCall } = useCameraData()
  const [endingCall, setEndingCall] = useState(false)
  
  return (
    <div className='App'>
      <Navigation />
      { receivingCall && <Receiving />}
      { endingCall && <Confirming />}
        <Overlay />
          <h1>PARLAR</h1>
      <Footer />
    </div>
  );
}

export default App;
