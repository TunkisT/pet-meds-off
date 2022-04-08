import css from './PetSection.module.css';

import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

const PetSection = () => {
  useEffect(() => {
    getPetList();
  }, []);

  const [petList, setPetList] = useState([]);

  function getPetList() {
    fetch(Url)
      .then((resp) => resp.json())
      .then((data) => {
        setPetList(data);
      });
  }

  function deleteHandler() {
    console.log('delete veikia');
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
            <p>{obj.dob}</p>
            <p>{obj.client_email}</p>
            <Button>View log</Button>
            <Button delete={deleteHandler} outline>
              Delete
            </Button>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default PetSection;
