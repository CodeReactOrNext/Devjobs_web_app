import styled from 'styled-components';

export const StyledJobViewBackdrop = styled.div`
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin-top: -25px;
  gap: 2rem;
`;

export const StyledJobViewDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 100%;

  @media screen and (min-width: 800px) {
    padding: 0 2rem 0 0;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  } ;
`;

export const StyledJobViewContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 750px;
  height: auto;
  gap: 2rem;
  z-index: 1;
`;
export const StyledJobViewDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media screen and (min-width: 800px) {
    align-items: start;
  } ;
`;

export const StyledJobViewCompany = styled.p`
  color: ${({ theme }) => theme.headingText};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.25px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
`;

export const StyledJobViewContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border-radius: 0.25rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.boxBackground};
`;

export const StyledJobViewContentHeader = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.boxBackground};
`;

export const StyledJobViewContentDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.5rem;
  @media screen and (min-width: 650px) {
    align-items: center;
    flex-direction: row;
  } ;
`;

export const StyledJobViewContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 0.5rem;
  @media screen and (min-width: 650px) {
    height: 100%;
    width: 300%;
  } ;
`;

export const StyledJobViewInfo = styled.p`
  color: ${({ theme }) => theme.regularText};
`;

export const StyledJobRequirementText = styled.h2`
  color: ${({ theme }) => theme.headingText};
  font-size: 2rem;
  font-weight: 600;
`;

export const StyledJobViewRequirements = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1rem;
  gap: 1rem;
`;

export const StyledJobRequirement = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 1rem;
  color: ${({ theme }) => theme.regularText};
`;

export const StyledRequirementDot = styled.div`
  height: 4px;
  padding-left: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.regularText};
`;

export const StyledRoleItemIndex = styled.p`
  color: ${({ theme }) => theme.themeColor};
  padding-left: 4px;
  font-weight: 600;
`;
