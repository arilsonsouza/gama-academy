import React from 'react';
import PropTypes from 'prop-types'

import './modal.scss';

const Modal = ({ text, isOpen, handleClose }) => {
	return (
		<div className={`modal ${isOpen ? 'modal--isopen' : ''}`}>
			<div className='modal__content tw-flex tw-flex-wrap'>
				<div className='tw-w-full tw-flex tw-justify-end'>
					<span
						onClick={handleClose}
						className='tw-cursor-pointer tw-text-2xl'>
						&times;
					</span>
				</div>

				<div className='tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center'>
					<i className="fa fa-check-circle check__icon"></i>
					<p className='tw-text-gray-600'>{text}</p>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
  text: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default Modal;