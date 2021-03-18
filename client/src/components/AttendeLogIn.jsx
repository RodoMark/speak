import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
const AttendeeLogIn = (props) => {
  const roomId = useParams();
  const userName = useRef();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      roomId: roomId.title,
      userName: userName.current.value,
      feedback: 'none',
    };

    axios.post('/api/attendees', data).then((res) => {
      const attendeeId = res.data.id;
      const params = `${roomId.title}&${userName.current.value}&${attendeeId}`;
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
