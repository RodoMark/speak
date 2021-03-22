import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CameraContext } from '../context/CameraContext';

const Logout = (props) => {
  const { stateLoading, stateAuth, stateRoomList } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [auth, setAuth] = stateAuth;
  const [roomList, setRoomList] = stateRoomList;

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Form onSubmit={handleSubmit}>
        <Button variant='primary' type='submit'>
          Logout
        </Button>
      </Form>
    </NavItem>
  );
};

export default Logout;
