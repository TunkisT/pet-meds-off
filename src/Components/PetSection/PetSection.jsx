import css from './PetSection.module.css';

import React, { useContext, useEffect, useState } from 'react';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
import { getFetch } from '../../helper/helper';
import AuthContext from '../../store/authContext';
const Url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

const PetSection = () => {
  const authCtxValue = useContext(AuthContext);
  useEffect(() => {
    getPetList();
  }, []);

  const [petList, setPetList] = useState([]);

  async function getPetList() {
    const data = await getFetch('pets');
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
            <span onClick={authCtxValue.logout}>
              <Button>LogOut</Button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetSection;
