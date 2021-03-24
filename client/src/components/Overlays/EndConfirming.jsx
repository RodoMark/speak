/* eslint-disable */
import Overlay from './Overlay'
import Button from '../Buttons/Button';

import Call from '@material-ui/icons/Call';
import CallEnd from '@material-ui/icons/CallEnd';

import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'


export default function EndConfirming(props) {

 

  const { io, stateAuth, stateCameraLoaded, stateCallEnded } = useContext(CameraContext)

  const [auth, setAuth] = stateAuth;
  const [callEnded, setCallEnded] = stateCallEnded;
  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded;

  const { setHangUp, setEndConfirm } = props;

  const handleConfirm = () => {
    auth ? (io.emit('callEndedByTeacher', {
      callEnded: true
    })) : (io.emit('callEndedByStudent', {
      callEnded: true
    }))
    
    setEndConfirm(false);
    setCameraLoaded(false);
    setHangUp(true);
    setCallEnded(true)
  }


  return (
    <Overlay>
      <h2>Are you sure?</h2>
      
      <Call
        className="icon call"
        color="primary"
        onClick={() => handleConfirm()}
      />
      <CallEnd 
        className="icon call"
        color="secondary" 
        onClick={() => setEndConfirm(false)} />
    </Overlay>
  );
}
