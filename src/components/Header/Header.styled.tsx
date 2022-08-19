import styled from 'styled-components';
import bgHeaderMobile from '../../assets/mobile/bg-pattern-header.svg';
import bgHeaderTablet from '../../assets/tablet/bg-pattern-header.svg';
import bgHeaderDesktop from '../../assets/desktop/bg-pattern-header.svg';

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  min-height: 136px;
  background-repeat: no-repeat;
  background-image: url(${bgHeaderMobile});
  background-size: cover;
  background-position: bottom;
  padding: 32px 24px 0 24px;

  @media (min-width: 768px) {
    min-height: 160px;
    padding: 42px 39px 0 39px;
    background-image: url(${bgHeaderTablet});
  }

  @media (min-width: 1400px) {
    padding: 44px 165px 0 165px;
    background-image: url(${bgHeaderDesktop});
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledLogo = styled.img`
  width: 115px;
  height: 32px;
`;
