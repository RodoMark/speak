import { useRef, useContext } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { CameraContext } from '../context/CameraContext';

const Login = (props) => {
  const { stateLoading, stateAuth } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [auth, setAuth] = stateAuth;

  const email = useRef();
  const password = useRef();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    setLoading(true);
    axios
      .post('/teachers/login', data)
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.user) {
          setAuth(true);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={email} type='email' placeholder='Enter email' />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control ref={password} type='password' placeholder='Password' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default Login;
