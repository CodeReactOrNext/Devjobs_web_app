import React, { createContext, useEffect, useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { theme } from '../themes/theme';
import FilterContext from './filter-context';

type Props = {
	children?: React.ReactNode;
};
interface ThemeContextType {
	newTheme: ThemeType;
	setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType>({
	newTheme: theme,
	setThemeMode: () => {},
});

export type ThemeType = typeof theme;

export const ThemeContextProvider = ({ children }: Props) => {
	const [newTheme, setThemeMode] = useDarkMode(theme);

	return (
		<ThemeContext.Provider
			value={{
				newTheme,
				setThemeMode,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
