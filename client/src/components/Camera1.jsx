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
          <Video />
          <Videocall />
        </CameraContextProvider>
      </div>
    </>
  );
};
export default Camera1;
