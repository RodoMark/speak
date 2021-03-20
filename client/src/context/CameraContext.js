import { createContext, useState } from 'react';
import useCameraData from '../hooks/useCameraData';

export const CameraContext = createContext();

const CameraContextProvider = (props) => {

  const [auth, setAuth] = useState(true);
  const [endingCall, setEndingCall] = useState(false)
  const [error, setError] = useState(false)
  const [me, setMe] = useState();
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [idToCall, setIdToCall] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [calling, setCalling] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');
  
  const {
    //variables
    io,
    userVideo,

    //functions
    answerCall,
    leaveCall,
    cancelCall,
    callCancelled,
    callUser,

    //state
    // auth, setAuth,
    // callAccepted, setCallAccepted,
    // callEnded, setCallEnded,
    // caller, setCaller,
    // callerSignal, setCallerSignal,
    // endingCall, setEndingCall,
    // idToCall, setIdToCall,
    // me, setMe,
    // name, setName,
    // stream, setStream,
    // receivingCall, setReceivingCall,
  } = useCameraData();

  const data = {
    //variables
    io,
    userVideo,

    //functions
    answerCall,
    leaveCall,
    cancelCall,
    callCancelled,
    callUser,

    //state
    stateAuth: [auth, setAuth],
    stateCallAccepted: [callAccepted, setCallAccepted],
    stateCallEnded: [callEnded, setCallEnded],
    stateCaller: [caller, setCaller],
    stateCallerSignal: [callerSignal, setCallerSignal],
    stateCalling: [calling, setCalling],
    stateEndingCall: [endingCall, setEndingCall],
    stateIdToCall: [idToCall, setIdToCall],
    stateMe: [me, setMe],
    stateName: [name, setName],
    stateSteam: [stream, setStream],
    stateReceivingCall: [receivingCall, setReceivingCall],
    stateError: [error, setError],
  }

  return (
    <CameraContext.Provider value={data}>
      {props.children}
    </CameraContext.Provider>
  );
};
export default CameraContextProvider;
