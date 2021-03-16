import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';

const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    axios
      .post('/teachers/', data)
      .then((res) => {
        console.log(res);
        props.setAuth(true);
        history.push('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          ref={firstName}
          type='text'
          placeholder='Enter first name'
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          ref={lastName}
          type='text'
          placeholder='Enter last name'
        />
      </Form.Group>
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

export default Register;
