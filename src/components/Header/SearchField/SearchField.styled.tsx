import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
  position: absolute;
  bottom: -40px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    padding: 0 39px;
  }
`;

export const StyledSearchForm = styled.form`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 16px 0 24px; */
  background-color: ${({ theme }) => theme.boxBackground};
  border-radius: 6px;
  @media (min-width: 769px) {
    & > div:nth-child(1):after,
    & > div:nth-child(2):after {
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      width: 1px;
      height: 100%;
      background: ${({ theme }) => theme.inputDivider};
    }
  }
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  cursor: pointer;
  caret-color: ${({ theme }) => theme.themeColor};
  outline: none;
  background-color: transparent;
`;

export const StyledSearchButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  background-color: ${({ theme }) => theme.themeColor};
  border-radius: 6px;
  svg {
    fill: ${({ theme }) => theme.basicColor};
    @media (min-width: 769px) {
      display: none;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.themeSecondColor};
  }
  @media (min-width: 768px) {
    width: 84px;
  }
`;

export const StyledButtonText = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding-top: 4px;
  color: ${({ theme }) => theme.basicColor};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledFilterButton = styled.button`
  width: 48px;
  border: none;
  background: none;
  height: 48px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledFilterFieldContainer = styled.div<{ mobile?: 'mobile' }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    margin: 0 16px;
    width: 28px;
    height: 24px;
    fill: ${({ theme }) => theme.themeColor};
    @media (max-width: 769px) {
      display: none;
    }
  }
  @media (max-width: 769px) {
    padding: 0 16px;
    display: ${({ mobile }) => mobile === 'mobile' && 'none'};
  }
`;

export const StyledButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  gap: 10px;
  @media (max-width: 769px) {
    justify-content: flex-end;
  }
`;

export const StyledFullTimeCheckboxContainer = styled.div<{
  mobile?: 'mobile';
}>`
  display: flex;
  gap: 10px;
  height: 24px;
  width: 108px;
  @media (max-width: 769px) {
    display: ${({ mobile }) => mobile === 'mobile' && 'none'};
  }
`;

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

export const CheckboxText = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.headingText};
`;

export const StyledFullTimeCheckbox = styled.input`
  background-color: #000;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
