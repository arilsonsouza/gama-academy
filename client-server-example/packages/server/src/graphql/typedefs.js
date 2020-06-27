import { gql } from 'apollo-server-express';

import { typeDefs as nodeTypeDefs } from './node/node';
import { typeDefs as clientTypeDefs } from './client/client';
import { typeDefs as demandTypeDefs } from './demand/demand';
import { typeDefs as listTypeDefs } from './list/list';

const typeDefs = gql`
	type Query {
		_root: String
	}
		
	${nodeTypeDefs}
	${listTypeDefs}
	${clientTypeDefs}
	${demandTypeDefs}
`;

export default typeDefs;
