import styled from 'styled-components';
export const StyledJobViewFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.boxBackground};
`;

export const StyledFooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 750px;
  height: 100%;
`;

export const StyledFooterDetails = styled.div`
  display: none;

  @media screen and (min-width: 650px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  } ;
`;

export const StyledFooterButtonContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 650px) {
    width: 30%;
  } ;
`;

export const StyledFooterSecondaryText = styled.p`
  color: ${({ theme }) => theme.regularText};
`;

export const StyledJobViewCompany = styled.p`
  color: ${({ theme }) => theme.headingText};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.25px;
`;
