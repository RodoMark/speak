import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';

import { CameraContext } from '../context/CameraContext';

const Register = (props) => {
  const { stateLoading, stateAuth } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;

  const [auth, setAuth] = stateAuth;

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
    setLoading(true);
    axios
      .post('/teachers/', data)
      .then((res) => {
        setLoading(false);
        if (res.data.user.email) {
          setAuth(true);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='box' >
      <div className='square' id='red'></div>
      <div className='square' id='red'></div>
      <div className='square' id='red'></div>
      <div className='square' id='red'></div>
      <div className='square' id='red'></div>
      <div className='container' id='newroomcontainer'>
        <div className='form'>
          <h2>Sign Up Form</h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='inputBox'>
              <input ref={firstName} type='text' placeholder='Firstname' />
            </div>
            <div className='inputBox'>
              <input ref={lastName} type='text' placeholder='Lastname' />
            </div>
            <div className='inputBox'>
              <input ref={email} ref={email} type='text' placeholder='Email' />
            </div>
            <div className='inputBox'>
              <input ref={password} type='password' placeholder='Password' />
            </div>
            <div className='inputBox'>
              <input type='submit' value='Sign Up' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
