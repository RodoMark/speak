import { useState, useContext } from 'react';

import Button from './Buttons/Button.jsx';
import { CameraContext } from '../context/CameraContext'


const ExtraCompsBarAttendee = (props) => {
  const { stateHangUp } = useContext(CameraContext)

  const {
    io,
    callAccepted,
    setCallAccepted,
    setLeaveConfirm,
    setEndConfirm,
  } = props;

  const [hangUp, setHangUp] = stateHangUp

  return (
    <div key={callAccepted} className='extra-comps-bar extra-comps-bar--attendee'>
      {callAccepted && !hangUp ? (
        <Button
          style= {{zIndex: 4}}
          reject
          onClick={() => {
            setHangUp(true);
            setCallAccepted(false)
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
          Leave
        </Button>
      )}
    </div>
  );
};

export default ExtraCompsBarAttendee;
