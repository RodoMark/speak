/* eslint-disable */

import Button from '../Buttons/Button';
import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'

export default function EndConfirming(props) {

 

  const { io, stateCameraLoaded, stateCallEnded } = useContext(CameraContext)

  const [callEnded, setCallEnded] = stateCallEnded

  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded

  const { setHangUp, setEndConfirm } = props;

  const handleConfirm = () => {
    io.emit('callEnded', {
      callEnded: true
    })
    setEndConfirm(false);
    setCameraLoaded(false);
    setHangUp(true);
    setCallEnded(true)
  }


  return (
    <div className='overlay'>
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
    </div>
  );
}
