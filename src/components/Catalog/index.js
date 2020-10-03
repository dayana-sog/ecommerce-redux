import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../service/api';

import { addProductToCart } from '../../store/modules/cart/actions';

import { Container, WrapperProducts } from './styles';

function Catalog() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/products').then((response) => setProducts(response.data));
  }, []);

  const handleAddToCart = useCallback((product) => {
    dispatch(addProductToCart(product));
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
                <button
                  type="button"
                  className="card-button"
                  onClick={() => handleAddToCart(product)}
                >
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
