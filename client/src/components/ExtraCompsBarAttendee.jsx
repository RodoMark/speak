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
  	<Button
			call 
			reject
			onClick={()=> {setEndingCall(true)}}
		/>
  	</div>
  )

};

export default ExtraCompsBar;
