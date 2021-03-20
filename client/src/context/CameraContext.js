import { createContext, useState } from 'react';
import useCameraData from '../hooks/useCameraData';

export const CameraContext = createContext();

const CameraContextProvider = (props) => {
  
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
    auth, setAuth,
    callAccepted, setCallAccepted,
    callEnded, setCallEnded,
    caller, setCaller,
    callerSignal, setCallerSignal,
    endingCall, setEndingCall,
    idToCall, setIdToCall,
    me, setMe,
    name, setName,
    stream, setStream,
    receivingCall, setReceivingCall,
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
    stateEnding: [endingCall, setEndingCall],
    stateIdToCall: [idToCall, setIdToCall],
    stateMe: [me, setMe],
    stateName: [name, setName],
    stateSteam: [stream, setStream],
    stateReceivingCall: [receivingCall, setReceivingCall],
  }

  return (
    <CameraContext.Provider value={data}>
      {props.children}
    </CameraContext.Provider>
  );
};
export default CameraContextProvider;
