import { useContext } from 'react'
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CameraContext } from '../context/CameraContext'

const Auth = (props) => {

  const { stateAuth } = useContext(CameraContext);

  const [auth, setAuth] = stateAuth;

  return !auth ? (
    <>
      <NavItem>
        <Link className='nav-link' to='/Register'>
          Sign Up
        </Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/Login'>
          Login
        </Link>
      </NavItem>
    </>
  ) : (
    <>
      <NavItem>
        <Link className='nav-link' to='/Logout'>
          Logout
        </Link>
      </NavItem>
    </>
  );
};

export default Auth;
