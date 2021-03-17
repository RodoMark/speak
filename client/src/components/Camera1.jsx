// video component handles the camera streams, while videocall hanles calls
import Video from './Video';
import Videocall from './Videocall';
import CameraContextProvider from '../context/CameraContext';

const Camera1 = (props) => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>{props.title}</h1>
      <div className='container'>
        <CameraContextProvider>
          <Video
          // myVideo={props.myVideo}
          // stream={props.stream}
          // callAccepted={props.callAccepted}
          // callEnded={props.callEnded}
          // userVideo={props.userVideo}
          />
          <Videocall
          // name={props.name}
          // setName={props.setName}
          // me={props.me}
          // idToCall={props.idToCall}
          // setIdToCall={props.setIdToCall}
          // callAccepted={props.callAccepted}
          // callEnded={props.callEnded}
          // leaveCall={props.leaveCall}
          // callUser={props.callUser}
          // receivingCall={props.receivingCall}
          // answerCall={props.answerCall}
          />
        </CameraContextProvider>
      </div>
    </>
  );
};
export default Camera1;
