import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import * as S from './styled';

export default function Home () {
	const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
    
  const history = useHistory();

  const hanleSearch = async () => {
    setError(false);
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);      
      const repositories = data.map(({ id, name, url }) => ({ id, name, url }));
      localStorage.setItem('repositories', JSON.stringify(repositories));
      history.push('/repositories');

    } catch(e) {
      setError(true);
    }
  }

	return (
		<S.Container>
		 <S.Content>
        <S.Input 
          value={username}
          onChange={e => setUsername(e.target.value)}
          type='Usuário' 
          name='username'
          id='username'
          className="usuarioInput"
        />   

        <S.Button 
          onClick={hanleSearch}
          type='button'
        >
            Pesquisar
        </S.Button>
     </S.Content>  

      {error && <S.ErrorMessage>
        Ocorreu um erro. Tente novamente.
      </S.ErrorMessage> }
		</S.Container>
	);
}
