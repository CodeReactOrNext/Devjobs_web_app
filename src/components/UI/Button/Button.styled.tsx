import { css } from 'styled-components';
import styled from 'styled-components';
import { ButtonProps } from './Button.type';

export const Button = styled.button<ButtonProps>`
	border: none;
	border-radius: 5px;
	width: ${props => (props.width === 'full' ? '100%' : '141px')};
	height: 48px;
	background-color: ${({ theme }) => theme.themeColor};
	cursor: pointer;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	color: ${({ theme }) => theme.basicColor};
	transition: background-color 0.1s ease-in;
	&:hover {
		background-color: ${({ theme }) => theme.themeSecondColor};
	}
`;

export const StyledButton = styled(Button)`
	${({ variant }) => {
		if (variant === 'second')
			return css`
				color: ${({ theme }) => theme.buttonSecondText};
				background-color: ${({ theme }) => theme.buttonSecond};
				&:hover {
					background-color: ${({ theme }) => theme.buttonSecondHover};
				}
			`;
	}}
`;
