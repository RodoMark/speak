import { useState, useContext } from 'react';
import { CameraContext } from '../context/CameraContext';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Home from './Home';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import Auth from './Auth';
import Room from './Room';
import CreateRoom from './CreateRoom';
import AttendeLogIn from './AttendeLogIn';

const Navigation = () => {
  const { stateAuth } = useContext(CameraContext);
  const [auth, setAuth] = stateAuth;

  return (
    <Router>
      <Navbar className='color-nav' bg='light' expand='lg'>
        <Navbar.Brand>
          <Link className='nav-link logo' to='/'>
            Parlar
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavItem>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </NavItem>
            <Auth auth={auth} setAuth={setAuth} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/Profile'>
        <Profile id={1} />
        </Route>
        <Route exact path='/Register'>
          <Register setAuth={setAuth} />
        </Route>
        <Route exact path='/Login' component={Login}>
          <Login setAuth={setAuth} />
        </Route>
        
        <Route path='/Teacher/Room/:title/' component={Room} />
        <Route path='/Login/:title/' component={AttendeLogIn} />
        <Route path='/New/' component={CreateRoom} />
        <Route path='/Profile/' component={Profile} />
      </Switch>
    </Router>
  );
};

export default Navigation;
