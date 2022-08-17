import { useState } from 'react';
import { ThemeType } from '../../App';

interface NewThemeType extends ThemeType {
	themeMode: string;
}

const useDarkMode = (theme: ThemeType): [NewThemeType, () => void] => {
	const [themeMode, setThemeMode] = useState<'lightMode' | 'darkMode'>(
		'lightMode'
	);

	const darkModeHandler = () => {
		if (themeMode === 'lightMode') {
			setThemeMode('darkMode');
		} else {
			setThemeMode('lightMode');
		}
	};

	const getNewTheme = () => {
		if (themeMode === 'lightMode') {
			return theme;
		} else themeMode === 'darkMode';
		return { ...theme, ...theme.darkMode, themeMode };
	};

	const newTheme = getNewTheme();
	return [newTheme, darkModeHandler];
};

export default useDarkMode;
