import Service from './Service';

export class PokemonService extends Service {
  static getPokemon(params = {limit: 20, offset:0 }) {    
    return this.$axios.get('/pokemon', { params});
  }
}