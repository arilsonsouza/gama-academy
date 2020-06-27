import { resolvers as demandResolvers } from './demand/demand';
import { resolvers as clientResolvers } from './client/client';
import { resolvers as listResolvers } from './list/list';
import { resolvers as nodeResolvers } from './node/node';

const resolvers = {
	...nodeResolvers,
	...listResolvers,
	...demandResolvers,
	...clientResolvers,

	Query: {
		...clientResolvers.Query,
		...demandResolvers.Query
	},

	Mutation: {
		...clientResolvers.Mutation
	}
}

export default resolvers