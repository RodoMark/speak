import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';

const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    axios
      .post('/teachers/login', data)
      .then((res) => {
        const teacherId = res.data.id;
        props.setAuth(true);
        history.push(`/New/${teacherId}`);
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
