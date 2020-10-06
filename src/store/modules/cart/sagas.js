import { all, takeLatest, call, select, put} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  addProductToCartSuccess,
  UpdateAmountSuccess
} from './actions';

import api from '../../../service/api';

function* checkStock({ payload }) {
  const { product } = payload;


  const currentyQuantity = yield select(state => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity || 0;
  });

  const hasProductInStock = yield call(api.get, `/stock/${product.id}`);

  if (hasProductInStock.data.amount > currentyQuantity) {
    yield put(addProductToCartSuccess(product));

    toast.error('Produto adicionado ao carrinho', {
      className: 'toast-add'
    });
  } else {
    toast.error('Quantidade de produto solicitada fora de estoque', {
      className: 'toast'
    });

    return;
  }

};

function* updateAmount({ payload: {product, quantity} }) {
  if (quantity <= 0) return;

  const stock = yield call(api.get, `stock/${product}`);
  const stockAmount = stock.data.amount;

  if (quantity > stockAmount) {
    toast.error('Quantidade de produto solicitada fora de estoque', {
      className: 'toast'
    });

    return;
  }

  yield put(UpdateAmountSuccess(product, quantity));
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkStock),
  takeLatest('UPDATE_AMOUNT_REQUEST', updateAmount),
]);
