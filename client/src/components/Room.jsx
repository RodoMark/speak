// import all mayor components
import Stage from '../components/Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from './Dropdown/Dropdown.jsx';
import ExtraCompsBar from './ExtraCompsBar/ExtraCompsBar';
import { useContext, useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MessageChat from './Message/MessageChat';
import useCameraData from '../hooks/useCameraData';

const Room = (props) => {
  const [togleCamera, setTogleCamera] = useState(true);
  const params = useParams();
  const { io } = useCameraData();
  const attendeeName = params.title.split('&')[1];
  const roomId = params.title.split('&')[0];
  const attendeeId = params.title.split('&')[2];
  return (
    <>
      <div>Room</div>
      <Stage
        togleCamera={togleCamera}
        attendeeName={attendeeName}
        roomId={roomId}
      />
      <Dropdown attendeeName={attendeeName} roomId={roomId} />
      <MessageChat
        attendeeId={attendeeId}
        attendeeName={attendeeName}
        roomId={roomId}
        io={io}
      />
      <ExtraCompsBar />
    </>
  );
};
export default Room;
