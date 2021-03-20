import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import { useRef, useContext } from 'react';
import axios from 'axios';
import { CameraContext } from '../context/CameraContext';
const AttendeeLogIn = (props) => {
  const { me, socket } = useContext(CameraContext);
  const roomId = useParams();
  const userName = useRef();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const full = `${userName.current.value}&${me}`;
    const data = {
      roomId: roomId.title,
      userName: full,
      feedback: 'none',
    };

    axios.post('/api/attendees', data).then((res) => {
      socket.emit('attendeejoin', { status: true });
      const attendeeId = res.data.id;
      const params = `${roomId.title}&${userName.current.value}&${attendeeId}&${me}`;
      history.push(`/Room/${params}`);
    });
  };
  return (
    <>
      <h1>You have been invited to n_room</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicText'>
          <Form.Label>NickName</Form.Label>
          <Form.Control ref={userName} type='text' placeholder='Nickname' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Enter
        </Button>
      </Form>
    </>
  );
};
export default AttendeeLogIn;
