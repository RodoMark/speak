// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import Button from "../buttons/Button"
import Calling from "./Calling"
import Connecting from "./Connecting"
import Receiving from "./Receiving"
import Error from "./Error"


		
export const overlayModes = {
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
	return(
		<article>
			{mode === overlayModes.HIDDEN && 
				<div></div>
			}
	
			{mode === overlayModes.CALLING && 
				<Calling 
					onClose={() => transition(HIDDEN)}
				/>
			}
	
			{mode === overlayModes.RECEIVING && 
				<Receiving 
					onConfirm={() => transition(CONNECTING)}
				/>
			}
		</article>	
	)
}


export default Overlay;


