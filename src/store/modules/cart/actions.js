export function addProductToCartRequest(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCESS',
    payload: {
      product,
    },
  };
}

export function UpdateAmountSuccess(product, quantity) {
  return {
    type: 'UPDATE_AMOUNT_SUCCESS',
    payload: {
      product,
      quantity,
    },
  };
}

export function UpdateAmountRequest(product, quantity) {
  return {
    type: 'UPDATE_AMOUNT_REQUEST',
    payload: {
      product,
      quantity,
    },
  };
}


export function removeProductToCart(productId) {
  return {
    type: 'REMOVE_PRODUCT_TO_CART',
    payload: {
      productId,
    },
  };
}
