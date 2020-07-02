import React from 'react';
import PropTypes from 'prop-types';

import './loading.scss';

const Loading = ({ text }) => ( 
  <>
    <div className='loading'>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
    </div>

    <p className='loading__text'>
      {text}
    </p>
  </>
);

Loading.propTypes = {
  text: PropTypes.string
};

Loading.defaultProps = {
  text: 'Carregando...'
};

export default Loading;