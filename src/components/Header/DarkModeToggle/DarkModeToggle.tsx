import {
	StyledDarkModeToggle,
	StyledDarkModeButton,
	StyledDarkModeButtonDot,
	StyledSunIcon,
	StyledMoonIcon,
} from './DarkModeToggle.styled';
import sunIcon from '../../../assets/desktop/icon-sun.svg';
import moonIcon from '../../../assets/desktop/icon-moon.svg';
import ThemeContext from '../../../contexts/theme-context';
import { useContext } from 'react';

const DarkModeToggle = () => {
	const { darkModeHandler } = useContext(ThemeContext);

	return (
		<StyledDarkModeToggle>
			<StyledSunIcon src={sunIcon} />
			<StyledDarkModeButton onClick={() => darkModeHandler()}>
				<StyledDarkModeButtonDot />
			</StyledDarkModeButton>
			<StyledMoonIcon src={moonIcon} />
		</StyledDarkModeToggle>
	);
};

export default DarkModeToggle;
