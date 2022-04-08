import css from './PetForm.module.css';

import React, { useState } from 'react';
import Button from '../../UI/Button';
import { useHistory } from 'react-router-dom';
const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

function PetForm() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');

  const petFormData = {
    name,
    dob: date,
    client_email: email,
  };

  function formHandler(e) {
    e.preventDefault();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert(data.err);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    history.push('/');
  }

  return (
    <div className={css.formdiv}>
      <form onSubmit={formHandler} className={css.form}>
        <label htmlFor=''>Name</label>
        <br />
        <input
          onChange={(e) => setName(e.target.value)}
          className={css.input}
          type='text'
          placeholder='Name'
        />
        <br />
        <label htmlFor=''>Date</label>
        <br />
        <input
          onChange={(e) => setDate(e.target.value)}
          className={css.input}
          type='text'
          placeholder='YYYY-MM-DD'
        />
        <br />
        <label htmlFor=''>Email</label>
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={css.input}
          type='email'
          placeholder='email'
        />
        <br />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default PetForm;
