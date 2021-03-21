import { useContext } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import NavAuth from '../components/NavComponents/NavAuth'
 import NavNoAuth from '../components/NavComponents/NavNoAuth'

import { CameraContext } from '../context/CameraContext';

const Auth = () => {
  const { stateAuth } = useContext(CameraContext);

  const [auth, setAuth] = stateAuth;

  return (
    auth ? <NavAuth /> : <NavNoAuth />
  );
};

export default Auth;
