import './App.scss';
import Navigation from './components/Navigation';
import Camera1 from './components/Camera1';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <h1>PARLAR</h1>
      <Camera1 title='video title' />
      <Footer />
    </div>
  );
}

export default App;
