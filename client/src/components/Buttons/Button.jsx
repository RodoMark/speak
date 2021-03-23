// import Confirmation from "components/overlays/confirmation.jsx";
// import Await from "components/overlays/await.jsx";
import classNames from 'classnames';

/// confirm / reject / leave-close_room /
export default function Button(props) {

  let buttonClass = classNames("button", {
     "button--confirm": props.confirm,
     "button--reject": props.reject,
     "button--call": props.call,
     "button--invite": props.invite,
     "button--send": props.send,
     "button--submit": props.submit
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
