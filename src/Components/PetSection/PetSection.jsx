import css from './PetSection.module.css';

import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { getFetch } from '../../helper/helper';
const Url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

const PetSection = () => {
  useEffect(() => {
    getPetList();
  }, []);

  const [petList, setPetList] = useState([]);

  async function getPetList() {
    const data = await getFetch('pets');
    console.log('data ===', data);
    setPetList(data);
  }

  function deleteItem(id) {
    fetch(`${Url}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert(data.err);
        setPetList(petList.filter((obj) => obj.id !== id));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <section>
      <div className={css.first}>
        <h1>Pet List</h1>
        <Link to={'/addpet'}>
          <Button>add pet</Button>
        </Link>
      </div>
      <div className={css.cards}>
        {petList.map((obj) => (
          <div className={css.card} key={obj.id}>
            <h1 className={css.name}>{obj.name}</h1>
            <p>
              {new Date(obj.dob).toLocaleString('lt', { dateStyle: 'long' })}
            </p>
            <p>{obj.client_email}</p>
            <Link to={`/logs/${obj.id}`}>
              <Button>View log</Button>
            </Link>

            <span onClick={() => deleteItem(obj.id)}>
              <Button outline>Delete</Button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetSection;
