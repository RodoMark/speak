import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Camera1 from './components/Camera1';
import Footer from './components/Footer';

import useCameraData from './hooks/useCameraData';

function App() {
  const overlayModes = {
    HIDDEN: "HIDDEN",
    CALLING: "CALLING",
    RECEIVING: "RECEIVING",
    CONNECTING: "CONNECTING",
    ERROR: "ERROR",
    CONFIRMING: "CONFIRMING",
  }

  const [overlayState, setOverlayState] = useState(overlayModes.HIDDEN)

 
  const transitionOverlay = (newType) => {
    setOverlayState(newType)  
  }

  const {
    stream,
    myVideo,
    callAccepted,
    callEnded,
    callCancelled,
    userVideo,
    name,
    me,
    idToCall,
    setName,
    setIdToCall,
    leaveCall,
    callUser,
    receivingCall,
    answerCall,
  } = useCameraData();

  
  return (
    <div className='App'>
      <Navigation />
      <Overlay 
        mode={overlayState} 
        overlayModes={overlayModes}
        transitionOverlay={transitionOverlay}
        onReceive={receivingCall}
        onConfirm={callAccepted}
        onEnd={callEnded}
        onCancel={callCancelled}
      />
      <h1>Parlar</h1>
      <Camera1 
        title='video title' 
        stream={stream}
        myVideo={myVideo}
        userVideo={userVideo}
        name={name}
        setName={setName}
        me={me}
        idToCall={idToCall}
        setIdToCall={setIdToCall}
        callAccepted={callAccepted}
        callEnded={callEnded}
        leaveCall={leaveCall}
        callUser={callUser}
        receivingCall={receivingCall}
        answerCall={answerCall}
      />
      <Footer />
    </div>
  );
}

export default App;
