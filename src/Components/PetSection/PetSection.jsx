import css from './PetSection.module.css';

import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import Footer from '../Footer/Footer';
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
        console.log(data);
        setPetList(data);
      });
  }

  return (
    <section>
      <div className={css.first}>
        <h1>Pet List</h1>
        <Button>ADD PET</Button>
      </div>
      <div className={css.card}>
        {petList.map((obj) => (
          <div key={obj.id}>
            <h1 className={css.name}>{obj.name}</h1>
            <p>{obj.dob}</p>
            <p>{obj.client_email}</p>
            <Button>View log</Button>
            <Button outline>Delete</Button>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default PetSection;
