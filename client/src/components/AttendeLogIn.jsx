import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AttendeeLogIn = (props) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>NickName</Form.Label>
        <Form.Control type='email' placeholder='Nickname' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Enter
      </Button>
    </Form>
  );
};

export default AttendeeLogIn;