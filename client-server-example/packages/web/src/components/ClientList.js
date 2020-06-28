import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

const GET_CLIENT_LIST  = gql`
	query GET_CLIENT_LIST($skip: Int!, $take: Int!) {
		clients(options: {
			skip: $skip
			take: $take
		}){
			items {
				id
				name
				email
			}
			totalItems
		}
	}
`;

const PAGE_SIZE = 10;

export default function ClientList() {
	
	const {
		error,
		loading,
		refetch,
		fetchMore,
		variables,		
		data
	} = useQuery(GET_CLIENT_LIST, {
		fetchPolicy: 'cache-and-network',
		variables: {
			skip: 0,
			take: PAGE_SIZE
		}
	});

	const clients = data?.clients.items ?? [];
	
	const handleLoadMore = () => {
    fetchMore({
      variables: {
        skip: data.clients.items.length,
        take: PAGE_SIZE,
      },
      updateQuery: (result, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
        	return result;
        }

        return {
          ...result,
          clients: {
            ...result.clients,
            items: result.clients.items.concat(fetchMoreResult.clients.items),
            totalItems: fetchMoreResult.clients.totalItems,
          },
        };
      },
    });
  };

	if (error) {
		return (
			<section>
				<strong>Erro ao buscar os clients</strong>
			</section>
		);
	}

	if (loading) {
		return (
			<section>
				<p>Carregando...</p>
			</section>
		);
	}

	return (
		<section>
			<ul>
				{ clients.map(client => (
					<li key={client.id}>
						<p>{client.name}</p>
						<p>{client.email}</p>
					</li>)
				)}
			</ul>
			<button
				onClick={handleLoadMore}
				disabled={loading}
			>
				Carregar mais
			</button>
		</section>
	);
}