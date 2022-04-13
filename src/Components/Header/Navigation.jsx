import css from './Navigation.module.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button';
import AuthContext from '../../store/authContext';

const Navigation = () => {
  const authCtxValue = useContext(AuthContext);
  console.log('authCtxValue ===', authCtxValue);
  return (
    <nav>
      <NavLink className={css.link} to='/'>
        Pets
      </NavLink>
      <NavLink className={css.link} to='/medication'>
        Medications
      </NavLink>
      {!authCtxValue.isLogged && (
        <NavLink className={css.link} to='/login'>
          Login
        </NavLink>
      )}
      {!authCtxValue.isLogged && (
        <NavLink className={css.link} to='/register'>
          Register
        </NavLink>
      )}
      {authCtxValue.isLogged && (
        <span onClick={authCtxValue.logout}>
          <Button>LogOut</Button>
        </span>
      )}
      {authCtxValue.colorMode && (
        <span onClick={authCtxValue.setDark}>
          <Button>Dark mode</Button>
        </span>
      )}
      {!authCtxValue.colorMode && (
        <span onClick={authCtxValue.setWhite}>
          <Button>White mode</Button>
        </span>
      )}
    </nav>
  );
};

export default Navigation;
