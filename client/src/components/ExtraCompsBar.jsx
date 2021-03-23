import { useState } from 'react';
import Button from './Buttons/Button.jsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBar = (props) => {
  const {
    hangUp,
    setHangUp,
    setLeaveConfirm,
    callAccepted,
    setCallAccepted,
  } = props;

  const [copy, setCopy] = useState(true);

  return (
    <div key={callAccepted} className='extra-comps-bar extra-comps-bar--teacher'>
      <CopyToClipboard
        text={window.location.href}
        style={{ marginBottom: '2rem' }}
      >
        <Button
          confirm
          onClick={() => {
            setCopy(!copy);
          }}
        >
          {copy ? `Copy` : `Success!`}
        </Button>
      </CopyToClipboard>

      {callAccepted && !hangUp ? (
        <Button
          reject
          onClick={() => {
            setHangUp(true);
            setCallAccepted(false);
          }}
        >
          HangUp
        </Button>
      ) : (
        <Button
          reject
          onClick={() => {
            console.log(`close room clicked`);
            setHangUp(false);
            setLeaveConfirm(true);
          }}
        >
          Close Room
        </Button>
      )}
    </div>
  );
};

export default ExtraCompsBar;
