import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import AuthContextProvider from './context/AuthContext'

function App() {
  // const { io, message, handle } = useCameraData(); 
  return (
    <AuthContextProvider>
      <div className='App'>
        <Navigation />
        <h1>PARLAR</h1>
        <Footer />
    </div>
    </AuthContextProvider>
  );
}
export default App;

