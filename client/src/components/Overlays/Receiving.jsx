import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'

import Button from '../Buttons/Button'


export default function Receiving(props) {
	
	const {
		answerCall,
		setCallAccepted,
		setReceivingCall,
	} = useContext(CameraContext)
				

  return (
    <div className="overlay">
				<Button 
					call 
					confirm
					onClick={
						()=>{
							answerCall()
							setCallAccepted(true)
							setReceivingCall(false)
						}
					}
				/>
				<Button 
					call 
					reject
					onClick={()=>setReceivingCall(false)}
				/>
			<h2>Receiving Call</h2>
		</div>
  )
}