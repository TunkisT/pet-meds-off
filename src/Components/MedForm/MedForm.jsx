import css from './MedForm.module.scss';

import React, { useState } from 'react';
import Button from '../../UI/Button';
import { useHistory } from 'react-router-dom';
const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/meds';

function MedForm() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const medFormData = {
    name,
    description,
  };

  function formHandler(e) {
    e.preventDefault();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        data.changes === 1 ? alert('Med added') : alert('Met not added');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    history.push('/medication');
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
        <label htmlFor=''>Description</label>
        <br />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className={css.input}
          type='text'
          placeholder='Description'
        />
        <br />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default MedForm;
