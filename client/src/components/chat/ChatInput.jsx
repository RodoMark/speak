import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react'; 
import Message from "./Message.jsx"


export default function ChatInput(props){

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    // axios
    //   .post('/teachers/', data)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
	
	return (
		<Form onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>MessageContent</Form.Label>
        <Form.Control type='text' placeholder='Aa' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Send
      </Button>
    </Form>
	)

}