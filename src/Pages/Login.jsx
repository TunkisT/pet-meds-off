import React, { useContext } from 'react';
import AuthContext from '../store/authContext';
import Button from '../UI/Button';

function Login() {
  const authCtxValue = useContext(AuthContext);

  function formHandler(e) {
    e.preventDefault();
    authCtxValue.login();
  }
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formHandler}>
        <input type='text' placeholder='username' />
        <br />
        <input type='text' placeholder='password' />
        <br />
        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Login;
