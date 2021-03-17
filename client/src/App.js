import React, { useState, useContext } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Camera1 from './components/Camera1';
import Footer from './components/Footer';

import useCameraData from './hooks/useCameraData';
import { OverlayContextProvider } from './hooks/useOverlayContext'

function App() {
  


 
  

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
      <OverlayContextProvider 
        value={data}
      >
        <Overlay 
          mode={overlayState} 
          overlayModes={overlayModes}
          transitionOverlay={transitionOverlay}
          onReceive={receivingCall}
          onConfirm={callAccepted}
          onEnd={callEnded}
          onCancel={callCancelled}
        />
          <h1>PARLAR</h1>
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
      </OverlayContextProvider>
      <Footer />
    </div>
  );
}

export default App;
