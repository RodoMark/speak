import Confirmation from 'components/overlays/confirmation.jsx';
import Await from 'components/overlays/await.jsx';

const CopyPaster = () => {
  /// confirm / reject / leave-close_room /

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      // {props.Url}
      URL to Room
    </button>
  );
};

export default CopyPaster;
