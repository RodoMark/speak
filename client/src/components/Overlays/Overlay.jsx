// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import { useState } from 'react'

import Confirming from './Confirming'
import Receiving from './Receiving'


const Overlay = ({ receivingCall, setReceivingCall, endingCall, setEndingCall }) => {

	

	return(
			<article className="overlay">
      { propreceivingCall && 
			<Receiving 
				propsetReceivingCall={setReceivingCall}/>}
      { endingCall && 
			<Confirming
				propsetEndingCall={setEndingCall}
			/>}
		</article>
		
	)
}


export default Overlay;


