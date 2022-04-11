import css from './Header.module.css';
import img from '../Images/vetbee.jpg';

import React from 'react';
import Navigation from './Navigation';

const Header = (props) => {
  return (
    <header className={css.head}>
      <img src={img} alt='vet' />
      <Navigation isLogged={props.isLogged} />
    </header>
  );
};

export default Header;
