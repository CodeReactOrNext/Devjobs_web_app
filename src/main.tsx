import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './contexts/theme-context';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</React.StrictMode>
);
