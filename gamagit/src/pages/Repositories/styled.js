import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	max-width: 991px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 2em;
	font-family: sans-serif;
	color: #333;
`;

export const List = styled.ul`
	list-style: none;
	padding: 0;
	font-family: sans-serif;
`;

export const ListItem = styled.li`
	margin: .5rem 0;
	background-color: #000;
	color: #FFF;
	padding: .5em;

	a {
		text-decoration: none;
		color: #FFF;
		font-size: 1.2rem;
	}
`;


export const LinkHome = styled(Link)`
	text-decoration: none;
	display:block;
	text-align: center;
	margin: 2rem, auto;
	background-color: #000;
	color: #FFF;
	padding: .5rem 0;
`;