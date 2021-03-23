import { createContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
export const CameraContext = createContext();
const socket = io.connect();
const CameraContextProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [endConfirm, setEndConfirm] = useState(false);
  const [caller, setCaller] = useState('');
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [callerSignal, setCallerSignal] = useState();
  const [calling, setCalling] = useState(false);
  const [cameraLoaded, setCameraLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [hangUp, setHangUp] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const [leaveConfirm, setLeaveConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [me, setMe] = useState();
  const [name, setName] = useState('');
  const [rating, setRating] = useState(
    [
      {ethical: false}, 
      {persuasive: false}, 
      {wellInformed: false}
    ]
  )
  const [receivingCall, setReceivingCall] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [stream, setStream] = useState();

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const io = socket;

  

  useEffect(() => {    
      navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((cameraData) => {
        setStream(cameraData);
        if (myVideo.current) {
          myVideo.current.srcObject = cameraData;
        }
      });

    socket.on('me', (id) => {
      setMe(id);
    });

    socket.on('hey', (data) => {
      console.log(`set caller signal`);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
      setReceivingCall(true);
    });
  
    }
    , [cameraLoaded]);


  const callUser = (id) => {
    console.log(`call user clicked`);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name: 'Teacher',
      });
    });
    peer.on('stream', (stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });
    socket.on('callAccepted', (signal) => {
      console.log(`heard call accepted`);
      setCallAccepted(true);
      peer.signal(signal);
      setReceivingCall(false);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    console.log(`answerCall clicked`);
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: caller });
    });
    peer.on('stream', (stream) => {
      userVideo.current.srcObject = stream;
    });
    callerSignal && peer.signal(callerSignal);

    connectionRef.current = peer;
  };

  const leaveRoom = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  const cancelCall = () => {
    setCallEnded(true);
  };

  let MyVideo;
  if (me) {
    MyVideo = (
      <video className="video--active"
        playsInline
        muted
        ref={myVideo}
        autoPlay
      />
    );
  }
  let UserVideo;
  if (callAccepted) {
    UserVideo = (
      <video 
        className="video--active" 
        playsInline ref={userVideo} autoPlay 
      />
    );
  }
  const data = {
    //variables
    io,
    userVideo,
    MyVideo,
    UserVideo,
    //functions
    answerCall,
    leaveRoom,
    cancelCall,
    callUser,
    //state
    stateAuth: [auth, setAuth],
    stateCallAccepted: [callAccepted, setCallAccepted],
    stateCameraLoaded: [cameraLoaded, setCameraLoaded],
    stateCallEnded: [callEnded, setCallEnded],
    stateCaller: [caller, setCaller],
    stateCallerSignal: [callerSignal, setCallerSignal],
    stateCalling: [calling, setCalling],
    stateEndConfirm: [endConfirm, setEndConfirm],
    stateError: [error, setError],
    stateHangUp: [hangUp, setHangUp],
    stateIdToCall: [idToCall, setIdToCall],
    stateLeaveConfirm: [leaveConfirm, setLeaveConfirm],
    stateLoading: [loading, setLoading],
    stateMe: [me, setMe],
    stateName: [name, setName],
    stateStream: [stream, setStream],
    stateRating: [rating, setRating],
    stateReceivingCall: [receivingCall, setReceivingCall],
    stateRoomList: [roomList, setRoomList],
  };
  return (
    <CameraContext.Provider value={data}>
      {props.children}
    </CameraContext.Provider>
  );
};
export default CameraContextProvider;
