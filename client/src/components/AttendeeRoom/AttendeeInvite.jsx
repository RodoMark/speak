import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AttendeeInvite = (props) => {
  return (
    <>
    <h1>You have been invited to room number {`${roomId.title}`}</h1>
    <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicText'>
            <Form.Label>NickName</Form.Label>
            <Form.Control ref={userName} type='text' placeholder='Nickname' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Enter
          </Button>
        </Form>
    </>
  )
}

export default AttendeeInvite