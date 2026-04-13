import React from 'react';
import { ThemeProvider as SCThemeProvider, createGlobalStyle } from 'styled-components';
import { brandDefault, CUITheme } from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => (theme as CUITheme).fontFamily};
    font-size: ${({ theme }) => (theme as CUITheme).fontSize.md};
    font-weight: ${({ theme }) => (theme as CUITheme).fontWeight.regular};
    color: ${({ theme }) => (theme as CUITheme).semantic.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

interface CUIThemeProviderProps {
  theme?: CUITheme;
  children: React.ReactNode;
}

export const CUIThemeProvider: React.FC<CUIThemeProviderProps> = ({
  theme = brandDefault,
  children,
}) => (
  <SCThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </SCThemeProvider>
);
