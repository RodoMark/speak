import { useState, useContext } from 'react';
import Stage from './Stage/Stage.jsx';
import ExtraCompsBarAttendee from './ExtraCompsBarAttendee';
import Receiving from './Overlays/Receiving';
import Confirming from './Overlays/Confirming';
import MessageChat from './Message/MessageChat';
import { useParams } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext';

const Room = () => {
  const [endingCall, setEndingCall] = useState(false);

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
  const params = useParams();
  const attendeeName = params.title.split('&')[1];
  const roomId = params.title.split('&')[0];
  const attendeeId = params.title.split('&')[2];

  console.log(me, attendeeId, attendeeName);
  return (
    <>
      <div>Room</div>
      <Stage />
      {receivingCall ? <Receiving /> : null}
      {endingCall && <Confirming />}
      <MessageChat
        attendeeId={attendeeId}
        attendeeName={attendeeName}
        roomId={roomId}
        socket={io}
      />
      {/* <ExtraCompsBarAttendee
        callAccepted={callAccepted}
        setCallAccepted={setCallAccepted}
        endingCall={endingCall}
        setEndingCall={setEndingCall}
      /> */}
    </>
  );
};

export default Room;
