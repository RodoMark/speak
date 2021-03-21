import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stage from './Stage/Stage.jsx';
import { useParams, useHistory } from 'react-router-dom';
import { useRef, useContext, useState } from 'react';
import axios from 'axios';
import RoomAttendee from './AttendeeRoom/RoomAttendee';
import { CameraContext } from '../context/CameraContext';
import ExtraCompsBarAttendee from './ExtraCompsBarAttendee';
const AttendeeLogIn = (props) => {
  const [addName, setAddName] = useState(false);
  const [attendeeId, setAttendeeId] = useState();
  const [attendeeName, setAttendeeName] = useState();
  const { io, stateMe } = useContext(CameraContext);
  const [me, setMe] = stateMe;
  const roomId = useParams();
  const userName = useRef();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttendeeName(userName.current.value);
    const full = `${userName.current.value}&${me}`;
    const data = {
      roomId: roomId.title,
      userName: full,
      feedback: 'none',
    };

    axios.post('/api/attendees', data).then((res) => {
      io.emit('attendeejoin', { status: true });
      setAddName(true);
      setAttendeeId(res.data.id);
    });
  };
  return (
    <>
      <h1>You have been invited to n_room</h1>
      <Stage />
      {addName ? (
        <RoomAttendee
          attendeeId={attendeeId}
          attendeeName={attendeeName}
          roomId={roomId.title}
        />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicText'>
            <Form.Label>NickName</Form.Label>
            <Form.Control ref={userName} type='text' placeholder='Nickname' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Enter
          </Button>
        </Form>
      )}
      <ExtraCompsBarAttendee />
    </>
  );
};
export default AttendeeLogIn;
