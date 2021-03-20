import { useState, useContext } from 'react';
import Stage from './Stage/Stage.jsx';
import ExtraCompsBarAttendee from './ExtraCompsBarAttendee';
import useCameraData from '../hooks/useCameraData';
import Receiving from './Overlays/Receiving';
import Confirming from './Overlays/Confirming';
import MessageChat from './Message/MessageChat';
import { useParams } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext';

const Room = (props) => {
  const [endingCall, setEndingCall] = useState(false);

  const {
    receivingCall,
    setReceivingCall,
    answerCall,
    callCancelled,
    callAccepted,
    setCallAccepted,
    io,
  } = useContext(CameraContext);

  const params = useParams();
  const attendeeName = params.title.split('&')[1];
  const roomId = params.title.split('&')[0];
  const attendeeId = params.title.split('&')[2];
  return (
    <>
      <div>Room</div>
      <Stage attendeeName={attendeeName} roomId={roomId} />
      {true && true ? (
        <Receiving
          answerCall={answerCall}
          callAccepted={callAccepted}
          setCallAccepted={setCallAccepted}
          receivingCall={receivingCall}
          setReceivingCall={setReceivingCall}
        />
      ) : null}
      {endingCall && (
        <Confirming
          endingCall={endingCall}
          setEndingCall={setEndingCall}
          callCancelled={callCancelled}
        />
      )}
      <MessageChat
        attendeeId={attendeeId}
        attendeeName={attendeeName}
        roomId={roomId}
        io={io}
      />
      <ExtraCompsBarAttendee
        callAccepted={callAccepted}
        setCallAccepted={setCallAccepted}
        endingCall={endingCall}
        setEndingCall={setEndingCall}
      />
    </>
  );
};

export default Room;
