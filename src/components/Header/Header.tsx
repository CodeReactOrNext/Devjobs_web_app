import {
	StyledHeader,
	StyledHeaderContainer,
	StyledLogo,
} from './Header.styled';
import logo from '../../assets/desktop/logo.svg';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';
import SearchField from '../SearchField/SearchField';
interface Props {
	darkModeHandler: () => void;
}

const Header = ({ darkModeHandler }: Props) => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<StyledLogo src={logo} />
				<DarkModeToggle darkModeHandler={darkModeHandler} />
				<SearchField />
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
