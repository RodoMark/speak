import Form from 'react-bootstrap/Form';
import { react,useState } from 'react';
import Button from '../components/buttons/Button';
import { useRef } from 'react';
import Axios from "axios";

const CreateRoom = (props) => {


  const [roomInfo, setRoomInfo] = useState({title: ""})

  // const roomInfo =useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("api/rooms", roomInfo)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => console.log(err));

    // .
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Room Title' value={roomInfo.title} onChange = {(e) => setRoomInfo({...roomInfo, title:e.target.value})}/>
      </Form.Group>

      <Button variant='primary' type='submit' call confirm >
        +
      </Button>
    </Form>
  );
};

export default CreateRoom;
