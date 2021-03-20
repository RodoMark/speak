import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';
import Calling from './Overlays/Calling';

const Videocall = (props) => {
  const { stateCallAccepted, stateCallEnded, leaveCall, callUser } = useContext(
    CameraContext
  );
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [callEnded, setCallEnded] = stateCallEnded;
  const { idToCall } = props;
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
    </>
  );
};
export default Videocall;
