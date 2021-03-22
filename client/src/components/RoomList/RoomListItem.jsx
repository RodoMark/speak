import Button from '../Buttons/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { CameraContext } from '../../context/CameraContext';
import { useContext } from 'react';

export default function RoomListItem(props) {
  const { stateLoading } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const { room, setRoomList } = props;
  const roomId = room.id;
  const history = useHistory();
  console.log(window.VanillaTilt);
  const handleDel = (event) => {
    event.preventDefault();
    console.log(`delete event triggered`);
    setLoading(true);
    axios
      .delete('/api/rooms', {
        data: { roomId },
      })
      .then((res) => {
        axios.get('/api/rooms').then((res) => {
          console.log(`deleted one room, and redirect to new room`);
          setLoading(false);
          setRoomList(res.data);
          history.push('/');
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='item-container'>
      <div className='room-list-item' key={roomId}>
        <Link className='nav-link' to={`/teacher/room/${roomId}`}>
          <h2>{room.room_name}</h2>
          {/* <p>{roomId}</p> */}
        </Link>

      <p>{room.room_description}</p>
        <Button onClick={(e) => handleDel(e)} reject>
          -
        </Button>
      </div>
    </div>
  );
}
