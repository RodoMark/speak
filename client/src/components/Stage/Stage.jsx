import Video from '../Video';
import CameraContextProvider from '../../context/CameraContext';

export default function Stage(props) {
  const { togleCamera, attendeeName, setTogleCamera, roomId } = props;
  return (
    <CameraContextProvider>
      <div>
        <Video
          togleCamera={togleCamera}
          attendeeName={attendeeName}
          setTogleCamera={setTogleCamera}
          roomId={roomId}
        />
      </div>
    </CameraContextProvider>
  );
}
