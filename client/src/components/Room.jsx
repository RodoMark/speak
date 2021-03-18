// import all mayor components
import Stage from "../components/Stage/Stage.jsx"
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from "../components/Dropdown/Dropdown"
import Button from "./Buttons/Button.jsx"
import Overlay from './Overlays/Overlay';
import ExtraCompsBar from "../components/ExtraCompsBar"
import useCameraData from "../hooks/useCameraData"
import Receiving from "../components/Overlays/Receiving"
import Confirming from "../components/Overlays/Confirming"
import Axios from "axios";
import { useContext, useRef, useEffect, useState } from 'react';


const  Room = (props) => {
	const [endingCall, setEndingCall] = useState(false)
	const [receivingCall, setReceivingCall] = useState(false)

	const { answerCall, callCancelled } = useCameraData()
	
	const [togleCamera, setTogleCamera] = useState(true)

	return (
		<>
			<div>Room</div>

			<Stage togleCamera={togleCamera}/>
			{ receivingCall && 
				<Receiving 
					receivingCall={receivingCall}
					setReceivingCall={setReceivingCall}
				/>}
      { endingCall && 
				<Confirming 
					endingCall={endingCall}
					setEndingCall={setEndingCall}
				/>}
			<Dropdown/>
			<ExtraCompsBar 
        endingCall={endingCall}
        setEndingCall={setEndingCall}/>
		</>
		
	)
}

export default Room;