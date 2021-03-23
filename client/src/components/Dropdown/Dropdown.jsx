import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Videocall from '../Videocall';
import axios from 'axios';
import { CameraContext } from '../../context/CameraContext';
import { useContext } from 'react';
export default function Dropdowns(props) {
  const { stateLoading } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [list, setList] = useState([]);
  const { socket, roomId } = props;
  socket.on('refresh', (data) => {
    setLoading(true);
    axios.get('/api/attendees').then((res) => {
      setLoading(false);
      const nameList = res.data.filter((obj) => obj.room_id === Number(roomId));
      setList(nameList);
    });
  });
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Call
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            Alon
            <Videocall idToCall={`fdskalgfdsjklafjdksla`} />
          </Dropdown.Item>
          <Dropdown.Item>
            Ed
            <Videocall idToCall={`fdskalgfdsjklafjdksla`} />
          </Dropdown.Item>
          <Dropdown.Item>
            Thomas
            <Videocall idToCall={`fdskalgfdsjklafjdksla`} />
          </Dropdown.Item>
        </Dropdown.Menu>
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