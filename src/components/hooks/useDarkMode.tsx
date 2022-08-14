import { useState } from 'react';

import { ThemeType } from '../../App';

interface NewThemeType extends ThemeType {
  mode: { [key: string]: string };
  themeMode: 'lightMode' | 'darkMode';
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

  let newTheme = { ...theme, mode: { ...theme[themeMode] }, themeMode };

  return [newTheme, darkModeHandler];
};

export default useDarkMode;
