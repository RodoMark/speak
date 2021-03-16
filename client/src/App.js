import './App.scss';
import Navigation from './components/Navigation';
import Button from './components/buttons/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <h1>PARLAR</h1>
      <Button call confirm></Button>
      <Footer />
    </div>
  );
}

export default App;
