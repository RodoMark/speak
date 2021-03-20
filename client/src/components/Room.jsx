import { useContext, useRef, useEffect, useState } from 'react';


// import all mayor components
import Stage from '../components/Stage/Stage.jsx';
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from "../components/Dropdown/Dropdown";
import ExtraCompsBar from "../components/ExtraCompsBar";
import Confirming from "../components/Overlays/Confirming";
import Calling from "../components/Overlays/Calling";
import MessageChat from './Message/MessageChat';
import Axios from "axios";
import { useParams } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext'

const Room = (props) => {
	

	const {
		endingCall, 
		setEndingCall,
		receivingCall,
		setReceivingCall,
		calling,
		setCalling,
		callerSignal,
		setCallerSignal,
		answerCall, 
		callCancelled, 
		io, 
		callUser, 
		callEnded, 
		callAccepted
	} = useContext(CameraContext)


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
				attendeeName={attendeeName}
				/>
			} 
			{ endingCall &&
				<Confirming 
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
			
    
  );
};

export default Room;
