import Button from './Buttons/Button';
import RoomList from './RoomList/RoomList';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';

const Home = () => {
  const { stateLoading, stateAuth } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [auth, setAuth] = stateAuth;
  const history = useHistory();
  const [roomList, setRoomList] = useState();
  useEffect(() => {
    auth ? setLoading(true) : setLoading(false);
    axios.get('/api/rooms').then((res) => {
      setLoading(false);
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
