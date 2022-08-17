
import JobCard from './components/JobCard/JobCard'
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.css';
import { theme } from './themes/theme';
import useDarkMode from './components/hooks/useDarkMode';

export type ThemeType = typeof theme;

function App() {
  const [newTheme, setThemeMode] = useDarkMode(theme);

  return (
    <ThemeProvider theme={newTheme}>
      <GlobalStyle />
      <Header darkModeHandler={setThemeMode}></Header>
    </ThemeProvider>
  );

}
export default App;
