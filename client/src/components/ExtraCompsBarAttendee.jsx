import { useState} from 'react';

import Button from './Buttons/Button.jsx';


const ExtraCompsBarAttendee = (props) => {
  const {
    callAccepted,
    setLeaveConfirm,
    setEndConfirm,
  } = props;

  // const [callAccepted, setCallAccepted] = stateCallAccepted;
  // const [endConfirm, setEndConfirm] = stateEndConfirm;

  const [hangUp, setHangUp] = useState(false);

  ///states: closeRoom confirmation, LeaveRoom COnfirmation, accepStageInvite, AwaitAnswer

  return (
    <div key={callAccepted} className='extra-comps-bar extra-comps-bar--attendee'>
      {callAccepted && !hangUp ? (
        <Button
          reject
          onClick={() => {
            setHangUp(true);
            setEndConfirm(true);
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
