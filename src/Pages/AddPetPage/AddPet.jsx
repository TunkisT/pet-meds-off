import css from './AddPet.module.css';
import Header from '../../Components/Header/Header';

import React, { useState } from 'react';
import Button from '../../UI/Button';
const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

function AddPet() {
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
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert(data.err)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <Header />
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
    </div>
  );
}

export default AddPet;
