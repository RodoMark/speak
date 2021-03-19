import { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


import Button from "./Buttons/Button.jsx";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBar = ({ callAccepted, setCallAccepted, endingCall, setEndingCall }) => {

const [copyText, setCopyText] = useState('Copy');
const { auth, setAuth } = useContext(AuthContext);

const [leaveRoom, setLeaveRoom] = useState(true)
const [hangUp, setHangUp] = useState(false)

const location = useLocation()


	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
		<div key={callAccepted} className="extra-comps-bar">
			<p>Auth is {auth ? "True" : "False"}</p>
  	{auth &&
			<CopyToClipboard 
				text={window.location.href} 
				style={{ marginBottom: '2rem' }}
				// onClick={setCopyText('Copied')}
			>
				<Button confirm>
					{copyText}
				</Button>
			</CopyToClipboard>
		}
		
			{ callAccepted && !hangUp ?
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
						setHangUp(false)
						setEndingCall(true)
						}
					}
					>Close Room
				</Button> }
  	</div>
  )

};

export default ExtraCompsBar;
