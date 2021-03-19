// import all mayor components
import Stage from '../components/Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from "../components/Dropdown/Dropdown";
import ExtraCompsBar from "../components/ExtraCompsBar";
import useCameraData from "../hooks/useCameraData";
import Receiving from "../components/Overlays/Receiving";
import Confirming from "../components/Overlays/Confirming";
import MessageChat from './Message/MessageChat';
import Axios from "axios";
import { useContext, useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContextProvider from '../context/AuthContext'

const Room = (props) => {
	

	const [endingCall, setEndingCall] = useState(false)
	const [receivingCall, setReceivingCall] = useState(false)

	const { answerCall, callCancelled } = useCameraData()
  const [togleCamera, setTogleCamera] = useState(true);
  const params = useParams();
  const { io } = useCameraData();
  const attendeeName = params.title.split('&')[1];
  const roomId = params.title.split('&')[0];
  const attendeeId = params.title.split('&')[2];
  return (
		<AuthContextProvider>
			<>
      <div>Room</div>
      <Stage
        togleCamera={togleCamera}
        attendeeName={attendeeName}
        roomId={roomId}
      />
			{ receivingCall && 
				<Receiving 
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
				<Dropdown 
					receivingCall={receivingCall}
					setReceivingCall={setReceivingCall}
					attendeeName={attendeeName} 
					roomId={roomId} 
				/>	
      <MessageChat
        attendeeId={attendeeId}
        attendeeName={attendeeName}
        roomId={roomId}
        io={io}
      />
      <ExtraCompsBar
				
        endingCall={endingCall}
        setEndingCall={setEndingCall}/>
    	</>
		</AuthContextProvider>
			
    
  );
};

export default Room;
