// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import Button from "../buttons/Button"

const Overlay = (props) => {

	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
		<div className="overlay">
			<h2>{props.text}</h2>
			<Button>Confirm</Button>
			<Button>Cancel</Button>
		</div>
  )

}


export default Overlay;
