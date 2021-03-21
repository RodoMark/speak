import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext';

import Button from './Buttons/Button.jsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBarAttendee = (props) => {
  const {callAccepted, setCallAccepted, leaveConfirm, setLeaveConfirm } = props

  // const [callAccepted, setCallAccepted] = stateCallAccepted;
  // const [endConfirm, setEndConfirm] = stateEndConfirm;

  const [hangUp, setHangUp] = useState(false);

  ///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer

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
            setLeaveConfirm(true);
          }}
        >
          Leave Room
        </Button>
      )}
    </div>
  );
};

export default ExtraCompsBarAttendee;
