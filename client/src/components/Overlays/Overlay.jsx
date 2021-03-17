// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import { useContext } from 'react'
import { OverlayContext } from '../../hooks/useOverlayContext'

import Calling from "./Calling"
import Connecting from "./Connecting"
import Receiving from "./Receiving"
import Confirming from "./Confirming"
import Error from "./Error"

const Overlay = (props) => {
	const { 
		mode, 
		transitionOverlay, 
		onReceive, 
		onConfirm, 
		onEnd, 
		onCancel, 
		overlayModes 
	} = useContext(OverlayContext)

	return(
		<article>
			{mode === overlayModes.HIDDEN && 
				null
			}
	
			{mode === overlayModes.CALLING && 
				<Calling
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


