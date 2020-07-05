import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'

import CartItem from '../CartItem';

import { groupBy, floatToCurrency } from '../../helpers';

import './cart.scss';

const Cart = ({closeCart}) => {
	let items = useSelector(state => state.cart.items);

	items = items.sort((a, b) => (a.name > b.name) ? 1 : -1);

	let totalPrice = 0;
	
	for(const item of items) {
		totalPrice += item.on_sale ? item.sale_price : item.regular_price;
	}
	
	const groupPokemonByName = groupBy('name');
	const groupedItems = groupPokemonByName(items);
	
	const handleCloseOrder = () => {
		closeCart();	
	};

	return (
		<>
		<div className='tw-w-full tw-flex tw-flex-wrap tw-h-full tw-flex-col tw-justify-between'>
			<div className='tw-w-full tw-flex tw-flex-wrap cart__items__wrapper tw-flex-1'>
				{totalPrice > 0 ? (
      		<div className='cart__items'>
        		{ Object.keys(groupedItems).map((key) => (
          		<div className='cart__item' key={key}>                            		
            		<CartItem item={groupedItems[key][0]} quantity={groupedItems[key].length}/>
          		</div>
        	))}
      		</div>
      	): <div className='tw-w-full tw-flex tw-justify-center tw-h-full tw-items-center'>
							<span className='tw-text-gray-500'>Sua sacola está vazia :\</span>
				    </div>
				}
			</div>
			{ totalPrice > 0 && 
				<div className='tw-w-full tw-flex tw-flex-wrap tw-absolute tw-bottom-0'>
					<div className='tw-w-full tw-flex tw-justify-between tw-bg-gray-500 tw-text-white tw-font-bold tw-py-2 tw-px-4'>
						<span>TOTAL</span> <span>{floatToCurrency(totalPrice)}</span>
					</div>
					<div className='tw-w-full'>						
				 		<button				 		
				 			onClick={handleCloseOrder}           
            	className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-w-full tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-uppercase"
            >
            	finalizar compra
          	</button>
					</div>
				</div> 
			}
		</div>
		</>
	);
};

Cart.propTypes = {
  closeCart: PropTypes.func
};

export default Cart;