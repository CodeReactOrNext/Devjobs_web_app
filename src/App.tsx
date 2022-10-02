import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.css';
import { FilterContextProvider } from 'contexts/filter-context';
import MainPage from 'Pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobViewPage from 'Pages/JobViewPage';
import { useContext } from 'react';
import ThemeContext from 'contexts/theme-context';
import PageNotFound from 'Pages/PageNotFound';

function App() {
  const { newTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={newTheme}>
      <div id="backdrop" />
      <FilterContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="jobs/:id" element={<JobViewPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FilterContextProvider>
    </ThemeProvider>
  );
}
export default App;
