/* eslint-disable */

import Overlay from './Overlay'
import Button from '../Buttons/Button';

import Call from '@material-ui/icons/Call';
import CallEnd from '@material-ui/icons/CallEnd';

import { CameraContext } from '../../context/CameraContext';
import { useContext } from 'react';

export default function Receiving(props) {
  const {
    answerCall,
    MyVideo,
    UserVideo,
    stateCallAccepted,
    stateReceivingCall,
  } = useContext(CameraContext);
  const [callAccepted, setCallAccepted] = stateCallAccepted;
  const [receivingCall, setReceivingCall] = stateReceivingCall;

  return (
    <Overlay>
      <h2>Receiving Call</h2>
        <div className="call-icons">
          <Call
            onClick={() => {
              answerCall();
              setCallAccepted(true);
              setReceivingCall(false);
            }}
          />
          <CallEnd 
            onClick={() => setReceivingCall(false)} 
          />
        </div>
      
      
    </Overlay>
  );
}
