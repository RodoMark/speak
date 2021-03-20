import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Auth = (props) => {
  return !props.auth ? (
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
