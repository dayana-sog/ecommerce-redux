export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}

export function UpdateAmountRequest(product, quantity) {
  return {
    type: 'UPDATE_AMOUNT',
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
