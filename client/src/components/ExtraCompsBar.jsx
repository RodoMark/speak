import { useState } from 'react'


import Button from "./Buttons/Button.jsx";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBar = ({ endingCall, setEndingCall }) => {

const [copyText, setCopyText] = useState('Copy');



	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
  	<div>
  	<CopyToClipboard 
			text="www.parlar.io" 
			style={{ marginBottom: '2rem' }}
			// onClick={setCopyText('Copied')}
		>
			<Button confirm>
				{copyText}
			</Button>
		</CopyToClipboard>
  	
  	<Button
			id="button--leave" 
			call 
			reject
			onClick={()=> setEndingCall(true)}
		>

		</Button>
  	</div>
  )

};

export default ExtraCompsBar;
