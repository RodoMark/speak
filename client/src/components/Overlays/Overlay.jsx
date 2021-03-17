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
	

	return(
		<article className="overlay">
			{props.children}
		</article>
	)
}


export default Overlay;


