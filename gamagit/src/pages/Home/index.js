import React, { useState } from 'react';
import axios from 'axios';

import * as S from './styled';

export default function Home () {
	const [username, setUsername] = useState('');
  
  const hanleSearch = async () => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
    console.log(data)
  }

	return (
		<S.Container>
		 <S.Input 
      value={username}
      onChange={e => setUsername(e.target.value)}
      type='Usuário' 
      name='username'
      id='username'
      className="usuarioInput"/>   

      <S.Button 
        onClick={hanleSearch}
        type='button'>
        Pesquisar
      </S.Button>  
		</S.Container>
	);
}
