import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
} from './Header.styled';
import logo from 'assets/desktop/logo.svg';
import DarkModeToggle from './DarkModeToggle';
import SearchField from 'SearchField/SearchField';
import { Link } from 'react-router-dom';

const Header = ({ searchFieldShow }: { searchFieldShow: boolean }) => (
  <StyledHeader>
    <StyledHeaderContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <StyledLogo src={logo} />
      </Link>
      <DarkModeToggle />
      {searchFieldShow && <SearchField />}
    </StyledHeaderContainer>
  </StyledHeader>
);

export default Header;
