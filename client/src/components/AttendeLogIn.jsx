import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stage from './Stage/Stage.jsx';
import { useParams } from 'react-router-dom';
import { useRef, useContext, useState } from 'react';
import axios from 'axios';
import RoomAttendee from './AttendeeRoom/RoomAttendee';
import AttendeeInvite from './AttendeeRoom/AttendeeInvite';
import { CameraContext } from '../context/CameraContext';
import ExtraCompsBarAttendee from './ExtraCompsBarAttendee';
import EndConfirming from './Overlays/EndConfirming';
import LeaveConfirming from './Overlays/LeaveConfirming';

const AttendeeLogIn = (props) => {
  const [addName, setAddName] = useState(false);
  const [attendeeId, setAttendeeId] = useState();
  const [attendeeName, setAttendeeName] = useState();

  const {
    io,
    stateHangUp,
    stateMe,
    stateReceivingCall,
    stateEndConfirm,
    stateLeaveConfirm,
    stateCallAccepted,
    cancelCall,
    stateLoading,
  } = useContext(CameraContext);
  const [receivingCall, setReceivingCall] = stateReceivingCall;
  const [endConfirm, setEndConfirm] = stateEndConfirm;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [leaveConfirm, setLeaveConfirm] = stateLeaveConfirm;
  const [hangUp, setHangUp] = stateHangUp;
  const [loading, setLoading] = stateLoading;

  const [me, setMe] = stateMe;
  const roomId = useParams();
  const userName = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttendeeName(userName.current.value);
    const full = `${userName.current.value}&${me}`;
    const data = {
      roomId: roomId.title,
      userName: full,
      feedback: 'none',
    };
    setLoading(true);
    axios.post('/api/attendees', data).then((res) => {
      setLoading(false);
      io.emit('attendeejoin', { status: true });
      setAddName(true);
      setAttendeeId(res.data.id);
    });
  };
  return (
    <section className="room room--attendee">
      
      {endConfirm && (
        <EndConfirming setHangUp={setHangUp} setEndConfirm={setEndConfirm} />
      )}
      {leaveConfirm && (
        <LeaveConfirming
          setLeaveConfirm={setLeaveConfirm}
          cancelCall={cancelCall}
        />
      )}

      {addName ? (
        <RoomAttendee
          attendeeId={attendeeId}
          attendeeName={attendeeName}
          roomId={roomId.title}
        />
      ) : <AttendeeInvite 
            handleSubmit={handleSubmit}
            userName={userName}
            roomId={roomId}
          /> 
          
      }

      <ExtraCompsBarAttendee
        hangUp={hangUp}
        setHangUp={setHangUp}
        setLeaveConfirm={setLeaveConfirm}
        callAccepted={callAccepted}
        setCallAccepted={setCallAccepted}
        setEndConfirm={setEndConfirm}
        leaveConfirm={leaveConfirm}
      />
    </section>
  );
};
export default AttendeeLogIn;
