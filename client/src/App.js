import './App.scss';
import Navigation from './components/Navigation';
import Camera from './components/Camera';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Navigation />
      <Camera title='video title' />
      <Footer />
    </div>
  );
}

export default App;
