
import Confirmation from "components/overlays/confirmation.jsx";
import Await from "components/overlays/await.jsx";

const Button = () => {

/// confirm / reject / leave-close_room /


  return (

  	<button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>

  )

};

export default Button;
