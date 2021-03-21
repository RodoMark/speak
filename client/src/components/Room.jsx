import Stage from '../components/Stage/Stage.jsx';
import Dropdown from './Dropdown/Dropdown';
import EndConfirming from './Overlays/EndConfirming';
import LeaveConfirm from './Overlays/LeaveConfirming';
import Calling from '../components/Overlays/Calling';
import MessageChat from './Message/MessageChat';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext';
import ExtraCompsBar from './ExtraCompsBar';

const Room = () => {
  const {
    io,
    stateReceivingCall,
    stateEndConfirm,
    stateLeaveConfirm,
    stateCallAccepted,
    leaveRoom,
  } = useContext(CameraContext);
  const [receivingCall, setReceivingCall] = stateReceivingCall;
  const [endConfirm, setEndConfirm] = stateEndConfirm;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [leaveConfirm, setLeaveConfirm] = stateLeaveConfirm;
  const [hangUp, setHangUp] = useState(false);
  const params = useParams();
  const roomId = params.title.split('&')[0];
  return (
    <>
      <div>Room</div>
      <Stage />
      {receivingCall && <Calling setReceivingCall={setReceivingCall} />}
      {endConfirm && (
        <EndConfirming setHangUp={setHangUp} setEndConfirm={setEndConfirm} />
      )}
      {leaveConfirm && (
        <LeaveConfirm setLeaveConfirm={setLeaveConfirm} leaveRoom={leaveRoom} />
      )}

      <Dropdown socket={io} roomId={roomId} />
      <MessageChat socket={io} />
      <ExtraCompsBar
        hangUp={hangUp}
        setHangUp={setHangUp}
        setLeaveConfirm={setLeaveConfirm}
        callAccepted={callAccepted}
        setCallAccepted={setCallAccepted}
        leaveConfirm={leaveConfirm}
      />
    </>
  );
};

export default Room;
