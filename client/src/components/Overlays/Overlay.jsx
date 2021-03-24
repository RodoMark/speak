// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
const Overlay = (props) => {

	return(
		<section>
			<article className="overlay wrapper">
				{props.children}
			</article>
			<div className="transparency">
			</div>
		</section>
		
	)
}


export default Overlay;


