import styled from 'styled-components';
import FilterIcon from './icon/FilterIcon';

export const StyledContainer = styled.div`
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
  @media (min-width: 1400px) {
    padding: 44px 165px 0 165px;
  }
`;

export const StyledSearchForm = styled.form`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const StyledSearchButton = styled.button<{ modal?: boolean }>`
  width: ${({ modal }) => (modal ? '48px' : '100%')};
  height: 3rem;
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
    width: 5.25rem;
  }
`;

export const StyledButtonText = styled.p<{ modal?: boolean }>`
  font-size: 1rem;
  font-weight: 700;
  padding-top: 4px;
  color: ${({ theme }) => theme.basicColor};
  @media (max-width: 768px) {
    display: ${({ modal }) => (modal ? 'block' : 'none')};
  }
`;

export const StyledFilterButton = styled.button`
  width: 3rem;
  border: none;
  background: none;
  height: 3rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledFilterFieldContainer = styled.div<{
  mobile?: 'mobile';
  modal?: boolean;
}>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding-bottom: ${({ modal }) => (modal ? '24px' : '0')};
  padding-left: ${({ modal }) => (modal ? '0' : '24px')};

  align-items: center;
  svg {
    overflow: visible;
    fill: ${({ theme }) => theme.themeColor};
    @media (max-width: 769px) {
      display: ${({ modal }) => (modal ? 'block' : 'none')};
    }
  }
  @media (max-width: 769px) {
    display: ${({ mobile }) => mobile === 'mobile' && 'none'};
  }
  :after {
    position: absolute;
    content: '';

    background: ${({ theme }) => theme.inputDivider};
    ${({ modal }) =>
      modal &&
      `bottom: 0;
    right: -1.5rem;
    left: -1.5rem;
    height: 1px;`}
  }
`;

export const StyledButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  align-items: center;
  gap: 0.625rem;
  @media (max-width: 769px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

export const StyledFullTimeCheckboxContainer = styled.div<{
  mobile?: 'mobile';
  modal?: boolean;
}>`
  display: flex;
  gap: 0.625rem;
  height: 1.5rem;
  margin: ${({ modal }) => (modal ? '24px 0' : '0')};
  width: ${({ modal }) => (modal ? '100%' : '108px')};
  @media (max-width: 769px) {
    display: ${({ mobile }) => mobile === 'mobile' && 'none'};
  }
`;

export const CheckboxText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.headingText};
`;

export const StyledFilterIcon = styled(FilterIcon)`
  fill: ${({ theme }) => theme.filterIcon};
`;
