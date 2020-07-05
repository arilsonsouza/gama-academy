import { cartConstants } from '../constants';

export const addItemToCart = (item) => ({
  type: cartConstants.ADD_ITEM_TO_CART,
  payload: item
})

export const removeItem = (item) => ({
  type: cartConstants.REMOVE_ITEM,
  payload: item
})

export const removeItems = (id) => ({
  type: cartConstants.REMOVE_ITEMS,
  payload: id
})

export const closeOrder = () => ({
  type: cartConstants.CLOSE_ORDER,
  payload: null 
})