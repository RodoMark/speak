import { useContext } from 'react'
import OverlayContext from '../../context/useOverlayContext'

import Button from '../buttons/Button'
import Overlay from '../Overlays/Overlay'

export default function Receiving(props) {

	const { recevingCall, setRecevingCall } = useContext(OverlayContext)

  return (
			<Overlay className="overlay">
				<Button 
					call 
					confirm
					onClick={()=> setRecevingCall(false)}
				/>
				<Button 
					call 
					reject 
					onClick={()=> setRecevingCall(false)}
				/>
			<h2>Receiving Call</h2>
		</Overlay>
    
  )
}