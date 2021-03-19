import { useState } from 'react'
import { useLocation } from 'react-router-dom'


import Button from "./Buttons/Button.jsx";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBar = ({ endingCall, setEndingCall }) => {

const [copyText, setCopyText] = useState('Copy');
const [userStatus, setUserStatus] = useState(false);

const location = useLocation()


	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
  	<div className="extra-comps-bar">
  	{ userStatus && 
		<CopyToClipboard 
			text={window.location.href} 
			style={{ marginBottom: '2rem' }}
			// onClick={setCopyText('Copied')}
		>
			<Button confirm>
				{copyText}
			</Button>
		</CopyToClipboard> } 
  	
  	<Button
			call 
			reject
			onClick={()=> {setEndingCall(true)}}
		/>
  	</div>
  )

};

export default ExtraCompsBar;
