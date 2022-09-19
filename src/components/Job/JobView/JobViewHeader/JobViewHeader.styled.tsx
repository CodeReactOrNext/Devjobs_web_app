import styled from 'styled-components';

export const StyledJobViewHeader = styled.header`
  position: relative;
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.boxBackground};
  border-radius: 0.25rem;

  @media screen and (min-width: 800px) {
    height: 8.75rem;
  } ;
`;
export const StyledJobViewWebsite = styled.p`
  color: ${({ theme }) => theme.regularText};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.25px;
`;

export const StyledJobViewHeaderContent = styled.div`
  position: relative;
  top: -25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  @media screen and (min-width: 800px) {
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  } ;
`;

export const StyledLogoContainer = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 0.95rem;
  background: ${(props) => props.bgColor};
  @media screen and (min-width: 800px) {
    height: 140px;
    width: 140px;
    border-radius: 0;
  } ;
`;
