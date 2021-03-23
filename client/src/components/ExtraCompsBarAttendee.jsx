import { useState} from 'react';

import Button from './Buttons/Button.jsx';


const ExtraCompsBarAttendee = (props) => {
  const {
    io,
    callAccepted,
    setLeaveConfirm,
    setEndConfirm,
  } = props;

  const [hangUp, setHangUp] = useState(false);

  io.on('callEndedByStudent', (data) => {
    console.log(`listening for back end to emit callEndedByStudent`, data);
    setHangUp(true);
  });

  return (
    <div key={callAccepted} className='extra-comps-bar extra-comps-bar--attendee'>
      {callAccepted && !hangUp ? (
        <Button
          reject
          onClick={() => {
            setHangUp(true);
            setEndConfirm(true);
            console.log("HANG UP")
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
