import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.css';
import { theme } from './themes/theme';
import useDarkMode from './hooks/useDarkMode';
import { FilterContextProvider } from './contexts/filter-context';
import MainPage from './components/Pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobViewPage from './components/Pages/JobViewPage';
import { ThemeContextProvider } from './contexts/theme-context';

ThemeContextProvider;

function App() {
	const [newTheme, setThemeMode] = useDarkMode(theme);

	return (
		<ThemeProvider theme={newTheme}>
			<div id='backdrop'></div>
			<FilterContextProvider>
				<ThemeContextProvider>
					<GlobalStyle />
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='jobs/:id' element={<JobViewPage />} />
						</Routes>
					</BrowserRouter>
				</ThemeContextProvider>
			</FilterContextProvider>
		</ThemeProvider>
	);
}
export default App;
