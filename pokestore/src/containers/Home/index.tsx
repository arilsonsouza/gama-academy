import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loading, PokemonList, Search, Cart, Modal } from '../../components';

import { PokemonService } from '../../services/PokemonService';

import { setPokemon, closeOrder } from '.././../actions';

import './home.scss';

export default function Home() {  
  const [query, setQuery] = useState('');
  const [isSidenavOpened, setIsSidenavOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const pokemon = useSelector(state => state.pokemon.list);
  const cartQuantity = useSelector(state => state.cart.quantity);
  let cartItems = useSelector(state => state.cart.items);

  const [page, setPage] = useState(1);
  const limit = 20;
  const [isLoading, setIsLoading] = useState(false);

  const generatePokePrice = (min = 40, max = 50) => {
    return Number(Math.floor((Math.random() * (max - min + 1)) + min).toFixed(2));
  };
  
  const itemInCart = (id) => cartItems.find(item => item.id === id);

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
        
        let cartItem = itemInCart(item.id);
        if (cartItem) {
          item = cartItem;
        } else {
          const onSale = Math.round(Math.random());
          if (onSale) {
            item.sale_price = generatePokePrice(10, item.regular_price);
          }
          item.on_sale = Boolean(onSale);          
        }

        return item;
      });      
      dispatch(setPokemon([...pokemon, ...results]));      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [page])

  const handleChangeQuery = (evt) => {
    setQuery(evt.target.value);
  }
  
  const closeCart = async () => {
    setIsSidenavOpened(!isSidenavOpened);   
    dispatch(closeOrder());

    setIsOpen(true);
  };

  const filteredItems = query 
  ? pokemon.filter(item => item.name.includes(query.toLocaleLowerCase()))  
  : pokemon;
  return (
    <>
    <div id='sidenav' className={`sidenav tw-overflow-hidden ${ isSidenavOpened ? 'sidenav--is_open' : ''}`}>
      <div className='sidenav__content tw-flex tw-flex-col'>
        <div className='tw-w-full tw-flex tw-p-2 tw-justify-between tw-items-center tw-border-b tw-border-solid tw-border-b-1 tw-border-gray-400'>
          <button 
            onClick={() => setIsSidenavOpened(!isSidenavOpened)}
            className='sidenav-close__btn tw-cursor-pointer tw-text-3xl tw-text-gray-600'
          > 
            &times;
          </button>
          <span className='tw-text-gray-600'>PokeCarrinho</span>
        </div>
        <div className='tw-h-full'>
          <Cart closeCart={closeCart}/>
        </div>
      </div>
    </div>
    <div className='home__wrapper tw-h-full tw-flex tw-flex-wrap tw-justify-center'>
      <div className='tw-w-full tw-flex tw-justify-center'>
        <div className='navbar__wrapper tw-bg-white tw-border tw-border-b-1 tw-border-solid tw-border-gray-400 tw-py-4 tw-fixed tw-w-full tw-flex tw-justify-center'>
          <div className='navbar tw-mx-3 md:tw-px-0 tw-w-full md:tw-w-4/5 tw-flex tw-items-center tw-justify-between'>
            <div className='tw-w-4/5 md:tw-w-1/3'>
              <Search
               query={query}
               handleChangeQuery={handleChangeQuery}/>
            </div>
            <div className='tw-flex'>
              <button
                onClick={() => setIsSidenavOpened(true)}
                className='tw-relative'
              >
                <i className='fa fa-shopping-cart tw-text-xl tw-mr-1 search__icon'></i>
                <span className='cart__quantity tw-absolute tw-rounded-full'>{cartQuantity}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='content__wrapper tw-w-4/5'>
        {isLoading && filteredItems.length === 0 
          ? <Loading/>
          : filteredItems.length > 0 ? (
            <>
             <div className='tw-w-full'>
              <Modal
                text='Obgrigado pela sua pokecompra!'
                isOpen={isOpen}
                handleClose={() => setIsOpen(false)}
              />

              <PokemonList pokemon={filteredItems}/>
             </div>
              <div className='tw-w-full tw-flex tw-justify-center tw-px-3 tw-mb-3'>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={isLoading}
                  className='tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded'>
                  Ver mais Pokemon
                </button>
              </div>
            </>
          ) : <div className='tw-flex tw-justify-center'>
                <p className='tw-text-gray-600 tw-text-2xl'>Nenhum pokemon encontrado :(</p>
              </div>
        }
      </div>
    </div>
    </>
  );
}