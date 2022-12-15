import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	
	`;
	
export const ContainerBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	gap:15px;
	form {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	.button{
		display: flex;
		align-items: center;
	}
`;




