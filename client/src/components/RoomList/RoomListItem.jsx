import Button from '../Buttons/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
export default function RoomListItem(props) {
  // console.log("deleting room ====>", props.k)
  const { room, setRoomList } = props;
  const roomId = room.id;
  const history = useHistory();
  const handleDel = (event) => {
    event.preventDefault();
    axios
      .delete('/api/rooms', {
        data: { roomId },
      })
      .then((res) => {
        console.log(`axios delete resolved`, res);
        axios.get('/api/rooms').then((res) => {
          setRoomList(res.data);
          history.push('/');
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div key={roomId}>
      <h2>{room.room_name}</h2>
      <p>{room.room_description}</p>
      <Button onClick={(e) => handleDel(e)} reject>
        -
      </Button>
    </div>
  );
}
