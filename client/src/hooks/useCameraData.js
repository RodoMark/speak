import { useEffect, useRef, useState, useContext } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import { CameraContext } from '../context/CameraContext'



const socket = io.connect();
export default function useCameraData() {
  const [auth, setAuth] = useState(true);
  const [endingCall, setEndingCall] = useState(false)
  const [me, setMe] = useState();
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [idToCall, setIdToCall] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');

  const io = socket;
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
      });

    socket.on('me', (id) => {
      setMe(id);
    });

    socket.on('callUser', (data) => {
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
      setReceivingCall(true);
    });
  }, []);

  const callUser = (id) => {
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
        name: "Teacher",
      });
    });
    peer.on('stream', (stream) => {
      // if ('srcObject' in video) {
      //   video.srcObject = stream
      // } else {
      //   video.src = window.URL.createObjectURL(stream) // for older browsers
      // }
      userVideo.current.srcObject = stream;
    });
    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
      setReceivingCall(false);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    console.log("PEER", peer);
    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: caller });
    });
    peer.on('stream', (stream) => {
      userVideo.current.srcObject = stream;
    });
    callerSignal && peer.signal(callerSignal);
    
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };
  const cancelCall = () => {
    setCallEnded(true);
  };

  const callCancelled = () => {
    setCallEnded(true);
    setReceivingCall(false);
  };

  return {
    //variables
    stream,
    io,

    //functions,
    callCancelled,
    callUser,
    answerCall,
    cancelCall,
    leaveCall,

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
  };
}
