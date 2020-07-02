import React, { useState, useEffect } from 'react';

import { Loading, PokemonList } from '../../components';

import { PokemonService } from '../../services/PokemonService';

import './home.scss';

export default function Home() {  
  const [pokemon, setPokemon] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const generatePokePrice = (min = 40, max = 50) => {
    return Number(Math.floor((Math.random() * (max - min + 1)) + min).toFixed(2));
  };

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      const offset = (page - 1) * limit

      let { data: { results } } = await PokemonService.getPokemon({ limit, offset });
      results = results.map((item, index) => {
        const pokeId = (index + 1 + offset);
        item.id = pokeId;
        item.image_url = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;
        item.regular_price = generatePokePrice();
        
        const onSale = Math.round(Math.random());
        if (onSale) {
          item.sale_price = generatePokePrice(10, item.regular_price);
        }
        item.on_sale = Boolean(onSale);
        return item;
      });
      console.log('RESULT: ', [...pokemon, ...results])
      setPokemon([...pokemon, ...results])      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchPokemon()
  }, [page])

  return (
    <div className='home__wrapper tw-flex tw-flex-wrap tw-justify-center'>

      <div className='content__wrapper'>
        {isLoading && pokemon.length === 0 
          ? <Loading/>
          : <PokemonList pokemon={pokemon}/> }
      </div>
      <div className='tw-w-full tw-flex tw-justify-center tw-px-3 tw-mb-3'>
        <button
          onClick={() => setPage(page + 1)}
          disabled={isLoading}
          className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded">
          Ver mais Pokemon
        </button>
      </div>
    </div>
  );
}