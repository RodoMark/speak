/* eslint-disable */

import Button from '../Buttons/Button';
import Overlay from './Overlay';

import Call from '@material-ui/icons/Call';
import CallEnd from '@material-ui/icons/CallEnd';

import { useHistory } from 'react-router-dom';
import { useContext } from 'react'
import { CameraContext } from '../../context/CameraContext'

export default function LeaveConfirming(props) {
  const { cancelCall, setLeaveConfirm } = props;

  const { stateCameraLoaded } = useContext(CameraContext)

  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded

  const history = useHistory();
  return (
    <Overlay>
      <h2>Are you sure?</h2>
      <div className="call-icons">
        <Call
          onClick={() => {
            setLeaveConfirm(false);
            setCameraLoaded(false);
            cancelCall();
            history.push('/');
          }}
        />
        <CallEnd  
          onClick={() => setLeaveConfirm(false)} />
      </div>
      
      
      
    </Overlay>
  );
}
