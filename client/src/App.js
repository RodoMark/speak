import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Footer from './components/Footer';

import Receiving from './components/Overlays/Receiving'
import Confirming from './components/Overlays/Confirming'
// import Chat from './components/Chat/Chat';
import Stage from './components/Stage/Stage';

import useCameraData from "./hooks/useCameraData"

function App() {
  const {
    io,
    message,
    handle,
  } = useCameraData();

  const { receivingCall, answerCall, callCancelled } = useCameraData()
  console.log(receivingCall)
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
