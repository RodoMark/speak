// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import Button from "../buttons/Button"
import Calling from "./Calling"
import Connecting from "./Connecting"
import Receiving from "./Receiving"
import Error from "./Error"

import useCameraData from '../../hooks/useCameraData'

export const overlayModes = {
	HIDDEN: "HIDDEN",
	CALLING: "CALLING",
	RECEIVING: "RECEIVING",
	CONNECTING: "CONNECTING",
	ERROR: "ERROR",
	CONNECTING: "CONFIRMING",
}

const Overlay = (props) => {
	const { transitionOverlay, type } = props
	const { receivingCall, myVideo } = useCameraData()

	return(
		<article>
			{type === overlayModes.HIDDEN && 
				null
			}
	
			{type === overlayModes.CALLING && 
				<Calling
					onCancel={transitionOverlay(overlayModes.HIDDEN)}
				/>
			}
	
			{type === overlayModes.RECEIVING && 
				<Receiving 
					onConfirm={transitionOverlay(overlayModes.CONNECTING)}
					onReject={transitionOverlay(overlayModes.HIDDEN)}
				/>
			}

			{type === overlayModes.CONNECTING && 
				<Connecting 
				/>
			}

			{type === overlayModes.ERROR && 
				<Error 
					onClose={transitionOverlay(overlayModes.HIDDEN)}
				/>
			}
		</article>	
	)
}


export default Overlay;


