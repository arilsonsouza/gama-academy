import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Repositories () {
	const [repositories, setRepositories] = useState([]);
	
	const history = useHistory();
	useEffect(() => {
		const localRepositories = JSON.parse(localStorage.getItem('repositories'));

		if (localRepositories) {
			setRepositories(localRepositories);
		} else {
			history.push('/');					
		}
		
		localStorage.clear();
	}, []);

	return (
		<S.Container>
			<S.Title>Repositórios</S.Title>
			<S.List>
				{ repositories.map(repo => (
					<S.ListItem key={repo.id}>
						<a href={repo.url} target='_blank'>
							<span>Repositório: {repo.name}</span>
						</a>
					</S.ListItem>
				))
				}
			</S.List>

			<S.LinkHome to='/'>Voltar</S.LinkHome>
		</S.Container>
	);
}
