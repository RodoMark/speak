import './App.scss';
import Navigation from './components/Navigation';
import Camera from './components/Camera';
import Footer from './components/Footer';



function App() {
  const [overlayState, setOverlayState] = useState('HIDDEN')

  

  return (
    <div className='App'>
      <Navigation />
      <Overlay type={overlayState} />
      <Camera title='video title' />
      <Footer />
    </div>
  );
}

export default App;
