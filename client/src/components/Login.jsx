import { useRef, useContext } from 'react';
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
    <div className='box'>
      <div className='square' id='red'></div>
      <div className='square' id='red'></div>
      <div className='square' id='red'></div>
      <div className='square' id='red'></div>
      <div className='square' id='red'></div>
      <div className='container' id='newroomcontainer'>
        <div className='form' >
          <h2>Login Form</h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='inputBox'>
              <input ref={email} type='text' placeholder='Email' />
            </div>
            <div className='inputBox'>
              <input ref={password} type='password' placeholder='Password' />
            </div>
            <div className='inputBox'>
              <input type='submit' value='Login' />
            </div>
            <p className='forget'>
              Forgot Password? <a href='#'>Click Here</a>
            </p>
            <p className='forget'>
              Don't have an account ? <a href='#'>Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
