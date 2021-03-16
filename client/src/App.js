import './App.scss';
import Navigation from './components/Navigation';
import Button from './components/buttons/Button';
import Camera from './components/Camera';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <h1>PARLAR</h1>
      <Camera title='video title' />
      <Button danger></Button>
    </div>
  );
}

export default App;
