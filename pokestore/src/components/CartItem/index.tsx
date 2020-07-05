import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'

import { floatToCurrency } from '../../helpers';
import { addItemToCart, removeItem, removeItems } from '../../actions';

import './cart_item.scss';

const CartItem = ({item, quantity}) => {
	const dispatch = useDispatch();

	const handleClickAddItem = () => {
    dispatch(addItemToCart({ item }))
  }

  const handleClickRemoveItem = () => {
    dispatch(removeItem({ item }))
  }

  const handleClickRemoveItems = () => {
    dispatch(removeItems(item.id))
  }

	return (
		<div className='tw-w-full tw-flex tw-p-2 tw-shadow-lg cart-item'>
			<div className='tw-w-1/3 tw-text-center'>
				<div className='cart-item__image'>
					<img src={item.image_url} alt={item.name} title={item.name}/>
				</div>
				<button
					onClick={handleClickRemoveItems}
					className='btn__remove__item'
				>
					Remover
				</button>
			</div>
			<div className='tw-w-full tw-flex tw-flex-wrap'>
				<div className='tw-w-full tw-flex tw-justify-between tw-items-center tw-uppercase'>
					<span className='item__name tw-text-gray-500'>{item.name}</span>
					<span className='item__price tw-text-gray-500'>{floatToCurrency(item.on_sale ? item.sale_price : item.regular_price) }</span>
				</div>

				<div className='tw-w-full tw-flex tw-items-center tw-justify-end'>
					<button
						onClick={handleClickAddItem}
						className='tw-border tw-border-solid tw-border-gray-400 tw-text-gray-500 tw-font-bold tw-py-1 tw-px-1 tw-rounded'>
						+
						</button>
						<span className='tw-mx-2 tw-text-gray-500'>{quantity}</span>
					<button
					  disabled={quantity === 1}
						onClick={handleClickRemoveItem}
						className={`tw-border tw-border-solid tw-border-gray-400 tw-text-gray-500 tw-font-bold tw-py-1 tw-px-1 tw-rounded ${quantity === 1 ? 'btn__disabled' : ''}`}>
						-
					</button>					
				</div>
			</div>
		</div>
	);
}

CartItem.propTypes = {
  item: PropTypes.object,
  quantity: PropTypes.number
};

export default CartItem;
