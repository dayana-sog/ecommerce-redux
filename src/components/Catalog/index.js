import React from 'react';

import cel from '../../assets/celular1.jpg';

import { Container, WrapperProducts } from './styles';

function Catalog() {
  return (
    <Container>
      <h1>Catálogo</h1>

      <WrapperProducts>
        <ul className="container-banner">
          <li>
            <div className="img-container">
              <img src={cel} alt="foto" className="card-img.top" />
              <button type="button" className="card-button">
                Add to cart
              </button>
            </div>

            <p>Samsung Galaxy 20</p>
            <strong>450€</strong>
          </li>
        </ul>
      </WrapperProducts>
    </Container>
  );
}

export default Catalog;
