import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import img from '../../assets/celular1.jpg';

import Header from '../../components/Header';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <>
      <Header />

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
            <tr>
              <td>
                <img src={img} alt="celuar" />
              </td>
              <td>
                <strong>Samsung alguma coisa</strong>

                <span>1590.0€</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => {}}>
                    <MdRemoveCircleOutline size={20} color="#454777" />
                  </button>

                  <input type="number" readOnly value="2" />

                  <button type="button" onClick={() => {}}>
                    <MdAddCircleOutline size={20} color="#454777" />
                  </button>
                </div>
              </td>
              <td>
                <strong>2090.9€</strong>
              </td>
              <td>
                <button type="button" onClick={() => {}}>
                  <MdDelete size={20} color="#454777" />
                </button>
              </td>
            </tr>
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
    </>
  );
}

export default Cart;
