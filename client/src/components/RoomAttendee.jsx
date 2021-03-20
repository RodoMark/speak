import { useState, useRef } from 'react';

// import all mayor components
import Stage from './Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import ExtraCompsBarAttendee from "./ExtraCompsBarAttendee";
import useCameraData from "../hooks/useCameraData";
import Receiving from "./Overlays/Receiving";
import Confirming from "./Overlays/Confirming";
import MessageChat from './Message/MessageChat';
import Axios from "axios";
import { useParams } from 'react-router-dom';

const RoomAttendee = (props) => {
	const [endingCall, setEndingCall] = useState(false)

	const [receivingCall, setReceivingCall] = useState(false)

	const { 
    answerCall, 
    callCancelled, 
    leaveCall, 
    callAccepted, 
    setCallAccepted, 
    io 
  } = useCameraData()

  const [togleCamera, setTogleCamera] = useState(true);
  const params = useParams();
  const attendeeName = params.title.split('&')[1];
  const roomId = params.title.split('&')[0];
  const attendeeId = params.title.split('&')[2];
  return (
			<>
      <div>Room</div>
      <Stage
        togleCamera={togleCamera}
        attendeeName={attendeeName}
        roomId={roomId}
      />
			{ receivingCall && !callAccepted ?
				<Receiving
				/> : null
			}
      { endingCall && 
				<Confirming 
					endingCall={endingCall}
					setEndingCall={setEndingCall}
          callCancelled={callCancelled}
				/>
			}
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
        setEndingCall={setEndingCall}/>
    	</>
			
    
  );
};

export default RoomAttendee;
