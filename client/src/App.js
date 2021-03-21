import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Background from './components/Background';
import CameraContextProvider from './context/CameraContext';
import Ploading from './components/Ploading';

function App() {
  return (
    <>
      <div className='App'>
        <CameraContextProvider>
          <Navigation />
          <h1>PARLAR</h1>
          <Ploading />
          <Footer />
        </CameraContextProvider>
      </div>
      <Background />
    </>
  );
}
export default App;
