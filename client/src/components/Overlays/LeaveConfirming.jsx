import Button from '../Buttons/Button';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'

export default function LeaveConfirming(props) {
  const { cancelCall, setLeaveConfirm } = props;

  const { stateCameraLoaded } = useContext(CameraContext)

  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded

  const history = useHistory();
  return (
    <div className='overlay'>
      <h2>Are you sure?</h2>
      <br />
      <Button
        call
        confirm
        onClick={() => {
          setLeaveConfirm(false);
          setCameraLoaded(false);
          cancelCall();
          history.push('/');
        }}
      />
      <Button call reject onClick={() => setLeaveConfirm(false)} />
    </div>
  );
}
