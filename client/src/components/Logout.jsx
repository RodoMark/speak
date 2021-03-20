import { useContext } from 'react'

import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import { CameraContext } from '../context/CameraContext'

const Logout = (props) => {
  const { stateAuth } = useContext(CameraContext);

  const [auth, setAuth] = stateAuth;

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/teachers/logout')
      .then((res) => {
        setAuth(false);
        history.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Button variant='primary' type='submit'>
        Logout
      </Button>
    </Form>
  );
};

export default Logout;
