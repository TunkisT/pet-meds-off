import css from './LogForm.module.scss';

import React, { useState } from 'react';
import Button from '../../UI/Button';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/logs';

function LogForm() {
  const history = useHistory();
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const petId = query.get('petId');
  console.log('petId ===', petId);

  const medFormData = {
    pet_id: Number(petId),
    description,
    status,
  };
  console.log('medFormData ===', medFormData);

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
    history.push(`/logs/${petId}`);
  }

  return (
    <>
      <h1 className={css.hOne}>Add log</h1>
      <div className={css.formdiv}>
        <form onSubmit={formHandler} className={css.form}>
          <label htmlFor=''>Description</label>
          <br />
          <input
            onChange={(e) => setDescription(e.target.value)}
            className={css.input}
            type='text'
            placeholder='Description'
          />
          <br />
          <label htmlFor=''>Status</label>
          <br />
          <input
            onChange={(e) => setStatus(e.target.value)}
            className={css.input}
            type='text'
            placeholder='Status'
          />
          <br />
          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
}

export default LogForm;
