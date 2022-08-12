import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.css';
import { theme } from './themes/theme';

export type ThemeType = typeof theme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header></Header>
    </ThemeProvider>
  );
}
export default App;
