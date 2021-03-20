import { useState, useRef, useContext } from 'react';
import { CameraContext } from '../context/CameraContext'

// import all mayor components
import Stage from './Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import ExtraCompsBarAttendee from "./ExtraCompsBarAttendee";
import Receiving from "./Overlays/Receiving";
import Confirming from "./Overlays/Confirming";
import MessageChat from './Message/MessageChat';
import Axios from "axios";
import { useParams } from 'react-router-dom';



const RoomAttendee = (props) => {
	const { 
    answerCall, 
    callCancelled, 
    leaveCall, 
    stateCallAccepted,
    stateReceivingCall,
    stateEndingCall,
    io,
  } = useContext(CameraContext)

  const [callAccepted, setCallAccepted] = stateCallAccepted;

  const [endingCall, setEndingCall] = stateEndingCall;

  const [receivingCall, setReceivingCall] = stateReceivingCall;

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
				/>
			}
      <MessageChat
        attendeeId={attendeeId}
        attendeeName={attendeeName}
        roomId={roomId}
        io={io}
      />
      <ExtraCompsBarAttendee
        />
    	</>
			
    
  );
};

export default RoomAttendee;
