import { resolvers as demandResolvers } from './demand/demand';
import { resolvers as clientResolvers } from './client/client';

const resolvers = {
	...demandResolvers,
	...clientResolvers,

	Query: {
		...clientResolvers.Query,
		...demandResolvers.Query
	}
}

export default resolvers