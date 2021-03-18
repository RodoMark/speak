import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';
const AttendeeLogIn = (props) => {
  const roomId = useParams();
  console.log(roomId);
  const userName = useRef();
  const [feedback, setFeedback] = useState('none');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      roomId: roomId.title,
      userName: userName.current.value,
      feedback,
    };

    axios.post('/api/attendees', data).then((res) => {
      console.log(res.data);
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
