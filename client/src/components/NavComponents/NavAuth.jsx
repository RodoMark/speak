import { useContext } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavAuth = () => {
 

  return (
    <>
      <NavItem>
        <Link className='nav-link' to='/Profile'>
          Profile
        </Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/Logout'>
          Logout
        </Link>
      </NavItem>
    </>
  );
};

export default NavAuth;
