import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from '../components/Buttons/Button';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateRoom = (props) => {
  const [title, setTitle] = useState(' ');
  const [description, setDescription] = useState(' ');
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title and description', title, description);
    const link = `http://localhost:3000/Login/${title}`;
    const roomInfo = { title, description, link };
    Axios.post('api/rooms', roomInfo)
      .then((res) => {
        history.push(`/Room/${roomInfo.title}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Room Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Room Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant='primary' type='submit' call confirm>
        +
      </Button>
    </Form>
  );
};

export default CreateRoom;
