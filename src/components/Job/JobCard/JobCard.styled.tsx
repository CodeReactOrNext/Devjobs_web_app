import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  height: 228px;
  padding: 48px 32px 32px 32px;
  cursor: pointer;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.boxBackground};

  @media screen and (min-width: 425px) {
    width: 340px;
    padding: 48px 28px 32px 28px;
  }
  @media screen and (min-width: 1024px) {
    width: 350px;
    padding: 48px 30px 32px 30px;
  } ;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledLogoContainer = styled.div<{ bgColor: string }>`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  transform: translateY(-50%);
  border-radius: 15px;
  background: ${(props) => props.bgColor};
`;

export const StyledLogo = styled.img`
  width: auto;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 100%;
  gap: 13px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.headingText};
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
`;

export const StyledDetails = styled.div`
  display: flex;
  height: 25px;
  font-size: 16px;
  font-weight: 400;
  gap: 8px;
  color: ${({ theme }) => theme.regularText};
`;

export const StyledDot = styled.div<{ contract: string }>`
  position: relative;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #6e8098;
  top: ${(props) => (props.contract === 'Full Time' ? '50%' : '64%')};
`;

export const StyledCompanyName = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.regularText};
`;

export const StyledLocation = styled.p`
  margin-top: auto;
  font-weight: 600;
  color: ${({ theme }) => theme.themeColor};
`;
