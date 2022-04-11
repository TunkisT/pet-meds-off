import css from './LogSection.module.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helper/helper';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function LogSection() {
  const { petId } = useParams();
  const [log, setLog] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getLogs();
  }, []);

  async function getLogs() {
    // const data = await getFetch(`logs/${petId}`);
    const data = await getFetch(`logs/51`);
    console.log('data ===', data[0].name);
    setLog(data);
    setName(data[0].name);
  }

  console.log('id ===', petId);

  return (
    <section>
      <div className={css.first}>
        <h1>{name}: Health record</h1>
        <div>
          <Link to={'/add-log'}>
            <Button>add log</Button>
          </Link>
          <Link to={'/add-prescription'}>
            <Button outline>add prescription</Button>
          </Link>
        </div>
      </div>
      <div className={css.cards}>
        {log.map((obj) => (
          <div className={css.card}>
            <h1 className={css.name}>{obj.description}</h1>
            <p>{obj.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogSection;
