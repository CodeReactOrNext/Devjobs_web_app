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

interface Props {
	darkModeHandler: () => void;
}

const DarkModeToggle = () => {
	const { setThemeMode } = useContext(ThemeContext);
	const darkModeHandler = () => {
		setThemeMode;
	};
	return (
		<StyledDarkModeToggle>
			<StyledSunIcon src={sunIcon}></StyledSunIcon>
			<StyledDarkModeButton onClick={darkModeHandler}>
				<StyledDarkModeButtonDot></StyledDarkModeButtonDot>
			</StyledDarkModeButton>
			<StyledMoonIcon src={moonIcon}></StyledMoonIcon>
		</StyledDarkModeToggle>
	);
};

export default DarkModeToggle;
