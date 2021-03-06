/* eslint-disable */

import Button from './Buttons/Button';
import RoomList from './RoomList/RoomList';
import { useHistory, Link } from 'react-router-dom';
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

      {roomList.length ? <h1></h1> : <Link className='landingLogoLink' to="/login"><h1 className='landingLogo'>Speak.io</h1></Link>}
      {roomList.length ? <h1 id="hometitle">ROOMS</h1> : <div/>}
      {auth ? <div  > <Button id='new-room-btn' onClick={() => history.push('/New')}>new</Button> </div>: <div/>}
      
      {roomList.length ? <RoomList rooms={roomList} setRoomList={setRoomList} />: <div/>}
    </div>
  );
};
export default Home;
