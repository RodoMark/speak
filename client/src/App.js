import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay, { overlayModes } from './components/overlays/Overlay'
import Camera1 from './components/Camera1';
import Footer from './components/Footer';

function App() {
  const [overlayState, setOverlayState] = useState(overlayModes.HIDDEN)

  const transitionOverlay = (newType) => {
    setOverlayState(newType)  
  }

  
  return (
    <div className='App'>
      <Navigation />
      <Overlay 
        type={overlayState} 
        transitionOverlay={transitionOverlay}/>
      <h1>PARLAR</h1>
      <Camera1 title='video title' />
      <Footer />
    </div>
  );
}

export default App;
