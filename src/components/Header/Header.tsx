import {
	StyledHeader,
	StyledHeaderContainer,
	StyledLogo,
} from './Header.styled';
import logo from '../../assets/desktop/logo.svg';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';
import SearchField from '../SearchField/SearchField';

const Header = ({ searchFieldShow }: { searchFieldShow: boolean }) => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<StyledLogo src={logo} />
				<DarkModeToggle />
				{searchFieldShow && <SearchField />}
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
