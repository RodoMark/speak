import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import CameraContextProvider from './context/CameraContext'

function App() {
  // const { io, message, handle } = useCameraData(); 
  return (
    <CameraContextProvider>
      <div className='App'>
        <Navigation />
        <h1>PARLAR</h1>
        <Footer />
    </div>
    </CameraContextProvider>
  );
}
export default App;

