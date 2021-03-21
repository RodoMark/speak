import { useRef, useState } from 'react';
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

  const [copyText, setCopyText] = useState('Copy');

  return (
    <div key={callAccepted} className='extra-comps-bar'>
      <CopyToClipboard
        text={window.location.href}
        style={{ marginBottom: '2rem' }}
      >
        <Button confirm onClick={() => setCopyText('Success!')}>
          {copyText}
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
