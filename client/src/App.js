import './App.scss';
import Navigation from './components/Navigation';
import Stage from './components/Stage/Stage';
import Footer from './components/Footer';

function App() {
  // const { io, message, handle } = useCameraData();

  return (
    <div className='App'>
      <Navigation />
      <h1>PARLAR</h1>
      <Stage />
      <Footer />
    </div>
  );
}

export default App;
