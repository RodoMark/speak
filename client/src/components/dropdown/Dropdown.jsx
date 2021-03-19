import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

export default function Dropdowns(props) {
  const [list, setList] = useState([]);
  const { attendeeName, roomId } = props;

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
                {obj.attendee_name}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
