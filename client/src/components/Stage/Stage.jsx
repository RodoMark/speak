import Video from '../Video';
import CameraContextProvider from '../../context/CameraContext';

export default function Stage(props) {
  const { togleCamera, attendeeName, setTogleCamera, roomId } = props;
  return (
    <div>
      <CameraContextProvider>
        <Video
          togleCamera={togleCamera}
          attendeeName={attendeeName}
          setTogleCamera={setTogleCamera}
          roomId={roomId}
        />
      </CameraContextProvider>
    </div>
  );
}
