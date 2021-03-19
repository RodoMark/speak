// import all mayor components
import Stage from '../components/Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from "../components/Dropdown/Dropdown";
import ExtraCompsBar from "../components/ExtraCompsBar";
import useCameraData from "../hooks/useCameraData";
import Confirming from "../components/Overlays/Confirming";
import Calling from "../components/Overlays/Calling";
import MessageChat from './Message/MessageChat';
import Axios from "axios";
import { useContext, useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContextProvider from '../context/AuthContext'

const Room = (props) => {
	

	const [endingCall, setEndingCall] = useState(false)
	const [receivingCall, setReceivingCall] = useState(false)
	const [calling, setCalling] = useState(false)

	const { 
		answerCall, 
		callCancelled, 
		io, 
		callUser, 
		callEnded, 
		callAccepted
	 } = useCameraData()
	 
  const [togleCamera, setTogleCamera] = useState(true);
  const params = useParams();
  const attendeeName = params.title.split('&')[1];
  const roomId = params.title.split('&')[0];
  const attendeeId = params.title.split('&')[2];
  const socketId = params.title.split('&')[3];

	io.on('callAccepted', (data) => {
			setCalling(false);
		}
	)

  return (
		<AuthContextProvider>
			<>
      <div>Room</div>
      <Stage
        togleCamera={togleCamera}
        attendeeName={attendeeName}
        setTogleCamera={setTogleCamera}
        roomId={roomId}
      />
			{ calling &&
				<Calling 
					calling={calling}
					setCalling={setCalling}
				/>
			} 
			{ endingCall &&
				<Confirming 
					endingCall={endingCall}
					setEndingCall={setEndingCall}
				/>
			} 
      <Dropdown
        attendeeName={attendeeName}
        roomId={roomId}
        socketId={socketId}
        callUser={callUser}
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
