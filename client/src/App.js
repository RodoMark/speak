import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay, { overlayModes } from './components/overlays/Overlay';
import Camera1 from './components/Camera1';
import Footer from './components/Footer';

import useCameraData from './hooks/useCameraData';

function App() {
  const [overlayState, setOverlayState] = useState(overlayModes.HIDDEN)

  const transitionOverlay = (newType) => {
    setOverlayState(newType)  
  }

  const {
    stream,
    myVideo,
    callAccepted,
    callEnded,
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
        type={overlayState} 
        transitionOverlay={transitionOverlay}/>
      <h1>PARLAR</h1>
      <Camera1 
        title='video title' 
        stream={stream}
        myVideo={myVideo}
        callAccepted={callAccepted}
        callEnded={callEnded}
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
