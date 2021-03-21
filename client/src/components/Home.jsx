import Button from './Buttons/Button';
import RoomList from './RoomList/RoomList';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const history = useHistory();
  const [roomList, setRoomList] = useState();
  useEffect(() => {
    axios.get('/api/rooms').then((res) => {
      console.log(res.data);
      setRoomList(res.data);
    });
  }, []);
  console.log(roomList);
  return (
    <div>
      <h1>Parlar</h1>
      <h3>ROOMS</h3>
      <Button confirm onClick={() => history.push('/New')}>
        new
      </Button>
      {roomList && <RoomList rooms={roomList} setRoomList={setRoomList} />}
    </div>
  );
};
export default Home;
