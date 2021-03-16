import Form from 'react-bootstrap/Form';
import { react,useState } from 'react';
import Button from '../components/buttons/Button';
import Axios from "axios";

const CreateRoom = (props) => {


  const [roomInfo, setRoomInfo] = useState({title: "", description:""})

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("/rooms/new", roomInfo)

    // .
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Room Title' value={roomInfo.title} onChange = {(e) => setRoomInfo({...roomInfo, title:e.target.value})}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type='text' placeholder='Description' value={roomInfo.description} onChange = {(e) => setRoomInfo({...roomInfo, description:e.target.value})}/>
      </Form.Group>

      <Button variant='primary' type='submit' call confirm >
        Create
      </Button>
    </Form>
  );
};

export default CreateRoom;
