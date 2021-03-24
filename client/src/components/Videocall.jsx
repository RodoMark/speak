/* eslint-disable */

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';

const Videocall = (props) => {
  const { stateChosen, stateCallAccepted, stateCallEnded, leaveCall, callUser } = useContext(
    CameraContext
  );

  const [chosen, setChosen] = stateChosen;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [callEnded, setCallEnded] = stateCallEnded;
  const { nameToCall, idToCall } = props;

  return (
    <>
      <div className='myId'>
        <div className='call-button'>
          { (chosen === idToCall) && (callAccepted && !callEnded) ? <p className="call--confirm">On Call With: </p> : (
            <IconButton
              color='primary'
              aria-label='call'
            >
              <PhoneIcon fontSize='large' />
            </IconButton>
          )}
          {nameToCall}
        </div>
      </div>
    </>
  );
};
export default Videocall;
