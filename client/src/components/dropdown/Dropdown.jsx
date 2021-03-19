import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';

export default function Dropdowns(props) {
  const [list, setList] = useState([]);
  const { attendeeName, roomId } = props;

  useEffect(() => {
    axios.get('/api/attendees').then((res) => {
      const nameList = res.data.filter((obj) => {
        return obj.room_id === Number(roomId);
      });
      setList(nameList);
    });
  }, [attendeeName, roomId]);

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

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {list &&
            list.map((obj) => (
              <Dropdown.Item key={obj.id} href='#'>
                {obj.attendee_name.split('&')[0]}
                <Videocall
                  callUser={callUser} 
                  idToCall={obj.attendee_name.split('&')[1]}
                />
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
