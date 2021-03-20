import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';

const Video = () => {
  const { MyVideo, UserVideo, callAccepted, callEnded } = useContext(
    CameraContext
  );

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
