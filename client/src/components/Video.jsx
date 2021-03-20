import { useContext, useRef, useEffect, useState } from 'react';
import { CameraContext } from '../context/CameraContext';

const Video = (props) => {
  const myVideo = useRef();
  const userVideo = useRef();

  const { stateStream,
    stateCallAccepted,
    stateCallEnded, } = useContext(CameraContext)

  const [stream, setStream] = stateStream;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [callEnded, setCallEnded] = stateCallEnded;

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream
        // props.togleCamera ?  stream : null;
      });
  }, []);

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
