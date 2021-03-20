import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Videocall from '../Videocall';
import axios from 'axios';

export default function Dropdowns(props) {
  const [list, setList] = useState([]);
  const { socket, roomId } = props;

  socket.on('refresh', (data) => {
    axios.get('/api/attendees').then((res) => {
      const nameList = res.data.filter((obj) => obj.room_id === Number(roomId));
      setList(nameList);
    });
  });
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {list &&
            list.map((obj) => (
              <Dropdown.Item key={obj.id}>
                {obj.attendee_name.split('&')[0]}
                <Videocall idToCall={obj.attendee_name.split('&')[1]} />
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
