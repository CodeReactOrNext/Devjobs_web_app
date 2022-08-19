import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
  position: absolute;
  bottom: -40px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
`;

export const StyledSearchField = styled.form`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 0 24px;
  background-color: ${({ theme }) => theme.boxBackground};
  border-radius: 6px;
`;

export const StyledSearchInput = styled.input`
  width: 60%;
  height: 100%;
  border: none;
  font-size: 16px;
  background-color: transparent;
`;

export const StyledSearchButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background-color: ${({ theme }) => theme.themeColor};
  border-radius: 6px;
`;

export const StyledFilterButton = styled.button`
  width: 48px;
  border: none;
  background: none;
  height: 48px;
`;
