import { useContext } from 'react'

import Button from '../buttons/Button'
import Overlay from '../Overlays/Overlay'
import { OverlayContext } from '../../context/useOverlayContext'

export default function Receiving(props) {

  return (
    <div className="overlay">
			<h2>Are you sure?</h2><br />
      <Button 
        call 
        confirm
        onClick={()=> props.setEndingCall(false)}
      />
			<Button 
        call 
        reject
        onClick={()=> props.setEndingCall(false)}
      />
		</div>  
  )
}