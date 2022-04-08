import css from './Button.module.css';

import React from 'react';

const Button = (props) => {
  const extraClass = props.outline ? css.outline : '';

  return (
    <button className={`${css.btn} ${extraClass}`}>{props.children}</button>
  );
};

export default Button;
