/* eslint-disable */

import { useState, useContext } from 'react';
import Receiving from '../Overlays/Receiving';
import Confirming from '../Overlays/EndConfirming';
import MessageChat from '../Message/MessageChat';
import Stage from '../Stage/Stage'
import { CameraContext } from '../../context/CameraContext';

const RoomAttendee = (props) => {
  const [endingCall, setEndingCall] = useState(false);
  const { attendeeId, attendeeName, roomId } = props;
  const {
    stateReceivingCall,
    stateCallAccepted,
    io,
    stateMe,
  } = useContext(CameraContext);
  const [receivingCall, setReceivingCall] = stateReceivingCall;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [me, setMe] = stateMe;

  console.log(me, attendeeId, attendeeName);
  return (

    <div className= "none">
      {receivingCall && <Receiving /> }
      <MessageChat
        attendeeId={attendeeId}
        attendeeName={attendeeName}
        roomId={roomId}
        socket={io}
      />
  </div>
  );
};

export default RoomAttendee;
