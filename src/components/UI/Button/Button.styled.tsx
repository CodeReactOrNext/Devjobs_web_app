import { css } from 'styled-components';
import styled from 'styled-components';
import { ButtonProps } from './Button.type';

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.width === 'full' ? '100%' : '141px')};
  height: 48px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  color: ${({ theme }) => theme.basicColor};
  background-color: ${({ theme }) => theme.themeColor};
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
