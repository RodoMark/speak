import { createContext } from 'react';
import userCameraData from '../hooks/useCameraData';

export const CameraContext = createContext();

const CameraContextProvider = (props) => {
  const {
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
    io,
    message,
    handle,
  } = userCameraData();

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
    io,
    message,
    handle,
  };
  return (
    <CameraContext.Provider value={data}>
      {props.children}
    </CameraContext.Provider>
  );
};
export default CameraContextProvider;
