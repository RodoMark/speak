import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [auth, setAuth] = useState(true);

  const data = {
    auth, 
    setAuth
  }
 
  return (
    <AuthContext.Provider value={data}>
      {props.children}
    </AuthContext.Provider>

  );
};

export default AuthContextProvider;