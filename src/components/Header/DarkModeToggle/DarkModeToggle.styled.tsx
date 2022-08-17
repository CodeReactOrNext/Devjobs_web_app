import styled from 'styled-components';

export const StyledDarkModeToggle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 7rem;
	height: 1.5rem;
`;

export const StyledDarkModeButton = styled.button`
	display: flex;
	align-items: center;
	width: 48px;
	height: 24px;
	outline: none;
	border: none;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.basicColor};
	cursor: pointer;
	&:hover {
		div {
			background-color: ${({ theme }) => theme.themeSecondColor};
		}
	}
`;

export const StyledDarkModeButtonDot = styled.div`
	transition: all 0.3s;
	width: 14px;
	height: 14px;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.themeColor};
	transform: ${({ theme }) =>
		theme.themeMode === 'darkMode' ? 'translateX(22px)' : 'translateX(0)'};
`;

export const StyledSunIcon = styled.img`
	height: 20px;
	width: 20px;
`;

export const StyledMoonIcon = styled.img`
	height: 12px;
	width: 12px;
`;
