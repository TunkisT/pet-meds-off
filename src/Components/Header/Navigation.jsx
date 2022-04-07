import css from './Navigation.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.link} to='/'>
        Pets
      </NavLink>
      <NavLink className={css.link} to='/medication'>
        Medications
      </NavLink>
    </nav>
  );
};

export default Navigation;
