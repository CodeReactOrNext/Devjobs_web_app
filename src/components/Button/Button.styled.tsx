import { css } from 'styled-components';
import styled from 'styled-components';
import { ButtonProps } from '../../types/types';

export const Button = styled.button<ButtonProps>`
	border: none;
	border-radius: 5px;
	width: 141px;
	height: 48px;
	background-color: ${({ theme }) => theme.color.violet};
	cursor: pointer;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	color: ${({ theme }) => theme.color.white};
	transition: background-color 0.1s ease-in;
	&:hover {
		background-color: ${({ theme }) => theme.color.lightViolet};
	}
`;

export const StyledButton = styled(Button)`
	${({ variant }) => {
		if (variant === 'second')
			return css`
				color: ${({ theme }) => theme.mode.buttonSecondText};
				background-color: ${({ theme }) => theme.mode.buttonSecond};
				&:hover {
					background-color: ${({ theme }) => theme.mode.buttonSecondHover};
				}
			`;
	}}
`;
