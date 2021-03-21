import { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import { CameraContext } from '../context/CameraContext';

const Logout = (props) => {
  const { stateLoading, stateAuth } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [auth, setAuth] = stateAuth;

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/teachers/logout')
      .then((res) => {
        setLoading(false);
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
