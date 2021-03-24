/* eslint-disable */
import Overlay from './Overlay'
import Button from '../Buttons/Button';

import Call from '@material-ui/icons/Call';
import Close from '@material-ui/icons/Close';

import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'


export default function EndConfirming(props) {

 

  const { io, stateAuth, stateCallAccepted, stateCameraLoaded, stateCallEnded } = useContext(CameraContext)

  const [auth, setAuth] = stateAuth;
  const [callEnded, setCallEnded] = stateCallEnded;
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded;

  const { setHangUp, setEndConfirm } = props;

  const handleConfirm = () => {
    auth ? (io.emit('callEndedByTeacher', {
      callEnded: true
    })) : (io.emit('callEndedByStudent', {
      callEnded: true
    }))
    setEndConfirm(false);
    setCallAccepted(false);
    setCameraLoaded(false);
    setHangUp(true);
    setCallEnded(true);
  }


  return (
    <Overlay>
      <h2>Are you sure?</h2>
      <div className="call-icons">
        <button onClick={() => handleConfirm()}>
          <Call
            className="icon call"
            color="primary"
          />
        </button>
        <button onClick={() => {
          setEndConfirm(false)
          }} >
          <Close 
            className="icon call"
            color="secondary" 
          />
        </button>
      </div>
      
    </Overlay>
  );
}
