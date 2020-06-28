import React, { useMemo, useState, useEffect} from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo';

const GET_CLIENT = gql`
  query GET_CLIENT($clientId: ID!) {
    client(id: $clientId) {
      id
      name
      email
    }
  }
`;

const UPDATE_CLIENT = gql`
	mutation UPDATE_CLIENT($id: ID!, $name: String!, $email: String!) {
		updateClient(input: {
			id: $id
			name: $name
			email: $email
		}){
			id
			name
			email
		}
	}
`;

export default function ClientEdit({clientId}) {
	const { data } = useQuery(GET_CLIENT, {
    variables: {
      clientId,
    },
    skip: !clientId,
    fetchPolicy: 'cache-first',
  });

	const initialValues = useMemo(
    () => ({
      name: data?.client.name ?? '',
      email: data?.client.email ?? '',
    }),
    [data]
  );

  const [values, setValues] = useState(initialValues);

  useEffect(() => setValues(initialValues), [initialValues]);

  const handleNameChange = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
	
	const [updateClient] = useMutation(UPDATE_CLIENT);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		updateClient({
			variables: {
				id: clientId,
				name: values.name,
				email: values.email
			}
		}).then(console.log);
	};

	return (
		<form
			onSubmit={handleSubmit}
		>
			<fieldset>
				<input
					type='text'
					name='name'
					value={values.name}
					onChange={handleNameChange}
				/>
			</fieldset>
			
			<fieldset>
				<input
					type='email'
					name='email'
					value={values.email}
					onChange={handleEmailChange}
				/>
			</fieldset>

			<button type='submit'>Salvar</button>
		</form>
	);
}