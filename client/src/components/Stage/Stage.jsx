import Video from '../Video';
import CameraContextProvider from '../../context/CameraContext';

export default function Stage(props) {
  return (
    <div>
      <CameraContextProvider>
        <Video />
      </CameraContextProvider>
    </div>
  );
}
