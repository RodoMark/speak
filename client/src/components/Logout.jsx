import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Logout = (props) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/teachers/logout')
      .then((res) => {
        console.log(res);
        props.setAuth(false);
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
