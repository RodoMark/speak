import { useContext } from 'react'

import Button from '../Buttons/Button'
import { AuthContext } from '../../context/AuthContext.js';

export default function Dropdown(props) {
  const { authStatus, setAuthStatus } = useContext(AuthContext)

  return (
    <div>
    {authStatus && 
      <>  
      <p>list of attendants</p>
      <Button invite>Invite</Button>
      </>
    }
   </div> 
  );
}
