// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";


const Overlay = (props) => {

	return(
			<article className="overlay">
			{props.children}
		</article>
		
	)
}


export default Overlay;


