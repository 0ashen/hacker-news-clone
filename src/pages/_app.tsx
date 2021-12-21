import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Common } from '../styles/common';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider theme={theme}>
         <Common />
         <Component {...pageProps} />
      </ThemeProvider>
   );
}

export default MyApp;
