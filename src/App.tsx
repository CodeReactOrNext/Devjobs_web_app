import { ThemeProvider } from 'styled-components';
import { GlobaStyle } from './global.css';
import { theme } from './themes/theme';

export type ThemeType = typeof theme;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobaStyle />
			<p>Test</p>
		</ThemeProvider>
	);
}
export default App;
