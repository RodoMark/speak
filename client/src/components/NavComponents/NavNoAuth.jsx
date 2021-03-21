import { useContext } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavNoAuth = () => {
 
  return (
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
  )
};

export default NavNoAuth;
