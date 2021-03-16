// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import Button from "../buttons/Button"

const types = [
	"calling",
	"receiving",
	"connecting",
]

const Overlay = (props) => {

	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	
  return (
		<div className="overlay">
			<h2>{props.text}</h2><br />
			<form>
				<Button call confirm></Button>
			</form>
			<form>
				<Button call reject></Button>
			</form>
		</div>
  )

}


export default Overlay;
