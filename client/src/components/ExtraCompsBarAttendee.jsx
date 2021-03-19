import { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


import Button from "./Buttons/Button.jsx";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBar = ({ callAccepted, setCallAccepted, setEndingCall }) => {


const [hangUp, setHangUp] = useState(false)
const [leaveRoom, setLeaveRoom] = useState(false)

const location = useLocation()


	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
  	<div className="extra-comps-bar"> 	
  	{ callAccepted && !hangUp ?
		<Button
			reject
			onClick={()=>{
				setHangUp(true)
				setCallAccepted(false)
				}
			}
		>HangUp
		</Button> : null
		} 

		<Button
			reject
			onClick={()=> {setEndingCall(true)}}
		>{hangUp ? "Leave" : "HangUp"}</Button>
  	</div>
  )

};

export default ExtraCompsBar;
