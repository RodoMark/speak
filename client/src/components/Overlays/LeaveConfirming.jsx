/* eslint-disable */

import Button from '../Buttons/Button';
import Overlay from './Overlay';

import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';

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
        <button>
        <Check
            onClick={() => {
              setLeaveConfirm(false);
              setCameraLoaded(false);
              cancelCall();
              history.push('/');
            }}
          />
        </button>
        <button>
          <Close  
            onClick={() => setLeaveConfirm(false)} />
        </button>  
      </div>
      
      
      
    </Overlay>
  );
}
