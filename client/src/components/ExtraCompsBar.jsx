
import CopyPaster from "./buttons/CopyPaster.jsx";
import Button from "./buttons/Button.jsx";

const ExtraCompsBar = ({ endingCall, setEndingCall }) => {

	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
  	<div>
  	<CopyPaster/>
  	
  	<Button 
			call 
			reject
			onClick={()=> setEndingCall(true)}
		>

		</Button>
  	</div>
  )

};

export default ExtraCompsBar;
