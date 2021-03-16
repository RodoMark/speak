// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import Button from "../buttons/Button"
import Calling from "../Calling"
import Connecting from "../Connecting"
import Receiving from "../Receiving"
import Error from "../Error"

import { useVisualMode } from "hooks/useVisualMode"
		
const modes = {
	HIDDEN: "HIDDEN",
	CALLING: "CALLING",
	RECEIVING: "RECEIVING",
	CONNECTING: "CONNECTING",
	ERROR: "ERROR"
}

function confirm() {
	transition(CONNECTING)
	props.bookInterview(props.id, interview)
		.then(() => transition(HIDDEN))
		.catch((error) => transition (ERROR, true))
}


const { mode, transition, back } = useVisualMode(
	props.type ? HIDDEN : ERROR
);

const Overlay = (props) => {
	{mode === modes.HIDDEN && 
		<div></div>
	}

	{mode === modes.CALLING && 
		<Calling 
			onClose={() => transition(HIDDEN)}
		/>
	}

	{mode === modes.RECEIVING && 
		<Receiving 
			onConfirm={() => transition(CONNECTING)}
		/>
	}

	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	const Display = types[props.type] || Error
	return <Display />
}


export default Overlay;
