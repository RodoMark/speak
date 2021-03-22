import Button from '../Buttons/Button';
import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'

export default function EndConfirming(props) {
  const { stateCameraLoaded } = useContext(CameraContext)

  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded

  const { setHangUp, setEndConfirm } = props;

  return (
    <div className='overlay'>
      <h2>Are you sure?</h2>
      <br />
      <Button
        call
        confirm
        onClick={() => {
          setEndConfirm(false);
          setCameraLoaded(false);
          setHangUp(true);
        }}
      />
      <Button call reject onClick={() => setEndConfirm(false)} />
    </div>
  );
}
