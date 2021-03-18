import React from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay'
import Footer from './components/Footer';
import Camera1 from './components/Camera1';
import ExtraCompsBar from './components/ExtraCompsBar'
import Receiving from './components/Overlays/Receiving'
import Confirming from './components/Overlays/Confirming'

import useCameraData from "./hooks/useCameraData"
import OverlayContextProvider from './context/useOverlayContext';

function App() {
  const {
    io,
    message,
    handle,
  } = useCameraData();

  const [receivingCall, setReceivingCall] =  useState(false)
	const [endingCall, setEndingCall] =  useState(false)
  
  return (
    <div className='App'>
      <Navigation />
      <Overlay 
        receivingCall={receivingCall}
        setReceivingCall={setReceivingCall}
        endingCall={endingCall}
        setEndingCall={setEndingCall}
      />
          <h1>PARLAR</h1>
      <Camera1
      />
      <ExtraCompsBar 
        endingCall={endingCall}
        setEndingCall={setEndingCall}/>
      <Footer />
    </div>
  );
}

export default App;
