import styled from 'styled-components';

export const StyledCheckmark = styled.span<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  transition: all 0.3s;
  cursor: pointer;
  background-color: ${({ theme, checked }) =>
    checked ? theme.themeColor : theme.checkMark};
  &:hover {
    background-color: ${({ theme }) => theme.checkMarkHover};
  }
`;
export const StyledCheckbox = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  background-color: #000;
  opacity: 0;
  cursor: pointer;
`;
