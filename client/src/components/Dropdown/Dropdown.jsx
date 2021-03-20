import { useState, useEffect, useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import Videocall from '../Videocall';
import axios from 'axios';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';

import { CameraContext } from '../../context/CameraContext';

export default function Dropdowns(props) {
  const [list, setList] = useState([]);
  const { attendeeName, roomId } = props;

  const { callUser } = useContext(CameraContext);

  useEffect(() => {
    axios.get('/api/attendees').then((res) => {
      const nameList = res.data.filter((obj) => {
        return obj.room_id === Number(roomId);
      });
      setList(nameList);
    });
  }, [attendeeName, roomId]);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {list &&
            list.map((obj) => (
              <Dropdown.Item key={obj.id} href='#'>
                {obj.attendee_name.split('&')[0]}
                <IconButton
                  color='primary'
                  aria-label='call'
                  onClick={() => callUser(obj.attendee_name.split('&')[1])}
                >
                  <PhoneIcon fontSize='large' />
                </IconButton>
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
