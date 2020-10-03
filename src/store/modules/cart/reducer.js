import produce from 'immer';

const INITIAL_STATE = {
  items: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;

        draft.items.push({
          product,
          quantity: 1,
        });
        break;
      }
      default:
        return draft;
    }
  });
}
