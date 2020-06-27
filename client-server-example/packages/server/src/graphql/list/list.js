import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	interface List {
		items: [Node!]!
		totalItems: Int!
	}
	
	enum listSortmentEnum {
		ASC
		DESC
	}

	input ListSort {
		sorter: String!
		sortment:listSortmentEnum!
	}
`;

export const listSortmentEnum = Object.freeze({
	ASC: 'ASC',
	DESC: 'DESC'
})

export const resolvers = {
	List: {
		__resolveType: () => null
	}
}

