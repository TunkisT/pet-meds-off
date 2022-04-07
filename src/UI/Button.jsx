import css from './Button.module.css';

import React from 'react'

const Button = (props) => {
  return (
    <button className={css.btn}>{props.name}</button>
  )
}

export default Button