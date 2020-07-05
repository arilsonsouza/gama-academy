import { cartConstants } from '../constants';

let cart: any = localStorage.getItem('cart');
cart = cart ? JSON.parse(cart) : {}; 

const initialState = {
  items: [],
  quantity: 0,
  ...cart
}

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case cartConstants.ADD_ITEM_TO_CART:
      const items = [...state.items, payload.item];
      state.items = items;
      state.quantity = items.length;      
      break;
    case cartConstants.REMOVE_ITEM:
      const { item: { id } } = payload;         
      const index = state.items.findIndex(item => item.id === id);
      if (index >= 0) {        
        state.items.splice(index, 1);
        state.quantity -= 1;
      }     
      break;
    case cartConstants.REMOVE_ITEMS:
      const filteredItems = state.items.filter(item => item.id !== payload);
      state.items = filteredItems;
      state.quantity = filteredItems.length
      break;
    case cartConstants.CLOSE_ORDER:
      state.items = [];
      state.quantity = 0;
      break
  }

  localStorage.setItem('cart', JSON.stringify(state))
  return state;
};

export default cartReducer;