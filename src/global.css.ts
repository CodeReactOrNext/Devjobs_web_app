import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './contexts/theme-context';
import { normalize } from 'themes/normalize';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
${normalize};
 #root {
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    min-height:100vh;
	background-color: ${(props) => props.theme.mainBackground};
  }
`;
