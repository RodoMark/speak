import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Buttons/Button.jsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBar = ({
  callAccepted,
  setCallAccepted,
  endingCall,
  setEndingCall,
}) => {
  const [copyText, setCopyText] = useState('Copy');
  const [leaveRoom, setLeaveRoom] = useState(true);
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
          Close Room
        </Button>
      )}
    </div>
  );
};

export default ExtraCompsBar;
