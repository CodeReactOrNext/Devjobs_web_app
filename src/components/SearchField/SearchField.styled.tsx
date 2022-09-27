import styled from 'styled-components';
import FilterIcon from './icon/FilterIcon';

export const StyledContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -40px;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  @media (min-width: 768px) {
    padding: 0 39px;
  }
  @media (min-width: 1400px) {
    padding: 44px 165px 0 165px;
  }
`;

export const StyledSearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.boxBackground};

  @media (min-width: 769px) {
    & > div:nth-child(1):after,
    & > div:nth-child(2):after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
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
  border-radius: 6px;
  background-color: ${({ theme }) => theme.themeColor};
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
  padding-top: 4px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.basicColor};
  @media (max-width: 768px) {
    display: ${({ modal }) => (modal ? 'block' : 'none')};
  }
`;

export const StyledFilterButton = styled.button`
  display: none;
  width: 3rem;
  height: 3rem;
  border: none;
  background: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledFilterFieldContainer = styled.div<{
  mobile?: 'mobile';
  modal?: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding-bottom: ${({ modal }) => (modal ? '24px' : '0')};
  padding-left: ${({ modal }) => (modal ? '0' : '24px')};

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 1.25rem;
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
  @media (max-width: 769px) {
    display: ${({ mobile }) => mobile === 'mobile' && 'none'};
  }
`;

export const CheckboxText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  color: ${({ theme }) => theme.headingText};
`;

export const StyledFilterIcon = styled(FilterIcon)`
  fill: ${({ theme }) => theme.filterIcon};
`;
