import Button from './Buttons/Button';
import RoomList from './RoomList/RoomList';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CameraContext } from '../context/CameraContext';
import { useContext } from 'react';

const Home = () => {
  const { stateLoading, stateAuth, stateRoomList } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [auth, setAuth] = stateAuth;
  const history = useHistory();
  const [roomList, setRoomList] = stateRoomList;
  // const [roomList, setRoomList] = useState();
  useEffect(() => {
    auth ? setLoading(true) : setLoading(false);
    axios.get('/api/rooms').then((res) => {
      setLoading(false);
      setRoomList(res.data);
      if (!auth) {
        setAuth(true);
      }
    });
  }, []);
  console.log(roomList);
  return (
    <div className="home">
      <h1>Speak.io</h1>
      <h3>ROOMS</h3>
      <div  className='new-room-btn'>
        <Button confirm onClick={() => history.push('/New')}>
          new
        </Button>
      </div>
      {roomList && <RoomList rooms={roomList} setRoomList={setRoomList} />}
    </div>
  );
};
export default Home;
