import { pokemonConstants } from '../constants';

const initialState = {
  list: []
}

const pokemonReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case pokemonConstants.SET_POKEMON:
      state.list = payload;
      break;
  }
  return state;
};

export default pokemonReducer;