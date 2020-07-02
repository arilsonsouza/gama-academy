import React from 'react';
import PropTypes from 'prop-types'

import { floatToCurrency } from '../../helpers';

const PokeCard = ({ id, name, url, image_url, regular_price, sale_price, on_sale}) => {
  return (
    <>
      <div className="tw-max-w-sm tw-rounded tw-overflow-hidden tw-shadow-xl tw-border-solid tw-border-2 tw-border-gray-400">
        <div className='tw-p-1'>
          <img className="tw-w-full" src={image_url} alt={name} title={name}/>
        </div>
        <div className="tw-px-6 tw-py-4">
          <div className="tw-font-medium tw-text-xl tw-mb-1 tw-capitalize tw-text-center">{name}</div>         
        </div>
        <div className="tw-px-1 tw-py-2 tw-flex tw-justify-end">
          {on_sale ? 
          ( <> 
            <s
              className="tw-inline-block tw-rounded tw-bg-blue-300 tw-px-1 tw-py-1 tw-text-sm tw-font-semibold tw-text-white tw-mr-2">
              {floatToCurrency(regular_price)}
            </s>
            <span
              className="tw-inline-block tw-rounded tw-bg-blue-400 tw-px-1 tw-py-1 tw-text-sm tw-font-semibold tw-text-white tw-mr-2">
              {floatToCurrency(sale_price)}
            </span>
            </>
          ) :
           (
             <span
              className="tw-inline-block tw-rounded tw-bg-blue-400 tw-px-1 tw-py-1 tw-text-sm tw-font-semibold tw-text-white tw-mr-2">
              {floatToCurrency(regular_price)}
            </span>
           )
          }   
        </div>

        <div className='tw-px-1 tw-py-2 tw-flex tw-justify-end'>
          <button className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-w-full tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
}

PokeCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  regular_price: PropTypes.number,
  sale_price: PropTypes.number,
  on_sale: PropTypes.bool,
};

PokeCard.defaultProps = {
  id: -1,
  name: '',
  url: '',
  regular_price: 0,
  sale_price: null,
  on_sale: false,
};

export default PokeCard;