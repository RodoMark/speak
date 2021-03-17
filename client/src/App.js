import React, { useState, useContext } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Camera1 from './components/Camera1';
import Footer from './components/Footer';


import { OverlayContextProvider } from './hooks/useOverlayContext'

function App() {
  


 
  

  

  
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
