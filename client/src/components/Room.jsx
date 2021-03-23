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
import RatingsArrayTeacher from './Ratings/RatingsArrayTeacher'


const Room = () => {
  const {
    io,
    cancelCall,
    stateCallAccepted,
    stateHangUp,
    stateEndConfirm,
    stateLeaveConfirm,
    stateRating,
    stateReceivingCall,
  } = useContext(CameraContext);

  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [endConfirm, setEndConfirm] = stateEndConfirm;
  const [hangUp, setHangUp] = stateHangUp;
  const [receivingCall, setReceivingCall] = stateReceivingCall;
  const [leaveConfirm, setLeaveConfirm] = stateLeaveConfirm;

  const params = useParams();
  const roomId = params.title.split('&')[0];
  return (
      <section className="room room--teacher">
      <div className="stage">
      <Stage />
      <RatingsArrayTeacher />
      <Dropdown socket={io} roomId={roomId} />
      </div>
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
      
      <MessageChat socket={io} />
      <ExtraCompsBar
        hangUp={hangUp}
        setHangUp={setHangUp}
        setLeaveConfirm={setLeaveConfirm}
        callAccepted={callAccepted}
        setCallAccepted={setCallAccepted}
        leaveConfirm={leaveConfirm}
      />
      </section>
  );
};

export default Room;
