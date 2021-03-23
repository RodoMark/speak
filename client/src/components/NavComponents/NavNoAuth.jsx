/* eslint-disable */

import { useContext } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CameraContext } from '../../context/CameraContext';


const NavNoAuth = () => {
  const { stateCameraLoaded } = useContext(CameraContext);

  const [cameraLoaded, setCameraLoaded] = stateCameraLoaded;
 
  return (
    <>
      <NavItem>
        <Link onClick={()=>setCameraLoaded(false)} className='nav-link' to='/Register'>
          Sign Up
        </Link>
      </NavItem>
      <NavItem>
        <Link onClick={()=>setCameraLoaded(false)} className='nav-link' to='/Login'>
          Login
        </Link>
      </NavItem>
    </>
  )
};

export default NavNoAuth;
