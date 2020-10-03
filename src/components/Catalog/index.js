import React, { useState, useEffect } from 'react';

import api from '../../service/api';

import { Container, WrapperProducts } from './styles';

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then((response) => setProducts(response.data));
  }, []);

  return (
    <Container>
      <h1>Catálogo</h1>

      <WrapperProducts>
        <ul className="container-banner">
          {products.map((product) => (
            <li key={product.id}>
              <div className="img-container">
                <img src={product.image} alt="foto" className="card-img.top" />
                <button type="button" className="card-button">
                  Add to cart
                </button>
              </div>

              <p>{product.title}</p>
              <strong>{product.price}</strong>
            </li>
          ))}
        </ul>
      </WrapperProducts>
    </Container>
  );
}

export default Catalog;
