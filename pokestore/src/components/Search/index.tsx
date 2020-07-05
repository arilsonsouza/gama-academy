import React from 'react';

import './search.scss';

export default function Search({query, handleChangeQuery}) {  


  return (
    <div className="tw-w-full tw-flex tw-items-center tw-border-solid tw-border tw-border-gray-400 tw-mx-1 tw-rounded tw-leading-tight">
      <input
      onChange={handleChangeQuery}
      value={query}
      className="tw-appearance-none tw-rounded tw-block tw-w-full tw-text-gray-500 tw-py-1 tw-px-3 focus:tw-outline-none focus:tw-shadow-none  focus:tw-border-none" type="text" placeholder="Pesquisar"/>
      <i className="fa fa-search tw-mr-1 search__icon"></i>
    </div>
  );
};