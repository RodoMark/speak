// video component handles the camera streams, while videocall hanles calls
import Video from './Video';
import Videocall from './Videocall';
const Camera1 = (props) => {
  const {
    stream,
    myVideo,
    callAccepted,
    callEnded,
    userVideo,
    name,
    me,
    idToCall,
    setName,
    setIdToCall,
    leaveCall,
    callUser,
    receivingCall,
    answerCall,
  } = props

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>{props.title}</h1>
      <div className='container'>
        <Video
          stream={stream}
          myVideo={myVideo}
          callAccepted={callAccepted}
          callEnded={callEnded}
          userVideo={userVideo}
        />
        <Videocall
          name={name}
          setName={setName}
          me={me}
          idToCall={idToCall}
          setIdToCall={setIdToCall}
          callAccepted={callAccepted}
          callEnded={callEnded}
          leaveCall={leaveCall}
          callUser={callUser}
          receivingCall={receivingCall}
          answerCall={answerCall}
        />
      </div>
    </>
  );
};
export default Camera1;
