import { useContext } from 'react';
import { NavItem } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

import axios from 'axios';

import { CameraContext } from '../../context/CameraContext';

const NavAuth = () => {

  const { stateLoading, stateAuth } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [auth, setAuth] = stateAuth;

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/teachers/logout')
      .then((res) => {
        setLoading(false);
        setAuth(false);
        history.push('/');
      })
      .catch((err) => console.log(err));
  };
 

  return (
    <>
      <NavItem>
        <Link className='nav-link' to='/Profile'>
          Profile
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" onClick={handleSubmit}>
        Logout
        </Link>
      </NavItem>
    </>
  );
};

export default NavAuth;
