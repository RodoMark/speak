import Button from "./Buttons/Button"
import RoomList from "./RoomList/RoomList"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
const Home = (props) => {
	// useEffect(() => {
    // const roomlist = `api/rooms`;
    const [roomList, setRoomList] = useState([]);
    const roomlistRef = useRef();
    roomlistRef.current = roomList;
	  useEffect(() => {
      Promise.all([axios.get('/api/rooms')]).then((res) => {
        console.log(res[0])
	      setRoomList(res[0].data);
	    });
	  }, []);
    console.log( 'ref=====>',roomlistRef.current)
    console.log('ROOMLIST====>',roomList)
    // const [rooms,setRooms] = useState(props.roomList.slice(0,5));
  return (
  	<div>
  		<h1>Parlar</h1>
  		<h3>ROOMS</h3>
  		<Button  confirm >  
  			<Link className='nav-link' to='/new'>
          new
        </Link>
  		</Button>
  		<RoomList rooms = {roomList}  setRoomList={setRoomList}/>
  	</div>
  	);
};
export default Home;