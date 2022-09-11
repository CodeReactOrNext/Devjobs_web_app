import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.css';
import { theme } from './themes/theme';
import useDarkMode from './hooks/useDarkMode';
import JobList from './components/JobCard/JobList/JobList';
import { FilterContextProvider } from './contexts/filter-context';
import { JobViewContextProvider } from './contexts/jobView-context';
export type ThemeType = typeof theme;

function App() {
	const [newTheme, setThemeMode] = useDarkMode(theme);

	return (
		<ThemeProvider theme={newTheme}>
			<div id='backdrop'></div>
			<JobViewContextProvider>
				<FilterContextProvider>
					<GlobalStyle />
					<Header darkModeHandler={setThemeMode}></Header>
					<JobList />
				</FilterContextProvider>
			</JobViewContextProvider>
		</ThemeProvider>
	);
}
export default App;
