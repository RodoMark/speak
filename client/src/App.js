import React from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Footer from './components/Footer';

import useCameraData from "./hooks/useCameraData"

import { OverlayContextProvider } from './hooks/useOverlayContext'

function App() {
  const { receivingCall } = useCameraData()
  
  return (
    <div className='App'>
      <Navigation />
      { receivingCall && <Receiving />}
      <OverlayContextProvider>
        <Overlay />
      </OverlayContextProvider>
          <h1>PARLAR</h1>
      <Footer />
    </div>
  );
}

export default App;
