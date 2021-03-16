import './App.scss';
import Navigation from './components/Navigation';
import Button from './components/buttons/Button';
import Camera from './components/Camera';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Navigation />
      <h1>PARLAR</h1>
      <Button confirm>BUTTON</Button>
      <Camera title='video title' />
      <Button danger></Button>
      <Button call confirm></Button>
      <Footer />
    </div>
  );
}

export default App;
