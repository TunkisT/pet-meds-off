import React from 'react';

const AuthContext = React.createContext({
  isLogged: false,
  login() {},
  logout() {},
  white: true,
});

AuthContext.displayName = 'AuthContext';
export default AuthContext;
