// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import Button from "../buttons/Button"




const Receiving = (props) => (
	<div className="overlay">
			<h2>Receiving Call</h2><br />
			<form>
				<Button call confirm></Button>
			</form>
			<form>
				<Button call reject></Button>
			</form>
		</div>
) 

const Calling = (props) => (
	<div className="overlay">
			<form>
				<Button call></Button>
			</form><br />
			<h2>Calling</h2>
		</div>
) 

const Connecting = (props) => (
	<div className="overlay">
			<h2>Connecting...</h2>
		</div>
) 
	
		
const types = {
	calling: Calling,
	receiving: Receiving,
	connecting: Connecting,
}   

const Overlay = (props) => {
	///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer
	const Display = types[props.type]
	return <Display />
}


export default Overlay;
