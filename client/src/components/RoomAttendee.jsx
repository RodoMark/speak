// import all mayor components
import Stage from './Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from "./Dropdown/Dropdown";
import ExtraCompsBarAttendee from "./ExtraCompsBarAttendee";
import useCameraData from "../hooks/useCameraData";
import Receiving from "./Overlays/Receiving";
import Confirming from "./Overlays/Confirming";
import MessageChat from './Message/MessageChat';
import Axios from "axios";
import { useContext, useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContextProvider from '../context/AuthContext'

const Room = (props) => {
	

	const [endingCall, setEndingCall] = useState(false)
	const [receivingCall, setReceivingCall] = useState(false)

	const { answerCall, callCancelled, callAccepted, setCallAccepted, io } = useCameraData()
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
			{ receivingCall && 
				<Receiving
          callAccepted={callAccepted}
          setCallAccepted={setCallAccepted} 
					receivingCall={receivingCall}
					setReceivingCall={setReceivingCall}
				/>
			}
      { endingCall && 
				<Confirming 
					endingCall={endingCall}
					setEndingCall={setEndingCall}
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
        setCallAccepte={setCallAccepted}
        endingCall={endingCall}
        setEndingCall={setEndingCall}/>
    	</>
			
    
  );
};

export default Room;
