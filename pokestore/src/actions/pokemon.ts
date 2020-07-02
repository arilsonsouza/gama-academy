import { pokemonConstants } from '../constants';

export const setPokemon = (pokemon) => ({
  type: pokemonConstants.SET_POKEMON,
  payload: pokemon
})