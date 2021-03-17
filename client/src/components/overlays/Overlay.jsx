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
	ERROR: "ERROR",
	CONNECTING: "CONFIRMING",
}

const Overlay = (props) => {
	const { transitionOverlay, mode, onReceive, onConfirm, onEnd, onCancel } = props

	return(
		<article>
			{mode === overlayModes.HIDDEN && 
				null
			}
	
			{mode === overlayModes.CALLING && 
				<Calling
					onCancel={onCancel}
				/>
			}
	
			{mode === overlayModes.RECEIVING && 
				<Receiving 
					onConfirm={transitionOverlay(overlayModes.CONNECTING)}
					onCancel={transitionOverlay(overlayModes.HIDDEN)}
				/>
			}

			{mode === overlayModes.CONNECTING && 
				<Connecting 
				/>
			}

			{mode === overlayModes.ERROR && 
				<Error 
					onClose={transitionOverlay(overlayModes.HIDDEN)}
				/>
			}
		</article>	
	)
}


export default Overlay;


