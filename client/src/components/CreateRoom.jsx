import Form from 'react-bootstrap/Form';
import react, { useState } from 'react';
import Button from '../components/Buttons/Button';
import { useContext } from 'react';
import Axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext';

const CreateRoom = (props) => {
  const { stateLoading } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const techerId = Axios.get();
  const params = useParams();
  const [title, setTitle] = useState(' ');
  const [description, setDescription] = useState(' ');

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title and description', title, description);
    const link = `http://localhost:3000/Login/${title}`;

    const roomInfo = { title, description, link };

    setLoading(true);
    Axios.post('api/rooms', roomInfo)
      .then((res) => {
        setLoading(false);
        history.push(`/`);
      })
      .catch((err) => console.log(err));
    // .
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
