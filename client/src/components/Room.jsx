// import all mayor components
import Stage from '../components/Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from './Dropdown/Dropdown.jsx';
import ExtraCompsBar from './ExtraCompsBar/ExtraCompsBar';
import { useContext, useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MessageChat from './Message/MessageChat';
const Room = (props) => {
  const [togleCamera, setTogleCamera] = useState(true);
  const params = useParams();
  const attendeeName = params.id.split('&')[1];
  const roomId = params.id.split('&')[0];
  return (
    <>
      <div>Room</div>
      <Stage
        togleCamera={togleCamera}
        attendeeName={attendeeName}
        roomId={roomId}
      />
      <Dropdown attendeeName={attendeeName} roomId={roomId} />
      <MessageChat attendeeName={attendeeName} roomId={roomId} />
      <ExtraCompsBar />
    </>
  );
};
export default Room;
