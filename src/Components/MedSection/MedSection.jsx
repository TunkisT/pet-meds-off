import css from './MedSection.module.css';

import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/meds';

const MedSection = () => {
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
        <h1>Medication List</h1>
        <Link to={'/add-medication'}>
          <Button>add medication</Button>
        </Link>
      </div>
      <div className={css.cards}>
        {petList.map((obj) => (
          <div className={css.card} key={obj.id}>
            <h1 className={css.name}>{obj.name}</h1>
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default MedSection;
