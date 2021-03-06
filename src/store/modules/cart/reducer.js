import produce from 'immer';

const INITIAL_STATE = {
  items: [],
  inCart: false
};

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCESS': {
        const { product } = action.payload;

        const productInCart = draft.items.findIndex(item => item.product.id === product.id);

        if (productInCart >= 0) {
          draft.items[productInCart].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
            inCart: true,
          });
        }
        break;
      }

      case 'UPDATE_AMOUNT_SUCCESS': {
        return produce(state, draft => {
        const { quantity, product } = action.payload;
        const productIndex = draft.items.findIndex(item => item.product.id === product);

          if (productIndex >= 0) {
            draft.items[productIndex].quantity = Number(quantity);
          }
        });
      }

      case 'REMOVE_PRODUCT_TO_CART': {
        const { productId } = action.payload;

        const deleted = draft.items.findIndex(item => item.product.id === productId);

        if (deleted >= 0) {
          draft.items[deleted].inCart = false;
          draft.items.splice(deleted, 1);
        }

        break;
      }
      default:
        return draft;
    }
  });
}
