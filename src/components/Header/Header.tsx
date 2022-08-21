import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
} from './Header.styled';
import logo from '../../assets/desktop/logo.svg';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';
import Button from '../Button/Button';
import SearchField from './SearchField/SearchField';
interface Props {
  darkModeHandler: () => void;
}

const Header = ({ darkModeHandler }: Props) => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer>
          <StyledLogo src={logo}></StyledLogo>
          <DarkModeToggle darkModeHandler={darkModeHandler}></DarkModeToggle>
          <SearchField></SearchField>
        </StyledHeaderContainer>
      </StyledHeader>
      {/* Testing Button  */}
      {/* <Button onClick={() => console.log('hello')}>Button 1</Button>
      <Button variant='second'>Button 2</Button> */}
    </>
  );
};

export default Header;
