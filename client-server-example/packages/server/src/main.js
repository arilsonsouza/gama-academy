import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const server = new ApolloServer({
	typeDefs: gql`
		type Client {
			id: ID!
			name: String!
		}

		type Demand {
			id: ID!
			name: String!
			client: Client!
			deadline: String
		}

		type Query {
			demands: [Demand]! 
		}		
	`,

	resolvers: {
		Query: {
			demands: () => {
				return []
			}
		}
	}

});

server.applyMiddleware({
	app,
	cors: {
		origin: 'http://localhost:3000'
	}
});

/*app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000'
}));*/

/*app.get('/status',(_, res) => {
	res.send({
		status: 'Okay'
	})
});

app.post('/authenticate', (req, res) => {
	console.log(req.body);

	res.send({
		...req.body
	});
})*/

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3333;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server is litening at http://${HOSTNAME}:${PORT}`)
});