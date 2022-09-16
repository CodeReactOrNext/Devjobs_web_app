import { ForwardedRef } from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input<{
  ref: ForwardedRef<HTMLInputElement>;
}>`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.headingText};
  caret-color: ${({ theme }) => theme.carret};
  outline: none;
  background-color: transparent;
`;
