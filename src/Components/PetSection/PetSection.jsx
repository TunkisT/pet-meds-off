import css from './PetSection.module.css';

import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
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
        <Button name='ADD PET' />
      </div>
      <div>
        {petList.map((obj) => (
          <div key={obj.id}>
            <h1>{obj.name}</h1>
            <h3>{obj.client_email}</h3>
            <p>{obj.dob}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetSection;
