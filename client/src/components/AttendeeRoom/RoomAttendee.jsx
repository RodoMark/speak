import { useState, useContext } from 'react';
import Stage from '../Stage/Stage.jsx';
import ExtraCompsBarAttendee from '../ExtraCompsBarAttendee';
import Receiving from '../Overlays/Receiving';
import Confirming from '../Overlays/Confirming';
import MessageChat from '../Message/MessageChat';
import { CameraContext } from '../../context/CameraContext';

const RoomAttendee = (props) => {
  const [endingCall, setEndingCall] = useState(false);
  const { attendeeId, attendeeName, roomId } = props;
  const {
    stateReceivingCall,
    answerCall,
    stateCallAccepted,
    io,
    callCancelled,
    stateMe,
  } = useContext(CameraContext);
  const [receivingCall, setReceivingCall] = stateReceivingCall;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [me, setMe] = stateMe;

  console.log(me, attendeeId, attendeeName);
  return (
    <>
      <div>Room</div>
      {receivingCall ? <Receiving /> : null}
      {endingCall && <Confirming />}
      <MessageChat
        attendeeId={attendeeId}
        attendeeName={attendeeName}
        roomId={roomId}
        socket={io}
      />
    </>
  );
};

export default RoomAttendee;
