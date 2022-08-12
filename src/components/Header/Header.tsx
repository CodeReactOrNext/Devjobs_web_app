import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
} from './Header.styled';
import logo from '../../assets/desktop/logo.svg';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogo src={logo}></StyledLogo>
        <DarkModeToggle></DarkModeToggle>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
