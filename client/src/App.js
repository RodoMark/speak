import './App.scss';
import Navigation from './components/Navigation';
import Camera1 from './components/Camera1';
import Footer from './components/Footer';
import useCameraData from './hooks/useCameraData';
import Chat from './components/chat/Chat';

function App() {
  const {
    // stream,
    // myVideo,
    // callAccepted,
    // callEnded,
    // userVideo,
    // name,
    // me,
    // idToCall,
    // setName,
    // setIdToCall,
    // leaveCall,
    // callUser,
    // receivingCall,
    // answerCall,
    io,
    message,
    handle,
  } = useCameraData();

  return (
    <div className='App'>
      <Navigation />
      <h1>PARLAR</h1>
      <Camera1
      // title='video title'
      // stream={stream}
      // myVideo={myVideo}
      // callAccepted={callAccepted}
      // callEnded={callEnded}
      // userVideo={userVideo}
      // name={name}
      // setName={setName}
      // me={me}
      // idToCall={idToCall}
      // setIdToCall={setIdToCall}
      // leaveCall={leaveCall}
      // callUser={callUser}
      // receivingCall={receivingCall}
      // answerCall={answerCall}
      />
      <Chat message={message} handle={handle} io={io} />
      <Footer />
    </div>
  );
}

export default App;
