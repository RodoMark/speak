import React, { useState } from 'react';

import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import useCameraData from './hooks/useCameraData';
import Chat from './components/chat/Chat';

function App() {
  const { io, message, handle } = useCameraData();

  return (
    <div className='App'>
      <Navigation />
      <h1>PARLAR</h1>

      <Chat message={message} handle={handle} io={io} />
      <Footer />
    </div>
  );
}

export default App;
