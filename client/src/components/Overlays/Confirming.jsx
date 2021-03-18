import { useContext } from 'react'

import Button from '../buttons/Button'
import Overlay from '../Overlays/Overlay'
import OverlayContext from '../../context/useOverlayContext'



export default function Receiving(props) {

  const { endingCall, setEndingCall } = useContext(OverlayContext)

  return (
    <Overlay className="overlay">
			<h2>Are you sure?</h2><br />
      <Button 
        call 
        confirm
        onClick={()=> setEndingCall(false)}
      />
			<Button 
        call 
        reject
        onClick={()=> setEndingCall(false)}
      />
		</Overlay>  
  )
}