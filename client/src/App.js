import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Camera from './components/Camera';
import Footer from './components/Footer';
import Overlay, { overlayModes } from './components/overlays/Overlay'

function App() {
  const [overlayState, setOverlayState] = useState(overlayModes.HIDDEN)

  const transitionOverlay = (newType) => {
    setOverlayState(newType)  
  }

  
  return (
    <div className='App'>
      <Navigation />
      <Overlay type={overlayState} />
      <Camera title='video title' />
      <Footer />
    </div>
  );
}

export default App;
