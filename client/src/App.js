import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import CameraContextProvider from './context/CameraContext'

function App() {
  // const { io, message, handle } = useCameraData(); 
  return (
    
      <div className='App'>
        <CameraContextProvider>
        <Navigation />
        <h1>PARLAR</h1>
        <Footer />
        </CameraContextProvider>
    </div>
    
  );
}
export default App;

