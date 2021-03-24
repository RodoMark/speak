/* eslint-disable */

import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { NavItem } from 'react-bootstrap';
import { CameraContext } from '../../context/CameraContext';

const NavAuth = (props) => {
  const {
    stateLoading,
    stateAuth,
    stateCameraLoaded,
    stateRoomList,
  } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [auth, setAuth] = stateAuth;
  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded;
  const [roomList, setRoomList] = stateRoomList;
  const history = useHistory();
  const handleSubmit = (e) => {
    setLoading(true);
    axios
      .post('/teachers/logout')
      .then((res) => {
        setLoading(false);
        setAuth(false);
        setRoomList([]);
        history.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <NavItem>
      <Link
        className="nav-link" 
        onClick={()=>{
          handleSubmit()
          setCameraLoaded(false)
          }
        }
      >
        Logout
      </Link>
    </NavItem>
  );
};

export default NavAuth;
