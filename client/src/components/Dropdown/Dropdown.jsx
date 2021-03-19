import { useContext } from 'react'

import Button from '../Buttons/Button'
import { AuthContext } from '../../context/AuthContext.js';

export default function Dropdown(props) {
  const { auth, setAuth } = useContext(AuthContext);
  
  return (
    <div>
    {auth && 
      <>  
      <p>list of attendants</p>
      <Button invite>Invite</Button>
      </>
    }
   </div> 
  );
}
