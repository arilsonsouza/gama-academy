import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');

  return (
    <>
      <input 
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
        type='Usuário' 
        name='usuario'
        id='usuario'
        className="usuarioInput"/>   

        <button type='button'>
          Pesquisar
        </button>   
    </>
  );
}

export default App;
