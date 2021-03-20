import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import CameraContextProvider from './context/CameraContext';

function App() {
  return (
<<<<<<< HEAD
    <div className='App'>
      <CameraContextProvider>
        <Navigation />
        <h1>PARLAR</h1>
        <Footer />
      </CameraContextProvider>
    </div>
=======
    
      <div className='App'>
        <CameraContextProvider>
        <Navigation />
        <h1>PARLAR</h1>
        <Footer />
        </CameraContextProvider>
    </div>
    
>>>>>>> devbranch
  );
}
export default App;
