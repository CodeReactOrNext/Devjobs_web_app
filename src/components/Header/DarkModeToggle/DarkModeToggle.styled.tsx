import styled from 'styled-components';

export const StyledDarkModeToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 112px;
  height: 24px;
`;

export const StyledDarkModeButton = styled.button`
  align-items: center;
  width: 48px;
  height: 24px;
  outline: none;
  border: none;
  border-radius: 12px;
  background-color: #fff;
`;

export const StyledDarkModeButtonDot = styled.div<{ isDark: boolean }>`
  transition: all 0.3s;
  width: 14px;
  height: 14px;
  margin: 0 6px;
  border-radius: 100%;
  background-color: #5964e0;
  transform: ${({ isDark }) => (isDark ? 'translateX(22px)' : 'translateX(0)')};
`;

export const StyledSunIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const StyledMoonIcon = styled.img`
  height: 12px;
  width: 12px;
`;
