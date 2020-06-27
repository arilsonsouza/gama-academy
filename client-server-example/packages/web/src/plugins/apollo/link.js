import { ApolloLink} from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';


const link = ApolloLink.from([
	onError((error) => {
		console.log('GRAPHQL ERROR: ', error)
	}),

	setContext((_, { headers }) => {
		return {
			headers: {
				...headers, 
				Authorization: 'Bearer TOKEN'
			}
		}
	}),
	createHttpLink({
		uri: 'http://127.0.0.1:3333/graphql',		
	})
]);

export default link;