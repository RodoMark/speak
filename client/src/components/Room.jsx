// import all mayor components
// import Stage from "../components/Stage/Stage.jsx"
// import OverlayIndex from "../components/Overlays/OverlayIndex.jsx"
import Dropdown from "../components/Dropdown/Dropdown.jsx"
import Chat from "../components/Chat/Chat.jsx"
import ExtraCompsBar from "../components/ExtraCompsBar/ExtraCompsBar.jsx"


export default function Room(props){

	return (
		<>
		<div>Room</div>
		<Dropdown/>
		<Chat/>
		<ExtraCompsBar/>
		</>
		
	)
}