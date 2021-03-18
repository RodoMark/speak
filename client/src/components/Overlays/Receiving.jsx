import { useContext } from 'react'
import { OverlayContext } from '../../context/useOverlayContext'

import Button from '../buttons/Button'
import Overlay from '../Overlays/Overlay'

export default function Receiving(props) {

  return (
			<div className="overlay">
				<Button 
					call 
					confirm
					onClick={() => props.setReceivingCall(false)}
				/>
				<Button 
					call 
					reject 
					onClick={()=> props.setReceivingCall(false)}
				/>
			<h2>Receiving Call</h2>
		</div>
    
  )
}