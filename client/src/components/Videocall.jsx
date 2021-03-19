import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIcon from '@material-ui/icons/Phone';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';

const Videocall = (props) => {
  const {
    name,
    setName,
    me,
    idToCall,
    setIdToCall,
    callAccepted,
    callEnded,
    leaveCall,
    callUser,
    receivingCall,
    answerCall,
  } = useContext(CameraContext);
  
  console.log(me);
  return (
    <>
      <div className='myId'>
        <div className='call-button'>
          {callAccepted && !callEnded ? (
            <Button variant='contained' color='secondary' onClick={leaveCall}>
              End Call
            </Button>
          ) : (
            <IconButton
              color='primary'
              aria-label='call'
              onClick={() => callUser(idToCall)}
            >
              <PhoneIcon fontSize='large' />
            </IconButton>
          )}
          {idToCall}
        </div>
      </div>
      <div>
        {receivingCall && !callAccepted ? (
          <div className='caller'>
            <h1>{name} is calling...</h1>
            <Button variant='contained' color='primary' onClick={answerCall}>
              Answer
            </Button>
            <Button variant='contained' color='secondary' onClick={answerCall}>
              Answer
            </Button>
          </div>
        ) : null}

      </div>
    </>
  );
};
export default Videocall;
