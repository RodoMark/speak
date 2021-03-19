import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [authStatus, setAuthStatus] = useState(false)
 
  return (
    <AuthContext.Provider value={[authStatus, setAuthStatus]}>
      {props.children}
    </AuthContext.Provider>

  );
};

export default AuthContextProvider;