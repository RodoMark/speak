import { CameraContext } from '../context/CameraContext';
import { useContext, useRef, useEffect, useState } from 'react';

const Video = (props) => {
  const myVideo = useRef();
  const userVideo = userRef();

  const [stream, setStream] = useState();

  const { callAccepted, callEnded, userVideo } = useContext(CameraContext);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream
        // props.togleCamera ?  stream : null;
      });
  }, []);

  

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    console.log(peer);
    peer.on('signal', (data) => {
      console.log(`inside peer.on signal`);
      socket.emit('answerCall', { signal: data, to: caller });
    });
    peer.on('stream', (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  return (
    <>
      <div className='video-container'>
        <div id='myVideo' className='video'>
          {stream && (
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ width: '300px' }}
            />
          )}
        </div>
        <div id='otherVideo' className='video'>
          {callAccepted && !callEnded ? (
            <video
              playsInline
              ref={userVideo}
              autoPlay
              style={{ width: '300px' }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Video;
