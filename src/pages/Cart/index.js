import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import Lottie from 'lottie-react-web';

import emptyBag from '../../assets/shopping-bag-error.json';

import { formatPrice } from '../../util/format';

import {
  removeProductToCart,
  UpdateAmountRequest
} from '../../store/modules/cart/actions';

import {
  Container,
  ProductTable,
  Total,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleDelete = useCallback((productId) => {
    dispatch(removeProductToCart(productId));
  }, [dispatch]);

  const increaseQuantity = useCallback((item) => {
    dispatch(UpdateAmountRequest(item.product.id, item.quantity + 1));
  }, [dispatch]);

  const decreaseQuantity = useCallback((item) => {
    dispatch(UpdateAmountRequest(item.product.id, item.quantity - 1));
  }, [dispatch]);

  const cartPriceTotal = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <Container>
      {cart.length ? (
        <>
         <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map(item => (
            <tr key={item.product.id}>
              <td>
                <img src={item.product.image} alt={item.product.title} />
              </td>
              <td>
                <strong>{item.product.title}</strong>

                <span>{formatPrice(item.product.price)}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decreaseQuantity(item)}>
                    <MdRemoveCircleOutline size={20} color="#454777" />
                  </button>

                  <input type="number" readOnly value={item.quantity} />

                  <button type="button" onClick={() => increaseQuantity(item)}>
                    <MdAddCircleOutline size={20} color="#454777" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{formatPrice(item.product.price * item.quantity)}</strong>
              </td>
              <td>
                <button type="button" onClick={() => handleDelete(item.product.id)}>
                  <MdDelete size={20} color="#454777" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(cartPriceTotal)}</strong>
        </Total>
      </footer>
        </>
      ): (
        <EmptyContainer>
          <Lottie
            options={{
              animationData: emptyBag,
              loop: true,
              autoplay: true,
            }}
            width="40%"
            height="40%"
          />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

export default Cart;
