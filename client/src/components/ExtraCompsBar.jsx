import { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


import Button from "./Buttons/Button.jsx";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBar = ({ endingCall, setEndingCall }) => {

const [copyText, setCopyText] = useState('Copy');
const { auth, setAuth } = useContext(AuthContext);

const location = useLocation()


	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
  	<div className="extra-comps-bar">
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
  	
  	<Button
			call 
			reject
			onClick={()=> {setEndingCall(true)}}
		/>
  	</div>
  )

};

export default ExtraCompsBar;
