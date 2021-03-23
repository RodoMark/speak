/* eslint-disable */
import Overlay from './Overlay'
import Button from '../Buttons/Button';
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
      <br />
      <Button
        call
        confirm
        onClick={() => handleConfirm()}
      />
      <Button 
        call 
        reject 
        onClick={() => setEndConfirm(false)} />
    </Overlay>
  );
}
