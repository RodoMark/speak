import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function ChatInput(props) {
  const { message, handle, io } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      message: message.current.value,
      handle: handle.current.value,
    };
    io.emit('chat', data);
    axios
      .post('/api/message', data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>MessageContent</Form.Label>
        <Form.Control
          ref={message}
          type='text'
          placeholder='Enter your message'
        />
        <Form.Control
          ref={handle}
          type='text'
          placeholder='Enter your message'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Send
      </Button>
    </Form>
  );
}
