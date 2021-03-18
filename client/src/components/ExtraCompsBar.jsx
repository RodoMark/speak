
import CopyPaster from "./Buttons/CopyPaster.jsx";
import Button from "./Buttons/Button.jsx";

const ExtraCompsBar = ({ endingCall, setEndingCall }) => {

	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
  	<div>
  	<CopyPaster id="copypaster"/>
  	
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
