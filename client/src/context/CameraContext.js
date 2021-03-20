import { createContext } from 'react';
import useCameraData from '../hooks/useCameraData';

export const CameraContext = createContext();

const CameraContextProvider = (props) => {
  const {
    socket,
    stream,
    callAccepted,
    callerSignal,
    setCallerSignal,
    setCallAccepted,
    callEnded,
    callCancelled,
    userVideo,
    name,
    setName,
    me,
    idToCall,
    setIdToCall,
    callUser,
    receivingCall,
    setReceivingCall,
    answerCall,
    cancelCall,
    leaveCall,
    MyVideo,
    UserVideo,
  } = useCameraData();

  const data = {
    stream,
    callAccepted,
    callEnded,
    userVideo,
    name,
    me,
    idToCall,
    setName,
    setIdToCall,
    leaveCall,
    callUser,
    receivingCall,
    answerCall,
    stream,
    callAccepted,
    callerSignal,
    setCallerSignal,
    setCallAccepted,
    callEnded,
    callCancelled,
    userVideo,
    name,
    setName,
    me,
    idToCall,
    setIdToCall,
    callUser,
    receivingCall,
    setReceivingCall,
    answerCall,
    cancelCall,
    leaveCall,
    MyVideo,
    UserVideo,
    socket,
  };
  return (
    <CameraContext.Provider value={data}>
      {props.children}
    </CameraContext.Provider>
  );
};
export default CameraContextProvider;
