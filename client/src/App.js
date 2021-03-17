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
      <OverlayContextProvider >
      <Overlay />
          <h1>PARLAR</h1>
      <Camera1 />
      </OverlayContextProvider>
      <Footer />
    </div>
  );
}

export default App;
