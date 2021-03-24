import { useState } from 'react';
import Button from './Buttons/Button.jsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ExtraCompsBar = (props) => {
  const {
    io,
    callAccepted,
    setCallAccepted,
    setEndConfirm,
    hangUp,
    setHangUp,
    setLeaveConfirm,
    setChosen
  } = props;

  const [copy, setCopy] = useState(true);

  io.on('callEndedByStudentSide', (data) => {
    console.log(`listening for back end to emit callEndedByStudentSide`, data);
    setHangUp(true);
  });

  const url = window.location.href.split('/')
  const roomNumber = (url[url.length-1])
  
  const copiedUrl = `http://${url[1]}${url[2]}/login/${roomNumber}`

  return (
    <div key={callAccepted} className='extra-comps-bar extra-comps-bar--teacher'>
    
      <CopyToClipboard
        text={copiedUrl}
        style={{ marginBottom: '2rem' }}
      >
        <Button
          confirm
          onClick={() => {
            setCopy(!copy);
          }}
        >
          {copy ? `Link` : `Success!`}
        </Button>
      </CopyToClipboard>

      {callAccepted && !hangUp ? (
        <Button
          reject
          onClick={() => {
            setEndConfirm(true)
            setChosen();
          }}
        >
          HangUp
        </Button>
      ) : (
        <Button
          style={{zIndex: '100'}}
          reject
          onClick={() => {
            console.log(`close room clicked`);
            setLeaveConfirm(true);
          }}
        >
          Close
        </Button>
      )}
    </div>
  );
};

export default ExtraCompsBar;
