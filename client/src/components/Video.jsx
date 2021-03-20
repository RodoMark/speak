import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';

const Video = () => {
  const {
    MyVideo,
    UserVideo,
    stateCallAccepted,
    stateCallEnded,
    stateMe,
  } = useContext(CameraContext);
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [callEnded, setCallEnded] = stateCallEnded;
  const [me, setMe] = stateMe;
  console.log(MyVideo, me);

  return (
    <>
      <div className='video-container'>
        <div id='myVideo' className='video'>
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
