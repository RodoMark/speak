// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import Button from "../buttons/Button"
import Calling from "../Calling"
import Connecting from "../Connecting"
import Receiving from "../Receiving"
import Error from "../Error"


	
		
const types = {
	calling: Calling,
	receiving: Receiving,
	connecting: Connecting,
}   

const Overlay = (props) => {
	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	const Display = types[props.type] || Error
	return <Display />
}


export default Overlay;
