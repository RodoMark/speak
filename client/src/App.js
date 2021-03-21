import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Background from './components/Background';
import Stage from './components/Stage/Stage';
import CameraContextProvider from './context/CameraContext';

function App() {
  return (
    <>
      <div className='App'>
        <CameraContextProvider>
          <Navigation />
          <h1>PARLAR</h1>

          <Footer />
        </CameraContextProvider>
      </div>
      <Background />
    </>
  );
}
export default App;
