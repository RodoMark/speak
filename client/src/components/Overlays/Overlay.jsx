// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
const Overlay = (props) => {

	return(
		<div className='overwrapper'>
			<article className="overlay wrapper">
				{props.children}
			</article>
			{/*<div className="transparency">
			</div>*/}
		</div>
		
	)
}


export default Overlay;


