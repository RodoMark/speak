import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useRef } from 'react';
import { CameraContext } from '../../context/CameraContext';
import { useContext } from 'react';

export default function ChatInput(props) {
  const { stateLoading } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  let { socket, attendeeId, attendeeName } = props;
  const message = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!attendeeName) {
      attendeeName = 'teacher';
    }
    const data = {
      message: message.current.value,
      attendeeName: attendeeName,
      attendeeId: attendeeId,
    };
    socket.emit('chat', data);
    setLoading(true);
    axios
      .post('/api/messages', data)
      .then((res) => {
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };
  return (
    <Form class="chat-input" onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        {/* <Form.Label>MessageContent</Form.Label> */}
        <Form.Control
          ref={message}
          type='text'
          placeholder='Enter your message'
        />
      </Form.Group>
      <Button className="button button--submit" variant='primary' type='submit'>
        Send
      </Button>
    </Form>
  );
}
