import Stage from '../components/Stage/Stage.jsx';
import Dropdown from './Dropdown/Dropdown';
import EndConfirming from './Overlays/EndConfirming';
import LeaveConfirm from './Overlays/LeaveConfirming';
import Calling from '../components/Overlays/Calling';
import MessageChat from './Message/MessageChat';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext';
import ExtraCompsBar from './ExtraCompsBar';

const Room = () => {
  const {
    io,
    stateHangUp,
    stateReceivingCall,
    stateEndConfirm,
    stateLeaveConfirm,
    stateCallAccepted,
    cancelCall,
  } = useContext(CameraContext);

  const [receivingCall, setReceivingCall] = stateReceivingCall;
  const [endConfirm, setEndConfirm] = stateEndConfirm;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [leaveConfirm, setLeaveConfirm] = stateLeaveConfirm;
  const [hangUp, setHangUp] = stateHangUp;

  const params = useParams();
  const roomId = params.title.split('&')[0];
  return (
    <>
      <div class="room room--teacher">
      <Stage />
      {receivingCall && <Calling setReceivingCall={setReceivingCall} />}
      {endConfirm && (
        <EndConfirming setHangUp={setHangUp} setEndConfirm={setEndConfirm} />
      )}
      {leaveConfirm && (
        <LeaveConfirm
          setLeaveConfirm={setLeaveConfirm}
          cancelCall={cancelCall}
        />
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
      </div>
    </>
  );
};

export default Room;
