
// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import classNames from 'classnames'


/// confirm / reject / leave-close_room /
export default function Button(props) {
  let buttonClass = classNames("button", {
     "button--confirm": props.confirm,
     "button--danger": props.danger
  })

  return (
     <button
       className={buttonClass}
       onClick={props.onClick}
       disabled={props.disabled}
       alttext={props.altText}
     >
       {props.children}
     </button>
 );
}