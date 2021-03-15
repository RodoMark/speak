import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = (props) => {
  // const id = props.id;
  // console.log(id);
  const [user, setUser] = useState('');
  useEffect(() => {
    Promise.all([axios.get('./teachers/me')]).then((res) => {
      console.log(res[0].data);
      setUser(res[0].data);
    });
  }, []);
  return <h2>This is profile page </h2>;
};

export default Profile;
