import React, { useState } from 'react'

import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Stage from './components/Stage/Stage';

import useCameraData from "./hooks/useCameraData"

function App() {
  const {
    io,
    message,
    handle,
  } = useCameraData();

 

 
  
  
  return (
    <div className='App'>
      <Navigation />
     
      
          <h1>PARLAR</h1>
      <Footer />
    </div>
  );
}

export default App;

