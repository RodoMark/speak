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



const Overlay = (props) => {
	return(
		<article>
			{props.type === overlayModes.HIDDEN && 
				null
			}
	
			{props.type === overlayModes.CALLING && 
				<Calling 
					onClose={() => {}}
				/>
			}
	
			{props.type === overlayModes.RECEIVING && 
				<Receiving 
					onConfirm={() => {}}
				/>
			}

			{props.type === overlayModes.CONNECTING && 
				<Connecting 
					onConfirm={() => {}}
				/>
			}

			{props.type === overlayModes.ERROR && 
				<Error 
					onClose={() => {}}
				/>
			}
		</article>	
	)
}


export default Overlay;


