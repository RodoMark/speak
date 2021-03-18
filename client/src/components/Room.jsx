// import all mayor components
import Stage from "../components/Stage/Stage.jsx"
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from "./Dropdown/Dropdown.jsx"
import Button from "./Buttons/Button.jsx"
import ExtraCompsBar from "../components/ExtraCompsBar/ExtraCompsBar.jsx"
import Axios from "axios";
import { useContext, useRef, useEffect, useState } from 'react';



const  Room = (props) => {

	const [togleCamera, setTogleCamera] = useState(true)




	return (
		<>
			<div>Room</div>

			<Stage togleCamera={togleCamera}/>
			<Dropdown/>
			
			<ExtraCompsBar/>
		</>
		
	)
}

export default Room;