import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input`
	border: 1px solid #DDD;
	height: 3rem;
	padding: 0 .5rem;
	border-radius: .25rem 0 0 .25rem;

	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const Button = styled.button`
	border: 1px solid #000;
	height: 3rem;
	padding: 0 .5rem;
	background-color: #000;
	border-radius: 0 .25rem .25rem 0;
	color: #FFF;
	cursor: pointer;
	
	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const ErrorMessage = styled.span`
	display: block;
	font-size: 0.65rem;
	color: red;
	font-weight: 600;
	margin-top: 1rem;
`;