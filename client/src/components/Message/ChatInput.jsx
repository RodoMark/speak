import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useRef } from 'react';

export default function ChatInput(props) {
  const { io, attendeeName, roomId } = props;
  const msg = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      msg: msg.current.value,
      attendeeName,
    };
    io.emit('chat', data);
    const info = `${attendeeName}&${roomId}`;
    axios
      .get('/api/attendees', {
        params: { info },
      })
      .then((res) => {
        console.log(res);
      });

    // axios
    //   .post('/api/messages', data)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>MessageContent</Form.Label>
        <Form.Control ref={msg} type='text' placeholder='Enter your message' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Send
      </Button>
    </Form>
  );
}
