import React from 'react';

import celular1 from '../../assets/celular1.jpg';
import celular2 from '../../assets/celular2.jpg';
import celular3 from '../../assets/celular3.jpg';

import { Container, Banner2 } from './styles';

const items = [
  {
    key: String(Math.random()),
    img: celular1,
    title: 'Xiaomi',
  },
  {
    key: String(Math.random()),
    img: celular2,
    title: 'Apple',
  },
  {
    key: String(Math.random()),
    img: celular3,
    title: 'Samsung',
  },
];

function TopCategory() {
  return (
    <Container>
      <h1>Top Categorias</h1>

      <ul className="container-banner">
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="container-banner-footer">
              <h2>{item.title}</h2>
              <button type="button">Ver mais</button>
            </div>
          </li>
        ))}
      </ul>

      <Banner2>
        <h1>Corre e compre já o seu!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus tempora.
        </p>
        <button type="button">Compre agora</button>
      </Banner2>
    </Container>
  );
}

export default TopCategory;
