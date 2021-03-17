import React from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Overlay from './components/Overlays/Overlay';
import Footer from './components/Footer';


import { OverlayContextProvider } from './hooks/useOverlayContext'


function App() {
  
  return (
    <div className='App'>
      <Navigation />
      <OverlayContextProvider>
        <Overlay />
      </OverlayContextProvider>
          <h1>PARLAR</h1>
      <Footer />
    </div>
  );
}

export default App;
