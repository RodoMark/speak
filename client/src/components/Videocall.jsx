import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIcon from '@material-ui/icons/Phone';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';
import Calling from './Overlays/Calling';

const Videocall = (props) => {
  const {
    io,
    me,
    leaveCall,
    callUser,
    answerCall,
    stateCallingUser,
    stateIdToCall,
    stateCallAccepted,
    stateCallEnded,
    stateName,
    stateReceivingCall,
  } = useContext(CameraContext);

  const { idToCall } = props;

  const [callEnded, setCallEnded] = stateCallEnded;
  const [callingUser, setCallingUser] = stateCallingUser;
  const [callAccepted, setCallAccepted] = stateCallAccepted;

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
      <div>{callingUser && <Calling />}</div>
    </>
  );
};
export default Videocall;
