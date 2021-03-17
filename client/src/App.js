import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Footer from './components/Footer';
import Camera1 from './components/Camera1';
import Receiving from './components/Overlays/Receiving'
import Confirming from './components/Overlays/Confirming'
import Chat from './components/chat/Chat';

import useCameraData from "./hooks/useCameraData"

function App() {
  const {
    io,
    message,
    handle,
  } = useCameraData();

  const { endingCallConfirm, receivingCall, answerCall, callCancelled } = useCameraData()
  console.log(receivingCall)
  
  
  return (
    <div className='App'>
      <Navigation />
      { receivingCall && <Receiving />}
      { endingCallConfirm && <Confirming />}
        <Overlay />
          <h1>PARLAR</h1>
      <Camera1
      />
      <Chat message={message} handle={handle} io={io} />
      <Footer />
    </div>
  );
}

export default App;
