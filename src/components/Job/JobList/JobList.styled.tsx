import styled from 'styled-components';

export const StyledJobsList = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 8rem 0 8rem;
    width: 90%;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 5rem 0 5rem;
  }
`;

export const StyledJobsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem 0 5rem 0;
  width: 100%;
`;
