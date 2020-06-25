import { gql } from 'apollo-server-express';

import { typeDefs as clientTypeDefs } from './client/client';
import { typeDefs as demandTypeDefs } from './demand/demand';

const typeDefs = gql`
	type Query {
		_root: String
	}
	
	${clientTypeDefs}
	${demandTypeDefs}
`;

export default typeDefs;
