import css from './Header.module.css';
import img from '../Images/vetbee.jpg';

import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={css.head}>
      <img src={img} alt='vet' />
      <Navigation />
    </header>
  );
};

export default Header;
