import Stage from '../components/Stage/Stage.jsx';
import Dropdown from './Dropdown/Dropdown';
// import ExtraCompsBar from '../components/ExtraCompsBar';
import Confirming from '../components/Overlays/Confirming';
import Calling from '../components/Overlays/Calling';
import MessageChat from './Message/MessageChat';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext';
import useCameraData from '../hooks/useCameraData';

const Room = () => {
  const {
    socket,
    callCancelled,
    receivingCall,
    setReceivingCall,
  } = useCameraData();
  console.log(socket);
  const [leaveRoom, setLeaveRoom] = useState(false);
  const params = useParams();
  const roomId = params.title.split('&')[0];
  return (
    <>
      <div>Room</div>
      <Stage />
      {receivingCall && <Calling setReceivingCall={setReceivingCall} />}
      {leaveRoom && (
        <Confirming
          callCancelled={callCancelled}
          setEndingCall={setReceivingCall}
        />
      )}
      <Dropdown socket={socket} roomId={roomId} />
      <MessageChat socket={socket} />
    </>
  );
};

export default Room;
