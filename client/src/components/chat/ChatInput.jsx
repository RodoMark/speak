import Message from "components/Chat/Message.jsx"


export default ChatInput(props){
	
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