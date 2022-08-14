import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
} from './Header.styled';
import logo from '../../assets/desktop/logo.svg';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';

interface Props {
  darkModeHandler: () => void;
}

const Header = ({ darkModeHandler }: Props) => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogo src={logo}></StyledLogo>
        <DarkModeToggle darkModeHandler={darkModeHandler}></DarkModeToggle>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
