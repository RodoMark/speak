import CopyPaster from '../../components/Buttons/CopyPaster.jsx';
import Button from '../../components/Buttons/Button.jsx';

const ExtraCompsBar = () => {
  ///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer

  return (
    <>
      <CopyPaster />

      <button>LeaveRoom/closeRoom</button>
    </>
  );
};

export default ExtraCompsBar;
