import { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';

const socket = io.connect();
export default function useCameraData() {
  const io = socket;
  const [me, setMe] = useState();
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [idToCall, setIdToCall] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
      });

    socket.on('me', (id) => {
      console.log(id);
      setMe(id);
    });

    socket.on('callUser', (data) => {
      console.log(data);
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
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
        name: name,
      });
    });
    peer.on('stream', (stream) => {
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
    console.log(peer);
    peer.on('signal', (data) => {
      console.log(`inside peer.on signal`);
      socket.emit('answerCall', { signal: data, to: caller });
    });
    peer.on('stream', (stream) => {
      console.log(stream);
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
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
    stream,
    // myVideo,
    callAccepted,
    setCallAccepted,
    callEnded,
    callCancelled,
    userVideo,
    name,
    me,
    idToCall,
    setName,
    setIdToCall,
    callUser,
    receivingCall,
    answerCall,
    cancelCall,
    leaveCall,
    io,
  };
}
