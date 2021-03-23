/* eslint-disable */

import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';

const Video = () => {
  const {
    MyVideo,
    UserVideo,
    stateCallAccepted,
    stateCallEnded,
    stateMe,
    stateHangUp,
    stateCameraLoaded
  } = useContext(CameraContext);
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [callEnded, setCallEnded] = stateCallEnded;
  const [me, setMe] = stateMe;
  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded
  // debugger;  
  setCameraLoaded(true)

  console.log("cameraLoaded", cameraLoaded)

  return (
    <>
      <div className='video-container'>
        <div id={me} className='video'>
          {MyVideo}
        </div>
        <div id='otherVideo' className='video'>
          {callAccepted && !callEnded ? UserVideo : null}
        </div>
      </div>
    </>
  );
};
export default Video;
