import { resolvers as demandResolvers } from './demand/demand';

const resolvers = {
	...demandResolvers,

	Query: {
		...demandResolvers.Query
	}
}

export default resolvers