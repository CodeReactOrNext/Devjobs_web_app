import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  z-index: 0;
`;
export const StyledTitle = styled.h3`
  font-size: 10rem;
  line-height: 10rem;
  color: ${({ theme }) => theme.regularText};
`;
export const StyledText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.headingText};
`;
