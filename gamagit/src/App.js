import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [username, setUsername] = useState('');
  
  const hanleSearch = async () => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
    console.log(data)
  }

  return (
    <>
      <input 
        value={username}
        onChange={e => setUsername(e.target.value)}
        type='Usuário' 
        name='username'
        id='username'
        className="usuarioInput"/>   

        <button 
          onClick={hanleSearch}
          type='button'>
          Pesquisar
        </button>   
    </>
  );
}

export default App;
