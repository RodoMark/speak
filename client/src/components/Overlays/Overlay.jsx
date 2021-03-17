// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import Calling from "./Calling"
import Connecting from "./Connecting"
import Receiving from "./Receiving"
import Confirming from "./Confirming"
import Error from "./Error"

const Overlay = (props) => {
	const { mode, transitionOverlay, onReceive, onConfirm, onEnd, onCancel, overlayModes } = props

	return(
		<article>
			{mode === overlayModes.HIDDEN && 
				null
			}
	
			{mode === overlayModes.CALLING && 
				<Calling
					overlayModes={overlayModes}
					transitionOverlay={transitionOverlay}
					onCancel={onCancel}
				/>
			}
	
			{mode === overlayModes.RECEIVING && 
				<Receiving 
					onConfirm={onConfirm}
					onCancel={onCancel}
				/>
			}

			{mode === overlayModes.CONNECTING && 
				<Connecting 
				/>
			}

			{mode === overlayModes.CONFIRMING && 
				<Confirming 
				/>
			}

			{mode === overlayModes.ERROR && 
				<Error 
				/>
			}
		</article>	
	)
}


export default Overlay;


