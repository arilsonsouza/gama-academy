import { combineReducers } from 'redux';

import appReducer from './appReducer';
import pokemonReducer from './pokemonReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  app: appReducer,
  pokemon: pokemonReducer,
  cart: cartReducer
});

export default reducer;