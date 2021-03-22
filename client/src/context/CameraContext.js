import { createContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
export const CameraContext = createContext();
const socket = io.connect();
const CameraContextProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [endConfirm, setEndConfirm] = useState(false);
  const [hangUp, setHangUp] = useState(false);
  const [leaveConfirm, setLeaveConfirm] = useState(false);
  const [error, setError] = useState(false);
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
  const [loading, setLoading] = useState(false);
  const [cameraLoaded, setCameraLoaded] = useState(false);
  const [roomList, setRoomList] = useState();

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const io = socket;

  useEffect(() => {
    
    // if(CAMERA NOT ON) {
      // DO EFFECT
      // ELSE
      // NO EFFECT
    // }
    console.log("OUTSIDE IF")
      console.log("USE EFFECT REF", myVideo)
      console.log("INSIDE IF")
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

    useEffect(() => {
      console.log("CAMERA LOADED STATE", cameraLoaded)
    })

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
      <video
        playsInline
        muted
        ref={myVideo}
        autoPlay
        style={{ width: '300px' }}
      />
    );
  }
  let UserVideo;
  if (callAccepted) {
    UserVideo = (
      <video playsInline ref={userVideo} autoPlay style={{ width: '300px' }} />
    );
  }
  const data = {
    //variables
    io,
    userVideo,
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
    stateHangUp: [hangUp, setHangUp],
    stateLeaveConfirm: [leaveConfirm, setLeaveConfirm],
    stateIdToCall: [idToCall, setIdToCall],
    stateMe: [me, setMe],
    stateName: [name, setName],
    stateStream: [stream, setStream],
    stateReceivingCall: [receivingCall, setReceivingCall],
    stateError: [error, setError],
    stateLoading: [loading, setLoading],
    stateRoomList: [roomList, setRoomList],
    MyVideo,
    UserVideo,
  };
  return (
    <CameraContext.Provider value={data}>
      {props.children}
    </CameraContext.Provider>
  );
};
export default CameraContextProvider;
