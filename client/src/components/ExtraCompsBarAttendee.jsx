import { useState } from 'react';
import Button from './Buttons/Button.jsx';

const ExtraCompsBar = ({ callAccepted, setCallAccepted, setEndingCall }) => {
  const [hangUp, setHangUp] = useState(false);

  return (
    <div key={callAccepted} className='extra-comps-bar'>
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
            setHangUp(false);
            setEndingCall(true);
          }}
        >
          Leave
        </Button>
      )}
    </div>
  );
};

export default ExtraCompsBar;
