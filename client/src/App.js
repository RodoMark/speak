import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Footer from './components/Footer';
<<<<<<< HEAD

import Receiving from './components/Overlays/Receiving'
import Confirming from './components/Overlays/Confirming'
// import Chat from './components/Chat/Chat';
import Stage from './components/Stage/Stage';

import useCameraData from "./hooks/useCameraData"
=======
import useCameraData from './hooks/useCameraData';
import Chat from './components/chat/Chat';
>>>>>>> f793f8a (fix calling)

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
