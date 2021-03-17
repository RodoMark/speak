import React from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Footer from './components/Footer';
import Camera1 from './components/Camera1';
import Receiving from './components/Overlays/Receiving'
import Confirming from './components/Overlays/Confirming'

import useCameraData from "./hooks/useCameraData"

function App() {
  const {
    io,
    message,
    handle,
  } = useCameraData();

  const { endingCall, receivingCall } = useCameraData()
  
  
  return (
    <div className='App'>
      <Navigation />
      { receivingCall && <Receiving />}
      { endingCall && <Confirming />}
        <Overlay />
          <h1>PARLAR</h1>
      <Camera1
      />
      <Footer />
    </div>
  );
}

export default App;
