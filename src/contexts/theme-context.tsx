import useDarkMode from 'hooks/useDarkMode';
import React, { createContext } from 'react';
import { theme } from 'themes/theme';

type Props = {
	children?: React.ReactNode;
};
interface ThemeContextType {
	newTheme: ThemeType;
	darkModeHandler: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
	newTheme: theme,
	darkModeHandler: () => {},
});

export type ThemeType = typeof theme;

export const ThemeContextProvider = ({ children }: Props) => {
	const [newTheme, darkModeHandler] = useDarkMode(theme);

	return (
		<ThemeContext.Provider
			value={{
				newTheme,
				darkModeHandler,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
