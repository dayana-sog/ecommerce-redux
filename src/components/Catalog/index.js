import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../service/api';

import { addProductToCartRequest } from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import { Container, WrapperProducts } from './styles';

function Catalog() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const isInCartData = useSelector(state => state.cart.items);
  const isInCart = isInCartData.map(item => item.product.id);

  // console.log(isInCart);

  useEffect(() => {
    api.get('/products').then((response) => setProducts(response.data));
  }, [isInCartData]);

  const handleAddToCart = useCallback((product) => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch]);

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
                  {isInCart.find(item => item === product.id) ? 'IN CART': 'ADD TO CART' }
                </button>
              </div>

              <p>{product.title}</p>
              <strong>{formatPrice(product.price)}</strong>
            </li>
          ))}
        </ul>
      </WrapperProducts>
    </Container>
  );
}

export default Catalog;
