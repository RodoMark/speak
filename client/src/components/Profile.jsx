/* eslint-disable */

import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CameraContext } from '../context/CameraContext';

const Profile = (props) => {
  const { stateLoading } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const [user, setUser] = useState('');
  useEffect(() => {
    setLoading(true);
    axios.get('./teachers/me').then((res) => {
      setLoading(false);
      setUser(res[0].data);
    });
  }, []);
  return <h2>This is profile page </h2>;
};

export default Profile;
