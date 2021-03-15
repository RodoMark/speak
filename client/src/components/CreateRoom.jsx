import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateRoom = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Room Title' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type='text' placeholder='Description' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Create
      </Button>
    </Form>
  );
};

export default CreateRoom;
