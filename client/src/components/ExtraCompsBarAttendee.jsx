import { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CameraContext } from '../context/CameraContext'


import Button from "./Buttons/Button.jsx";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBarAttendee = (props) => {

	const {
		callAccepted, 
		setCallAccepted,
		setEndingCall
	} = useContext(CameraContext)

const [hangUp, setHangUp] = useState(false)

const location = useLocation()


	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
  	<div key={callAccepted} className="extra-comps-bar"> 	
  
			{ !hangUp ?
				<Button
					reject
					onClick={()=>{
						setHangUp(true)		
						setCallAccepted(false)
						}
					}
				>HangUp
				</Button> :

				<Button
					reject
					onClick={()=> {
						setEndingCall(true)
						}
					}
					>Leave
				</Button> }
			
		</div>

		
  )

};

export default ExtraCompsBarAttendee;
