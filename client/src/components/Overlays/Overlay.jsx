// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import { useState } from 'react'

import Confirming from './Confirming'
import Receiving from './Receiving'


const Overlay = (props) => {

	const [receivingCall, setReceivingCall] =  useState(false)
	const [endingCall, setEndingCall] =  useState(false)
	console.log(receivingCall, endingCall)

	return(
			<article className="overlay">
      { receivingCall && 
			<Receiving 
				setReceivingCall={setReceivingCall}/>}
      { endingCall && 
			<Confirming
				setEndingCall={setEndingCall}
			/>}
		</article>
		
	)
}


export default Overlay;


