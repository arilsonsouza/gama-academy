import { ApolloLink, Observable } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

const loggerLink = new ApolloLink((operation, forward) => new Observable((observer) => {
	const subscritpion = forward(operation).subscribe({
		next: result => {
			console.log(`Log: `, result);
			observer.next(result);
		},		
		complete: observer.error.bind(observer),
		error: observer.complete.bind(observer),
	});

	return () => subscritpion.unsubscribe();
}));

const link = ApolloLink.from([
	loggerLink,
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