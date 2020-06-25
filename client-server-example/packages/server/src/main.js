import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.applyMiddleware({
	app,
	cors: {
		origin: 'http://localhost:3000'
	},
	bodyParserConfig: true
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3333;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server is litening at http://${HOSTNAME}:${PORT}`)
});