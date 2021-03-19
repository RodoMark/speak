import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = (props) => {
  // const id = props.id;
  // console.log(id);
  const [user, setUser] = useState('');
  useEffect(() => {
    Promise.all([axios.get('./teachers/me')]).then((res) => {
      setUser(res[0].data);
    });
  }, [user]);
  return <h2>This is profile page </h2>;
};

export default Profile;
