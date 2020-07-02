import React from 'react';
import PropTypes from 'prop-types';

import PokeCard from '../PokeCard';

const PokemonList = ({ pokemon }) => {
  return (
    <>
      <div className='tw-flex tw-flex-wrap tw-w-full'>
        {pokemon.map((item, index) => (
          <div
            key={index}
            className='tw-w-full sm:tw-w-1/2 md:tw-w-1/4 tw-flex tw-justify-center tw-mb-8 tw-p-1'>
            <PokeCard {...item }/>    
          </div>
        ))}
      </div>
    </>
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.array
};

PokemonList.defaultProps = {
  pokemon: []
};

export default PokemonList;