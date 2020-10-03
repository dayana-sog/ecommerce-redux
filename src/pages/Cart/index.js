import React from 'react';
import { useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import img from '../../assets/celular1.jpg';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  const cart = useSelector(state => state.cart.items);

  console.log(cart);

  return (
    <Container>
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

                <span>{item.product.price}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => { }}>
                    <MdRemoveCircleOutline size={20} color="#454777" />
                  </button>

                  <input type="number" readOnly value={item.quantity} />

                  <button type="button" onClick={() => { }}>
                    <MdAddCircleOutline size={20} color="#454777" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{item.product.price * item.quantity}</strong>
              </td>
              <td>
                <button type="button" onClick={() => { }}>
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
          <strong>1445,00€</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
